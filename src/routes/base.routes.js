import { Router } from 'express';
import {routes, initialize } from './dummy/route.bootstrap';
// import {pgRoutes ,initializePgRoutes } from './postgres-api/route.bootstrap';
import { mongoRoute ,initializeMongoRoutes } from './mongo-api/route.bootstrap';

const router = Router();

export class BaseRouter{
 constructor(){
   // this.coreRoutes = routes(router) || {};
   // this.postgresRoutes = pgRoutes(router) || {};
   this.mongoRoutes = mongoRoute(router) || {};
   // console.log(this.mongoRoutes)
 }

 init(){
   // initialize(this.coreRoutes)
   //initializePgRoutes(this.postgresRoutes)
    initializeMongoRoutes(this.mongoRoutes)
 }

 getRouter(){
   return router;
 }


}
