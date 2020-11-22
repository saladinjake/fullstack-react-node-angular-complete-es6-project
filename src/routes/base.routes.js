import { Router } from 'express';
import {routes, initialize } from './dummy/route.bootstrap';
// import {pgRoutes ,initializePgRoutes } from './postgres-api/route.bootstrap';
const router = Router();

export class BaseRouter{
 constructor(){
   this.coreRoutes = routes(router) || {};
   // this.postgresRoutes = pgRoutes(router) || {};
 }

 init(){
   initialize(this.coreRoutes)
   //initializePgRoutes(this.postgresRoutes)
 }

 getRouter(){
   return router;
 }


}
