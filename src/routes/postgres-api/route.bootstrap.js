import { PostgresApiEndpoints } from './pg/pg.routes';
import { SequelizeApiEndpoints } from './pg/sequelize.routes';
export const routes = (router) => {
  return {
      'Illuiminate.PostgresApiEndpoints': new PostgresApiEndpoints(router),
      'Illuiminate.SequelizeApiEndpoints': new SequelizeApiEndpoints(router),

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
