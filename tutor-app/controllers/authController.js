const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 
const User = require('./../models/userModel');

exports.logIn = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // res.json({ status:true, data: email })
    User.findOne({ email })
    .then(user => {
    if (!user) {
    return res
    .status(404)
    .json("User not found, please provide valid credentials");
    }
    bcrypt.compare(password, user.password).then(valid => {
    if (!valid) {
    return res
    .status(403)
    .json(
    "Incorrect username or password, please review details and try again"
    );
    }
    const token = jwt.sign(
    { email: user.email, _id: user._id },
    "somesecretkey",
    { expiresIn: "1hr" }
    );
    res.status(200).json({
    _id: user._id,
    status: 'success',
        token,
        data: {
            user
        }
    });
    });
    })
    .catch(err => console.log(err));
    }

exports.signUp = (req, res, next) => {

    const email = req.body.email;
    
    const password = req.body.password;
    
    if (!email || !password) {
    
    res.status(400).send({
    
    status: false,
    
    message: "All fields are required"
    
    });
    
    return;
    }
    
    User.findOne({ email: req.body.email})
    .then(user => {
    if (user) {
    return res.status(423)
    .json({ status: false, message: "This email already exists" });
    
    }
    
    });
    
    bcrypt
    .hash(password, 12)
    .then(password => {
    let user = new User({
    email,
    password
    
    });
    return user.save();
    
    })
    
    .then(() => res.status(200).send({
    status: true,
    message: "User registered successfully"
    
    }))
    
    .catch(err => console.log(err));
    res.json({message: "Welcome to my platform",
           email: email,
        });
    
    };

exports.logout = (req, res) =>{
        res.clearCookie('jwt');
        res.status(200).json({
            message: 'Log out successfully'
        });
    };
