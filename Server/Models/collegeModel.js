const mongoose = require('mongoose');

const collegeApplicationSchema = new mongoose.Schema({
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
  idNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    enum: [
      'BSc.CS (Bachelor of Science in Computer Science)',
      'BSc.NCS (Bachelor of Science in Networking & Cyber Security)',
      'BSc.AIT (Bachelor of Science in Applied Information Technology)',
      'BSc.VFX (Bachelor of Science in Animation and Visual Effects)',
      'BSc.AI & ML (Bachelor of Science in Artificial Intelligence & Machine Learning)',
      'BSc.AF(Bachelor of Science in Accounting & Finance)',
      'BBA IM/IB (Bachelor of Business Administration)',
      'BSc.AE (Bachelor of Science in Applied Economics)',
      'BHM (Bachelor of Hotel Management)',
      'BMIT (Bachelor of Medical Imaging Technology)',
      'BMLT(Bachelor of Medical Laboratory Technology)',
      'DBA - Diploma in Business Administration',
      'DIT - Diploma in Information Technology',
      'DCHN - Diploma in Computer Hardware & Networking',
      'DNCS - Diploma in Networking & Cyber Security',
      'DMA - Diploma in Multimedia & Animation',
      'DSE - Diploma in Software Engineering',
      'HEC - Higher Education Certificate - Business & IT',
      'HEC - Higher Education Certificate - Physical Sciences',
      'HEC - Higher Education Certificate - Health Sciences',
    ],
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
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  level: {
    type: String,
    required: true,
    enum: [
      'Highschool',
      'Diploma',
      'Certificate',
      'Degree',
      'Masters',
      'PHD',
    ],
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
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

const CollegeApplication = mongoose.model('CollegeApplication', collegeApplicationSchema);

module.exports = CollegeApplication;