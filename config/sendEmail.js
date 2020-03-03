const nodemailer = require("nodemailer");

const sendEmail = async options => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS
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
