const multer = require('multer');
const uniqid = require('uniqid');
const util = require('util');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const url = req.baseUrl;
    console.log(url);
    cb(null, '../ml');
  },
  filename: function (req, file, cb) {
    cb(null, uniqid(''));
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/PNG'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
}).any('file');
