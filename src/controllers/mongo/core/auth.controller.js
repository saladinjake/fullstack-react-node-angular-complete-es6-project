import AuthService from '../../../services/core/auth.service';
import { TokenGenerator } from '../../../utils/tokengen.utils';
import Response from '../../../utils/response.utils';

const response = new Response();

export class AuthController{
  static async signup(req, res) {
    // let { firstname, lastname,  username, email,
    //       phoneNumber,user_type, password
    // } = request.body;
    let user =  req.body
    user.password = TokenGenerator.hashPassword(user.password)
    user.is_admin = false;
    let phone = user.phoneNumber;
    delete user.phoneNumber;
    user.phone_number = phone;

    try {
      const createdUser = await AuthService.createUser(user)
      if (createdUser.error = false) {
        return response.sendSuccess(res, 201, createdUser, 'Registration was successful');
      }
      return response.sendError(res, 400, 'something went wrong');
    } catch (error) {
      return response.sendError(res, 400, error.message);
    }

 }

  static async login(req,res){
    try {
      const user = await AuthService.login(req,res);
      if (user) {
        return response.sendSuccess(res, 200, user, 'Login was successful');
      }
      return response.sendError(res, 400, 'something went wrong');
    } catch (error) {
      console.log(error)
      return response.sendError(res, 401, error.message);
    }
  }
  static async logOut(request,response){
    await AuthService.logOut(request,response)
  }
  static  async confirmationPost(request,response){
    await AuthService.confirmationPost(request,response)
  }
  static async changePasswordTriggerMobile(request,response){
    await AuthService.changePasswordTriggerMobile(request,response)
  }
  static async resendTokenPost(request,response){
    await AuthService.resendTokenPost(request,response)
  }
  static async passwordForgot(request,response){
    await AuthService.passwordForgot(request,response)
  }
  static async resendTokenPost(request,response){
    await AuthService.resendTokenPost(request,response)
  }
  static async confirmResetPassword(request,response){
    await AuthService.confirmResetPassword(request,response)
  }
  static async changePasswordTrigger(request,response){
    await AuthService.changePasswordTrigger(request,response)
  }

}
