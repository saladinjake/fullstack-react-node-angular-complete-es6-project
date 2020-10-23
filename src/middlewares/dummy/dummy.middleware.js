import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const ENCRYPTION_KEY = "KISS-OF-DEATH-IS-THE-SECRET-KEY-TO-LIFE-BEYOND"

import { dummydb, userdb } from '../../models/dummy/dummy.data'


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


export class Validator{
  constructor(){
    this.passed = true;
    this.error ="";
  }
  static testTitleValidation(description){

  }
  static testIdValidation(id){
    if (typeof id !== 'number') {
      this.passed = false;
      this.error = 'Type of id must be a number';
    }
  }
  static testDescriptionValidation(description){
    if (typeof description !== 'string' || description.length > 300) {
      this.passed = false;
      this.error = 'Description must be characters not exceeding 300 words';
    }
  }
  static testAllValidation(data){
     Validator.testIdValidation(data.id);
     Validator.testTitleValidation(data.title);
     Validator.testDescriptionValidation(data.description)

     if(this.passed){
       return next()
     }else{
       return  response.status(403).json(
          {
            status: 400,
            data : [],
            message : "Invalid Input"
          }
        )
     }


  }

  static preventDoubleSignup(request,response,next){
      const {email, password, username} = request.body;

      const user = userdb.filter(user => user.email == email )

      if(user){
        //if user exist during login then check matching password
        this.passed = false;
        this.error = 'User already exist with this email';
        return  response.status(404).json(
           {
             status: 404,
             data : [],
             message : "User already exist with this email"
           }
         )
      }

  }

  static validateLogin(request,response, next){
    const {email, password} = request.body;
    this.passed = true;
    if (typeof email !== 'string' || email.length <= 4) {
      this.passed = false;
      this.error = 'Invalid Email';

      return  response.status(403).json(
         {
           status: 400,
           data : [],
           message : "Invalid Input"
         }
       )
    }

    if (typeof password !== 'string' || password.length <= 2) {
      this.passed = false;
      this.error = 'Invalid Email';

      return  response.status(403).json(
         {
           status: 400,
           data : [],
           message : "Invalid Input"
         }
       )
    }

    const user = userdb.filter(user => user.email == email )

    if(!user){
      //if user exist during login then check matching password
      this.passed = false;
      this.error = 'Invalid Email';
      return  response.status(404).json(
         {
           status: 404,
           data : [],
           message : "User Not found"
         }
       )
    }

    if (!checkMatchPassword(password,user.password)) {
      this.passed = false;
      this.error = 'Invalid Email';

      return  response.status(403).json(
         {
           status: 400,
           data : [],
           message : "Invalid Input"
         }
       )
    }

    //if all is safe
    if(this.passed){
      return next()
    }else{

      return  response.status(403).json(
         {
           status: 400,
           data : [],
           message : "Some error occured"
         }
       )

    }

  }



}
