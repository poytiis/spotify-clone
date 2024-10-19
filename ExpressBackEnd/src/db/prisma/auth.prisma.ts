import { SignUpDTO } from '../../DTOs/HTTP/auth.dto';
import prisma from './connect.prisma';

export class AuthModel {
    public async getUserByEmail (email: string) {
        const user = await prisma.spotifyUser.findUnique({
            where: {
                email
            }
        });
        return user;
    }

    public async getUserById (id: string) {
        const user = await prisma.spotifyUser.findUnique({
            where: {
                id
            }
        });
        return user;
    }

    public async createUser (user: SignUpDTO, passwordHash: string, id: string) {
        const userInDB = await prisma.spotifyUser.create({
            data: {
                id,
                passwordHash,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

        return userInDB;
    }
}