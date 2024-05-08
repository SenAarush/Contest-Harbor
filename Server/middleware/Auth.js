const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(req.cookies)
    if (!token) {
        return res.status(401).json({ error: 'Authentication required' });
    }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decodedToken)
        const user = await User.findById(decodedToken._id);

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // // Attach the user to the request for further use in routes
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
