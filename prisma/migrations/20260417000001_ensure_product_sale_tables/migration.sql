-- Idempotent migration: ensures Product and Sale tables exist.
-- Covers the case where 20260417000000_add_product_sale was marked-applied
-- locally but never actually ran against the production Neon database.

CREATE TABLE IF NOT EXISTS "Product" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "fileKey" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Sale" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "buyerEmail" TEXT NOT NULL,
    "amountPaid" INTEGER NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "downloadToken" TEXT NOT NULL,
    "downloadedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("id")
);

-- Indexes and constraints (IF NOT EXISTS guards prevent duplicate-key errors)
CREATE UNIQUE INDEX IF NOT EXISTS "Sale_stripeSessionId_key" ON "Sale"("stripeSessionId");
CREATE UNIQUE INDEX IF NOT EXISTS "Sale_downloadToken_key" ON "Sale"("downloadToken");

-- Foreign keys: only add if the constraint doesn't already exist.
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'Product_profileId_fkey'
  ) THEN
    ALTER TABLE "Product" ADD CONSTRAINT "Product_profileId_fkey"
      FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'Sale_productId_fkey'
  ) THEN
    ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productId_fkey"
      FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
