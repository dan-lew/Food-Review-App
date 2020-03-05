const express=require ('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const passport=require('passport');
const {check, validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');
const router=express.Router();
const User=require('../models/User');

// router.get("/login-page", (req,res)=>{
//     res.render('login');
// });

router.post("/",[
    check('firstName','firstName is required').not().isEmpty(),
    check('lastName','lastName is required').not().isEmpty(),
    check('username','username is required').not().isEmpty(),
    check('email','Please enter a valid email').isEmpty(),
    check('dateOfBirth','username is required').not().isEmpty(),
    check('date','date is required').not().isEmpty(),
    check('city ','city is required').not().isEmpty(),
    check('password','Please enter your password with 6 or more characters').isLength({min:6})
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
}
const {firstName,lastName,username,email,dateOfBirth,date,city,password}=req.body;
try{
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({msg:"User already exist"})
    }
    user=new User({
        firstName,
        lastName,
        username,
        email,
        dateOfBirth,
        date,
        city,
        password
    });
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);
    await user.save();
    const payload={
        user:{
            id: user.id
        }
    }
    jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:3600
    },(err,token)=>{
        if (err)throw err;
        res.json({token})
    });
}catch(error){
    console.log(error);
    res.status(500).send('Server Error')
}

});



// router.get("/",(req,res)=>{
//     res.json("Hello");
// })

// router.get("/edit-profile",(req,res)=>{
//     res.render('editProfile');
// })

module.exports=router;