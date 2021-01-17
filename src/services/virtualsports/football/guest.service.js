//show the standings
//use multiple resolve promise
import Banner from '../../../models/mongo/core/banners';
import Modal from '../../../models/mongo/core/modal_content';
import SideNotification from '../../../models/mongo/core/side_events';
import Menu from '../../../models/mongo/core/menu_categories';
import Notification from '../../../models/mongo/core/notifications';
// import About from '../../../models/mongo/core/about';
import Offer from '../../../models/mongo/core/offers';
import User from '../../../models/mongo/core/user';

//import VirtualSports
import TeamStats from '../../../models/mongo/virtual_sports/football/team_stats';

export class GuestService{
  static async launch(request,response){
    let banners = await Banner.find({});
    let modals = await Modal.find({});
    let sideNotification = await SideNotification.find({});
    let Notify = await Notification.find({});
    let men = await Menu.find({});
    let abouts = await About.find({})

    let currentMatchesStatsAppetizer = await TeamStats.find({}).populate('team')


    return {
      currentMatchesStatsAppetizer,
      Notify,
      sideNotification,
      modals,
      banners,
      men
    }
  }

  static  async usersBetting(request,response){
      try {
        let users = await User.find({}, 'username guessedSigns guessedScores points')
        if (users.length === 0) {
          return response.status(404).json({
            success: false,
            message: 'No users are currently betting',
            data: {}
          })
        }
        return response.status(200).json({
          success: true,
          message: '',
          data: users
        })
      } catch (err) {
        return response.status(500).json({
          success: false,
          message: "Some Internal error occured"+ err,
          data: {}
        })
      }


  }


  static async betStance(request,response){

    return {
      home:homeContent,
      //bet stance
    }
  }

  static async offers(request,response){
    const homeContent = await GuestService.launch(request,response);
    const offerPromo = await Offer.find({})
    return {
      home:homeContent,
      promo: offerPromo
    }
  }
}
