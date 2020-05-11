const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); 
const User = require('./../models/userModel');

exports.login = (req, res, next) => {
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
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    role: user.role,
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

// exports.signUp = (req, res, next) => {

//     const email = req.body.email;
    
//     const password = req.body.password;
    
//     if (!email || !password) {
    
//     res.status(400).json({
//     status: false,
//     message: "All fields are required"
    
//     });
    
//     return;
//     }
    
//     User.findOne({ email: req.body.email})
//     .then(user => {
//     if (user) {
//     return res.status(423)
//     .json({ status: false, message: "This email already exists" });
    
//     }
    
//     });
    
//     bcrypt
//     .hash(password, 8)
//     .then(password => {
//     let user = new User({
//     email,
//     password
//     });
//     return user.save();
//     })
//     .then(() => res.status(200).json({
//     status: true,
//     message: "User registered successfully"
//     }))
    
//     .catch(err => console.log(err));
//     res.json({message: "Welcome to my platform",
//            email: email,
//         });
    
//     };
exports.signup = async (req, res, next) => {
    try{
        const userExists = await User.findOne({email: req.body.email});
        if (userExists){
            return res.status(403).json({
                status: 'fail',
                error: 'Email already exists'
            })
        }
        console.log(process.env);
    const user = await User.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
    });
    const token = signToken(user._id, user.role)
    res.status(201).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
} catch(err){
    console.error(err);
};

}

exports.logout = (req, res) =>{
        res.clearCookie('jwt');
        res.status(200).json({
            message: 'Log out successfully'
        });
    };
