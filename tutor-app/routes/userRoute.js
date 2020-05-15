'use strict';
module.exports = function(app) {
  var express = require('express');
  var tutorApp = require('../controllers/userController');
  var authController = require('../controllers/authController');
  var userController = require('../controllers/userController');
  var router = express.Router();
router.get('/',tutorApp.list_all_user);
//user sign-up
app.route('/signup')
    .post(authController.signup);
//user login
app.route('/login')
    .post(authController.login);
  // user Routes
  app.route('/user')
    .get(tutorApp.list_all_user)
    .post(tutorApp.create_user);

  app.route('/user/:userId')
    .get(tutorApp.read_user)
    .put(tutorApp.update_user)
    .delete(tutorApp.delete_user);

// gets list of all tutors
// app.route('/tutors')
//    .get(userController.tutor_list);
// // gets list of all students
// app.route('/students') 
//    .get(userController.student_list);
  };

