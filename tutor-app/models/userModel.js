'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    first_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  last_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
    required: true
  },
  subject: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }],
  lesson: [{
    type: Schema.Types.ObjectId,
    ref: 'Lesson'
  }],
  password: {
    type: String,
    required: [true, 'Kindly enter your password'],
    select: false,
  },
  Created_date: {
    type: Date,
    default: Date.now
},
accessToken: {type:String},
role: { type: String,
  enum: ['student', 'tutor', 'admin'], default:
  'student'},
creadtedAt: {type:Date, default:Date.now}
});

module.exports = mongoose.model('user', UserSchema);