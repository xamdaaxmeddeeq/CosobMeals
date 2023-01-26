/*
  Warnings:

  - You are about to drop the column `Message` on the `costemerordar` table. All the data in the column will be lost.
  - Added the required column `message` to the `costemerOrdar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `costemerOrdar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `costemerordar` DROP COLUMN `Message`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `number` VARCHAR(191) NOT NULL;
