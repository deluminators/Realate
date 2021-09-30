const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const multer = require('./utils/multer');

const createResource = (req, res, next) => {
  console.log(req);
  const link = req.files[0].path.replace('\\', '/');
  res.status(200).json({
    link,
    status: 'success',
  });
};

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  })
);
app.use(multer);
app.post('/api/v1/resources', createResource);
app.use(
  '/api/v1/resources/',
  express.static(path.join(__dirname, 'resources'))
);

// app.route('/api/v1/contact').post(addContact);
// app.route('/api/v1/hire').post(addHire);

module.exports = app;
