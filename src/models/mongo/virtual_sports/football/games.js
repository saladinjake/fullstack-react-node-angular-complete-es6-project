const mongoose = require('mongoose')

let gameSchema = new mongoose.Schema({
    homeTeamId: {type: mongoose.SchemaTypes.ObjectId, ref: 'Team'},
    awayTeamId: {type: mongoose.SchemaTypes.ObjectId, ref: 'Team'},
    homeTeamGoals: {type: mongoose.SchemaTypes.Number, required: false},
    awayTeamGoals: {type: mongoose.SchemaTypes.Number, required: false},
    sign: {type: mongoose.SchemaTypes.String, required: false}

  });

  let Game = mongoose.model('Game', gameSchema)

  module.exports = Game;
