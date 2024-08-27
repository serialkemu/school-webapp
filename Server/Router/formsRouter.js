const express = require('express');
const router = express.Router();

const formDataController = require('../Controllers/formDataCont');

router.post('/pre-school', formDataController.preSchoolData);
router.post('/lower-primary', formDataController.lowerPrimaryData);
router.post('/upper-primary', formDataController.upperPrimaryData);
router.post('/secondary', formDataController.secondaryData);
router.post('/college', formDataController.collegeData);

module.exports = router;