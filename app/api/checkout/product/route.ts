import { createPaddleTransaction } from "@/lib/paddle";
import { db } from "@/lib/db";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { productId } = await request.json();

  if (!productId || typeof productId !== "string") {
    return Response.json({ error: "Invalid product ID" }, { status: 400 });
  }

  const product = await db.product.findUnique({
    where: { id: productId },
    include: { profile: { select: { username: true } } },
  });

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }

  const paddleProductId = process.env.PADDLE_PRODUCT_ID;
  if (!paddleProductId) {
    return Response.json(
      { error: "PADDLE_PRODUCT_ID is not configured" },
      { status: 500 }
    );
  }

  const origin = process.env.NEXT_PUBLIC_APP_URL ??
    `${request.headers.get("x-forwarded-proto") ?? "http"}://${request.headers.get("host") ?? "localhost:3000"}`;

  // Generate token before calling Paddle so no orphaned Sale rows are created
  // if the Paddle API call fails. Sale row is only written after Paddle succeeds.
  const downloadToken = randomUUID();

  let transaction;
  try {
    transaction = await createPaddleTransaction({
      items: [
        {
          price: {
            description: product.title,
            product_id: paddleProductId,
            unit_price: {
              amount: String(product.price),
              currency_code: "USD",
            },
          },
          quantity: 1,
        },
      ],
      // Paddle Billing v2 uses checkout.url as the page that opens
      // the Paddle.js overlay. Paddle appends _ptxn to this URL so the
      // PaddleCheckout client component on /download can open the overlay
      // using that transaction ID.
      checkout: { url: `${origin}/download?token=${downloadToken}` },
      custom_data: { download_token: downloadToken },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[checkout/product] Paddle error:", message);
    return Response.json({ error: message }, { status: 502 });
  }

  // Paddle call succeeded — now persist the pending sale
  await db.sale.create({
    data: { productId: product.id, downloadToken },
  });

  return Response.json({ url: transaction.checkout.url });
}
