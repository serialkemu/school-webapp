const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError = require('../Utils/customError');

const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
// Generate JWT token
const signToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_STR, { expiresIn: process.env.TOKEN_EXP });
};

// Admin Login
exports.adminLogin = asyncErrorHandler (async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    console.log(password)

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        console.log('User not found');
        return next(new CustomError("User with that email does not exist!", 404));
    }

    console.log('Stored password:', user.password);
    console.log('Provided Pin:', password);

    const isMatch = user.password === password;
    console.log('Password Match:', isMatch);

    if (!isMatch) {
        return next(new CustomError("Incorrect email or password!!", 400));
    }

    const token = signToken(user.email);
    console.log(token)
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
