const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminController');
const { authenticate } = require('../Middlewares/authMiddleware');
const checkAdminRole = require('../Middlewares/checkAdminRole');

// Apply authentication middleware to all routes
router.use(authenticate);

// Protected admin routes
router.get('/applications/:type', checkAdminRole, adminController.getAllApplications);
router.patch('/applications/:type/:id/approve', adminController.approveApplication);
router.patch('/applications/:type/:id/reject', adminController.rejectApplication);

