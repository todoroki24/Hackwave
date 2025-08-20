const express = require("express");
const router = express.Router();
const path = require('path');
const User = require('../models/users.model');
const {registerUser} = require('../controllers/User.controllers/register.author');
const {loginUser} = require('../controllers/User.controllers/login.user');
const {authmiddleware} = require('../middlewares/auth.middleware');
const {logOut} = require('../controllers/User.controllers/logout.user')

// Routes for registration of User
router.get('/register',(req,res)=>{
    res.render('signup');
})
router.post('/register',registerUser);

// Routes for login of User
router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',loginUser);


// Home Route

module.exports = router;