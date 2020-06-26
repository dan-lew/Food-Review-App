const { uuid } = require("uuidv4");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { body, check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const mailer = require("../config/sendEmail");
const crypto = require("crypto");
const sendEmail = require("../config/sendEmail");
const User = require("../models/User");
const auth = require("../middleware/auth");
const Reviews  = require('../models/Review')

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    res.json(user);
    console.log(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/user", auth, async(req, res) => {
//   console.log(req.body);
  try {
    const file = req.files.file;
    file.name = uuid() + file.name;
    file.mv(`${__dirname}/../client/public/userImgUpload/${file.name}`,async err => {
     
      const photo = `/userImgUpload/${file.name}`;
      const user = await User.findByIdAndUpdate(
         req.user.id , { $set :  { photo }    },
        { new: true }
      );
      console.log("the updated user photo =", photo);
      res.json({ fileName: file.name, filePath: `/userImgUpload/${file.name}` });
    });
      
  } catch (error) {
    if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
      }
  }
});

router.post("/", auth, async (req, res) => {
  let {
    firstname,
    lastname,
    username,
    email,
    dateOfBirth,
    city,
    password
  } = req.body;
  // Build contact Object
  const userFields = {};
  if (firstname) userFields.firsname = firstname;
  if (lastname) userFields.lastname = lastname;
  if (username) userFields.username = username;
  if (email) userFields.email = email;
  if (dateOfBirth) userFields.dateOfBirth = dateOfBirth;
  if (city) userFields.city = city;
  if (password) userFields.password = password;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "no user exist" });
    }

    if (password){
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    }
    let updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      {
        firstname,
        lastname,
        username,
        email,
        dateOfBirth,
        city,
        password
      },
      { new: true }
    );
    console.log(updatedUser);
    const payload = {
      user: {
        id: updatedUser.id
      }
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      },
      (err, token) => {
        if (err) throw err;
        res.json({ user: updatedUser, token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
