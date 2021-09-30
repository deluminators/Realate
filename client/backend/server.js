const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const url = process.env.CONNECTION_STRING;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('database connected');
  })
  .catch((er) => {
    console.log(er);
  });

const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
  console.log(port);
  console.log('server running...');
});
