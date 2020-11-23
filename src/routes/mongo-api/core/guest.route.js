import dotenv from 'dotenv';
dotenv.config();
import GuestController from '../controllers/mongo/core/guest.controller';

const ABOUT_LINK = '/guest/#about';
const HOME_LINK = '/guest/#welcome';
const TERMS_LINK = '/guest/#terms';
const PRIVACY_LINK = '/guest/#privacy';
const OFFERS_LINK = '/guest/#offers';


class GuestRoutes {
  constructor(router) {
    this.router = router;
  }
  attachRoutes() {
    // api contents
    this.router.get(HOME_LINK,GuestController.getHomeContent);
    this.router.get(ABOUT_LINK,GuestController.getAboutContent);
    this.router.get(ABOUT_LINK,GuestController.getTermsContent);
    this.router.get(HOME_LINK,GuestController.getPrivacyContent);
    this.router.get(ABOUT_LINK,GuestController.getOffersContent);
  }

}

export default GuestRoutes;
