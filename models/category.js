const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
    type: String,
  },
  body: {
    type: String,
  },
  subjects: {
    type: Array
  },
  lessons: [{
    type: Schema.Types.ObjectId,
    ref: 'Subject'
  }],
}, {timestamps: true});

module.exports = mongoose.model( 'Users', usersSchema )