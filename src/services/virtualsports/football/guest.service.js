//show the standings
//use multiple resolve promise
import Banner from '../../../models/mongo/core/banners';
import Modal from '../../../models/mongo/core/modal_content';
import SideNotification from '../../../models/mongo/core/side_events';
import Menu from '../../../models/mongo/core/menu_categories';
import Notification from '../../../models/mongo/core/notifications';

//import VirtualSports
import TeamStats from '../../../models/mongo/virtual_sports/football/team_stats';

export class GuestService{
  static async launch(request,response){
    let banners = await Banners.find({});
    let modals = await Modals.find({});
    let sideNotification = await SideNotification.find({});
    let Notify = await Notification.find({});
    let currentMatchesAppetizer = await TeamStats.find({});

    return {
      currentMatchesAppetizer,
      Notify,
      sideNotification,
      modals,
      banners
    }
  }


  static async betStance(request,response){
    const homeContent = GuestService.launch(request,response);
    return {
      home:homeContent,
      //bet stance
    }
  }
}
