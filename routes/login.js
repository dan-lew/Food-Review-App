const express = require('express');
const router = express.Router();
const User = require('../models/User')
const auth=require('../middleware/auth')
const { body, check , validationResult} = require('express-validator');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt')



router.get('/',auth , async (req ,res) => {
    try{
        const user=await User.findById(req.user.id).select('-password');
        if(!user){
            return res.status(500).send('No User');
        }
        res.json(user);
    }catch(error){
        res.status(500).send('Server Error');
    }
})


// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post('/',[
    check('email', 'Please enter a valid email').isEmail(),
    check('password','Password is required').exists()
]   , async (req ,res) => {
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
        console.log('error-message : ',error.message);
        res.status(500).send('Server Error')
    }
 })

<<<<<<< HEAD
module.exports = router
=======
module.exports = router
>>>>>>> testing1
