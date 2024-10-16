import express from 'express';
import AuthController from '../controllers/auth';

const router = express.Router();


router.post('/logIn', AuthController.logIn)

export default router;
