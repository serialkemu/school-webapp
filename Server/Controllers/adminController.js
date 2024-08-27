const PreSchool = require('../Models/preSchoolModel');
const LowerPrimary = require('../Models/lowerPrimaryModel');
const UpperPrimary = require('../Models/upperPrimaryModel');
const Secondary = require('../Models/secondaryModel');
const College = require('../Models/collegeModel');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError = require('../Utils/customError');

// Controller to get all applications based on type
exports.getAllApplications = asyncErrorHandler(async (req, res) => {
    const { type } = req.query; // Get the type from query parameters

    let applications;
    switch (type) {
      case 'pre-school':
        applications = await PreSchool.find();
        break;
      case 'lower-primary':
        applications = await LowerPrimary.find();
        break;
      case 'upper-primary':
        applications = await UpperPrimary.find();
        break;
      case 'secondary':
        applications = await Secondary.find();
        break;
      case 'college':
        applications = await College.find();
        break;
      default:
        return res.status(400).json({ error: "Invalid application type" });
    }

    res.status(200).json(applications);
});
// Controller to approve an application
exports.approveApplication = asyncErrorHandler (async (req, res) => {
      const { id, type } = req.params;
  
      let applicationModel;
      switch (type) {
        case 'pre-school':
          applicationModel = PreSchool;
          break;
        case 'lower-primary':
          applicationModel = LowerPrimary;
          break;
        case 'upper-primary':
          applicationModel = UpperPrimary;
          break;
        case 'secondary':
          applicationModel = Secondary;
          break;
        case 'college':
          applicationModel = College;
          break;
        default:
          return res.status(400).json({ error: "Invalid application type" });
      }
  
      const updatedApplication = await applicationModel.findByIdAndUpdate(
        id,
        { status: "approved" },
        { new: true }
      );
  
      if (!updatedApplication) {
        return res.status(404).json({ error: "Application not found" });
      }
  
      res.status(200).json({ message: "Application approved successfully", application: updatedApplication });

  });
// Controller to reject an application
exports.rejectApplication = asyncErrorHandler (async (req, res) => {
    const { id, type } = req.params;

    let applicationModel;
    switch (type) {
    case 'pre-school':
        applicationModel = PreSchool;
        break;
    case 'lower-primary':
        applicationModel = LowerPrimary;
        break;
    case 'upper-primary':
        applicationModel = UpperPrimary;
        break;
    case 'secondary':
        applicationModel = Secondary;
        break;
    case 'college':
        applicationModel = College;
        break;
    default:
        return res.status(400).json({ error: "Invalid application type" });
    }

    const updatedApplication = await applicationModel.findByIdAndUpdate(
    id,
    { status: "rejected" },
    { new: true }
    );

    if (!updatedApplication) {
    return res.status(404).json({ error: "Application not found" });
    }

    res.status(200).json({ message: "Application rejected successfully", application: updatedApplication });

});