const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Route for admin login
router.post('/login', userController.adminLogin);

module.exports = router;
