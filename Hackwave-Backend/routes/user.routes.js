const express = require("express");
const router = express.Router();
const path = require('path');
const User = require('../models/users.model');
const {registerUser} = require('../controllers/User.controllers/register.user');
const {loginUser} = require('../controllers/User.controllers/login.user');
const {authmiddleware} = require('../middlewares/auth.middleware');
const {logOut} = require('../controllers/User.controllers/logout.user')
const {reportIssue} =  require('../controllers/User.controllers/reportIssue');
const {storingApiData}= require('../controllers/User.controllers/storingApiData');
// Routes for registration of User
router.get('/register',(req,res)=>{
    res.render('signup');
})
router.post('/register',registerUser);

// Routes for login of User
router.get('/login',(req,res)=>{
    res.render('citizen/citizen-login');
});
router.post('/login',loginUser);
router.get('/dashboard',(req,res)=>{
    res.render('citizen/citizen-portal');
});
router.post('/classify',storingApiData);
//router.post('/report-issue/:type', reportIssue);


// Home Route
module.exports = router;