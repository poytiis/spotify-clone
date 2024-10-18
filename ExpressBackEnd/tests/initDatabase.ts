import prisma from '../src/db/prisma/connect.prisma';
import { validUsers, playlists } from './databaseInitData';

const initDatabase = async () => {
  await prisma.playlist.deleteMany({});
  await prisma.spotifyUser.deleteMany({});
  
  await prisma.spotifyUser.createMany({
    data: validUsers
  });

  await prisma.playlist.createMany({
    data: playlists
  });
}

export default initDatabase;
