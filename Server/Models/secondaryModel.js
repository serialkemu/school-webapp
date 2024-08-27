const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define a schema for form data
const secondarySchema = new Schema({
    firstName: { type: String, required: true },
    otherNames: { type: String, required: true },
    classGrade: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
  });

const Secondary = mongoose.model('Secondary Application', secondarySchema);

module.exports = Secondary;