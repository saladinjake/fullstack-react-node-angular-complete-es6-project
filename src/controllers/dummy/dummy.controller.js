import { alldbs } from '../../models/index'
const DUMMY_DATABASE = alldbs.dummydb;
// import PostValidator from '../helpers/dummy/validator.helpers';
export class DummyController{
   static getAll(request,response){

     DUMMY_DATABASE.length <=0 ? return response.status(400).json(
       {
         status: 400,
         data : [],
         message : "Empty Resource"
       }
     ) :
     return response.status(200).json(
       {
         status: 200,
         data : DUMMY_DATABASE,
         message : "Resource Exists"
       }
     )
   }

   static getById(request,response){}

   static save(request,response){}

   static update(request,response){}

   static delete(request,response){}
}
