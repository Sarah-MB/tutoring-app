  
const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');

const tutorSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'Enter first name'],
  },
  last_name: {
    type: String,
    required: [true, 'Enter last name'],
  },
  email: {
    type: String,
    required: [true, 'Enter email'],
    unique: [true, 'This email is taken, please try another'],
    lowercase: true,
    validate: [validator.isEmail, 'Enter a valid email'],
  },
  role: {
    type: String,
    default: 'tutor',
  },
  subjects: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Subject',
    },
  ],
  password: {
    type: String,
    required: [true, 'Kindly enter your password'],
    select: false,
  },
  passwordconfirm: {
    type: String,
    required: [true, 'kindly confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'passwords incorrect',
    },
  },
});

tutorSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'subjects',
    select: '-tutors -category -__v',
  });
  next();
});

//pre-save middleware to hash password
// tutorSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   this.passwordconfirm = undefined;
//   next();
// });

// //instance method to check given password against encrypted passwordin db when logging in
// tutorSchema.methods.checkPassword = async function (
//   inputPassword,
//   userPassword
// ) {
//   return await bcrypt.compare(inputPassword, userPassword);
// };

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;