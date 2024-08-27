const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define a schema for form data
const collegeSchema = new Schema({
    firstName: { type: String, required: true },
    otherNames: { type: String, required: true },
    idNumber: { type: String, required: true },
    course: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  });

const College = mongoose.model('CollegeApplication', collegeSchema);

module.exports = College;