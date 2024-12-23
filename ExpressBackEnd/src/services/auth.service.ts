import { authModel } from '../db/index';
import { createHash } from 'crypto';
import { SignUpDTO } from '../DTOs/HTTP/auth.dto';
import { v4 as uuidv4 } from 'uuid';
import { HTTPError } from '../utils/errors';

class AuthService {
    public static async logIn (email: string, password: string) {
        const userInDB = await authModel.getUserByEmail(email);
        console.log(userInDB)
        const passwordHash = createHash('sha256').update(password).digest('hex');
        if (passwordHash === userInDB?.passwordHash) {
            return userInDB;
        } else {
            return null;
        }
    }

    public static async signUp (user: SignUpDTO) {
        const userInDB = await authModel.getUserByEmail(user.email);
        if(userInDB) {
            throw new HTTPError("Email already exists", 400);
        }

        const passwordHash = createHash('sha256').update(user.password).digest('hex');
        let newUUID = uuidv4();
        let exists = true;

        do {
            const user = await authModel.getUserById(newUUID);
            if(!user) {
                exists = false;
            } else {
                newUUID = uuidv4();
            }          
        } while (exists);

        return await authModel.createUser(user, passwordHash, newUUID);
    }
}

export default AuthService;
