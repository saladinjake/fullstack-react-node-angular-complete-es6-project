export class TeamController{
  static async getAllTeams(request, response){
    try {
      let teams = await Team.find({}, 'name code')

      if (teams.length === 0) {
        return response.status(404).json({
          success: false,
          message: 'No teams in database',
          data: {}
        })
      }

      return response.status(200).json({
        success: true,
        message: '',
        data: teams
      })

    } catch (err) {
      return response.status(500).json({
        success: false,
        message: "SOME ERROR OCCURED",
        data: {}
      })
    }
  }

  static async getTeam(request, response){}
  static async addNewTeam(request, response){}
  static async editTeam(request, response){}
  static async deleteTeam(request, response){}
}
