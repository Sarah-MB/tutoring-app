'use strict';
module.exports = function(app) {
  var express = require('express');
  var tutorApp = require('../controllers/userController');
  var authController = require('../controllers/authController');
  var lessonController = require('../controllers/lessonController');
  var router = express.Router();

//admin create lesson for student with tutor
app.route('/admin/lesson') 
   .post(lessonController.admin_create_lesson);
//student book/create lesson with tutor
app.route('/student/lesson') 
    .post(lessonController.studentBookLesson);
//List of all booked lessons for student
app.route('/student/lessons')
    .get(lessonController.student_lessons);
//tutor views all booked lesson
app.route('/tutor/lessons') 
   .get(lessonController.tutor_lessons);
//admin gets all lessons
app.route('/lessons') 
   .get(lessonController.lesson_list);
//admin update lesson
app.route('/lessons/:lesson_id') 
    .put(lessonController.update_lesson);
//admin delete lesson
app.route('/lesson/:lesson_id') 
   .delete(lessonController.delete_lesson);

};