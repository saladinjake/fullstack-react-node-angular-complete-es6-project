import mongoose from 'mongoose';
import  Location  from './geo_location';
import Currencies  from './currencies';
import Orders  from './jackpots';
import { TokenGenerator } from '../../../utils/tokengen.utils';


const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'
const Schema = mongoose.Schema;


console.log(TokenGenerator)

const UserSchema = new Schema({
  firstname   : { type : String, required: true, trim: true },
  lastname    : { type : String, required: true, trim: true },
  email       : { type : String,  trim: true , required: REQUIRED_VALIDATION_MESSAGE, unique: true},
  username       : { type : String, trim: true },
  password : { type : String,required: true, trim: true },
  address     : { type : String,  trim: true },
  city        : { type : String,  trim: true },
  stateId     : { type : Number },
  country       : Location.schema ,
  currency       : Currencies.schema ,
  zip         : { type : Number},
  gender      : { type : String },
  orderCount  : {  type : Number },
  orders      : [ Orders ],
  is_admin:{type:Boolean, default: false},
  status:{type:String, default: 'Active'},
  isVerified:{type:Boolean, default: false},
  phoneNumber:{ type : String,  trim: true },
  fromMobile:{type:Boolean, default: false},
  user_type:{type:String, default: 'user'},

  dateOfBirth: {type: mongoose.SchemaTypes.Date, required: REQUIRED_VALIDATION_MESSAGE},
  guessedSigns: {type: mongoose.SchemaTypes.Number, default: 0},
  guessedScores: {type: mongoose.SchemaTypes.Number, default: 0},
  points: {type: mongoose.SchemaTypes.Number, default: 0},
  roles: [String]
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
      is_admin: true,
      address:'Lagos state add',
      city:'Lagos',
      zip:'234',
      stateId: 32,
      status: 'Active',
      isVerified: true,

  });


  User.create({
    email: 'admin2@admin.com',
    username: 'Admin',
    firstname: 'Admin',
    lastname: 'Admin',
    password: password,
    roles: ['Admin'],
    is_admin: true,
    address:'Lagos state add',
    city:'Lagos',
    zip:'234',
    stateId: 32,
    status: 'Active',
    isVerified: true
  })



  })



}
