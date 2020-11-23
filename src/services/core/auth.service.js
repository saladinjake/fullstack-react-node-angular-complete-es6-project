import TokenGenerator from '../../utils/tokengen.utils';
import mailer, { newUserMail, passwordResetsMail } from '../../utils/mailer.utils';
import Utils from '../../utils/common.utils';
import User from '../../models/mongo/core/user';
import SignUpToken from '../../models/mongo/core/signuptoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import Storage from '../../utils/storage.utils';




/** Class that allows user create and login  */
class AuthService {
  /**
   * @description Create a new user
   * @param {object} a new user object
   */
  static async createUser(user) {
    try{
      const newCustomerInstance = new User({...user});
      const createdUser = await newCustomerInstance.save();
      if(createdUser){
        let randomToken = crypto.randomBytes(16).toString('hex'); // make this unique add uuid
        // Create a verification token for this user
        const emailtoken = new SignUpToken({ _userId: user._id, email_confirm_token: randomToken  });
        const emailTokenSaved  = await emailtoken.save();
        if(emailTokenSaved){
          //send the user a mail to click the link to verify the user
          const emailSent =  await newUserMail(createdUser, 'newuser.html',emailtoken)
          if(emailSent){
            const {
              _id, is_admin, firstname, lastname, email,
            } = createdUser;
            const payload = {_id,firstname,lastname,is_admin: is_admin};
            const token = TokenGenerator.generateToken(payload);
            return {
              token,id,firstName: firstname,lastName: lastname,email,
              isAdmin: isadmin,type,error: false
            };
          }else{
            return {message: 'Network connection error. Mail could not be sent',error: true}
          }

        }else{
          return { message: 'Invalid form data', error: true}
        }
      }else{
        return {message: 'Request Denied',error: true}
      }

    }catch(err){
      throw err;
    }
  }

  /**
   * @description signs user into their account
   * @param {object} a new user object
   */

  static async login(request, response) {
    const {BACKEND_API} = process.env;

    const { email, password } = request.body;
     const user = await User.findOne({email: email})

     if (!user) {
       return response.status(422).json({
         status: 422,
         error: 'User does not exists',
       });
     }

     if(!user.isVerified){
       return response.status(422).json({
         status: 422,
         error: `<h6>Email verification step is needed. please check your email for a verification link or click the link to resend you an email verification</h6>

         <a href="${BACKEND_API}/auth/resend/${email}">Resend </a>`,
       });
     }

     if (!TokenGenerator.checkIfPasswordMatch(password, user.password)) {
      return response.status(422).json({
        status: 422,
        error: 'Invalid login details. Email or password is wrong',
      });
    }


       //request.session.user = user;
     const result = {
         _id: user._id,email: user.email,isAdmin: user.is_admin,isVerified:user.isVerified,
         firstname: user.firstname,lastname: user.lastname,username: user.username, //balance: user.balance,
         notification_count: user.notification_count,user_type: user.user_type,username:user.username,
         phoneNumber: user.phone_number,roles: user.roles

    };
    const token = TokenGenerator.generateToken(result);
       //if request host is from user and user role is user or admin allow
      //  if(request.headers.host=="demouserapp.commute.ng" && user.roles!="Individual Driver"){
     return response.status(200).json({
         status: 200,
         data: [
           {
             token,
             user: {
               deactivated: false,
                _id: user._id,email: user.email,isAdmin: user.is_admin,
               isVerified:user.isVerified,firstname: user.firstname,username: user.username,
               profile: user.avatar,balance: user.balance,phoneNumber: user.phone_number,roles: user.roles,
            },
           },
         ],
         message: 'Successfully signed in',
       });
  }

  /**
   * @description Create a new staff
   * @param {object} a new user object
   */
  static async createAStaff(user) {
      user.is_admin = true;
      return AuthService.createUser(user)
  }



  static logOut(request,response){
    request.user = null;
    return response.status(200).json({
        status: 200,
        data: [
          {
            token,
            user: {
              deactivated: true
           },
          },
        ],
        message: 'Successfully signed in',
      });
  }
  static async confirmationPost(request,response){
    // Find a matching token
    const confirmToken = await SignUpToken.findOne({ email_confirm_token:  req.params.id })
    if (!confirmToken) return response.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
        // If we found a token, find a matching user email: req.body.email
    const user =    User.findOne({ _id: confirmToken._userId  })
    if (!user) {
      return  response.sendFile(path.join(__dirname + '/templates/404.html'));
    }
    if (user.isVerified) {
      return  response.sendFile(path.join(__dirname + '/templates/alreadyverified.html'));
    }
    // Verify and save the user
    let userUpdated  = await User.updateOne({_id:user._id },{isVerified: true},);
    if (!userUpdated) { return response.status(500).send({ msg: 'Update for this user not successful' }); }
    return  res.sendFile(path.join(__dirname + '/templates/congratulation.html'));

  }

  static async resendTokenPost(request,response){
    const user = UserModel.findOne({ email: req.params.id })
    if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
    if (user.isVerified) return  res.sendFile(path.join(__dirname + '/templates/alreadyverified.html'));
        // Create a verification token, save it, and send email
    var tokenR = new EmailTokenMakerForSignUp({ _userId: user.id, email_confirm_token: crypto.randomBytes(16).toString('hex') });
        // Save the token
    const savedToken = await tokenR.save();
    if (err) { return res.status(500).send({ msg: err.message }); }
    const result = {
      id:user.id,
      username: user.username,
      firstname: user.firstname,
      email: user.email
    };

    const emailSent = await newUserMail(result,'newuser.html', tokenR.email_confirm_token, 200)
    const tokenN = TokenGenerator.generateToken(result);
    return res.status(200).json({
      status: 200,
      data: [
          {
            tokenN,
            result,
          }
        ],
      message: 'User created successfully',
    });
  }
  static async passwordForgot(request,response){
    let email = req.body.email;
    let user = await  User.findOne({ email: email })
    if (!user) return res.status(400).send({ msg: 'We were unable to find a user with that email.' });
    let hashedStringToSend = crypto.randomBytes(16).toString('hex');
    Storage.setItem('hasher'+ user._id, hashedStringToSend);
    Storage.setItem('-'+ user._id, user._id);
            // Create a verification token for this user
    var ForgotModelToken = new ForgotPasswordToken({
        _userId: user.id,
        email_confirm_token: hashedStringToSend,
        email_to_reset: email
    });
            // Save the verification token
    const forgotToken  = await ForgotModelToken.save();
    if (!forgotToken ) {
        return res.status(500).send({ msg: err.message });
    }
    const mailSent = await passwordResetsMail( user.email,'resetpassword.html', {username:user.username}, hashedStringToSend)
    // return res.status(200).send({ msg: "successfully sent you a password reset link", status:'ok' });
  }

  static confirmResetPassword(request,response){
    return  response.sendFile(path.join(__dirname + '/templates/pwreset.html'));
  }

  static  async changePasswordTrigger(request,response){
    let password = request.body.password;
    let confirmPass = request.body.confirmPassword;
    let uid =  Storage.getItem('-'+ request.body.id);
    if(password!= confirmPass){
       return res.status(400).send({ msg: 'password do not match.' });
    }
    const passwordToken = await ForgotPasswordToken.findOne({  email_confirm_token:  Storage.getItem('hasher'+uid) });
    if (!token) {
      return res.status(400).send({ type: 'not-verified', msg: 'We were unable to find a valid token. Your token my have expired.' });
    }
        // If we found a token, find a matching user email: req.body.email
    const user = await UserModel.findOne({ email: token.email_to_reset  })
    if (!user) return res.status(400).send({ msg: 'We were unable to find a user for this token.' });
    if (user.email != token.email_to_reset) return res.status(400).send({ type: 'No Reset Token', msg: 'This user reset token was not set.' });

            // Verify and save the user
    password = TokenGenerator.hashPassword(password.trim());
    const usr = await UserModel.updateOne({_id: user._id},{password: password})
    if (!usr) { return res.status(500).send({ msg: err.message }); }
    return res.status(200).send({ msg:"The account password has been reset. Please wait..." , status:'ok'});

  }
}

export default AuthService;
