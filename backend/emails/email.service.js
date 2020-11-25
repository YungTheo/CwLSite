const config = require('../config.json');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


module.exports = {
    sendMail
};

async function sendMail({ email }) {

    transporter = nodemailer.createTransport(SMTP(
        {
        host: "94.130.150.189",
        port: 25,
        auth:
        {
        user: root,
        pass: 'sommer123',
        },
        } ));

      var mailOptions = {
        from: email.email,
        to: 'il.lidan@live.de',
        subject: email.name,
        text: email.text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
