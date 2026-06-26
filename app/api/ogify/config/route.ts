import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const customer = await db.ogCustomer.upsert({
    where: { userId },
    create: { userId },
    update: {},
  });

  return Response.json(customer);
}

const UpdateSchema = z.object({
  logoUrl: z.string().url().nullable().optional(),
  primaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  secondaryColor: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
  fontFamily: z.string().min(1).max(100).optional(),
});

export async function PUT(request: Request) {
  const { userId } = await auth();
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = UpdateSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten() }, { status: 422 });
  }

  const { logoUrl, primaryColor, secondaryColor, fontFamily } = parsed.data;

  const data: Record<string, string | null | undefined> = {};
  if (logoUrl !== undefined) data.logoUrl = logoUrl;
  if (primaryColor !== undefined) data.primaryColor = primaryColor;
  if (secondaryColor !== undefined) data.secondaryColor = secondaryColor;
  if (fontFamily !== undefined) data.fontFamily = fontFamily;

  const customer = await db.ogCustomer.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });

  return Response.json(customer);
}
