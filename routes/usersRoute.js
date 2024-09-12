import express from 'express';
import { getAllUsers, getUserByEmail, createUser, updateUser, deleteUser } from '../controller/userCont.js';

const router = express.Router();

router.get('/users', getAllUsers); // Get all users
router.get('/users/:email', getUserByEmail); // Get user by email
router.post('/users', createUser); // Create a new user
router.put('/users/:id', updateUser); // Update a user
router.delete('/users/:id', deleteUser); // Delete a user

export default router;
