import express from 'express';
import PlaylistController from '../controllers/playlist.controller';

const router = express.Router();

router.get('/getUserPlaylists', PlaylistController.getUserPlaylists);
router.post('/createPlaylist', PlaylistController.createPlaylist);

export default router;