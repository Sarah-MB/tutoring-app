const express = require('express');
const router = express.Router();
const tutorControllers = require('../controllers/tutorController');
const auth = require('../controllers/auth');

//tutor can register to take a subject in a category
router.post('/api/v1/register',auth.grantTutorAccess, tutorControllers.registerSubject);

//tutor can get all subjects they registered to take
router.get('/api/v1/tutor/subjects', auth.grantTutorAccess, tutorControllers.getRegisteredSubjects)

module.exports = router;