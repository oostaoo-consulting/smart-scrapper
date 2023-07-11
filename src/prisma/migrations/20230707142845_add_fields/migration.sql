/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `search` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "profile";

-- DropTable
DROP TABLE "search";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "github_login" TEXT NOT NULL,
    "name" TEXT,
    "avatarUrl" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Search" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL DEFAULT 'Paris',
    "terms" TEXT,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);
