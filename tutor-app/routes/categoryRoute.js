'use strict';
module.exports = function(app) {
  var express = require('express');
  var tutorApp = require('../controllers/userController');
  

 
  
  
  var authController = require('./../controllers/authController');
  var categoryController = require('./../controllers/categoryController');
  var router = express.Router();

//admin creates category
app.route('/category')
   .post( categoryController.create_category);
//get all categories
app.route('/category') 
   .get(categoryController.category_list);
//update a category
app.route('/category/:category_id') 
       .put(categoryController.updateCategory);
//delete  category
app.route('/category/:category_id')
       .delete(categoryController.delete_category);
};

