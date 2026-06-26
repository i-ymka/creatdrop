import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let code: string;
  try {
    const body = await request.json();
    code = (body.code ?? "").trim().toUpperCase();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!code) {
    return Response.json({ error: "Promo code is required" }, { status: 400 });
  }

  const profile = await db.profile.findUnique({ where: { userId } });
  if (!profile) {
    return Response.json({ error: "Profile not found" }, { status: 404 });
  }

  if (profile.plan === "PRO" && !profile.proExpiresAt) {
    return Response.json({ error: "You already have an active PRO subscription" }, { status: 400 });
  }

  const promo = await db.promoCode.findUnique({ where: { code } });
  if (!promo) {
    return Response.json({ error: "Invalid promo code" }, { status: 404 });
  }

  if (promo.expiresAt && promo.expiresAt < new Date()) {
    return Response.json({ error: "This promo code has expired" }, { status: 400 });
  }

  if (promo.usedCount >= promo.maxUses) {
    return Response.json({ error: "This promo code has reached its usage limit" }, { status: 400 });
  }

  // Check if this profile already used this code
  const alreadyUsed = await db.promoCodeUse.findUnique({
    where: { promoCodeId_profileId: { promoCodeId: promo.id, profileId: profile.id } },
  });
  if (alreadyUsed) {
    return Response.json({ error: "You have already redeemed this promo code" }, { status: 400 });
  }

  const proExpiresAt = new Date();
  proExpiresAt.setMonth(proExpiresAt.getMonth() + promo.monthsGranted);

  await db.$transaction([
    db.profile.update({
      where: { id: profile.id },
      data: {
        plan: "PRO",
        proExpiresAt,
        foundingCreator: promo.foundingCreator ? true : profile.foundingCreator,
      },
    }),
    db.promoCode.update({
      where: { id: promo.id },
      data: { usedCount: { increment: 1 } },
    }),
    db.promoCodeUse.create({
      data: { promoCodeId: promo.id, profileId: profile.id },
    }),
  ]);

  return Response.json({
    success: true,
    monthsGranted: promo.monthsGranted,
    foundingCreator: promo.foundingCreator,
    proExpiresAt,
  });
}
