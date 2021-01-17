const mongoose = require('mongoose')

let LeagueSchema = new mongoose.Schema({
    leagueName: {type: String}
    clubs: [Teams], //{type: mongoose.SchemaTypes.ObjectId, ref: 'Team'},

});

module.exports = League
// module.exports.seedMenu = async () => {
//   let LeagueStatsDb = await League.find({});
//
//   if (LeagueStatsDb.length > 0) {
//     return;
//   }
//
//
//     let about = require('../db/data/core/leagues.json');
//     for (let ab of about) {
//       League.create({
//         title: ab.title,
//         teams_category: ab.teams,
//
//       })
//     }
//
//
//   }
