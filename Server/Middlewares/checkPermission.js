const User = require('../Models/userModel');
const CustomError = require('../Utils/customError');

const checkPermission = async (req, res, next) => {
    try {
        // The user is already attached to the req object from the authentication middleware
        const user = await User.findOne({ email: req.user.email });
        
        if (!user) {
            return next(new CustomError('User not found', 404));
        }

        const userRole = user.role;

        if (!userRole) {
            return next(new CustomError('Role not found', 404));
        }

        // Check if the user has the 'admin' role
        if (userRole === 'admin') {
            next(); // Proceed to the next middleware or route handler
        } else {
            return next(new CustomError('You do not have permission to perform this action', 403));
        }

    } catch (error) {
        next(error);
    }
};

module.exports = checkPermission;
