import prisma from './connect.prisma';

export class PlaylistModel {
    public async getUserPlaylists (id: string) {
        const playlist = await prisma.playlist.findMany({
            where: {
                creatorId: id
            }
        });
        return playlist;
    }

    public async createPlaylist(creatorId: string, name: string) {
        return await prisma.playlist.create({
            data: {
                name,
                creatorId
            }
        })
    }
}