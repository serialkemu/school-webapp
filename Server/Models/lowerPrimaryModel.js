const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define a schema for form data
const lowerPrimarySchema = new Schema({
    firstName: { type: String, required: true },
    otherNames: { type: String, required: true },
    classGrade: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  });

const LowerPrimary = mongoose.model('Lower-Primary Application', lowerPrimarySchema);

module.exports = LowerPrimary;