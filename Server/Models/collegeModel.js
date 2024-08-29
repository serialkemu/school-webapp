const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for form data with validation rules
const collegeSchema = new Schema({
  firstName: { 
    type: String, 
    required: [true, 'First name is required'], 
    trim: true 
  },
  otherNames: { 
    type: String, 
    required: [true, 'Other names are required'], 
    trim: true 
  },
  idNumber: { 
    type: String, 
    required: [true, 'ID Number is required'], 
    match: [/^\d{8}$/, 'ID Number should be a maximum of 8 digits'] 
  },
  course: { 
    type: String, 
    required: [true, 'Course is required'], 
    trim: true 
  },
  phoneNumber: { 
    type: String, 
    required: [true, 'Phone number is required'], 
    match: [/^\d{10,12}$/, 'Phone number must be between 10 and 12 digits'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
  },
}, { timestamps: true });

const College = mongoose.model('CollegeApplication', collegeSchema);

module.exports = College;