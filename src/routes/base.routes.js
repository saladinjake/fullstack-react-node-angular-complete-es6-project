import routes from './dummy/routes.bootstrap';
export class BaseRouter{
  this.coreRoutes = routes || {};
  static init(){
    Object.values(this.coreRoutes).map(routes =>{
      return routes.attachedRoutes()
    })
  }
}
