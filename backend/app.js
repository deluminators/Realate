const express = require('express');
const AppError = require('./utils/appError');
const globalErrorController = require('./controllers/globalErrorController');
const multer = require('./utils/multer');
const cors = require('cors');
const path = require('path');
const resourceController = require('./controllers/resourceController');


const app = express();
app.use(express.json());
app.use(
    cors({
      // origin: "https://justrelax-ce045.firebaseapp.com",
      origin: 'http://localhost:3000',
      credentials: true,
  
    })
  );
app.use(multer);

app.post('/api/v1/resources', resourceController.createResource);
app.get('/api/v1/resource/:id',resourceController.plato);
app.use('/api/v1/images/:id', (req, res, next) => {
    res.download(path.join(__dirname, `images/${req.params.id}`));
  });

  app.use('*', (req, res, next) => {
    next(new AppError(`Cant find ${req.originalUrl}`));
  });
  app.use(globalErrorController);
  
  module.exports = app;