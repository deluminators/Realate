const AppError = require('../utils/appError');
module.exports = (fn) => {
  return (args) =>
    fn(args).catch((err) => {
      //   console.log(er.message);
      let ferror;
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';

      if (process.env.NODE_ENV === 'dvelopment') {
        console.log('development');
        ferror = sendErrorDev(err);
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
        ferror = sendErrorProd(error);
      }
      throw new Error(JSON.stringify(ferror));
    });
};

const sendErrorProd = (err) => {
  if (err.isOperational) {
    return {
      status: err.status,
      message: err.message,
    };
  } else {
    return {
      status: 'error',
      message: 'something went wrong!',
    };
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
  return {
    status: err.status,
    err: err,
    message: err.message,
    stack: err.stack,
  };
};

const createValidationError = (err) => {
  const message = Object.values(err.errors)
    .map((el) => el.message)
    .join('. ');
  const statusCode = err.statusCode;
  return new AppError(message, statusCode);
};
