const CustomError = require('../Utils/customError');

exports.checkAdminRole = (req, res, next) => {
  const user = req.user;

  console.log('User role:', user.role);

  if (user.role === 'admin') {
    return next(); // Allow access if the user is an admin
  } else {
    return next(new CustomError('Unauthorized Access!!', 403));
  }
};