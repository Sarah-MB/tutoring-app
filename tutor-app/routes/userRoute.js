// 'use strict';
// module.exports = function(app) {
//   var express = require('express');
//   var tutorApp = require('../controllers/userController');
//   var authController = require('../controllers/authController');
//   var userController = require('../controllers/userController');
//   var router = express.Router();
// router.get('/',tutorApp.list_all_user);
// //user sign-up
// app.route('/v1/signup')
//     .post(authController.signup);
// //user login
// app.route('/v1/login')
//     .post(authController.login);

// //create subject
// app.route('/v1/subject')
//    .post(authController.grantAdminAccess, userController.createSubject);

// //create category
// app.route('/v1/category')
//    .post(authController.grantAdminAccess, userController.createCategory);

// //update subject by id
// app.route('/v1/subject')
//    .patch(authController.grantAdminAccess, userController.updateSubjectById);

// //delete subject by id
// app.route('/v1/subject')
//    .delete(authController.grantAdminAccess, userController.deleteSubjectById);

// //delete category
// app.route('/v1/category')
//    .delete(authController.grantAdminAccess, userController.deleteCategory);

//    //admin can get all tutors
// app.route('/v1/tutors')
//    .get(authController.grantAdminAccess, userController.getAllTutors);

// //get tutor by ID
// app.route('/v1/tutor')
//    .get(authController.grantAdminAccess, userController.getTutorById);

// //delete tutor by Id
// app.route('/api/v1/tutor')
//    .delete(authController.grantAdminAccess, userController.deleteTutorById);

// //admin can book lessons
// app.route('/v1/lesson')
//    .post(authController.grantAdminAccess, userController.bookLesson);

// //retrieve all lessons
// app.route('/v1/lessons')
//    .get(authController.grantAdminAccess, userController.getAllLessons);

// //get lesson by id
// app.route('/v1/lesson')
//    .get(authController.grantAdminAccess, userController.getLessonById);

// //update a lesson by id
// app.route('/v1/lesson')
//    .patch(authController.grantAdminAccess, userController.updateLessonById);

// //admin can delete a lesson by id
// app.route('/v1/lesson')
//    .delete(authController.grantAdminAccess, userController.deleteLessonById);

// //admin can make tutor an admin
// app.route('/v1/user')
//    .patch(authController.grantAdminAccess,userController.makeTutorAdmin);

// //tutor can register to take a subject in a category
// app.route('/v1/register')
//    .post(auth.grantTutorAccess, userControllers.registerSubject);

// //tutor can get all subjects they registered to take
// app.route('/v1/tutor/subjects')
//    .get(auth.grantTutorAccess, userControllers.getRegisteredSubjects)

//   };


const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');
const auth = require('../controllers/auth');

//create subject
router.post('/api/v1/subject',auth.grantAdminAccess, adminControllers.createSubject )

//create category
router.post('/api/v1/category',auth.grantAdminAccess, adminControllers.createCategory )

//update subject by id
router.patch('/api/v1/subject',auth.grantAdminAccess, adminControllers.updateSubjectById);

//delete subject by id
router.delete('/api/v1/subject',auth.grantAdminAccess, adminControllers.deleteSubjectById)


//delete category
router.delete('/api/v1/category',auth.grantAdminAccess, adminControllers.deleteCategory);


//admin can get all tutors
router.get('/api/v1/tutors',auth.grantAdminAccess, adminControllers.getAllTutors);

//get tutor by ID
router.get('/api/v1/tutor',auth.grantAdminAccess, adminControllers.getTutorById);

//delete tutor by Id
router.delete('/api/v1/tutor',auth.grantAdminAccess, adminControllers.deleteTutorById);

//admin can book lessons
router.post('/api/v1/lesson',auth.grantAdminAccess, adminControllers.bookLesson);

//retrieve all lessons
router.get('/api/v1/lessons',auth.grantAdminAccess, adminControllers.getAllLessons);

//get lesson by id
router.get('/api/v1/lesson',auth.grantAdminAccess, adminControllers.getLessonById);


//update a lesson by id
router.patch('/api/v1/lesson',auth.grantAdminAccess, adminControllers.updateLessonById);

//admin can delete a lesson by id
router.delete('/api/v1/lesson',auth.grantAdminAccess, adminControllers.deleteLessonById);

//admin can make tutor an admin
router.patch('/api/v1/user',auth.grantAdminAccess,adminControllers.makeTutorAdmin);

module.exports = router;