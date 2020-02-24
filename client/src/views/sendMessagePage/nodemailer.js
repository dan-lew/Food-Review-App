const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

app.get("/", (req, res) => {
  //   res.send("<h1> THIS IS THE CONTACT FORM PAGE </h1>");
  res.render("contact", { layout: false });
});    

// static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// body-parser application - will allow me to send data to myself
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view engine setup - (/index.handlbars)
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// recieve the form data
app.post("/send", (req, res) => {
  console.log(req.body);
  //   res.send("<h1>The data has been sent</h1>");

  const output = `
<p>You have new contact Email</p>
<ul>
<li>Name : ${req.body.name}</li>
<li>Company : ${req.body.company}</li>
<li>Email : ${req.body.email}</li>
<li>Phone : ${req.body.phone}</li>
</ul>
<h2>Message</h2>
<p>${req.body.message}</p>
`;
//   res.send(output);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.hamburg-coders.pro",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "dci@hamburg-coders.pro", // generated ethereal user
      pass: "abcdef1234" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // set up email with unicode symbol
  let mailOptions = {
    from: '"Your favorite student in DCI 👻" <no1StudentDCI@hamburg-coders.pro>', // sender address
    to: "mansour.tumeh1803@gmail.com", // list of receivers
    subject: "DCI Contact Email✔", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render("contact", { msg: "Email has been sent", layout: false });
  });
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
