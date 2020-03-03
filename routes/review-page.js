const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// import Rating model
const Rating = require("../models/Review.js");

// Review Page
router.get("/review-page", (req, res) => {
  res.render("review-page");
});

router.post(
  "/review-page",
  [
    check("restaurantName")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Restaurant Name is empty"),
    check("category")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Type of cuisine is empty"),
    check("nameOfDish")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Type of dish is empty"),
    check("dateOfVisit")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Please select a date"),
    check("price")
      .trim()
      .isCurrency()
      .not()
      .isEmpty()
      .withMessage("Please enter a price"),
    check("photo")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Photo"),
    check("rating")
      .trim()
      .isNumeric()
      .not()
      .isEmpty()
      .withMessage("Please select a rating"),
    check("comment")
      .trim()
      .not()
      .isLength({ min: 10 })
      .withMessage("Your review is too short")
  ],
  (req, res) => {
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
    console.log(req.body);
    // if there are errors
    const check_errors = validationResult(req);
    let errors = [];
    if (!check_errors.isEmpty()) {
      // return res.status(422).json({ errors: errors() });
      console.log(check_errors.array());
      // errors.push(check_errors.array());
      check_errors.array().forEach(item => {
        errors.push(item);
      });
      console.log("errors :", errors);
      if (errors.length > 0) {
        res.render("review-page", {
          errors,
          restaurantName,
          category,
          nameOfDish,
          dateOfVisit,
          price,
          photo,
          rating,
          comment
        });
      }
    }
    const newReview = new Rating({
      restaurantName,
      category,
      nameOfDish,
      dateOfVisit,
      price,
      photo,
      rating,
      comment
    });
    newReview
      .save() //saved review in database
      .then(review => {
        req.flash("success_msg", "Your review has been saved!");
        res.redirect("/review-page");
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(" Server Error");
      });
  }
);

// // Login Handle
// router.post("/review-page", (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/users/login",
//     failureFlash: true
//   })(req, res, next);
// });

// // Login with facebook
// router.get("/auth/facebook", passport.authenticate("facebook"));
// router.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook"),
//   (req, res) => {
//     res.redirect("/dashboard");
//   }
// );

// // Logout Handle
// router.get("/logout", (req, res) => {
//   req.logout();
//   req.flash("success_msg", "You are safely logged out");
//   res.redirect("/users/login");
// });

module.exports = router;
