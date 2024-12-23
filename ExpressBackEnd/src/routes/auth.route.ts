import express from 'express';
import AuthController from '../controllers/auth.controller';
import { validateHTTPBody } from '../middlewares';
import { LoginDTO, SignUpDTO } from '../DTOs/HTTP/auth.dto';

const router = express.Router();

router.post('/logIn', validateHTTPBody(LoginDTO), AuthController.logIn);
router.post('/signUp', validateHTTPBody(SignUpDTO), AuthController.signUp);
router.post('/checklogin', validateHTTPBody(SignUpDTO), AuthController.checkLogIn);

export default router;
