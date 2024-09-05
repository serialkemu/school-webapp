const mongoose = require('mongoose');

const preSchoolApplicationSchema = new mongoose.Schema({
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
    enum: ['Nursery 1', 'Nursery 2', 'Playgroup', 'Kindergarten'], // Predefined classes for preschool
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

const PreSchoolApplication = mongoose.model('PreSchoolApplication', preSchoolApplicationSchema);

module.exports = PreSchoolApplication;
