import express from 'express';
import PlaylistController from '../controllers/playlist.controller';

const router = express.Router();

router.get('/', PlaylistController.getUserPlaylists);
router.post('/', PlaylistController.createPlaylist);

export default router;
