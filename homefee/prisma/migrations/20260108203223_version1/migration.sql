/*
  Warnings:

  - You are about to drop the `Services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_apartmentId_fkey";

-- DropTable
DROP TABLE "Services";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "serviceName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
