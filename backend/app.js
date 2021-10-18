const express = require('express');
const multer = require('./utils/multer');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();

const createResource = async (req, res) => {
  try {
    const filename = req.files[0].filename;
    const resp = await axios.post(
      `http://127.0.0.1:8000/landcover/predict/${filename}`
    );
    res.status(200).json({
      data: resp.data,
      imageName: filename,
    });
  } catch (er) {
    console.log(er);
  }
};

const predictPath = async (req, res) => {
  try {
    const resp = await axios.post(
      `http://127.0.0.1:8000/optimizedpath/predict`,
      req.body
    );
    res.send(resp.data);
  } catch (er) {
    console.log(er);
  }
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
app.post('/api/v1/predict', predictPath);

app.use('/api/v1/resources', (req, res, next) => {
  express.static(
    path.join(__dirname, `../ml/optimized_path`)
  );
});

module.exports = app;
