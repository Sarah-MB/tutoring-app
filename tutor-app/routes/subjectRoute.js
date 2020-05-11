'use strict';
module.exports = function(app) {
const express = require('express');
const authController = require('./../controllers/authController');
const subjectController = require('./../controllers/subjectController');
const userController = require('./../controllers/userController');
const router = express.Router();

//create subject by category
app.route('/category/subject/:category_id')
      .post(subjectController.create_subject);
//get all subjects in a category
app.route('/category/:category_id/subjects')
   .get(subjectController.subject_category);
//get one subjects by id
app.route('/category/subject/:subject_id')
      .get(subjectController.subject_Id);
//get subject from search /subject?subject=chemistry
app.route('/subject')
      .get(subjectController.subjects_title);
//get all subjects
app.route('/subjects')
      .get(subjectController.subject_list);
//update subject
app.route('/subject/:subject_id')
    .put(subjectController.updateSubject);
//delete subject
app.route('/subject/:subject_id')
      .delete(subjectController.delete_subject);
//get tutors taking a subject
app.route('/subject/:subject_id/tutors')
      .get(subjectController.tutor_by_Subject);
//tutor registration to take subject
app.route('/tutor/subjects/:subject_id')
      .put(userController.tutorRegisterSubject);
//logged in tutor gets all subjects they registered for
app.route('/tutor/subjects')
       .get(userController.getSubjectsregistered);
//logged-in tutor deletes single registered subject
app.route('/tutor/subjects/:subject_id') 
    .delete(userController.delete_subject);


};