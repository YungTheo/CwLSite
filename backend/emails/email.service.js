const config = require('../config.json');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


module.exports = {
    sendMail
};

async function sendMail({ email }) {

    transporter = nodemailer.createTransport(smtpTransport(
        { host: "smtp.cwlclan.tk",
        auth:
        { user: admin,
        pass: 'admin',
        },
        } ));
      
      var mailOptions = {
        from: email.sender,
        to: 'admin@cwlclan.tk',
        subject: email.topic,
        text: email.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

