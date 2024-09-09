import 'dotenv/config';
import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;

// Create a token for a user
function createToken(user) {
    return sign(
        {
            email: user.email,   // Make sure to use the correct property name
            id: user.id          // Optionally include other relevant information like user ID
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }      // Token expiration time
    );
}

// Middleware to verify the token
function verifyAToken(req, res, next) {
    const authHeader = req.headers['authorization'];  // Get the auth header
    const token = authHeader && authHeader.split(' ')[1]; // Extract token after "Bearer"

    if (!token) {
        return res.status(401).json({
            msg: "Please login."  // No token provided
        });
    }

    try {
        // Verify the token
        const decoded = verify(token, process.env.SECRET_KEY);
        req.user = decoded; // Attach the decoded token data to the request (optional)
        next();
    } catch (err) {
        res.status(403).json({
            msg: "Invalid or expired token, please login again." // Token is invalid or expired
        });
    }
}

export {
    createToken,
    verifyAToken
};
