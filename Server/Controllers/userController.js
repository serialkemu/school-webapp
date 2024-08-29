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
exports.adminLogin = asyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select('+password');
console.log("user",user)
    if (!user) {
        console.log('User not found');
        return next(new CustomError("User with that email does not exist!", 404));
    }

    console.log('Stored password:', user.password);
    console.log('Provided Password:', password);

    // Use bcrypt.compare to check if the provided password matches the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch);

    if (!isMatch) {
        return next(new CustomError("Incorrect email or password!", 400));
    }

    const token = signToken(user.email);
    console.log('Generated Token:', token);

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
