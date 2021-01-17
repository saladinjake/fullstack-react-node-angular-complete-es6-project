// import { AdminService } from '';
export class UserController{
  static async  create(request,response){
    let boolVerification;
    let {
         firstname,lastname,username,email,password,
         passwordComfirm,phoneNumber,avatar,certificate,
         user_type,status,is_verified
     } = request.body;

   if(is_verified=="false"){
     boolVerification =false;
   }else{
     boolVerification =true;
   }

   password = TokenGenerator.hashPassword(password.trim());

   const Newuser = new User({
       firstname,lastname,username,email,password,phone_number: phoneNumber,
       avatar: avatar,certificate,user_type,status :"Active",is_admin:false,isVerified:boolVerification,
     });

    Newuser.save()
     .then(data => {
       const user = data;
       const result = {
         id: user.id,email: user.email,username: user.username,
       };

       const token = TokenGenerator.generateToken(result);
       return response.status(201).json({
         status: 201,
         data: [
           {
             token,
             user,
           },
         ],
         message: 'User created successfully',
       });
     })
     .catch(err => {
       return response.status(400).json({
         status: 400,
         error: {
             error: "Invalid form data"
           },
       });
     });
  }

  static async read(request,response){
  //   User.find({is_admin:false,roles:"user"})
  //     .then(data => {
  //       const users = data;
  //       if (users.length === 0) {
  //         return response.status(200).json({
  //           status: 200,
  //           data: [
  //           {
  //             users:[],
  //             message: 'Successful',
  //           },
  //         ],
  //         });
  //       }
  //       return response.status(200).json({
  //         status: 200,
  //         data: [
  //           {
  //             users,
  //             message: 'Successful',
  //           },
  //         ]
  //       });
  //     })
  //     .catch(error =>{
  //       response.status(400).json({
  //         status: 400,
  //         error: {
  //             error: "Invalid form data"
  //           }
  //       })
  //     });
  //
   }
  static async  viewEdit(request,response){
    User.find({email:request.params.id})
      .then(data => {
        const userInfo = data; //related
        if (userInfo.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              userInfo,
              message: 'Get a specific user was successful',
            },
          ],
          });
      })
      .catch(err => {
              return response.status(400).json({
                status: 400,
                error: {
                    error: "Invalid form data"
                  },
              })
            });
  }
  static async update(request,response){
    const {
      firstname,lastname,username,password,passwordConfirm,phoneNumber,
      avatar,certificate,user_type,email,
    } = request.body;

    if(password.length && passwordConfirm.length){
      if(password!= passwordConfirm){
        return res.status(400).send({ msg: 'password do not match.' });
      }
    }

    User.findOne({ email:  request.params.id }, function (err, user) {

      if (!user) return response.status(400).send({ msg: 'We were unable to find a user with that email.' });

      if(password=="unchanged" && passwordConfirm=="unchanged"){
       user.password= user.password;
      } else{
        user.password= TokenGenerator.hashPassword(password.trim());
        console.log("new pass: "+ user.password)
      }

      user.avatar= avatar || user.avatar;
      user.username= username || user.username;
      user.email= email || user.email;

      user.roles= user_type|| user.user_type;
      user.firstname= firstname|| user.firstname;
      user.lastname = lastname || user.lastname;
      user.phone_number = phoneNumber|| user.phone_number;
      user.test_certificate = certificate|| user.test_certificate;
      user.save(function (err,user) {
        if (err) {
          return response.status(500).send({ msg: err.message });
         }
          //return  response.sendFile(path.join(__dirname + '/proceed_tologin.html'));
          return response.status(200).send({success:'ok', msg: 'Successfully updated user profile.' });
      });
    });

  }
  static async delete(request,response){
    User.find({_id: request.params.id})
      .then(data => {
        const user = data;

        if ( user.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The user with the given id does not exists',
          });
        }

        User.deleteOne({_id: request.params.id})
          .then(data => {
            const deletedUser = data;
            return response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedUser._id,
                  message: 'user record has been deleted',
                },
              ],
            });
          })
          .catch(error =>{
            console.log(error)
            return response.status(400).json({
              status: 400,
              error: {
                  error: "Invalid form data"
                },
            });
          });
      })
      .catch(error =>{
         console.log(error)
        return response.status(400).json({
          status: 400,
          error: {
              error: "Invalid form data"
            },
        });
      });

  }


}
