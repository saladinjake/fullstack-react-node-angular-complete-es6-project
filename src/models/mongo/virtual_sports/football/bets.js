const mongoose = require('mongoose')

let userBetsSchema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    gameId: {type: mongoose.SchemaTypes.ObjectId, ref: 'Game'},
    homeTeamGoals: {type: mongoose.SchemaTypes.Number, required: true},
    awayTeamGoals: {type: mongoose.SchemaTypes.Number, required: true},
    sign: {type: mongoose.SchemaTypes.String, required: true}
  });

  let UserBet = mongoose.model('UserBet', userBetsSchema)

  module.exports = UserBet
