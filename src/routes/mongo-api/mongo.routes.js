import { DummyController } from '../../controllers/mongo/mongo.controller';
import { verifyToken, verifyAdminToken } from '../../middlewares/mongo/mongo.middlewares';

export class MongoRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){

  this.router.get('/mongo-request', (req,res)=>{
     console.log("magic football api")
   });

   }
}
