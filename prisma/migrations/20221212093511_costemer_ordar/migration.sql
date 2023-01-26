/*
  Warnings:

  - You are about to drop the column `email` on the `costemerordar` table. All the data in the column will be lost.
  - Added the required column `delivery` to the `costemerOrdar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `costemerordar` DROP COLUMN `email`,
    ADD COLUMN `delivery` VARCHAR(191) NOT NULL;
