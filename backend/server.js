const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const host = 'localhost';
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
  console.log(`app listening at ${port}`);
});
