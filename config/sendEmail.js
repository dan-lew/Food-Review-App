const nodemailer = require("nodemailer");

const sendEmail = async options => {
  let transporter = nodemailer.createTransport({
    host: "smtp.hamburg-coders.pro",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });
  const output = `
    <p>You have a new message!...</p>
    <ul>
    <li>Name : ${options.name}</li>

    <li>Email : ${options.email}</li>

    </ul>
    <h2>Message</h2>
    <p>${options.message}</p>
  `;

  let mailOptions = {
    from: '"Food Review App" <info@foodreviewapp.pro>', // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: options.message, // plain text body
    html: output
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
