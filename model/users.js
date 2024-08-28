import { connection as db } from "../config/index.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

class Users {
    FetchUsers(req, res) {
        try {
            const strQry = `
                SELECT id, username, email, first_name, last_name
                FROM users;
            `;
            db.query(strQry, (err, results) => {
                if (err) throw new Error("Error occurred while fetching users.");
                res.json({
                    status: res.statusCode,
                    results,
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    FetchUser(req, res) {
        try {
            const strQry = `
                SELECT id, username, email, first_name, last_name
                FROM users
                WHERE id = ?;
            `;
            db.query(strQry, [req.params.id], (err, result) => {
                if (err) throw new Error("Error occurred while fetching the user.");
                res.json({
                    status: res.statusCode,
                    result: result[0],
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    async RegisterUser(req, res) {
        try {
            let { username, email, password, first_name, last_name } = req.body;
            const hashedPassword = await hash(password, 10);
            const strQry = `
                INSERT INTO users (username, email, password, first_name, last_name)
                VALUES (?, ?, ?, ?, ?);
            `;
            db.query(strQry, [username, email, hashedPassword, first_name, last_name], (err) => {
                if (err) throw new Error("Error occurred while registering the user.");
                res.json({
                    status: res.statusCode,
                    msg: "User registered successfully.",
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    UpdateUser(req, res) {
        try {
            let data = req.body;
            const strQry = `
                UPDATE users SET ? WHERE id = ?;
            `;
            db.query(strQry, [data, req.params.id], (err) => {
                if (err) throw new Error("Error occurred while updating the user.");
                res.json({
                    status: res.statusCode,
                    msg: "User updated successfully.",
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    DeleteUser(req, res) {
        try {
            const strQry = `
                DELETE FROM users WHERE id = ?;
            `;
            db.query(strQry, [req.params.id], (err) => {
                if (err) throw new Error("Error occurred while deleting the user.");
                res.json({
                    status: res.statusCode,
                    msg: "User deleted successfully.",
                });
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }

    async Login(req, res) {
        try {
            const { email, password } = req.body;
            const strQry = `
                SELECT id, username, email, password
                FROM users
                WHERE email = ?;
            `;
            db.query(strQry, [email], async (err, results) => {
                if (err) throw new Error("Error occurred during login.");
                if (results.length === 0) {
                    res.status(401).json({ msg: "Invalid email or password." });
                } else {
                    const isMatch = await compare(password, results[0].password);
                    if (!isMatch) {
                        res.status(401).json({ msg: "Invalid email or password." });
                    } else {
                        const token = jwt.sign({ id: results[0].id }, "your_jwt_secret", { expiresIn: "1h" });
                        res.json({
                            status: res.statusCode,
                            msg: "Login successful.",
                            token,
                        });
                    }
                }
            });
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message,
            });
        }
    }
}

const users = new Users();
export { users };
