import AauthService from '../../../services/core/auth.service';
import { TokenGenerator } from '../../../utils/tokengen.utils';
import Response from '../../../utils/response.utils';

const response = new Response();

export class AuthController{
  static async signup(request, response) {
    // let { firstname, lastname,  username, email,
    //       phoneNumber,user_type, password
    // } = request.body;
    let user =  request.body
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

  static async login(request,response){
    try {
      const user = await AuthService.login(request,response);
      if (user) {
        return response.sendSuccess(res, 200, user, 'Login was successful');
      }
      return response.sendError(res, 400, 'something went wrong');
    } catch (error) {
      return response.sendError(res, 401, error.message);
    }
  }
  static async logOut(request,response){
    await AuthService.logOut(request,response)
  }
  static  async confirmationPost(request,response){

    
  }
  static async changePasswordTriggerMobile(request,response){}
  static async resendTokenPost(request,response){}
  static async passwordForgot(request,response){}
  static async resendTokenPost(request,response){}
  static async confirmResetPassword(request,response){}
  static async changePasswordTrigger(request,response){}

}
