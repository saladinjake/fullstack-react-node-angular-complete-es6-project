import { AuthController} from './core/auth.controller';
import { GuestController } from './core/guest.controller';

//core controllers
import { BannerController } from './admin/banner.controller'
import { CurrencyController } from './admin/currency.controller'
import { MenuController } from './admin/menu.controller'
import { ModalController } from './admin/modal.controller'
import { NotificationController } from './admin/notification.controller'
import { SideNotificationController } from './admin/sidenotification.controller'

//admin controllers
import { TeamController } from './admin/virtualgames/football/team.controller'
import { GameRoundsController }  from './admin/virtualgames/football/gamerounds.controller'
import { LeagueController } from './admin/virtualgames/football/league.controller'
import { FixturesController } from './admin/virtualgames/football/fixtures.controller'


//user controllers
import { UserController } from './admin/user.controller';
// import { UserBetController } from './admin/virtualgames/football/userbets.controller'


export default {
  AuthController,
  GuestController,
  AdminControllers:{
    core : {
      UserController,
      BannerController,
      CurrencyController,
      MenuController,
      ModalController,
      NotificationController,
      SideNotificationController,
    },
    virtualgames: {
      football:{
        TeamController,
        GameRoundsController,
        LeagueController,

        FixturesController
      }
    },

    livegames:{

    }
  }
}
