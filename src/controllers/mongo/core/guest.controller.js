import { GuestService } from '../../../services/virtualsports/football/guest.service';
export class GuestController{
   static async index(request, response){
     try {
        let results  = await GuestService.launch(request,response);
        if (!results) {
            return res.status(404).json({
            success: false,
            message: 'No teams in database',
            data: {}
          })
        }
        return response.status(200).json({
          success: true,
          message: 'Team Leagues stands',
          data: results
        })
    } catch (err) {
      return response.status(500).json({
        success: false,
        message: "Some internal error occured. ",
        data: {}
      })
    }
  }
  static async usersBetting(request,response){
    return GuestService.usersBetting(request,response);
  }
   static async offers(request,response){
     let results  = await GuestService.offers(request,response);
     return response.status(200).json({
       results
     })
   }


}
