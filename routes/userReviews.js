const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");
const { check, validationResult } = require("express-validator");
const UserReviews = require("../models/UserReviews.js");
const auth = require("../middleware/auth");
const User = require("../models/User");



router.get("/userReviews", auth, async (req, res) => {
  // async (req,res)=>{
  //   const {
  //     user,
  //     restaurant,
  //     comment,
  //     rating,
  //     date,
  //     totalSpent,
  //     photo
  //   } = userReview

    
    try {
      const review = await UserReviews.find({ user: req.user.id }).sort({
        date: -1
      });
      res.json(review);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
    res.send("this is user-profile page");
  
});


router.post("/user", (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }
    const file = req.files.file;
    file.name = uuid() + file.name;
    file.mv(`${__dirname}/../client/public/userImgUpload/${file.name}`, err => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.json({ fileName: file.name, filePath: `/userImgUpload/${file.name}` });
    });
  });

 module.exports = router