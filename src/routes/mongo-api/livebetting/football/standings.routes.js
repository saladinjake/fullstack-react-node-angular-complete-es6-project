import dotenv from 'dotenv';
dotenv.config();
import  Controllers  from '../../../../controllers/mongo/mongo.controller';
import  Middlewares  from '../../../../middlewares/mongo/mongo.middlewares';

const AuthSanitizer = Middlewares.AuthSanitizer;
const LeagueController = Controllers.LeagueController;

// console.log(Controllers.AuthController, Middlewares )
const CLUB_LINK = '/standings/:leagueName';
const BET_LINK = '/standings/bet';
// const CONFIRMATION_LINK = '/auth/confirmation/:id';
// const RESEND_LINK = '/auth/resend/:id';
// const FORGOTPASSWORD_LINK = '/auth/forgot_password';
// const RESET_LINK = '/auth/resetMyPassword/:id';
// const LOGIN_OUT = '/auth/relogin';




export class AuthRoutes {
  constructor(router) {
    // super(router);
    this.router = router;
  }

  attachRoutes() {
    // simplelogins logOut confirmationPost changePasswordTriggerMobile resendTokenPost passwordForgot resendTokenPost confirmResetPassword changePasswordTrigger
    this.router.get(CLUB_LINK, LeagueController.getLeagueStandings);
    this.router.get(USER_LINK, LeagueController.getLeagueBettingStandings);//show form

  }

}
