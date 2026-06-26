"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { getSupabaseAdmin, STORAGE_BUCKET } from "@/lib/supabase";
import { db } from "@/lib/db";

const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

export type UploadProductState = { success: boolean; error?: string } | null;

export async function uploadProduct(
  _prev: UploadProductState,
  formData: FormData
): Promise<UploadProductState> {
  const { userId } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };

  const profile = await db.profile.findUnique({ where: { userId } });
  if (!profile) return { success: false, error: "Profile not found" };

  const title = (formData.get("title") as string)?.trim();
  const description = (formData.get("description") as string | null)?.trim() ?? null;
  const priceRaw = formData.get("price") as string;
  const file = formData.get("file") as File | null;

  if (!title) return { success: false, error: "Title is required" };
  if (!file || file.size === 0) return { success: false, error: "File is required" };
  if (file.size > MAX_FILE_SIZE) return { success: false, error: "File must be under 100 MB" };
  if (!ALLOWED_TYPES.includes(file.type)) {
    return { success: false, error: "Only PDF, ZIP, and image files are allowed" };
  }

  const priceFloat = parseFloat(priceRaw);
  if (isNaN(priceFloat) || priceFloat < 0.5) {
    return { success: false, error: "Price must be at least $0.50" };
  }
  const price = Math.round(priceFloat * 100); // convert to cents

  const filePath = `${profile.id}/${Date.now()}-${file.name}`;
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadError } = await getSupabaseAdmin().storage
    .from(STORAGE_BUCKET)
    .upload(filePath, fileBuffer, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) return { success: false, error: `Upload failed: ${uploadError.message}` };

  try {
    await db.product.create({
      data: {
        profileId: profile.id,
        title,
        description,
        price,
        fileKey: filePath,
        fileName: file.name,
        fileSize: file.size,
      },
    });
  } catch {
    // Best-effort cleanup of uploaded file if DB write fails
    await getSupabaseAdmin().storage.from(STORAGE_BUCKET).remove([filePath]);
    return { success: false, error: "Failed to save product. Please try again." };
  }

  revalidatePath("/dashboard/products");
  return { success: true };
}

export async function deleteProduct(productId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const profile = await db.profile.findUnique({ where: { userId } });
  if (!profile) throw new Error("Profile not found");

  const product = await db.product.findFirst({
    where: { id: productId, profileId: profile.id },
  });
  if (!product) throw new Error("Product not found");

  // Delete file from storage
  try {
    await getSupabaseAdmin().storage.from(STORAGE_BUCKET).remove([product.fileKey]);
  } catch {
    // Best-effort — don't block deletion if file is already gone
  }

  await db.product.delete({ where: { id: productId } });

  revalidatePath("/dashboard/products");
}
