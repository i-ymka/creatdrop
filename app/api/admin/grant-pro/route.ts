import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    return Response.json({ error: "Admin endpoint not configured" }, { status: 503 });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${secret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let username: string;
  let months: number;
  let founding: boolean;
  try {
    const body = await request.json();
    username = (body.username ?? "").trim().toLowerCase();
    months = typeof body.months === "number" ? body.months : 3;
    founding = body.foundingCreator === true;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!username) {
    return Response.json({ error: "username is required" }, { status: 400 });
  }

  const profile = await db.profile.findUnique({ where: { username } });
  if (!profile) {
    return Response.json({ error: `Profile not found: @${username}` }, { status: 404 });
  }

  const proExpiresAt = new Date();
  proExpiresAt.setMonth(proExpiresAt.getMonth() + months);

  const updated = await db.profile.update({
    where: { id: profile.id },
    data: {
      plan: "PRO",
      proExpiresAt,
      foundingCreator: founding ? true : profile.foundingCreator,
    },
    select: { username: true, plan: true, proExpiresAt: true, foundingCreator: true },
  });

  return Response.json({ success: true, profile: updated });
}
