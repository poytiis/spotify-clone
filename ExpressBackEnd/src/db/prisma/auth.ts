import prisma from './connect';

class AuthModel {
    public static async getUser (email: string) {
        const user = await prisma.spotifyUser.findUnique({
            where: {
                email
            }
        });
        return user;
    }
}

export default AuthModel;