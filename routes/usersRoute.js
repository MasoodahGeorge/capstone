const express = require('express');
const UserController = require('../controller/userCont.js');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;
