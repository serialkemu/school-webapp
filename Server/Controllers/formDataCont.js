const PreSchool = require('../Models/preSchoolModel');
const LowerPrimary = require('../Models/lowerPrimaryModel');
const UpperPrimary = require('../Models/upperPrimaryModel');
const Secondary = require('../Models/secondaryModel');
const College = require('../Models/collegeModel');

exports.preSchoolData = async (req, res) => {
  try {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const preSchoolApplication = await PreSchool.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
};

exports.lowerPrimaryData = async (req, res) => {
  try {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const lowerPrimaryApplication = await LowerPrimary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
};

exports.upperPrimaryData = async (req, res) => {
  try {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const upperPrimaryApplication = await UpperPrimary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
};

exports.secondaryData = async (req, res) => {
  try {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const secondaryApplication = await Secondary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
};

exports.collegeData = async (req, res) => {
  try {
    const {firstName, otherNames, course, idNumber, phoneNumber, email,} = req.body;
    
    const collegeApplication = await College.create({
      firstName, otherNames, course, idNumber, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to submit form", details: error.message });
  }
};