const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError = require('../Utils/customError');

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Admin Login
exports.adminLogin = asyncErrorHandler (async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
        message: 'Login successful',
        token,
        user: {
        id: user._id,
        username: user.username,
        role: user.role,
        },
    });
});
