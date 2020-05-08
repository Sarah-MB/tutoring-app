'use strict';
var mongoose = require('mongoose'),
  tutor  = mongoose.model('tutor ');

exports.list_all_tutor  = function(req, res) {
  tutor .find({}, function(err, tutor ) {
    if (err)
      res.send(err);
    res.json(tutor );
  });
};

exports.create_tutor   = function(req, res) {
    var new_tutor  = new tutor (req.body);
    new_tutor .save(function(err, tutor ) {
      if (err)
        res.send(err);
      res.json(tutor );
    });
  };
  
  
  exports.read_tutor   = function(req, res) {
    Tutor .findById(req.params.tutorId, function(err, tutor  ) {
      if (err)
        res.send(err);
      res.json(tutor );
    });
  };

  exports.update_tutor   = function(req, res) {
    Tutor .findOneAndUpdate({_id: req.params.tutorId}, req.body, {new: true}, function(err, tutor ) {
      if (err)
        res.send(err);
      res.json(tutor );
    });
  };
  
  
  exports.delete_tutor   = function(req, res) {
    Tutor  .remove({
      _id: req.params.tutorId
    }, function(err, tutor ) {
      if (err)
        res.send(err);
        res.json({ message: 'Tutor deleted successfully' });
  });
};