import { PlaylistModel }  from './prisma/playlist.prisma';
import { AuthModel } from './prisma/auth.prisma';
import { AuthModelMock } from './mock/auth';

const selectedDatabaseInterface = `${process.env.DATABASE_INTERFACE}`;
const authModel = selectedDatabaseInterface === 'prisma'
    ? new AuthModel
    : new AuthModelMock

const authModelType = selectedDatabaseInterface === 'prisma'
    ?  AuthModel
    :  AuthModelMock

const playlistModel = new PlaylistModel

export { authModel, playlistModel, authModelType };
