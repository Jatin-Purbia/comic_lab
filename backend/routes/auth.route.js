import express from 'express';
import { googleLogin, signUp, login} from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/google-login', googleLogin);
router.post('/signup', signUp);
router.post('/login', login);

export default router;
