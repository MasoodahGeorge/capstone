import bcrypt from 'bcrypt';
import UserModel from '../model/users.js';

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const results = await UserModel.getAllUsers();
            res.status(200).json(results);
        } catch (err) {
            res.status(500).json({ message: 'Error fetching users', error: err.message });
        }
    },

    registerUser: async (req, res) => { // Corrected typo here
        const userData = req.body;
        try {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            await UserModel.createUser(userData, hashedPassword);
            res.status(201).json({ message: 'User registered' });
        } catch (err) {
            res.status(500).json({ message: 'Error registering user', error: err.message });
        }
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await UserModel.getUserByEmail(email);
            if (!user) { // Corrected condition
                return res.status(404).json({ error: 'User not found' });
            }
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }
            res.status(200).json({ message: 'Logged in successfully', user });
        } catch (err) {
            res.status(500).json({ message: 'Error logging in', error: err.message });
        }
    }
};

export default UserController;
