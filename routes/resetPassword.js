const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { body, check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const mailer = require('../config/sendEmail');
// const authController = require('../config/auth');//new
const crypto=require('crypto');
const sendEmail=require('../config/sendEmail');
// User model
const User = require("../models/User");

  
// reset Password
router.post('/forgot', async(req, res , next) => {

    // 1- get the user from the DB using the email
    const email = req.body.email;
    let errors = [];
    const user= await User.findOne({email:email});
    if(!user){
      errors.push({
        msg:"Email is not registered"
      });
      return res.status(500).send({
        errors,
        email
      })
    }
    //2- generate the random reset Token
    const resetToken=user.createPasswordResetToken();
    await user.save();
  
  
    //3- send the resetToken to the user's Email
    const resetUrl=`${req.protocol}://${req.get('host')}/users/resetPassword/${resetToken}`
    const message=`Forget your password ? click on the link and submit your new 
    password and password confirmation to ${resetUrl}\n\n 
    if you didn't forget your password please ignore this email`

    try{
        await sendEmail({
        email:user.email, // emaill 
        subject:'Your password reset Token(valid for 10 minutes)',
        message,
        resetUrl
    
        });
        res.status(200).json({
        status:'Success',
        message:'Token sent to your email'
        })
    }catch(error){
      console.log(error)
        user.passwordResetToken=undefined;
        user.passwordResetExpire=undefined;
        await user.save();
        return next(new Error('there was an error by sending the email try again later !'))
     }
  })
  
//reset password handle
router.get('/resetPassword/:token' ,async (req , res , next) => {

    // 1- get the user based on the token
    const hashedToken = crypto.createHash('sha256').update(req.params.token)
    .digest('hex')
    const user = await User.findOne({passwordResetToken : hashedToken 
    ,passwordResetExpire : {$gt : Date.now() }})
   if(!user){
       return next(new Error('Token is invalid or has expired' , 400))
   }
   //2- if the token has not expired and there is user , set new password
   // res.status(200).json({
   //     message : ' Your token is correct you can change your password'
   // })
   res.status(200).send({
       token : req.params.token
   });
     
    // 3- update passwordChangedAt for the user
    // 4 - log the user in  
  }) 



//reset Password POST
router.post('/resetPassword',[
    check('password').isLength({ min: 6 }).withMessage('password is to short'),
    body('password').custom((value, { req }) => {
        if (value !== req.body.password2) {
          throw new Error('Password confirmation does not match password');
        }         
        return true;
      }),  
  
  ],async (req,res , next)=>{
    const {  password, password2 , token } = req.body;
    const check_errors = validationResult(req);
    console.log(check_errors.array()); 
     // if there are errors ?     
    let errors = [];
    if (!check_errors.isEmpty()) {     

        console.log(check_errors.array());      
        check_errors.array().forEach((item)=> {
            errors.push(item);
        });
        if(errors.length > 0){
            return res.status(500).send({
                errors,             
                password,
                password2,             
                token
            })
        }
    }
    else{
        // no errors we can update the password
        const hashedToken = crypto.createHash('sha256').update(token)
        .digest('hex')
        const user = await User.findOne({passwordResetToken : hashedToken 
        ,passwordResetExpire : {$gt : Date.now() }})
        if(!user){
          return next(new Error('Token is invalid or has expired you made mistake' , 400))
        }
        try{
               // Hash Password
                bcrypt.genSalt(10 ,(err , salt) => {
                    bcrypt.hash(password ,salt ,async (err , hash) => {
                        if(err) throw err ;
                        // set hashed password
                        user.password = hash ;
                        user.passwordResetToken = undefined;
                        user.passwordResetExpire= undefined;
                        user.passwordChangedAt = Date.now();
                        await user.save();                    
                            res.send({'success_msg': 'your Password is changed and you can Login'})
                                             
                    })
                })
        }
        catch{
            return next(new Error(' there was an error by saving the new password'))
        }
    }
   })
module.exports=router;