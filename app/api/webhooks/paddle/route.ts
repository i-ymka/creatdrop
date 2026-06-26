import { createHmac } from "crypto";
import * as Sentry from "@sentry/nextjs";
import { db } from "@/lib/db";
import { sendSaleNotification, sendBuyerDownloadLink } from "@/lib/email";
import { clerkClient } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

// Paddle signs webhooks with: HMAC-SHA256(ts + ":" + rawBody, webhookSecret)
// The paddle-signature header format is: ts=<unix_ts>;h1=<hex_hmac>
function verifyPaddleSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string
): boolean {
  const tsPart = signatureHeader.split(";").find((p) => p.startsWith("ts="));
  const h1Part = signatureHeader.split(";").find((p) => p.startsWith("h1="));
  if (!tsPart || !h1Part) return false;

  const ts = tsPart.slice(3);
  const h1 = h1Part.slice(3);
  const expected = createHmac("sha256", secret)
    .update(`${ts}:${rawBody}`)
    .digest("hex");

  return expected === h1;
}

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("paddle-signature");

  if (!sig) {
    return new Response("Missing paddle-signature header", { status: 400 });
  }

  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  if (!verifyPaddleSignature(body, sig, secret)) {
    return new Response("Invalid signature", { status: 403 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let event: any;
  try {
    event = JSON.parse(body);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  if (event.event_type === "transaction.completed") {
    const data = event.data ?? {};
    const customData: Record<string, string> = data.custom_data ?? {};
    const transactionId: string = data.id ?? "";
    const subscriptionId: string | null = data.subscription_id ?? null;

    // Resolve buyer email from billing_details (collected at checkout)
    const buyerEmail: string =
      data.billing_details?.email_address ??
      data.customer?.email ??
      "unknown";

    // Amount is a string like "999" (cents/pence as integer string)
    const amountPaid: number = parseInt(
      data.details?.totals?.grand_total ?? "0",
      10
    );

    // One-time product purchase
    if (customData.download_token && !subscriptionId) {
      const updated = await db.sale.updateMany({
        where: {
          downloadToken: customData.download_token,
          paddleTransactionId: null, // guard against duplicate webhooks
        },
        data: { paddleTransactionId: transactionId, buyerEmail, amountPaid },
      });

      // Send notifications on confirmed sale
      if (updated.count > 0 && process.env.RESEND_API_KEY) {
        try {
          const sale = await db.sale.findFirst({
            where: { downloadToken: customData.download_token },
            include: { product: { include: { profile: true } } },
          });
          if (sale) {
            const origin = process.env.NEXT_PUBLIC_APP_URL?.trim() ?? "https://creatdrop.com";
            const downloadUrl = `${origin}/download?token=${sale.downloadToken}`;

            // Email the buyer their download link
            if (sale.buyerEmail && sale.buyerEmail !== "pending") {
              await sendBuyerDownloadLink({
                buyerEmail: sale.buyerEmail,
                productName: sale.product.title,
                downloadUrl,
              }).catch(async (err) => {
                console.error("[paddle-webhook] sendBuyerDownloadLink failed", err);
                Sentry.captureException(err, {
                  tags: { route: "paddle-webhook", stage: "buyer-email" },
                  extra: { buyerEmail: sale.buyerEmail, saleId: sale.id },
                });
                await Sentry.flush(2000);
              });
            }

            // Email the creator about the sale
            const client = await clerkClient();
            const clerkUser = await client.users.getUser(sale.product.profile.userId);
            const creatorEmail = clerkUser.emailAddresses[0]?.emailAddress;
            if (creatorEmail) {
              await sendSaleNotification({
                creatorEmail,
                productName: sale.product.title,
                buyerEmail: sale.buyerEmail,
                amountPaid: sale.amountPaid,
              }).catch(async (err) => {
                console.error("[paddle-webhook] sendSaleNotification failed", err);
                Sentry.captureException(err, {
                  tags: { route: "paddle-webhook", stage: "creator-notification" },
                  extra: { creatorEmail, saleId: sale.id },
                });
                await Sentry.flush(2000);
              });
            }
          }
        } catch (err) {
          // Non-fatal: email failure must not abort the webhook response
          Sentry.captureException(err, {
            tags: { route: "paddle-webhook", stage: "outer" },
          });
          await Sentry.flush(2000);
        }
      }
    }

    // Determine which price triggered this transaction
    const firstPriceId: string | undefined = data.items?.[0]?.price?.id;
    const isWaitlistPro =
      firstPriceId !== undefined &&
      firstPriceId === process.env.PADDLE_WAITLIST_PRO_PRICE_ID;

    // Pro subscription upgrade (main Creatdrop Pro plan)
    if (subscriptionId && customData.clerk_user_id && !isWaitlistPro) {
      await db.profile.updateMany({
        where: { userId: customData.clerk_user_id },
        data: { plan: "PRO" },
      });
    }

    // Waitlist Builder Pro — hide "Powered by Creatdrop" footer
    if (isWaitlistPro && customData.clerk_user_id) {
      try {
        await db.waitlist.updateMany({
          where: { ownerId: customData.clerk_user_id },
          data: { isPoweredByHidden: true },
        });
      } catch (err) {
        Sentry.captureException(err, {
          tags: { route: "paddle-webhook", stage: "waitlist-pro-upgrade" },
          extra: { clerkUserId: customData.clerk_user_id, transactionId },
        });
        await Sentry.flush(2000);
      }
    }
  }

  // OGify subscription lifecycle events
  const ogifyPriceId = process.env.PADDLE_OGIFY_PRO_PRICE_ID;
  if (
    ogifyPriceId &&
    (event.event_type === "subscription.activated" ||
      event.event_type === "subscription.updated")
  ) {
    const data = event.data ?? {};
    const customData: Record<string, string> = data.custom_data ?? {};
    const firstPriceId: string | undefined = data.items?.[0]?.price?.id;
    const subscriptionId: string | undefined = data.id;

    if (firstPriceId === ogifyPriceId && customData.clerk_user_id) {
      try {
        await db.ogCustomer.upsert({
          where: { userId: customData.clerk_user_id },
          create: {
            userId: customData.clerk_user_id,
            plan: "PRO",
            paddleSubscriptionId: subscriptionId ?? null,
          },
          update: {
            plan: "PRO",
            paddleSubscriptionId: subscriptionId ?? null,
          },
        });
      } catch (err) {
        Sentry.captureException(err, {
          tags: { route: "paddle-webhook", stage: "ogify-pro-upgrade" },
          extra: { clerkUserId: customData.clerk_user_id, subscriptionId },
        });
        await Sentry.flush(2000);
      }
    }
  }

  if (
    ogifyPriceId &&
    (event.event_type === "subscription.cancelled" ||
      event.event_type === "subscription.paused")
  ) {
    const data = event.data ?? {};
    const customData: Record<string, string> = data.custom_data ?? {};
    const firstPriceId: string | undefined = data.items?.[0]?.price?.id;

    if (firstPriceId === ogifyPriceId && customData.clerk_user_id) {
      try {
        await db.ogCustomer.updateMany({
          where: { userId: customData.clerk_user_id },
          data: { plan: "FREE" },
        });
      } catch (err) {
        Sentry.captureException(err, {
          tags: { route: "paddle-webhook", stage: "ogify-pro-downgrade" },
          extra: { clerkUserId: customData.clerk_user_id },
        });
        await Sentry.flush(2000);
      }
    }
  }

  // Main Creatdrop Pro cancellation — downgrade profile to FREE
  if (
    event.event_type === "subscription.cancelled" ||
    event.event_type === "subscription.paused"
  ) {
    const data = event.data ?? {};
    const customData: Record<string, string> = data.custom_data ?? {};
    const firstPriceId: string | undefined = data.items?.[0]?.price?.id;
    const isWaitlistCancel =
      firstPriceId !== undefined &&
      firstPriceId === process.env.PADDLE_WAITLIST_PRO_PRICE_ID;
    const isOgifyCancel =
      ogifyPriceId !== undefined && firstPriceId === ogifyPriceId;

    if (!isWaitlistCancel && !isOgifyCancel && customData.clerk_user_id) {
      try {
        await db.profile.updateMany({
          where: { userId: customData.clerk_user_id },
          data: { plan: "FREE", proExpiresAt: new Date() },
        });
      } catch (err) {
        Sentry.captureException(err, {
          tags: { route: "paddle-webhook", stage: "creatdrop-pro-downgrade" },
          extra: { clerkUserId: customData.clerk_user_id },
        });
        await Sentry.flush(2000);
      }
    }
  }

  return new Response(null, { status: 200 });
}
