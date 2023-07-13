/*
  Warnings:

  - You are about to drop the column `github_login` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `login` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "github_login",
ADD COLUMN     "login" TEXT NOT NULL,
ALTER COLUMN "name" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Search" ALTER COLUMN "terms" SET DEFAULT '';
