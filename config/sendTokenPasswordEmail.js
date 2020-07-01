const nodemailer=require('nodemailer');
const sendEmail=async (options)=>{
    let transporter=nodemailer.createTransport({
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
      //console.log(options)
    let mailOptions={
        from:'"FBW web developer"<info@dci.com>',
        to:options.email,
        subject:options.subject,
        text:options.message,
        html : `click <a href = "${options.resetUrl}">  here</a>  to reset your password`
    }
    //send the email
    await transporter.sendMail(mailOptions)
}

module.exports=sendEmail;