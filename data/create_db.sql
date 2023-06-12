BEGIN;

CREATE TABLE IF NOT EXISTS "Search" (
    id SERIAL PRIMARY KEY,
    "location" TEXT NOT NULL DEFAULT 'Paris',
    "terms" TEXT
);

CREATE TABLE IF NOT EXISTS "Profile" (
    id SERIAL PRIMARY KEY,
    "github_login" TEXT NOT NULL
);

COMMIT;