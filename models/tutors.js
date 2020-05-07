const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const tutorsSchema = new Schema({
    name: {
    type: String,
  },
  subjects: {
    type: Array
  },
  lessons: [{
    type: Schema.Types.ObjectId,
    ref: 'Tutor'
  }],
}, {timestamps: true});

// userSchema.methods.generateAuthToken = async () => {
//     // Generate an auth token for the user
//     const user = this;
//     const token = jwt.sign({_id: user._id}, 'idmcalculus');
//     user.tokens = user.tokens.concat({token});
//     await user.save();
//     return token;
// };

module.exports = mongoose.model( 'Users', usersSchema )