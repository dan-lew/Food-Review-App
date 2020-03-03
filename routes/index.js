const express = require("express");
const router = express.Router();
//const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

//router.get("/", forwardAuthenticated, (req, res) => {
router.get("/", (req, res) => {
  res.render("welcome");
});

//router.get("/dashboard", ensureAuthenticated, (req, res) => {
  router.get("/dashboard", (req, res) => {

  res.render("dashboard", {
    name: req.user.name
  });
});

module.exports = router;
