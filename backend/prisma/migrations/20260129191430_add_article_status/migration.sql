/*
  Warnings:

  - Added the required column `status` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "publishedAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
