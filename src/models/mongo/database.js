import mongoose from 'mongoose';
import Banner from './core/banners';
import About from './core/about';
import User from './core/user';
import Menu from './core/menu_categories';
import Currency from './core/currencies';
import Modal from './core/modal_content';
import Notification from './core/notifications';
import SideEvent from './core/side_events';
import Team from './virtual_sports/football/teams';
import TeamStats from './virtual_sports/football/team_stats';
import Fixture from './virtual_sports/football/fixtures';

mongoose.Promise = global.Promise

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('Data processing now');
    User.seedAdminUser();
    Team.seedTeams();
    TeamStats.seedTeamStats();
    Fixture.seedEmptyFixtures();
  })
  db.on('error', err => console.log(`Database error: ${err}`))
}
