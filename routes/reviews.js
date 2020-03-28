const mongoose = require("mongoose");
let Combine=new mongoose.Schema();

const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");
const { check, validationResult } = require("express-validator");
const Review = require("../models/Review.js");
const Restaurant = require("../models/Restaurants");

const auth = require("../middleware/auth");

// get user reviews 
router.get("/userReviews", auth, async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id });
    return res.json(reviews);
     
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});



router.post("/foodImgUpload", (req, res) => {
  console.log(req.body)
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.file;
  file.name = uuid() + file.name;
  file.mv(`${__dirname}/../client/public/foodImgUploads/${file.name}`, err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/foodImgUploads/${file.name}` });
  });
});

router.post(  "/review",
  [
      check("restaurantName", "Restaurant Name is empty")
        .trim()
        .not()
        .isEmpty(),
        check("city", "Restaurant location is empty")
        .trim()
        .not()
        .isEmpty(),
      check("category", "Type of cuisine is empty")
        .trim()
        .not()
        .isEmpty(),
      check("nameOfDish", "Type of dish is empty")
        .trim()
        .not()
        .isEmpty(),

      check("price", "Please enter a price")
        .trim()
        .isCurrency()
        .not()
        .isEmpty(),  
      check("comment", "Your review is too short")
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
    
  ],auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      userId,
      restaurantId,
      restaurantName,
      city,
      category,
      nameOfDish,
      dateOfVisit,
      price,
      photo,
      rating,
      comment,

    } = req.body;
    try {
      const newReview = new Review({
        userId,
        restaurantId,
        restaurantName,
        city,
        category,
        nameOfDish,
        dateOfVisit,
        price,
        photo, 
        rating,
        comment
       
      });

      const review = await newReview.save();
      console.log("Your review has been saved!", review);
     res.redirect("../reviews/review");
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router






// {
	
// 	"userId":"5e79e7b8462d9c376031b39a",
// 	"restaurantId":"5e7073e5fe0c0218cf6eda79",
// 	"restaurantName":"Sepideh Hamburg",
// 	"city":"Hamburg",
// 	"category":"Iranian",
// 	"nameOfDish":"Kebab",
// 	"price":"22",
// 	"photo":"/foodImgUploads/1adcbd3d-44cd-4315-87d4-fa5da16073dfkebab.jpeg",
// 	"rating":"2",
// 	"comment":"It was very delicious food"
	
// }