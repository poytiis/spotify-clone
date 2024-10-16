import { Response } from "express";
import { TypedRequestBody, UserAPI } from '../types';
import AuthService from '../services/auth';

class AuthController {
    public static async logIn (req: TypedRequestBody<UserAPI>, res: Response) {
        const {email, password} = req.body;
        var user = await AuthService.logIn(email, password);
        if (user) {
            console.log(user)
            // @ts-ignore:next-line
            req.session.userId = user.id;
            res.json(user);        
        } else {
            res.sendStatus(401)
        }      
    }
}

export default AuthController;