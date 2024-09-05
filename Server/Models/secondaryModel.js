const mongoose = require('mongoose');

const secondaryApplicationSchema = new mongoose.Schema({
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
    enum: ['Form 1', 'Form 2', 'Form 3', 'Form 4'], // Predefined classes for secondary school
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

const SecondaryApplication = mongoose.model('SecondaryApplication', secondaryApplicationSchema);

module.exports = SecondaryApplication;
