import mongoose from 'mongoose';
import  Location  from './geo_location';
import Currencies  from './currencies';
import Orders  from './jackpots';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName   : { type : String, required: true, trim: true },
  lastName    : { type : String, required: true, trim: true },
  email       : { type : String, required: true, trim: true },
  address     : { type : String, required: true, trim: true },
  city        : { type : String, required: true, trim: true },
  stateId     : { type : Number, required: true },
  country       : Location.schema ,
  currency       : Currencies.schema ,
  zip         : { type : Number, required: true },
  gender      : { type : String },
  orderCount  : {  type : Number },
  orders      : [ Orders ],
});

module.exports = mongoose.model('User', UserSchema, 'users');
