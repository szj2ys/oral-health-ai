-- AlterTable: Make email nullable
ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable: Add deviceId column
ALTER TABLE "users" ADD COLUMN "deviceId" TEXT;

-- CreateIndex: Add unique index on deviceId
CREATE UNIQUE INDEX "users_deviceId_key" ON "users"("deviceId");
