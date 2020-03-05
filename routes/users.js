const express=require ('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const passport=require('passport');
const {body, check, validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');
const router=express.Router();
const crypto=require('crypto');

const User=require('../models/User');

// router.get("/login-page", (req,res)=>{
//     res.render('login');
// });

router.post("/",[
    check('firstName','firstName is required').not().isEmpty(),
    check('lastName','lastName is required').not().isEmpty(),
    check('username','username is required').not().isEmpty(),
    check('email','Please enter a valid email').isEmpty(),
    
]);



// router.get("/",(req,res)=>{
//     res.json("Hello");
// })

// router.get("/edit-profile",(req,res)=>{
//     res.render('editProfile');
// })

module.exports=router;