const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const { authenticate } = require('../Middlewares/authMiddleware');
const checkPermission = require('../Middlewares/checkPermission');

// Apply authentication middleware to all routes
router.use(authenticate);

// Protected admin routes
router.get('/applications/:type', checkPermission, adminController.getAllApplications);
router.patch('/applications/:type/:id/approve', checkPermission, adminController.approveApplication);
router.patch('/applications/:type/:id/reject', checkPermission, adminController.rejectApplication);

module.exports = router;
