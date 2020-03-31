const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");
const { check, validationResult } = require("express-validator");
const Review = require("../models/Review.js");
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
  console.log(req.body);
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

router.post(
  "/review",
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
    // .isLength({ min: 10 })
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      restaurantName,
      city,
      category,
      nameOfDish,
      dateOfVisit,
      price,
      photo,
      rating,
      comment
    } = req.body;
    try {
      const newReview = new Review({
        user: req.user.id,
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
      //res.redirect("../reviews/review");
      res.send("Review saved");
    } catch (error) {
      res.status(500).send("Server Error");
    }
  }
);
// Get reviews with date filter
router.post("/dateFilter", auth, async (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  try {
    const reviews = await Review.find({
      $and: [
        { user: req.user.id },
        { dateOfVisit: { $gte: startDate, $lte: endDate } }
      ]
    });
    return res.json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
