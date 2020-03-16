const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { body, check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const mailer = require('../config/sendEmail');
const crypto=require('crypto');
const sendEmail=require('../config/sendEmail');
const User = require("../models/User");
const auth=require('../middleware/auth');

router.get('/',auth,async (req,res)=>{
  try{
      const user=await User.findOne({_id:req.user.id});
      res.json(user);
      console.log(user);
  }catch(error){
      console.log(error.message);
      res.status(500).send('Server Error');
  }
});

router.post('/' , auth, async(req ,res) => {
  let { firstname,lastname, username , email , dateOfBirth,city,password} = req.body;
  // Build contact Object
  const userFields = {};
  if(firstname) userFields.firsname = firstname;
  if(lastname) userFields.lastname = lastname;
  if(username) userFields.username = username;
  if(email) userFields.email = email;
  if(dateOfBirth) userFields.dateOfBirth = dateOfBirth;
  if(city) userFields.city = city;
  if(password) userFields.password = password;

  try{
    let user=await User.findOne({email});
    if(!user){
        return res.status(400).json({msg:"no user exist"})
    }
    
    const salt=await bcrypt.genSalt(10);
    password=await bcrypt.hash(password,salt);

    let updatedUser = await User.findOneAndUpdate({_id:user._id},{
        firstname,
        lastname,
        username,
        email,
        dateOfBirth,
        city,
        password
    },{ new: true});
    console.log(updatedUser)
    const payload={
            user:{
                id: updatedUser.id
            }
        }
    jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:3600
    },(err,token)=>{
        if (err)throw err;
        res.json({token})
    });
  }
  catch(error){
      console.log(error);
      res.status(500).send('Server Error')
  }
});

module.exports = router
