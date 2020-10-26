import { PostgresApiController } from '../../controllers/pg/pg.controller';
import { verifyToken, verifyAdminToken, Validator } from '../../middlewares/pg/pg.middleware';

export class DummyRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){
     this.router.get('/dummy-request',[verifyToken], DummyController.getAll);
     this.router.get('/dummy-request/:id', [verifyToken], DummyController.getById);
     this.router.post('/dummy-request', [ verifyToken,Validator.testAllValidation], DummyController.save);
     this.router.patch('/dummy-request/:id/edit',  [verifyToken], DummyController.update);
     this.router.delete('/dummy-request/:id/delete', [verifyToken], DummyController.delete);

     this.router.get('/dummy-request/auth/login', [ verifyToken,Validator.validateLogin], DummyController.login);
     this.router.get('/dummy-request/auth/register', [ verifyToken, Validator.preventDoubleSignup], DummyController.register);
   }
}
