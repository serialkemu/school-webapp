const PreSchool = require('../Models/preSchoolModel');
const LowerPrimary = require('../Models/lowerPrimaryModel');
const UpperPrimary = require('../Models/upperPrimaryModel');
const Secondary = require('../Models/secondaryModel');
const College = require('../Models/collegeModel');

const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError = require('../Utils/customError');

exports.preSchoolData = asyncErrorHandler (async (req, res) => {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const preSchoolApplication = await PreSchool.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
});

exports.lowerPrimaryData = asyncErrorHandler (async (req, res) => {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const lowerPrimaryApplication = await LowerPrimary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
});

exports.upperPrimaryData = asyncErrorHandler (async (req, res) => {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const upperPrimaryApplication = await UpperPrimary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
});

exports.secondaryData = asyncErrorHandler (async (req, res) => {
    const {firstName, otherNames, classGrade, phoneNumber, email,} = req.body;
    
    const secondaryApplication = await Secondary.create({
      firstName, otherNames, classGrade, phoneNumber, email,
    });
    res.status(201).json({ message: "Congrats, Form submitted successfully!" });
});

exports.collegeData = asyncErrorHandler (async (req, res) => {
  const {firstName, otherNames, course, idNumber, phoneNumber, email,} = req.body;
  
  const collegeApplication = await College.create({
    firstName, otherNames, course, idNumber, phoneNumber, email,
  });
  res.status(201).json({ message: "Congrats, Form submitted successfully!" });
});