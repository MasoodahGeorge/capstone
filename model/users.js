import db from '../config/index.js';

const UserModel = {
    getAllUsers: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, callback);
    },

    getUserByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], callback);
    },

    createUser: (userData, hashedPassword, callback) => {
        const { username, email, first_name, last_name } = userData;
        const sql = 'INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [username, email, hashedPassword, first_name, last_name], callback);
    }
};

export default UserModel;
