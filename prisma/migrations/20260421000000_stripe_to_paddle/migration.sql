-- Replace Stripe with Paddle: rename stripeSessionId → paddleTransactionId,
-- make it nullable (sale row is created before payment; webhook fills it in),
-- and add defaults to buyerEmail/amountPaid so pre-checkout rows can be inserted.

-- Rename column (idempotent-safe: only run if old column still exists)
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'Sale' AND column_name = 'stripeSessionId'
  ) THEN
    ALTER TABLE "Sale" RENAME COLUMN "stripeSessionId" TO "paddleTransactionId";
  END IF;
END $$;

-- Make paddleTransactionId nullable
ALTER TABLE "Sale" ALTER COLUMN "paddleTransactionId" DROP NOT NULL;

-- Set defaults so pre-checkout inserts work without supplying these
ALTER TABLE "Sale" ALTER COLUMN "buyerEmail" SET DEFAULT 'pending';
ALTER TABLE "Sale" ALTER COLUMN "amountPaid" SET DEFAULT 0;

-- Drop old Stripe unique index and recreate with new name
DROP INDEX IF EXISTS "Sale_stripeSessionId_key";

-- Unique index on paddleTransactionId (NULLs are allowed — multiple pending rows OK)
CREATE UNIQUE INDEX IF NOT EXISTS "Sale_paddleTransactionId_key" ON "Sale"("paddleTransactionId");
