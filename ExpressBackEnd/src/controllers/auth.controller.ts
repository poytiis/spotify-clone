import { Response } from "express";
import { TypedRequestBody } from '../types';
import AuthService from '../services/auth.service';
import { LoginDTO, SignUpDTO } from "../DTOs/HTTP/auth.dto";

class AuthController {
  public static async logIn (req: TypedRequestBody<LoginDTO>, res: Response) {
    const {email, password} = req.body;
    var user = await AuthService.logIn(email, password);
    if (user) {
      req.session.userId = user.id;
      res.json(user);        
    } else {
      res.sendStatus(401)
    }      
  }

  public static async signUp (req: TypedRequestBody<SignUpDTO>, res: Response) {
    const user = await AuthService.signUp(req.body);
    if (user) {
      req.session.userId = user.id;
      res.json(user);        
    } else {
      res.sendStatus(400)
    }      
  }

  public static async checkLogIn (req: TypedRequestBody<null>, res: Response) {
    const userId = req.session.userId;
    if(userId) {
      const user = await AuthService.fetchUser(userId);
      if(user) {
        res.json(user);   
      } else {
        res.sendStatus(401);
      }

    } else {
      res.sendStatus(401);
    }
  }
}

export default AuthController;
