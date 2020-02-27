const sendEmail = require("../config/sendEmail");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require('path')
router.get("/", (req, res) => {
  res.render("sendMessagePage", { layout: false });
});


// static folder
router.use("/public", express.static(path.join(__dirname, "public")));

// body-parser application - will allow me to send data to myself
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// recieve the form data
router.post("/send", (req, res) => {
  console.log(req.body);
});

router.post("/", async (req, res , next) => {
  const sendMsg = req.body;
  console.log(sendMsg);
  
  try {
    await sendEmail({
      email: sendMsg.email,
      name: sendMsg.name,
      subject: " Thanks for sending us a message",
      message : sendMsg.message
    });
    res.status(200).json({
      status: "Success",
      message: "Your email has been sent to us"
    });
  } catch {
    return next(
      new Error(" there was an error by sending the email try again later !")
    );
  }
});

module.exports = router;
