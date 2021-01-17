// import { verifyToken, verifyAdminToken } from '../../middlewares/mongo/mongo.middlewares';
import { GuestRoutes } from './core/guest.route';
import { AuthRoutes } from './core/auth.route';
import { AdminCoreRoutes } from './admin/admincore.routes';
import { AdminVirtualFootballRoutes } from './admin/admin.virtualfootball.routes';

export class MongoRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){
     //call the attached routes of all other routes in the mongo routes
     new GuestRoutes(this.router).attachRoutes();
     new AuthRoutes(this.router).attachRoutes();
     new AdminCoreRoutes(this.router).attachRoutes();
     new AdminVirtualFootballRoutes(this.router).attachRoutes();

   }
}
