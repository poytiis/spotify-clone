import { Response } from "express";
import { TypedRequestBody, UserAPI } from '../types';
import prisma from '../db/prisma/connect';

class AuthController {
    public static async logIn (req: TypedRequestBody<UserAPI>, res: Response) {
        const {email, password} = req.body;
        const users = await prisma.spotify_user.findMany()
        console.log('LogIn! ' + users.length)
        res.sendStatus(200)
    }
}

export default AuthController;