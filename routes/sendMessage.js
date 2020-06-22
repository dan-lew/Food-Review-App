const sendEmail = require("../config/sendEmail");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

router.post("/", async (req, res, next) => {
  const sendMsg = req.body;
  const { email, name, message } = req.body;

  console.log(sendMsg);
  try {
    await sendEmail({
      from: " Contact Us Message <food-review@hamburg-coders.pro>  ",
      to: "dan.lewis1803@gmail.com",
      subject: "You have a new message from the App",
      html: ` <h1> Dear admin the user : ${name} sent the message and his email is : ${email} </h1>
      <h2> ${message}  </h2>   `
    });
    res.status(200).json({
      status: "Success",
      message: "Your email has been sent to us"
    });
  } catch(error) {
    console.log(error);
     
  }
});

module.exports = router;
