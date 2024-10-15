CREATE TABLE IF NOT EXISTS spotify_user (
    id uuid PRIMARY KEY,
    email TEXT UNIQUE,
    first_name TEXT,
    last_name TEXT,
    password_hash VARCHAR(256)
);