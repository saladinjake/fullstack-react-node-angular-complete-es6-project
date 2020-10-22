import { DummyRoutes } from './dummy.routes';

export const routes = (router) => {
  return {
      'Illuiminate.DummyRoutes': new DummyRoutes(router),

      router
  }

}


export const initialize = (coreRoutes) =>{
  return Object.values(coreRoutes).map(routes =>{
    if(typeof routes.attachedRoutes === 'function') {
      return routes.attachedRoutes()
    }else{
      return routes
    }

  })
}
