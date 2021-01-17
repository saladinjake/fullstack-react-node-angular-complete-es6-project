import dotenv from 'dotenv';
dotenv.config();
import Controllers  from '../../../controllers/mongo/mongo.controller';
import TokenVerification from '../../../middlewares/mongo/core/auth.middleware'
const AdminController =  Controllers.AdminControllers.core;
const  { BannerController,
        CurrencyController,
        ModalController,
        NotificationController,
        SideNotificationController ,
        MenuController,
        UserController
} = AdminController



export class AdminCoreRoutes {
  constructor(router) {
    this.router = router;
  }
  attachRoutes() {
    // crude core routes
    this.router.post('/admin/banners/create',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],BannerController.create);
    this.router.get('/admin/banners/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],BannerController.read);
    this.router.get('/admin/banners/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],BannerController.viewEdit);
    this.router.put('/admin/banners/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],BannerController.update);
    this.router.delete('/admin/banners/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],BannerController.delete);

    this.router.post('/admin/currencies/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],CurrencyController.create);
    this.router.get('/admin/currencies/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],CurrencyController.read);
    this.router.get('/admin/currencies/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],CurrencyController.viewEdit);
    this.router.put('/admin/currencies/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],CurrencyController.update);
    this.router.delete('/admin/currencies/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],CurrencyController.delete);

    this.router.post('/admin/modals/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],ModalController.create);
    this.router.get('/admin/modals/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],ModalController.read);
    this.router.get('/admin/modals/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],ModalController.viewEdit);
    this.router.put('/admin/modals/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],ModalController.update);
    this.router.delete('/admin/modals/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],ModalController.delete);

    this.router.post('/admin/notifications/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],NotificationController.create);
    this.router.get('/admin/notifications/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],NotificationController.read);
    this.router.get('/admin/notifications/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],NotificationController.viewEdit);
    this.router.put('/admin/notifications/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],NotificationController.update);
    this.router.delete('/admin/notifications/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],NotificationController.delete);

    this.router.post('/admin/sideNotifications/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],SideNotificationController.create);
    this.router.get('/admin/sideNotifications/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],SideNotificationController.read);
    this.router.get('/admin/sideNotifications/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],SideNotificationController.viewEdit);
    this.router.put('/admin/sideNotifications/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],SideNotificationController.update);
    this.router.delete('/admin/sideNotifications/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],SideNotificationController.delete);

    this.router.post('/admin/menus/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],MenuController.create);
    this.router.get('/admin/menus/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],MenuController.read);
    this.router.get('/admin/menus/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],MenuController.viewEdit);
    this.router.put('/admin/menus/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],MenuController.update);
    this.router.delete('/admin/menus/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],MenuController.delete);

    this.router.post('/admin/users/create',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],UserController.create);
    this.router.get('/admin/users/read',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],UserController.read);
    this.router.get('/admin/users/view/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],UserController.viewEdit);
    this.router.put('/admin/users/update/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],UserController.update);
    this.router.delete('/admin/users/delete/:id',[TokenVerification.userAuthentication,TokenVerification.adminAuthentication],UserController.delete);

     // custom routes for app functionality
  }

}
