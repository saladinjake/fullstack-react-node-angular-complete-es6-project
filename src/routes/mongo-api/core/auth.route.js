import dotenv from 'dotenv';
dotenv.config();
import AuthController from '../../../controllers/core/auth.controller';
import AuthSanitizer from '../../../middlewares/mongo/core/auth.middleware';

// for social media auth
import JWT from 'jsonwebtoken';



// import UserModel from '../models/User.model';
// import { TokenGenerator } from '../helpers/token_generator';
// import { ErrorHandler } from '../helpers/error_handler';
// import { ResponseHandler } from '../helpers/response_handler';
//
// import AutoincrementId from '../helpers/autoincrement_mongo.js';

import fs from 'fs';
// import handlebars from 'handlebars';







// import BridgeRoutes from './routes';
const SIGNUP_LINK = '/auth/signup';
const LOGIN_LINK = '/auth/login';





class AuthRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {


    // simplelogins
    this.router.post(
      '/auth/signup',
      // UserSanitizer.validateSignUp,
      // UserSanitizer.checkIfUserExists,
      UserController.signup,
    );
    this.router.post('/auth/login',
      // UserSanitizer.validateLogin,
      // UserSanitizer.checkIfUserIsBanned,
      UserController.login
     );
    this.router.get('/auth/confirmation/:id', UserController.confirmationPost);
    this.router.get('/auth/resend/:id', UserController.resendTokenPost);
    this.router.post('/auth/forgot_password', UserController.passwordForgot);
    this.router.get('/auth/resetMyPassword/:id', UserController.confirmResetPassword);//show form
    this.router.post('/auth/resetpassword', UserController.changePasswordTrigger);
    this.router.post('/auth/resetpassword/mobile', UserController.changePasswordTriggerMobile);

    this.router.get('/logout', function(req, res){
      // perform logout
      res.redirect('/');
    });

  }

}




export default AuthRoutes;
