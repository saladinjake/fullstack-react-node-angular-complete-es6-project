import mongoose from 'mongoose';
//import core models
import Banner from './core/banners';
import About from './core/about';
import User from './core/user';
import Menu from './core/menu_categories';
import Currency from './core/currencies';
import Modal from './core/modal_content';
import Notification from './core/notifications';
import SideEvent from './core/side_events';
import Offer from './core/offers';

//import app models

import Team from './virtual_sports/football/teams';
import TeamStats from './virtual_sports/football/team_stats';
import Fixture from './virtual_sports/football/fixtures';

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db, {
    keepAlive: 1,
    // useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
  }).catch(e =>{ console.log(e)})
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('Database connected');
    //core seedEmptyFixtures

    // if(process.env.NODE_ENV=='DEVELOPMENT'){
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

    // }

    //custom seed for app designation

  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
