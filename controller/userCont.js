import { getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb } from '../model/users.js'; // Assuming your model is in 'models/UserModel.js'

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await getUsersDb();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get a user by email
const getUserByEmail = async (req, res) => {
    const { email } = req.params; // Assuming email comes as a route parameter
    try {
        const user = await getUserDb(email);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Create a new user
const createUser = async (req, res) => {
    const { username, email, password, first_name, last_name } = req.body;

    if (!username || !email || !password || !first_name || !last_name) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        await insertUserDb(username, email, password, first_name, last_name);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Update an existing user
const updateUser = async (req, res) => {
    const { id } = req.params; // Assuming ID comes as a route parameter
    const { username, email, first_name, last_name } = req.body;

    if (!username || !email || !first_name || !last_name) {
        return res.status(400).json({ message: 'All fields are required for update' });
    }

    try {
        await updateUserDb(id, username, email, first_name, last_name);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params; // Assuming ID comes as a route parameter

    try {
        await deleteUserDb(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

export { getAllUsers, getUserByEmail, createUser, updateUser, deleteUser };
