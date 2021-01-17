import jwt from 'jsonwebtoken';
// import { ResponseHandler } from '../helpers/response_handler';




export const verifyToken = (request,response,next) => {
  const token = request.headers('x-access-token');
  if(!token){
    return response.status(401).json(
      {
        status: 200,
        data : result,
        message : "You are required to signup/login to access this page"
      }
    )
  }else{
    try{
      const decode = jwt.verify(token,ENCRYPTION_KEY);
      requet.user = decode;
      return next();
   }catch (err){

     return response.status(403).json(
       {
         status: 403,
         data : [],
         message : "Unauthorized access"
       }
     )

   }
  }
}

export const verifyAdminToken =(request,response,next) =>{
 if(request.user){
     const user = request.user;
     const admin  = request.user.isAdmin ? request.user : null;
     if (!admin){
       return response.status(403).json(
         {
           status: 403,
           data : [],
           message : "Unauthorized access"
         }
       )
     }
     return next();
  }
}

export default class TokenVerification {
  static userAuthentication(request, response, next) {
    const token = request.header('x-access-token');
    if (!token) {
      console.log('error validating token');
      return response.status(401).json({
        status: 401,
        error: 'You must signup or login to access this route',
      });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      request.user = decoded;
      return next();
    } catch (err) {
      return response.status(403).json({
        status: 403,
        error: 'Authentication failed',
      });
    }
  }

  static adminAuthentication(request, response, next) {
    console.log(request.user)
    if (request.user.isAdmin === false) {
      console.log('error validating admin token');
      return response.status(403).json({
        status: 403,
        error: 'You do not have the admin rights to perform this action',
      });
    }
    return next();
  }
}
