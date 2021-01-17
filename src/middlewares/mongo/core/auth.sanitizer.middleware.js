//import Database from '../models/db';
import User from '../../../models/mongo/core/user';
const validNameRegex = /^[A-Za-z]{3,30}$/;
const user_typeRegex = /^[a-zA-Z]'?([a-zA-Z]|\.| |-){3,}$/;
const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /^[A-Za-z0-9]{6,}$/;
const phoneNumberRegex = /^(\+?234|0)?[789]\d{9}$/;
const lastnameRegex=/^[A-Za-z\d_-]+$/;

const handleError = (response, message, code = 422) =>
  response.status(code).json({
    status: code,
    error: message,
  });

export class AuthSanitizer {

  static checkIfUserDoesntExists(request, response, next) {
    const { email } = request.body;

    if(!emailRegex.test(email)){

      return response.status(422).json({
            status: 422,
            error: 'Invalid email sent',
          });

    }
    console.log("email to check: "+ email)
    User.find({email:email} )

      .then(result => {

        const userExists = result;
        if ( userExists.length>0 ) {
          return next();

        }else{

           // console.log("this user does not : " + JSON.stringify(result))
          return response.status(422).json({
            status: 422,
            error: 'User does not exist on this platform',
          });

        }

      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: 'Email or Username must be unique: '+ err,
        }),
      );
  }

  static checkIfUserExists(request, response, next) {
    const { email } = request.body;

    if(!emailRegex.test(email)){

      return response.status(422).json({
            status: 422,
            error: 'Invalid email sent',
          });

    }
    console.log("email to check: "+ email)
    User.find({email:email} )

      .then(result => {

        const userExists = result;
        if ( userExists.length>0 ) {
           console.log("this user exist : " + JSON.stringify(result))
          return response.status(409).json({
            status: 409,
            error: 'Email already exists',
          });
        }else{
          return next();
        }

      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: 'Email or Username must be unique: '+ err,
        }),
      );
  }

  static checkIfUserIsBanned(request, response, next) {

    const { email } = request.body;

    if(!emailRegex.test(email)){

      return response.status(422).json({
            status: 422,
            error: 'Invalid email sent',
          });

    }
    console.log("email to check: "+ email)
    User.find({email:email,status:"InActive"} )

      .then(result => {

        const userExists = result;
        if ( !userExists ) {
           console.log("this user exist : " + JSON.stringify(result))
          return response.status(409).json({
            status: 409,
            error: 'User is either banned or suspended on this platform',
          });
        }else{
          return next();
        }

      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: 'Email or Username must be unique: '+ err,
        }),
      );

  }


  static validateSignUp(request, response, next) {
    const {
      firstname,
      lastname,
      user_type,
      username,
      email,
      phoneNumber,
      password,
      terms_and_cond
    } = request.body;

    if (terms_and_cond=="not selected") {
      console.log('err terms')
      return response.status(422).json({
        status: 422,
        error: 'Terms and conditions must be checked to sign up',
      });
    }
    if (!(firstname && firstname.length)) {
      console.log('err fn')
      return response.status(422).json({
        status: 422,
        error: 'Please enter your firstname',
      });
    }
    if (!validNameRegex.test(firstname)) {
      console.log('err fn1')
      return response.status(422).json({
        status: 422,
        error: 'firstname must be between 3 and 30 characters only',
      });
    }
    if (!(lastname && lastname.length)) {
      console.log('err ln')
      return response.status(422).json({
        status: 422,
        error: 'Please enter your lastname',
      });
    }
    if (!lastnameRegex.test(lastname)) {
      console.log('err ln2')
      return response.status(422).json({
        status: 422,
        error: 'lastname must be between 3 and 30 characters only',
      });
    }

    if (!(user_type && user_type.length)) {

      return response.status(422).json({
        status: 422,
        error: 'Please enter your user_type',
      });
    }
    if ((user_type=="Select Category")) {

      return response.status(422).json({
        status: 422,
        error: 'Please choose a plan category',
      });
    }



    console.log(user_type)

    if (!user_typeRegex.test(user_type)) {
      return response.status(422).json({
        status: 422,
        error: 'user_type must be a minimum of 3 charcaters',
      });
    }

    if (!(username && username.length)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter your username',
      });
    }

    if (!usernameRegex.test(username)) {
      return response.status(422).json({
        status: 422,
        error: 'username must contain between 3 and 30 alphanumeric characters only',
      });
    }
    if (!(email && email.length)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter your email',
      });
    }

    if (!emailRegex.test(email)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter a valid email',
      });
    }

    if (!(phoneNumber && phoneNumber.length)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter your phone number',
      });
    }

    if (!phoneNumberRegex.test(phoneNumber)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter a valid phone number',
      });
    }

    if (!(password && password.length)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter your password',
      });
    }

    if (!passwordRegex.test(password)) {
      return response.status(422).json({
        status: 422,
        error: 'Password must be a minimum of 6 alphanumeric characters',
      });
    }

    return next();
  }

  static validateLogin(request, response, next) {
    const { email, password } = request.body;
    if (!(email && email.length)) {
      return response.status(422).json({
        status: 422,
        error: 'email is required',
      });
    }
     if (!emailRegex.test(email)) {
      return response.status(422).json({
        status: 422,
        error: 'Please enter a valid email',
      });
    }
    if (!(password && password.length)) {
      return response.status(422).json({
        status: 422,
        error: 'password is required',
      });
    }

    if(!emailRegex.test(email)){

      return response.status(422).json({
            status: 422,
            error: 'Invalid email sent',
          });

    }
    console.log("email to check: "+ email)
    var error = false;
    User.find({email:email} )
      .then(result => {
        console.log("this user exist : " + JSON.stringify(result))
        const userExists = result;
        if ( userExists.length<0 ) {
          return response.status(404).json({
            status: 404,
            error: 'Email does not exists',
          });
        }

        else if(userExists[0].email){
          return next();
        }else {
          return  response.status(422).json({
          status: 422,
          error: 'Invalid credentials',
        })
        }

      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: 'Email or Username must be unique',
        }),
      );

  }
}
