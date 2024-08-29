const CustomError = require("../Utils/customError");

const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stack,
    error: error
  });
};

const prodErrors = (res, error) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong! Please try again later.'
    });
  }
};

const duplicateKeyErrorHandler = (err) => {
  const name = Object.keys(err.keyPattern)[0];
  const msg = process.env.NODE_ENV === 'production' 
    ? 'There is already an item with the same name. Please use another name.'
    : `There is already an item with the name ${name}. Please use another ${name}`;
  return new CustomError(msg, 400);
};

const validationErrorHandler = (err) => {
  const errors = Object.values(err.errors).map(val => val.message);
  const errorMessages = errors.join('. ');
  const msg = `Invalid input data: ${errorMessages}`;
  return new CustomError(msg, 400);
};

const castErrorHandler = (err) => {
  const msg = `Invalid ${err.path}: ${err.value}`;
  return new CustomError(msg, 400);
};

const handleExpiredJWT = (err) => {
  const msg = 'Your token has expired! Please log in again.';
  return new CustomError(msg, 401);
};

const handleJWTError = (err) => {
  const msg = 'Invalid token. Please log in again!';
  return new CustomError(msg, 401);
};

// global error handling middleware
module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    devErrors(res, error);
  } else if (process.env.NODE_ENV === 'production') {
    if (error.name === 'CastError') error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === 'ValidationError') error = validationErrorHandler(error);
    if (error.name === 'TokenExpiredError') error = handleExpiredJWT(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError(error);

    prodErrors(res, error);
  }
};
