const multer = require('multer');
const uniqid = require('uniqid');
const util = require('util');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const url = req.baseUrl;
    console.log(url);
    cb(null, 'resources');
  },
  filename: function (req, file, cb) {
    cb(null, uniqid('', `-${file.originalname}`));
  },
});

const fileFilter = (req, file, cb) => {
  cb(null, true);
};

module.exports = util.promisify(
  multer({
    storage,
    fileFilter,
  }).any('file')
);
