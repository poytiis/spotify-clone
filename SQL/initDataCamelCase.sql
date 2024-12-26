INSERT INTO "spotifyUser"
VALUES 
    ('c139ea87-19bb-43eb-a4e3-659e34a37e86', 'tester@test.com', 'First', 'Last', '043a718774c572bd8a25adbeb1bfcd5c0256ae11cecf9f9c3f925d0e52beaf89'),
    ('3e0ab190-3e91-41fa-ba39-1af141a55495', 'tester2@test.com', 'F', 'L', '075a421a01fe4984b4ade4a89afec861f9a435f54b5bced6d0a0e5a8792e521c');

INSERT INTO "artist"
VALUES
    (1, 'Good'),
    (2, 'Bad');

INSERT INTO "album"
VALUES 
    (1, 'First', 1, 2000),
    (2, 'Second', 1, 2001);


INSERT INTO "musicSong"
VALUES
    (1, './song.mp3', 100, 2000, 1, 1);

INSERT INTO "Playlist"
VALUES
    (1, 'Rock', '3e0ab190-3e91-41fa-ba39-1af141a55495', 'Dummy description'),
    (2, 'Trance', '3e0ab190-3e91-41fa-ba39-1af141a55495', 'Dummy Trance');