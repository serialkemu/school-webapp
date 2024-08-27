const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const { protect } = require('../Middlewares/authMiddleware');

// Protected admin routes
router.get('/applications', protect, adminController.getAllApplications);
router.patch('/applications/:type/:id/approve', protect, adminController.approveApplication);
router.patch('/applications/:type/:id/reject', protect, adminController.rejectApplication);

module.exports = router;
