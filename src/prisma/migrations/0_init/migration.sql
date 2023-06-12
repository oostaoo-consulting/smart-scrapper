-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "github_login" TEXT NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "search" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Paris',
    "terms" TEXT,

    CONSTRAINT "search_pkey" PRIMARY KEY ("id")
);

