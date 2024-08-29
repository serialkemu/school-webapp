const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const {authenticate} = require('../Middlewares/authMiddleware')

// Apply authentication middleware only to the protected routes
router.use('/applications', authenticate);

// Protected admin routes
router.get('/:type', adminController.getAllApplications);
router.patch('/:type/:id/approve', adminController.approveApplication);
router.patch('/:type/:id/reject', adminController.rejectApplication);

module.exports = router;
