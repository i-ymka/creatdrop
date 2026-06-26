-- CreateEnum
CREATE TYPE "OgPlan" AS ENUM ('FREE', 'PRO');

-- CreateTable
CREATE TABLE "OgCustomer" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customerKey" TEXT NOT NULL,
    "plan" "OgPlan" NOT NULL DEFAULT 'FREE',
    "logoUrl" TEXT,
    "primaryColor" TEXT NOT NULL DEFAULT '#7c3aed',
    "secondaryColor" TEXT NOT NULL DEFAULT '#1e293b',
    "fontFamily" TEXT NOT NULL DEFAULT 'Inter',
    "paddleSubscriptionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OgCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OgCustomer_userId_key" ON "OgCustomer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OgCustomer_customerKey_key" ON "OgCustomer"("customerKey");
