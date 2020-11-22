const mongoose = require('mongoose')

let teamSchema = new mongoose.Schema({
      name: { type: mongoose.SchemaTypes.String, required: true },
      shortName: { type: mongoose.SchemaTypes.String, required: true },
      code: { type: mongoose.SchemaTypes.String, required: true },
      seasonStats: { type: mongoose.SchemaTypes.ObjectId, ref: 'TeamStats' }
});

let Team = mongoose.model('Team', teamSchema)

module.exports = Team
module.exports.seedTeams = async () => {
      let teamsDb = await Team.find({});

      if (teamsDb.length > 0) {
            return;
      }

      let teams = require('../data/teams.json');
      for (let team of teams) {
            Team.create({
                  name: team.name,
                  shortName: team.short_name,
                  code: team.club_code
            })
      }
}
