let nodemailer = require('nodemailer');
require('dotenv').config();
let environment = process.env;

module.exports.GmailTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.google.com",
    //secure:environment.GMAIL_SERVICE_SECURE,
    port: 587,
    auth: {
        user: "juwavictor@gmail.com",
        pass: "saladin123!@#9999320392dsdjseuw823829"
    }
});

module.exports.SMTPTransport = nodemailer.createTransport({
  host: "mail.xxxx.com",
  port: 587,
  secure: false,
  // upgrade later with STARTTLS
  debug: true,
  auth: {
     user: "tester@xxxx.com",                                                                                             
     pass: "Tester@123",
  },
   tls: {

    rejectUnauthorized: false,
  }
});

module.exports.ViewOption = (transport, hbs) => {
    transport.use('compile', hbs({
            viewPath: 'views/email',
            extName: '.hbs'
    }));
}
