const express = require('express');
const router = express.Router();
const { registerCollege, loginCollege } = require('../controllers/collegeController');

// Register a college
router.post('/register', registerCollege);

// Login a college
router.post('/login', loginCollege);

module.exports = router;
