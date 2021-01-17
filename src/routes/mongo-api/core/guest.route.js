import dotenv from 'dotenv';
dotenv.config();
import  Controllers  from '../../../controllers/mongo/mongo.controller';
const  GuestController =  Controllers.GuestController;

// const ABOUT_LINK = '/guest/about';
const HOME_LINK = '/guest/welcome';
// const TERMS_LINK = '/guest/terms';
const ONLINE_LINK = '/guest/usersbetting';
const OFFERS_LINK = '/guest/offers';


export class GuestRoutes {
  constructor(router) {
    this.router = router;
  }
  attachRoutes() {
    // api contents
    this.router.get(HOME_LINK,GuestController.index);
    this.router.get(OFFERS_LINK,GuestController.offers);
    this.router.get(ONLINE_LINK,GuestController.usersBetting);
    // this.router.get(ABOUT_LINK,GuestController.termsAndConditions);
    // this.router.get(HOME_LINK,GuestController.privacyData);
  }

}
