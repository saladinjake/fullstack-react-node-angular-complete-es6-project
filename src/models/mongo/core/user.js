import mongoose from 'mongoose';
import  Location  from './geo_location';
import Currencies  from './currencies';
import Orders  from './jackpots';
import TokenGenerator from '../../../utils/tokengen.utils';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstname   : { type : String, required: true, trim: true },
  lastname    : { type : String, required: true, trim: true },
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


let User = mongoose.model('User', UserSchema)

module.exports = User
module.exports.seedAdminUser = () => {
  User.find({}).then(users => {
    if (users.length > 0) return

    // let salt = encryption.generateSalt()
    let password = TokenGenerator.hashPassword('admin')

    User.create({
      email: 'admin@admin.com',
      username: 'Admin',
      firstname: 'Admin',
      lastname: 'Admin',
      password: password,
      roles: ['Admin'],
      is_admin: true
    })
  })
}
