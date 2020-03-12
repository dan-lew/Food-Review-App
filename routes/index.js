const express = require("express");
const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");
const passport = require("passport");
// Welcome page

router.get("/",  (req, res) => {
  res.render("welcome");
});


// Dashboard page
router.get(
  "/dashboard",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/users/login",
    failureFlash: true
  }),
  (req, res) => {
    res.render("dashboard", {
      name: req.user.name
    });
  }
);

module.exports = router;
