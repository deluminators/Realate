const express = require('express');
const router = express.Router();

var authenticationController = require('../controllers/authenticationController');

router.post('/login', authenticationController.login);
router.post('/signup', authenticationController.signup);

module.exports = router;
