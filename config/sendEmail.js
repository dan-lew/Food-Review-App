const nodemailer = require("nodemailer");
const sendEmail = opt => {
  let transporter = nodemailer.createTransport({
    host: "mail.hamburg-coders.pro",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  transporter.sendMail(opt, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
};
module.exports = sendEmail;
