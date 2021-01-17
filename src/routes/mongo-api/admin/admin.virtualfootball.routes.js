import dotenv from 'dotenv';
dotenv.config();
import Controllers  from '../../../controllers/mongo/mongo.controller';
import TokenVerification from '../../../middlewares/mongo/core/auth.middleware'
const AdminController =  Controllers.AdminControllers;
const AdminVirtualityController  = Controllers.AdminControllers.virtualgames.football;
const  {
         TeamController,
         TeamStatsController,
         FixtureController,
         GameRoundsController,
         UserBetsController,

} = AdminVirtualityController




export class AdminVirtualFootballRoutes{
  constructor(router) {
    this.router = router;
  }
  attachRoutes(){

    this.router.get('/all-leagues',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],TeamController.getAllTeams)
    this.router.get('/get-leagues/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],TeamController.getTeam)
    this.router.post('/add-leagues',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],TeamController.addNewTeam)
    this.router.patch('/edit-leagues/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],TeamController.editTeam)
    this.router.delete('/delete-leagues/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],TeamController.deleteTeam)

    // this.router.get('/all-teams',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],LeagueController.getAllLeagues)
    // this.router.get('/get-teams/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],LeagueController.getLeague)
    // this.router.post('/add-teams',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],LeagueController.addNewLeague)
    // this.router.patch('/edit-teams/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],LeagueController.editLeague)
    // this.router.delete('/delete-teams/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],LeagueController.deleteLeague)

    //rounds
    this.router.post('/save-new-rounds',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],GameRoundsController.makeRounds)
    this.router.get('/all-active-rounds',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],GameRoundsController.getActiveRounds)
    this.router.post('/rounds-completed',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],GameRoundsController.completedRounds)
    // this.router.delete('/delete-rounds/:id',[ TokenVerification.userAuthentication, TokenVerification.adminAuthentication],GameRoundsController.deleteTeam)

    //set bets by 1x2
    //set bets by no of goalsScored
    // set bets by no of throwings
    //set bets by wins in first half
    //set bets by 2nd half wins
  }
}
