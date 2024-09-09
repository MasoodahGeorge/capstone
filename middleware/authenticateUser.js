const jwt = require('jsonwebtoken');

// Create a token for a user
function createToken(user) {
    return jwt.sign(
        {
            email: user.email,
            id: user.id
        },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
    );
}

// Middleware to verify the token
function verifyAToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Please login." });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ msg: "Invalid or expired token, please login again." });
    }
}

module.exports = {
    createToken,
    verifyAToken
};
