/*
  Warnings:

  - You are about to drop the column `userId` on the `application` table. All the data in the column will be lost.
  - Added the required column `jobId` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "application" DROP CONSTRAINT "application_userId_fkey";

-- AlterTable
ALTER TABLE "application" DROP COLUMN "userId",
ADD COLUMN     "jobId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "application" ADD CONSTRAINT "application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
