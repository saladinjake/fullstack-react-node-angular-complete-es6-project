import mongoose from 'mongoose';
import { Location } from './geo_location';
import { Currencies } from './currencies';
import {Orders } from './jackpots';

Schema = mongoose.Schema,
Location = require('./geo_location');


const CustomerSchema = new Schema({
  firstName   : { type : String, required: true, trim: true },
  lastName    : { type : String, required: true, trim: true },
  email       : { type : String, required: true, trim: true },
  address     : { type : String, required: true, trim: true },
  city        : { type : String, required: true, trim: true },
  stateId     : { type : Number, required: true },
  country       : Location.schema ,
  currency       : Currency.schema ,
  zip         : { type : Number, required: true },
  gender      : { type : String },
  orderCount  : {  type : Number },
  orders      : [ Orders ],
});

module.exports = mongoose.model('Customer', CustomerSchema, 'customers');
