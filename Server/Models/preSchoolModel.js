const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define a schema for form data
const preSchoolSchema = new Schema({
    firstName: { type: String, required: true },
    otherNames: { type: String, required: true },
    classGrade: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  });

const PreSchool = mongoose.model('Pre-School Application', preSchoolSchema);

module.exports = PreSchool;