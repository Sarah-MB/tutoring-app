'use strict';
module.exports = function(app) {
  var tutorApp = require('../controllers/adminController');
  // var express = require('express');
  // var authController = require('../controllers/authController');
  // var userController = require('../controllers/userController');
  // var subjectController = require('../controllers/subjectController');
  // var router = express.Router();

  // Admin Routes
  app.route('/admin')
    .get(tutorApp.list_all_admin)
    .post(tutorApp.create_admin);


  app.route('/admin/:adminId')
    .get(tutorApp.read_admin)
    .put(tutorApp.update_admin)
    .delete(tutorApp.delete_admin);
};
// app.route('/admin/:adminId/update')
//   .post(tutorApp.admin_update);
//Tutor Routes 
// app.route('/tutor')
//     .get(tutorApp.list_all_tutor)
//     .post(tutorApp.create_tutor);


//   app.route('/admin/:adminId')
//     .get(tutorApp.read_admin)
//     .put(tutorApp.update_admin)
//     .delete(tutorApp.delete_admin);
// };



