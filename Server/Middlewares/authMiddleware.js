const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError = require('../Utils/customError');

exports.authenticate = asyncErrorHandler(async (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).send({ error: 'Authorization header missing' });
    }

    const token = authHeader.replace('Bearer ', '').trim();

    try {
        console.log('Token:', token);
        console.log('Using secret:', process.env.SECRET_STR);

        // Verify JWT token
        const data = jwt.verify(token, process.env.SECRET_STR);
        console.log('Decoded JWT data:', data);

        // Find the user by ID
        const user = await User.findOne({email:data.email});
        console.log('User found:', user);

        if (!user) {
            return res.status(401).send({ error: 'User not found' });
        }

        req.user = user;
        if (user.role === 'admin') {
            return next();
        } else {
            return res.status(403).send({ error: 'Unauthorized access' });
        }
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        return next(new CustomError(error.message || 'Invalid auth token, please login again', 401));
    }
});
