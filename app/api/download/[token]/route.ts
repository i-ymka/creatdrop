import { db } from "@/lib/db";
import { getSupabaseAdmin, STORAGE_BUCKET } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const sale = await db.sale.findUnique({
    where: { downloadToken: token },
    include: { product: true },
  });

  if (!sale) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!sale.paddleTransactionId) {
    return NextResponse.json({ error: "Payment not confirmed" }, { status: 402 });
  }

  // Record first download timestamp (fire-and-forget, don't block the redirect)
  if (!sale.downloadedAt) {
    db.sale
      .update({ where: { id: sale.id }, data: { downloadedAt: new Date() } })
      .catch(() => {});
  }

  // fileKey is a Supabase storage path — generate a short-lived signed URL
  const { data, error } = await getSupabaseAdmin()
    .storage.from(STORAGE_BUCKET)
    .createSignedUrl(sale.product.fileKey, 86400); // 24-hour TTL

  if (error || !data?.signedUrl) {
    return NextResponse.json({ error: "Could not generate download link" }, { status: 500 });
  }

  return NextResponse.redirect(data.signedUrl);
}
