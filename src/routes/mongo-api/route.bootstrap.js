import { MongoRoutes } from './mongo.routes';

export const mongoRoute = (router) => {
  return {
      'Illuiminate.MongoRoutes': new MongoRoutes(router),

      router
  }

}



export const initializeMongoRoutes = (coreRoutes) =>{
  return Object.values(coreRoutes).map(routes =>{
    if(typeof routes.attachedRoutes === 'function') {
      return routes.attachedRoutes()
    }else{
      return routes
    }

  })
}
