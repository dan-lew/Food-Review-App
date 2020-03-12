const express = require('express');
const { body, check , validationResult} = require('express-validator');
const router = express.Router();
const passport = require("passport");
const bcrypt=require('bcryptjs');
const auth=require('../middleware/auth')
const jwt=require('jsonwebtoken')
const mailer = require('../config/sendEmail');
// const sendEmail=require('../config/sendEmail');
const crypto=require('crypto');
const User = require("../models/User");



// @route   Get api/auth
// @desc    Get logged in user
// @access  Private
router.get('/',auth,async (req ,res) => {
    try{
        const user=await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(500).send('No User');
        }
        res.json(user);
    }catch(error){
        res.status(500).send('Server Error');
    }
    
});
// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public

router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('password','Password is required').exists()
], async (req ,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }
    // check email and password
    const { email , password } = req.body;
    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ msg : 'Invalid Credentials '  });
        }
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({ msg : 'Invalid Credentials '  });
        }
        // generete token
        const payload = {
            user : {
                id:user.id
            }
        }
        jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:3600
        },(err , token)=> {
            if(err) throw err;
            res.json({ token })
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
});


// // login Handle
// router.post("/", (req, res, next) => {
//     passport.authenticate("local", {
//       successRedirect: "/users/callback",
//       failureRedirect: "/users/login",
//       failureFlash: true
//     })(req, res, next);
//   });
  
//   router.get("/callback", (req, res, next) => {
//     let token = jwt.sign({ id: req.user.email }, process.env.JWT_SECRET);
//     console.log("token:", token);
//     res
//       .status(200)
//       .cookie("jwt", token, { httpOnly: true })
//       .redirect("/dashboard");
//   });
  

// // logout Handle
// router.get("/logout", (req, res) => {
//     req.logout();
//     req.flash("success_msg", "You are logged out ");
//     res.clearCookie('jwt').redirect('/users/login');
// });
  


// //facebook
// router.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}))
// router.get('/auth/facebook/callback', 
//   passport.authenticate('facebook',{
//     successRedirect:'/users/callback',
//     failureredirect:'/users/register',
//     failureFlash:true
//   })
// )



// //Github
// router.get('/auth/github', passport.authenticate('github',{scope:'email'}))
// router.get('/auth/github/callback', 
//   passport.authenticate('github',{
//     failureRedirect:'/users/register'}),
//     function(req, res) {
//       // Successful authentication, redirect home.
//       res.redirect('/users/callback');
//   }
// )



module.exports = router
