const mongoose = require('mongoose')

let fixtureSchema = new mongoose.Schema({
    round: {type: mongoose.SchemaTypes.Number, required: true},
    isActive: {type: mongoose.SchemaTypes.Boolean, default: false},
    isCompleted: {type: mongoose.SchemaTypes.Boolean, default: false},
    betsAcceptedBy: {type: mongoose.SchemaTypes.Date, required: true},
    gameStats: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Game'}]
  });

  let Fixture = mongoose.model('Fixture', fixtureSchema)

  module.exports = Fixture
  module.exports.seedEmptyFixtures = async () => {
    let fixturesDb = await Fixture.find({});

      if (fixturesDb.length > 0) {
            return;
      }

    for(let i = 1; i <= 38; i++) {
      await Fixture.create({
        round: i,
        betsAcceptedBy: new Date('01-01-2019'),
        gameStats: []
      });
    }
  }
