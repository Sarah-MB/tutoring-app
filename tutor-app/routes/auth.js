const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/auth');


router.post('/api/v1/signup', signUp);
router.post('/api/v1/login', login);

router.use('/', (req,res)=>{res.json('welcome')});


module.exports = router;