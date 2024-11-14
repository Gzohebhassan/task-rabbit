const express = require('express');
const {register, login} = require('../controllers/authController');
const router = express.Router();

//routes for login and registering a user

router.post('/register', register);
router.post('/login', login);

module.exports = router;