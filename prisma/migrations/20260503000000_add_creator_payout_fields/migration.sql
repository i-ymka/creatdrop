-- AlterTable Profile: add payoutEmail (creator's PayPal email for manual weekly payouts v1)
ALTER TABLE "Profile" ADD COLUMN "payoutEmail" TEXT;

-- AlterTable Sale: add paidOutAt and payoutAmount (filled by board after manual PayPal transfer)
ALTER TABLE "Sale" ADD COLUMN "paidOutAt" TIMESTAMP(3);
ALTER TABLE "Sale" ADD COLUMN "payoutAmount" INTEGER;
