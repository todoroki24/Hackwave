const {authmiddleware} = require("../middlewares/auth.middleware");
const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/dashboard',authmiddleware,(req,res)=>{
    res.render('dashboard');
});

module.exports = router;
