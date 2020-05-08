'use strict';
module.exports = function(app) {
  var tutorApp = require('../controllers/tutorController');

  // Admin Routes
  app.route('/tutor')
    .get(tutorApp.list_all_tutor)
    .post(tutorApp.create_tutor);


  app.route('/tutor/:tutorId')
    .get(tutorApp.read_tutor)
    .put(tutorApp.update_tutor)
    .delete(tutorApp.delete_tutor);
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



