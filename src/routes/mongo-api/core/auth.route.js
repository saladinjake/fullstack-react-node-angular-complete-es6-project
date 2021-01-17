import dotenv from 'dotenv';
dotenv.config();
import  Controllers  from '../../../controllers/mongo/mongo.controller';
import  Middlewares  from '../../../middlewares/mongo/mongo.middlewares';

const AuthSanitizer = Middlewares.AuthSanitizer;
const AuthController = Controllers.AuthController;

// console.log(Controllers.AuthController, Middlewares )
const SIGNUP_LINK = '/auth/signup';
const LOGIN_LINK = '/auth/login';
const CONFIRMATION_LINK = '/auth/confirmation/:id';
const RESEND_LINK = '/auth/resend/:id';
const FORGOTPASSWORD_LINK = '/auth/forgot_password';
const RESET_LINK = '/auth/resetMyPassword/:id';
const LOGIN_OUT = '/auth/relogin';




export class AuthRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    // simplelogins logOut confirmationPost changePasswordTriggerMobile resendTokenPost passwordForgot resendTokenPost confirmResetPassword changePasswordTrigger
    this.router.post(SIGNUP_LINK,
      AuthSanitizer.validateSignUp,
      AuthSanitizer.checkIfUserExists,
      AuthController.signup);
    this.router.post(LOGIN_LINK,
      // AuthSanitizer.validateLogin,
      // AuthSanitizer.checkIfUserIsBanned,
      AuthController.login);
    this.router.get('/auth/confirmation/:id', AuthController.confirmationPost);
    this.router.get('/auth/resend/:id', AuthController.resendTokenPost);
    this.router.post(FORGOTPASSWORD_LINK, AuthController.passwordForgot);
    this.router.get('/auth/resetMyPassword/:id', AuthController.confirmResetPassword);//show form
    this.router.post('/auth/resetpassword', AuthController.changePasswordTrigger);
    // this.router.post('/auth/resetpassword/mobile', AuthController.changePasswordTriggerMobile);
    this.router.get(LOGIN_OUT, AuthController.logOut);
  }

}
