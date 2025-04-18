const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth.middleware');

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

// Get current user data
router.get('/me', authMiddleware, authController.getMe);

module.exports = router; 