-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Product_id_belongsToId_idx" ON "Product"("id", "belongsToId");
