// import { verifyToken, verifyAdminToken } from '../../middlewares/mongo/mongo.middlewares';
import { GuestRoutes } from './core/guest.route';
import { AuthRoutes } from './core/auth.route';

export class MongoRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){
     //call the attached routes of all other routes in the mongo routes
     new GuestRoutes(this.router).attachRoutes()
     new AuthRoutes(this.router).attachRoutes()

   }
}
