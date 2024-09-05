const mongoose = require('mongoose');

const upperPrimaryApplicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  otherNames: {
    type: String,
    required: true,
    trim: true,
  },
  classGrade: {
    type: String,
    required: true,
    enum: ['Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8'], // Predefined classes for upper primary
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'], // Email validation
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UpperPrimaryApplication = mongoose.model('UpperPrimaryApplication', upperPrimaryApplicationSchema);

module.exports = UpperPrimaryApplication;
