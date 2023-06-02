BEGIN;

CREATE TABLE IF NOT EXISTS "search" (
    id SERIAL PRIMARY KEY,
    "location" TEXT NOT NULL DEFAULT 'Paris',
    "terms" TEXT
);

CREATE TABLE IF NOT EXISTS "profile" (
    id SERIAL PRIMARY KEY,
    "github_login" TEXT NOT NULL
);

COMMIT;