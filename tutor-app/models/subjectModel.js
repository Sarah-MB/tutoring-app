const mongoose = require('mongoose');

const subjectSchema = mongoose.Schema({
  subject_name: {
    type: String,
    required: [true, 'Please enter subject name'],
  },
  category: {
    type: String
  },

  tutors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
});

// subjectSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'tutors',
//     select: ' -subjects -__v -role',
//   });
//   next();
// });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;