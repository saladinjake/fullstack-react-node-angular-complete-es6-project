import Banner from '../../core/banners';
import About from '../../core/about';
import User from '../../core/user';
import Menu from '../../core/menu_categories';
import Currency from '../../core/currencies';
import Modal from '../../core/modal_content';
import Notification from '../../core/notifications';
import SideEvent from '../../core/side_events';
import Offer from '../../core/offers';
export default class Seed{
   static seedData(){
     //core seedEmptyFixtures
     Notification.seedNotification();
     Modal.seedModal();
     SideEvent.seedEvent();
     About.seedAbout();
     Menu.seedMenu();
     Currency.seedCurrency();
     User.seedAdminUser();
     Banner.seedBanner();
     Offer.seedOffer()
     Team.seedTeams();
     TeamStats.seedTeamStats();
     Fixture.seedEmptyFixtures();
   }
}
