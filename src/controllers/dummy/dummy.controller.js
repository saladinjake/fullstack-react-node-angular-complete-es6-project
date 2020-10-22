import { alldbs } from '../../models/index'
const DUMMY_DATABASE = alldbs.dummydb;
// import PostValidator from '../helpers/dummy/validator.helpers';
export class DummyController{
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
           data : DUMMY_DATABASE,
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
     DUMMY_DATABASE.push({title,description})
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
       const index = DUMMY_DATABASE.indexOf(result);
       const deleteOperation = DUMMY_DATABASE.splice(index,1)
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
       const index = DUMMY_DATABASE.indexOf(result);
       const deleteOperation = DUMMY_DATABASE.splice(index,1)

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
     const result = DUMMY_DATABASE.filter(item => item.id == id)
     return result;
   }
}
