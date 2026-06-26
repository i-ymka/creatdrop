"use server";

import { auth } from "@clerk/nextjs/server";
import * as Sentry from "@sentry/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPaddleTransaction } from "@/lib/paddle";
import { db } from "@/lib/db";

export type StartCheckoutResult =
  | { ok: true; transactionId: string }
  | { ok: false; error: string };

export async function startCheckout(): Promise<StartCheckoutResult> {
  const { userId } = await auth();
  if (!userId) return { ok: false, error: "unauthorized" };

  try {
    // No more transaction.checkout.url + server redirect:
    // Paddle's hosted-checkout URL points to the seller's Default Payment Link
    // (creatdrop.com root), which has no Paddle.js init and never shows the
    // overlay — just dumps the user on the landing page. Instead, return the
    // transactionId; the client opens Paddle.Checkout.open({ transactionId })
    // via Paddle.js, so the overlay opens on the dashboard itself.
    const transaction = await createPaddleTransaction({
      items: [{ price_id: process.env.PADDLE_PRO_PRICE_ID!, quantity: 1 }],
      custom_data: { clerk_user_id: userId },
    });
    return { ok: true, transactionId: transaction.id };
  } catch (err) {
    console.error("[dashboard-checkout] createPaddleTransaction failed", err);
    Sentry.captureException(err, {
      tags: { route: "dashboard-checkout", stage: "create-transaction" },
      extra: { clerkUserId: userId },
    });
    await Sentry.flush(2000);
    return { ok: false, error: "paddle_create_failed" };
  }
}

const FREE_LINK_LIMIT = 5;

export type SaveProfileState = { success: boolean; error?: string } | null;

/** Used by the onboarding form which doesn't need action state. */
export async function setupProfile(formData: FormData) {
  const result = await saveProfile(null, formData);
  if (result?.success) {
    redirect("/dashboard/products");
  }
}

export async function saveProfile(
  _prev: SaveProfileState,
  formData: FormData
): Promise<SaveProfileState> {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const username = (formData.get("username") as string).trim().toLowerCase();
  const name = (formData.get("name") as string).trim();
  const bio = (formData.get("bio") as string | null)?.trim() ?? null;

  if (!username || !name) return { success: false, error: "Username and name are required" };
  if (!/^[a-z0-9_-]{3,30}$/.test(username)) {
    return {
      success: false,
      error: "Username must be 3–30 characters and contain only letters, numbers, hyphens, or underscores",
    };
  }

  try {
    const existing = await db.profile.findFirst({
      where: { username, NOT: { userId } },
    });
    if (existing) return { success: false, error: "That username is already taken" };

    const isNewProfile = !(await db.profile.findUnique({ where: { userId }, select: { id: true } }));

    await db.profile.upsert({
      where: { userId },
      create: { userId, username, name, bio },
      update: { username, name, bio },
    });

    // Gift 1 month of Waitrocket Pro to new Creatdrop users
    if (isNewProfile) {
      const waitrocketUrl = process.env.WAITROCKET_INTERNAL_URL;
      const internalSecret = process.env.INTERNAL_API_SECRET;
      if (waitrocketUrl && internalSecret) {
        fetch(`${waitrocketUrl}/api/internal/grant-pro`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-internal-secret": internalSecret },
          body: JSON.stringify({ userId, months: 1 }),
        }).catch(() => {});
      }
    }
  } catch {
    return { success: false, error: "Failed to save profile. Please try again." };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function addLink(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const profile = await db.profile.findUnique({ where: { userId } });
  if (!profile) throw new Error("Profile not found");

  if (profile.plan === "FREE") {
    const count = await db.link.count({ where: { profileId: profile.id } });
    if (count >= FREE_LINK_LIMIT) {
      throw new Error(
        `Free plan is limited to ${FREE_LINK_LIMIT} links. Upgrade to Pro for unlimited links.`
      );
    }
  }

  const title = (formData.get("title") as string).trim();
  const rawUrl = (formData.get("url") as string).trim();

  if (!title || !rawUrl) throw new Error("Title and URL are required");

  const url = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  const maxOrder = await db.link.aggregate({
    where: { profileId: profile.id },
    _max: { order: true },
  });
  const order = (maxOrder._max.order ?? -1) + 1;

  await db.link.create({
    data: { profileId: profile.id, title, url, order },
  });

  revalidatePath("/dashboard");
}

export async function deleteLink(linkId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const profile = await db.profile.findUnique({ where: { userId } });
  if (!profile) throw new Error("Profile not found");

  await db.link.deleteMany({
    where: { id: linkId, profileId: profile.id },
  });

  revalidatePath("/dashboard");
}

export type SavePayoutEmailState = { success: boolean; error?: string } | null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function savePayoutEmail(
  _prev: SavePayoutEmailState,
  formData: FormData
): Promise<SavePayoutEmailState> {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const raw = (formData.get("payoutEmail") as string | null)?.trim() ?? "";
  const payoutEmail = raw === "" ? null : raw;

  if (payoutEmail && !EMAIL_REGEX.test(payoutEmail)) {
    return { success: false, error: "Enter a valid email address" };
  }

  try {
    await db.profile.update({
      where: { userId },
      data: { payoutEmail },
    });
  } catch {
    return { success: false, error: "Failed to save payout email. Please try again." };
  }

  revalidatePath("/dashboard");
  return { success: true };
}

export async function startWaitlistCheckout(): Promise<StartCheckoutResult> {
  const { userId } = await auth();
  if (!userId) return { ok: false, error: "unauthorized" };

  try {
    const transaction = await createPaddleTransaction({
      items: [{ price_id: process.env.PADDLE_WAITLIST_PRO_PRICE_ID!, quantity: 1 }],
      custom_data: { clerk_user_id: userId },
    });
    return { ok: true, transactionId: transaction.id };
  } catch (err) {
    console.error("[waitlist-checkout] createPaddleTransaction failed", err);
    Sentry.captureException(err, {
      tags: { route: "waitlist-checkout", stage: "create-transaction" },
      extra: { clerkUserId: userId },
    });
    await Sentry.flush(2000);
    return { ok: false, error: "paddle_create_failed" };
  }
}
