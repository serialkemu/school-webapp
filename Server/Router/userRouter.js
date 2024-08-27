const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const { protect } = require('../Middlewares/authMiddleware');

// Route for admin login
router.post('/login', userController.adminLogin);
router.get('/validate-token', protect, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
  });
  

module.exports = router;
