const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const secret_key = process.env.JWT_SECRET;

exports.signUp = (req, res, next) =>{
  const { first_name, last_name, email, password, role } = req.body

  if(!first_name || !last_name || !email || !password){
    res.status(400)
    res.send({ status: false, message: "All fields are required"})
    return;
  } else if(role == 'admin'){
    res.status(400).send({ status: false, message: "You can not sign up as an admin"})
    return;
  }

  User.findOne({ email })
  .then(user => {
    if (user) {
      return res
        .status(423)
        .send({status: false, message: "This email already exists"});
    }else{
      bcrypt
  .hash(password, 12)
  .then(password => {
    let user = new User({
      first_name,
      last_name,
      email,
      password,
      role: role || 'student',
    });
    const accessToken = jwt.sign({userId: user._id }, 'secret_key', { expiresIn: '7d' });
    user.accessToken = accessToken;
     user.save();
     return user;
  })
  .then((user) => res.status(200).send({ status: true, message: "User registered successfully", user: user }))
    }
  })
  .catch(err => console.log(err));
}


exports.login =(req, res, next)=>{
  const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({email})
      .then(user=>{
          if(!user){return res
              .status(404)
              .send("User not found, please provide valid credentials");}
              
              bcrypt.compare(password, user.password)
                  .then(valid=>{
                      if(!valid){
                          return res.status(403)
                              .send("Incorrect username or password, please review details and try again");
                      }
                      const token = jwt.sign({email: user.email, _id: user._id},
                                   "somesecretkey",
                                  {expiresIn: "1h"});
                      res.status(200)
                          .send({_id: user._id, email: user.email, token: token});
                  });
      }).catch(err => console.log(err));
      
}


exports.grantAdminAccess = async (req, res, next) => {
  try{
    const token  = req.body.token
    if (!token || token == undefined) {
      return res
      .status(404).send({status: false, message: "A valid token is required to access this route"})
    }
    user = await User.findOne({accessToken: token})
    const role = user.role
    if(role !== 'admin'){
      return res
      .status(401).send({
        data: false,
        message: "You do not have access to this route"
      })
    }
    next();
  } catch(error){
    next(error)
  }

}

exports.grantTutorAccess = async (req, res, next) => {
  try{
    const token  = req.body.token
    if (!token || token == undefined) {
      return res
      .status(404).send({status: false, message: "A valid token is required to access this route"})
    }
    user = await User.findOne({accessToken: token})
    const role = user.role
    if(role !== 'tutor'){
      return res
      .status(401).send({
        data: false,
        message: "You do not have access to this route"
      })
    }
    next();
  } catch(error){
    next(error)
  }

}

exports.grantUserAccess = async (req, res, next) => {
  try{
    const token  = req.body.token
    if (!token || token == undefined) {
      return res
      .status(404).send({status: false, message: "A valid token is required to access this route"})
    }
    user = await User.findOne({accessToken: token})
    const role = user.role
    if(!role){
      return res
      .status(401).send({
        data: false,
        message: "You do not have access to this route"
      })
    }
    next();
  } catch(error){
    next(error)
  }

}