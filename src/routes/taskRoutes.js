const express = require('express');
const {createTask , getTask} = require('../controllers/taskController');
const {authMiddleware} = require('../middleware/authMiddleware');
const router = express.Router();

// routes for creating and getting tasks after a user has logged in through jwt authentication

router.post('/', authMiddleware, createTask);
router.get('/', authMiddleware, getTask);


module.exports = router;