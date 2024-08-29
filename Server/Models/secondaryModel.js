const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define a schema for form data
const secondarySchema = new Schema({
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
  classGrade: { 
    type: String, 
    required: [true, 'Class/Grade is required'], 
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


const Secondary = mongoose.model('Secondary Application', secondarySchema);

module.exports = Secondary;