const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
 
 
 
  category_name: {
    type: String,
    required: true, enum: ['primary','jss','sss']},
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
  ]
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;