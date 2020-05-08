'use strict';
var mongoose = require('mongoose'),
  Admin = mongoose.model('Admin');

exports.list_all_admin = function(req, res) {
  Admin.find({}, function(err, admin) {
    if (err)
      res.send(err);
    res.json(admin);
  });
};

exports.create_admin  = function(req, res) {
    var new_admin = new Admin(req.body);
    new_admin.save(function(err, admin) {
      if (err)
        res.send(err);
      res.json(admin);
    });
  };
  
  
  exports.read_admin  = function(req, res) {
    Admin.findById(req.params.adminId, function(err, admin ) {
      if (err)
        res.send(err);
      res.json(admin);
    });
  };

  exports.update_admin  = function(req, res) {
    Admin.findOneAndUpdate({_id: req.params.adminId}, req.body, {new: true}, function(err, admin) {
      if (err)
        res.send(err);
      res.json(admin);
    });
  };
  
  
  exports.delete_admin  = function(req, res) {
    admin .remove({
      _id: req.params.adminId
    }, function(err, admin) {
      if (err)
        res.send(err);
        res.json({ message: 'Admin deleted successfully' });
  });
};