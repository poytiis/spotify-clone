import prisma from './connect.prisma';

export class AuthModel {
    public  async getUser (email: string) {
        const user = await prisma.spotifyUser.findUnique({
            where: {
                email
            }
        });
        return user;
    }
}