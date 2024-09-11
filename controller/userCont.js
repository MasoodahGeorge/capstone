import bcrypt from 'bcrypt';
import UserModel from '../model/users.js';

const UserController = {
    getAllUsers: (req, res) => {
        UserModel.getAllUsers((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },

    registerUser: async (r3eq, res) => {
        const userData = req.body;
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        UserModel.createUser(userData, hashedPassword, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'User registered' });
        });
    },

    loginUser: (req, res) => {
        const { email, password } = req.body;
        UserModel.getUserByEmail(email, async (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            const user = results[0];
            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) {
                return res.status(401).json({ error: 'Invalid password' });
            }
            res.json({ message: 'Logged in successfully', user });
        });
    }
};

export default UserController;
