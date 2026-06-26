import { createPaddleTransaction } from "@/lib/paddle";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const origin = process.env.NEXT_PUBLIC_APP_URL ?? "https://creatdrop.com";

  let transaction;
  try {
    transaction = await createPaddleTransaction({
      items: [{ price_id: process.env.PADDLE_PRO_PRICE_ID!, quantity: 1 }],
      checkout: { url: `${origin}/dashboard?upgraded=1` },
      custom_data: { clerk_user_id: userId },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[checkout] Paddle error:", message);
    return Response.json({ error: message }, { status: 502 });
  }

  return Response.json({ url: transaction.checkout.url });
}
