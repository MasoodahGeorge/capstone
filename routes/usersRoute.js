const express = require('express');
const UserController = require('../controller/userCont.js');
const router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;

import express from 'express';
import { errorHandling } from './middleware/errorHandling.js';

const app = express();

// Define routes and other middleware...

// Error handling middleware (always at the end)
app.use(errorHandling);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
