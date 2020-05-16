const express = require('express');
const router = express.Router();
const { signUp, logIn } = require('../controllers/auth');


router.post('/api/v1/signup', signUp);
router.post('/api/v1/login', logIn);


module.exports = router;