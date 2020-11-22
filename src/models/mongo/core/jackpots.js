const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

//console.log(State);
const OrderSchema = new Schema({
  user_id  : { type : String, required: true, trim: true },
  bet_product  : { type : String, required: true, trim: true },
  stake_price    : { type : Number },
  bet_quantity : { type : Number },
  expected_winning_price : { type : Number }
});
