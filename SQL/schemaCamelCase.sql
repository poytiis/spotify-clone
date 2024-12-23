CREATE TABLE IF NOT EXISTS "spotifyUser" (
    "id" uuid PRIMARY KEY,
    "email" TEXT UNIQUE,
    "firstName" TEXT,
    "lastName" TEXT,
    "passwordHash" VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS "artist" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT
);

CREATE TABLE IF NOT EXISTS "album" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "artistId" INT,
    "releaseYear" INT,
    CONSTRAINT fk_artist_id
      FOREIGN KEY("artistId") 
	  REFERENCES artist(id)
);

CREATE TABLE IF NOT EXISTS "musicSong" (
    "id"  SERIAL PRIMARY KEY,
    "name" TEXT,
    "filePath" TEXT,
    "duration" FLOAT,
    "artistId" INT,
    "albumId" INT,
    "releaseYear" INT,
    CONSTRAINT fk_artist_id
      FOREIGN KEY("artistId") 
	  REFERENCES artist(id),
    CONSTRAINT fk_album_id
      FOREIGN KEY("albumId") 
	  REFERENCES album(id)
);
