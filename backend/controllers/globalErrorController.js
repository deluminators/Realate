const AppError = require('../utils/appError');

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // console.error(err);
    res.status(404).json({
      status: 'error',
      message: 'something went wrong!',
    });
  }
};

const createMongoError = (err) => {
  let message = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(message);
  message = `Oops! The email ${message} is already registered.`;
  statusCode = err.statusCode;
  return new AppError(message, statusCode);
};

const createCastError = (err) => {
  const message = `the id ${err.value} doesn't exist. Try with another valid id.`;
  const statusCode = err.statusCode;
  return new AppError(message, statusCode);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  });
};

const createValidationError = (err) => {
  const message = Object.values(err.errors)
    .map((el) => el.message)
    .join('. ');
  const statusCode = err.statusCode;
  return new AppError(message, statusCode);
};

module.exports = (err, req, res, next) => {
  console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'dvelopment') {
    console.log('development');
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    let error = { ...err, message: err.message };
    if (err.name === 'MongoError') {
      error = createMongoError(error);
    }
    if (err.name === 'CastError') {
      error = createCastError(error);
    }
    if (err.name === 'ValidationError') {
      error = createValidationError(err);
    }
    sendErrorProd(error, res);
  }
};
