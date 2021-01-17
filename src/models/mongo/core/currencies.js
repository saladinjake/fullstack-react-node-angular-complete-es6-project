const mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

const CurrencySchema = new Schema({
  abbreviation : { type : String, required: true, trim: true },
  name         : { type :  String, required: true, trim: true }
});

let Currency = mongoose.model('Currency', CurrencySchema);




module.exports = Currency
module.exports.seedCurrency = async () => {
  let teamStatsDb = await Currency.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/currencies.json');
    for (let ab of about) {
      Currency.create({
        abbreviation: ab.abbreviation,
        name: ab.name,

      })
    }


  }
