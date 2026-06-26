import { auth } from "@clerk/nextjs/server";
import { createPaddleTransaction } from "@/lib/paddle";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const priceId = process.env.PADDLE_OGIFY_PRO_PRICE_ID;
  if (!priceId) {
    return Response.json({ error: "OGify Pro not yet available" }, { status: 503 });
  }

  // Ensure OgCustomer record exists so webhook can find it by userId
  await db.ogCustomer.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? "https://creatdrop.com";
  const paddleApiUrl = process.env.PADDLE_API_URL ?? "https://sandbox-api.paddle.com";
  const checkoutBase = paddleApiUrl.includes("sandbox")
    ? "https://sandbox-checkout.paddle.com"
    : "https://checkout.paddle.com";

  let transaction;
  try {
    transaction = await createPaddleTransaction({
      items: [{ price_id: priceId, quantity: 1 }],
      checkout: { url: `${origin}/ogify/dashboard?upgraded=1` },
      custom_data: { clerk_user_id: userId },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[ogify/checkout] Paddle error:", message);
    return Response.json({ error: message }, { status: 502 });
  }

  // Construct the hosted Paddle checkout URL from transaction.id.
  // transaction.checkout.url contains the return URL (creatdrop.com), not the hosted page URL.
  const checkoutUrl = `${checkoutBase}/checkout/${transaction.id}`;
  return Response.json({ checkoutUrl });
}
