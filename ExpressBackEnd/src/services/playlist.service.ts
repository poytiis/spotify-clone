import { playlistModel } from '../db/index';

export class PlaylistService {
    public static async getUsersPlaylists(id: string) {
        const playlists = await playlistModel.getUserPlaylists(id);
        return playlists;
    }

    public static async createPlaylist(creatorId: string, name: string) {
       return  await playlistModel.createPlaylist(creatorId, name);
    }
}