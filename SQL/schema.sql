CREATE TABLE IF NOT EXISTS spotify_user (
    id uuid PRIMARY KEY,
    email TEXT UNIQUE,
    first_name TEXT,
    last_name TEXT,
    password_hash VARCHAR(256)
);

CREATE TABLE IF NOT EXISTS artist (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS album (
    id SERIAL PRIMARY KEY,
    name TEXT,
    artist_id INT,
    release_year INT,
    CONSTRAINT fk_artist_id
      FOREIGN KEY(artist_id) 
	  REFERENCES artist(id)
);

CREATE TABLE IF NOT EXISTS music_song (
    id  SERIAL PRIMARY KEY,
    name TEXT,
    file_path TEXT,
    duration FLOAT,
    artist_id INT,
    album_id INT,
    release_year INT,
    CONSTRAINT fk_artist_id
      FOREIGN KEY(artist_id) 
	  REFERENCES artist(id),
    CONSTRAINT fk_album_id
      FOREIGN KEY(album_id) 
	  REFERENCES album(id)
);
