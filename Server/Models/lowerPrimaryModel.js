const mongoose = require('mongoose');

const lowerPrimaryApplicationSchema = new mongoose.Schema({
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
    enum: ['Class 1', 'Class 2', 'Class 3'], // Restricting to predefined classes
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

const LowerPrimaryApplication = mongoose.model('LowerPrimaryApplication', lowerPrimaryApplicationSchema);

module.exports = LowerPrimaryApplication;
