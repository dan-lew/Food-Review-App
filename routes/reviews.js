const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Review = require("../models/Review");

router.get("/", auth, async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id }).sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("restaurantName", " Restuarant name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      restaurantName,
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
        restaurantName,
        category,
        nameOfDish,
        dateOfVisit,
        price,
        photo,
        rating,
        comment,
        user: req.user.id
      });

      const review = await newReview.save();
      res.json(review);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/contacts
// @desc    Update contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const {
    restaurantName,
    category,
    nameOfDish,
    dateOfVisit,
    price,
    photo,
    rating,
    comment
  } = req.body;

  // Build review Object
  const reviewFields = {};
  if (restaurantName) reviewFields.restaurantName = restaurantName;
  if (category) reviewFields.category = category;
  if (nameOfDish) reviewFields.nameOfDish = nameOfDish;
  if (dateOfVisit) reviewFields.dateOfVisit = dateOfVisit;
  if (price) reviewFields.price = price;
  if (photo) reviewFields.photo = photo;
  if (rating) reviewFields.rating = rating;
  if (comment) reviewFields.comment = comment;

  try {
    let review = await Review.findById(req.params.id);
    if (!review) res.status(404).json({ msg: "Review not found" });

    // Make sure user owns the review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: " Not authorized" });
    }
    review = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: reviewFields },
      { new: true }
    );
    res.send(review);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});


router.delete("/:id", auth, async (req, res) => {
  try {
    let review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ msg: "Review not found" });

    // Make sure user own review
    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Review.findByIdAndRemove(req.params.id);
    res.json({ msg: "Reveiw removed" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
