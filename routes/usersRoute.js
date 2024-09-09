import express from 'express';
import UserController from '../controller/userCont.js';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

export default router;