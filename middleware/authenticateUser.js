import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { sign, verify } = jwt;

function createToken(user) {
    return sign(
        {
            email: user.email,
            id: user.id
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );
}

function verifyAToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Please login." });
    }

    try {
        const decoded = verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        // Handle specific JWT errors
        if (err.name === 'TokenExpiredError') {
            return res.status(403).json({ msg: "Token has expired, please login again." });
        }
        if (err.name === 'JsonWebTokenError') {
            return res.status(403).json({ msg: "Invalid token, please login again." });
        }
        // For other errors
        res.status(500).json({ msg: "An error occurred during token verification." });
    }
}

export { createToken, verifyAToken };
