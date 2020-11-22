const mongoose = require('mongoose');
const Team = require('./Team');

let teamStatsSchema = new mongoose.Schema({
  team: { type: mongoose.SchemaTypes.ObjectId, ref: 'Team' },
  gamesPlayed: { type: mongoose.SchemaTypes.Number, default: 0 },
  wins: { type: mongoose.SchemaTypes.Number, default: 0 },
  draws: { type: mongoose.SchemaTypes.Number, default: 0 },
  losses: { type: mongoose.SchemaTypes.Number, default: 0 },
  goalsScored: { type: mongoose.SchemaTypes.Number, default: 0 },
  goalsConceded: { type: mongoose.SchemaTypes.Number, default: 0 },
  points: { type: mongoose.SchemaTypes.Number, default: 0 }
});

let TeamStats = mongoose.model('TeamStats', teamStatsSchema)

module.exports = TeamStats
module.exports.seedTeamStats = async () => {
  let teamStatsDb = await TeamStats.find({});

  if (teamStatsDb.length > 0) {
    return;
  }

  let teamStats = require('../data/team-stats.json');
  for (let stat of teamStats) {
    let teamId = await Team.findOne({ 'name': stat.name }, '_id');

    TeamStats.create({
      team: teamId,
      gamesPlayed: stat.games_played,
      wins: stat.wins,
      draws: stat.draws,
      losses: stat.losses,
      goalsScored: stat.goals_scored,
      goalsConceded: stat.goals_conceded,
      points: stat.points
    })
  }
}
