const mongoose = require('mongoose'),
 Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId;

const CurrencySchema = new Schema({
  id           : { type : Number, required: true },
  abbreviation : { type : String, required: true, trim: true },
  name         : { type :  String, required: true, trim: true }
});

module.exports = mongoose.model('Currency', CurrencySchema);
