import { PlaylistModel }  from './prisma/playlist.prisma';
import { AuthModel } from './prisma/auth.prisma';

const selectedDatabaseInterface = `${process.env.DATABASE_INTERFACE}`;

const authModel =  new AuthModel;
const playlistModel = new PlaylistModel

export { authModel, playlistModel };
