import db from '../config/index.js';

const getUsersDb = async () => {
    const sql = 'SELECT * FROM users';
    try {
        const [results] = await db.promise().query(sql);
        return results;
    } catch (error) {
        throw error; // Handle or rethrow the error as needed
    }
};

const getUserDb = async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    try {
        const [[result]] = await db.promise().query(sql, [email]);
        return result; // Returning the first user object
    } catch (error) {
        throw error; // Handle or rethrow the error as needed
    }
};

const insertUserDb = async (username, email, password, first_name, last_name) => {
    const sql = `
        INSERT INTO users (username, email, password, first_name, last_name)
        VALUES (?, ?, ?, ?, ?)
    `;
    try {
        await db.promise().query(sql, [username, email, password, first_name, last_name]);
    } catch (error) {
        throw error; // Handle or rethrow the error as needed
    }
};

const deleteUserDb = async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    try {
        await db.promise().query(sql, [id]);
    } catch (error) {
        throw error; // Handle or rethrow the error as needed
    }
};

const updateUserDb = async (id, username, email, first_name, last_name) => {
    const sql = `
        UPDATE users SET username = ?, email = ?, first_name = ?, last_name = ?
        WHERE id = ?
    `;
    try {
        await db.promise().query(sql, [username, email, first_name, last_name, id]);
    } catch (error) {
        throw error; // Handle or rethrow the error as needed
    }
};

export { getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDb };
