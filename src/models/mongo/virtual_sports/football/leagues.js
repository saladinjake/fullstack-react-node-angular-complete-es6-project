const mongoose = require('mongoose')

let LeagueSchema = new mongoose.Schema({
    leagueName: {type: String}
    clubs: [Teams], //{type: mongoose.SchemaTypes.ObjectId, ref: 'Team'},

});

  let League = mongoose.model('League', LeagueSchema)

  module.exports = League;
