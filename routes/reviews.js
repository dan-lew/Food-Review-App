const express = require("express");
const router = express.Router();
const { uuid } = require("uuidv4");
const { check, validationResult } = require("express-validator");
const Review = require("../models/Review.js");
const auth = require("../middleware/auth");

// Review Page
router.get("/review", auth, async (req, res) => {
  try {
    const reviews = await Review.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(reviews);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
  res.send("this is review-page");
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
    
  ],
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

// router.put("/:id", async (req, res) => {
//   const {
//     restaurantName,
//     category,
//     nameOfDish,
//     dateOfVisit,
//     price,
//     photo,
//     rating,
//     comment
//   } = req.body;

//   // Build contact Object
//   const reviewFields = {};
//   if (restaurantName) reviewFields.restaurantName = restaurantName;
//   if (category) reviewFields.category = category;
//   if (nameOfDish) reviewFields.phone = nameOfDish;
//   if (dateOfVisit) reviewFields.dateOfVisit = dateOfVisit;
//   if (price) reviewFields.price = price;
//   if (photo) reviewFields.photo = photo;
//   if (rating) reviewFields.rating = rating;
//   if (comment) reviewFields.comment = comment;

//   try {
//     let review = await Review.findById(req.params.id);
//     if (!review) res.status(404).json({ msg: "Review not found" });

//     // // Make sure user owns the contact
//     // if (review.user.toString() !== req.user.id) {
//     //   return res.status(401).json({ msg: " Not authorized" });
//     // }
//     review = await Review.findByIdAndUpdate(
//       req.params.id,
//       { $set: reviewFields },
//       { new: true }
//     );
//     res.send(review);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Server Error");
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     let review = await Review.findById(req.params.id);
//     if (!review) return res.status(404).json({ msg: "Review not found" });

//     // Make sure user own contact
//     if (review.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "Not authorized" });
//     }
//     await Review.findByIdAndRemove(req.params.id);
//     res.json({ msg: "Review removed" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;
