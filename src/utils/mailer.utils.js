import nodemailer from 'nodemailer';
import debug from 'debug';
import handlebars from 'handlebars';



const {
  APP_NAME,APP_DOMAIN, APP_ADDRESS,
  APP_EMAIL, TEMP_DIR, BACKEND_API
} = process.env;
const MAIL_OPTION = {
  from:   ' "${APP_NAME}" <noreply@${APP_DOMAIN}>',
  to:  "Unknown",
  subject: "${APP_NAME} Mail",
  html: '<h1>Default Message</h1>',
  context: {
    name:"${APP_NAME}",
    email:  "${APP_EMAIL}",
    address: "${APP_ADDRESS}"
  }
};
/**
 *@description - A function for sending mail
 *
 * @param {Object} mailData Mail Details
 *
 * @returns {void} void
 */
const mailer = async (mailData) => {
  const {
    to, subject, text, html,
  } = mailData;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"Banka App " <tejumoladavid@gmail.com>',
      to,
      subject,
      text,
      html,
    });

    debug('development')('Message sent: %s', info.messageId);
    debug('development')('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (err) {
    debug('development')(err);
  }
};


export const  passwordResetsMail = async function(userEmail,templateDir, replacementObj={username:'saladin'}, tokenSTR){

  readHTMLFile(__dirname + templateDir, function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
      username: replacementObj.username ,//'juwavictor@gmail.com'
      link: BACKEND_API + '/auth/resetMyPassword\/' + tokenSTR
    };
    var htmlToSend = template(replacements);

    MAIL_OPTION.html = htmlToSend;
    MAIL_OPTION.to = userEmail;
    smtpTransport.sendMail(MAIL_OPTION, (error,info) => {
     if(error) {
       return false
     }
     return true
    });
  });

 }



export const newUserMail = async function(
    user, file='signup-verification.html',
    tokenToSend, status=201
  ){

    const file_path = __dirname + TEMP_DIR + file;

    readHTMLFile(file_path, function(err, html) {
        const template = handlebars.compile(html);
        const replacements = {
            username: result.username,
            link:  BACKEND_API +'/auth/confirmation/' + tokenToSend,
        };
        const htmlToSend = template(replacements);
          MAIL_OPTION.to = user.email;

        MAIL_OPTION.html = htmlToSend;
        smtpTransport.sendMail(MAIL_OPTION, (error,info) => {
          if(error) {
              console.log(error);
              return false;

          }
          console.log("email is send");
          console.log(info);
          return true
                        //res.json(info
        });
    })
  }

export default mailer;
