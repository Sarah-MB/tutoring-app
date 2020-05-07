var tutor = require('../models/tutor');
var jwt = require('jsonwebtoken');

// Display tutor create form on GET.
exports.tutor_create_get =  function(req, res, next) {
        // create tutor GET controller logic here 
        res.render('pages/tutor_form', { title: 'Create tutor',    layout: 'layouts/detail'});
};

// Handle tutor create on POST.
exports.tutor_create_post = function(req, res, next) {
     // create tutor POST controller logic here
     // If an tutor gets created successfully, we just redirect to tutors list
     // no need to render a page
      models.tutor.create({
            name: req.body.name,
            subject: req.body.subject,
            lesson: req.body.lesson
            .then(() => res.json({
                success: 'Tutor Deleted Successfully'
            })).catch(error => {
                res.status(404).send(error);
            })
      });
};

 