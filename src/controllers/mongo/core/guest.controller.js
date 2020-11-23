
import GuestService from '../../../services/virtualsports/football/guest.service';
export class GuestController{
   static async index(request, response){
     let results  = await GuestService.launch(request,response);
   }

   static async matchesBetsPreview(request, response){
    //this would preview in a modal
    // let currentVirtualMatchesAppetizer = await VirtualSports.find({id : request._id})
   }

   static async about(request, response){

   }

   static termsAndConditions(request,response){}

   static privacyData(request,response){}
   static offers(request,response){}
}
