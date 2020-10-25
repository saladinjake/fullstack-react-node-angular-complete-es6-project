import { alldbs } from '../../models/index'
const DUMMY_DATABASE_RECORD_TABLE = alldbs.dummydb;
const DUMMY_DATABASE_USER_TABLE = alldbs.userdb;
import {generateToken} from '../../helpers/dummy/validator.helpers';
export class DummyController{
  constructor(){
    this.defaultRoute = "index"
  }
   static getAll(request,response){

      if( DUMMY_DATABASE.length <=0 ){
         return response.status(400).json({
           status: 400,
           data : [],
           message : "Empty Resource"
         }
       )
     } else {
         return response.status(200).json(
         {
           status: 200,
           data : DUMMY_DATABASE_RECORD_TABLE,
           message : "Resource Exists"
         }
       )
     }
   }

   static getById(request,response){
     const validId = !Number(request.params.id)

     if(validId) {
        return response.status(400).json(
       {
         status: 400,
         data : [],
         message : "Invalid ID Resource"
       }
     )

    }else{
       const result = DummyController.findAndRespond(validId)

       return response.status(200).json(
         {
           status: 200,
           data : result,
           message : "Resource Exists"
         }
       )
     }


   }

   static save(request,response){
     const {title,description} = request.body;
     DUMMY_DATABASE_RECORD_TABLE.push({title,description})
     return response.status(201).json(
     {
      status: 201,
      data : [{title,description}],
      message : "Created New Resource"
     }
    )
   }

   static update(request,response){
     const validId = !Number(request.params.id)

     if(validId) {
        return response.status(400).json(
       {
         status: 400,
         data : [],
         message : "Invalid ID Resource"
       }
     )

    }else{
       const {title,description} = request.body;
       const result = DummyController.findAndRespond(validId);
       const index = DUMMY_DATABASE_RECORD_TABLE.indexOf(result);
       const deleteOperation = DUMMY_DATABASE_RECORD_TABLE.splice(index,1)
       DUMMY_DATABASE[index] = {title,description}

       return response.status(200).json(
         {
           status: 200,
           data : deleteOperation,
           message : "Resource Deleted"
         }
       )
     }

   }

   static delete(request,response){
     const validId = !Number(request.params.id)

     if(validId) {
        return response.status(400).json(
       {
         status: 400,
         data : [],
         message : "Invalid ID Resource"
       }
     )

    }else{
       const result = DummyController.findAndRespond(id);
       const index = DUMMY_DATABASE_RECORD_TABLE.indexOf(result);
       const deleteOperation = DUMMY_DATABASE_RECORD_TABLE.splice(index,1)

       return response.status(200).json(
         {
           status: 200,
           data : deleteOperation,
           message : "Resource Deleted"
         }
       )
     }

   }

   static findAndRespond(id){
     const result = DUMMY_DATABASE_RECORD_TABLE.filter(item => item.id == id)
     return result;
   }


   static login(request,response){
     const user = DUMMY_DATABASE_USER_TABLE.filter(user => user.email == request.body.email )

     if(user){
       //if user exist during login then check matching password
       this.passed = false;
       this.error = 'Invalid Email';
       return  response.status(200).json(
          {
            status: 200,
            data : [{user,token: generateToken({
              id: user.id,
              username: user.username
            }) }],
            message : "User found"
          }
        )
     }else{
       return  response.status(404).json(
          {
            status: 404,
            data : [{
            }],
            message : "User Not found"
          }
        )

     }

   }

   static register(request,response){
     //DONT WORRY THE MIDDLE WARE WILL VALIDATE THE POST DATA
     const {title,description} = request.body;
     DUMMY_DATABASE_USER_TABLE.push({title,description})
     return response.status(201).json(
     {
      status: 201,
      data : [{title,description}],
      message : "Created New Resource"
     }
    )

   }
}
