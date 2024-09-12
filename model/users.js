import db from '../config/index.js';

const UserModel = {
    getAllUsers: async () => {
        const sql = 'SELECT * FROM users';
        try {
            const [results] = await db.promise().query(sql);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    getUserByEmail: async (email) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        try {
            const [results] = await db.promise().query(sql, [email]);
            return results[0]; // Assuming you want the first user object returned
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    },

    createUser: async (userData, hashedPassword) => {
        const { username, email, first_name, last_name } = userData;
        const sql = 'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)';
        try {
            const [results] = await db.promise().query(sql, [username, email, hashedPassword, first_name, last_name]);
            return results;
        } catch (error) {
            throw error; // Handle or rethrow the error as needed
        }
    }
};

export default UserModel;
