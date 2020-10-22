import { DummyController } from '../../controllers/dummy/dummy.controller';
// import DummyMiddlewares from '../../middlewares/dummy/dummy.middleware';
export class DummyRoutes{
   constructor(router){
     this.router = router
   }
   attachedRoutes(){
     this.router.get('/dummy-request', DummyController.getAll);
     this.router.get('/dummy-request/:id', DummyController.getById)
     this.router.post('/dummy-request', DummyController.save)
     this.router.patch('/dummy-request/:id/edit', DummyController.update)
     this.router.delete('/dummy-request/:id/delete', DummyController.delete)
   }
}
