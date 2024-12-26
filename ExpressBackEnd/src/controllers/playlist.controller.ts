import { Response, Request } from "express";
import { PlaylistService } from "../services/playlist.service";
import { TypedRequestBody, CreatePlaylisAPI } from '../types';

class PlaylistController {
  public static async getUserPlaylists(req: Request, res: Response) {
    const userId = req.session.userId
    const playlists = await PlaylistService.getUsersPlaylists(userId);
    res.json(playlists);
  }

  public static async createPlaylist(req: TypedRequestBody<CreatePlaylisAPI>, res: Response) {
    const name = req.body.name;
    const userId = req.session.userId
    const playlis = await PlaylistService.createPlaylist(userId, name);
    res.json(playlis);
  }
}

export default PlaylistController;
