import AuthModel from '../db/index';
import { createHash } from 'crypto';

class AuthService {
    public static async logIn (email: string, password: string) {
        const userInDB = await AuthModel.getUser(email);
        const passwordHash = createHash('sha256').update(password).digest('hex');
        if (passwordHash === userInDB?.passwordHash) {
            return userInDB;
        } else {
            return null;
        }
    }
}

export default AuthService;