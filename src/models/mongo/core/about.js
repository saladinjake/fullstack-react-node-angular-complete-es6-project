const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const AboutSchema = new Schema({
  id           : { type : Number, required: true },
  firstHeading : { type : String, required: true, trim: true },
  firstDscription : { type : String, required: true, trim: true },
  firstHeroImage         : { type :  String, required: false, trim: true },


  secondHeading : { type : String, required: true, trim: true },
  secondDscription : { type : String, required: true, trim: true },
  secondSideImage         : { type :  String, required: false, trim: true },

  thirdHeading : { type : String, required: true, trim: true },
  thirdDscription : { type : String, required: true, trim: true },
  thirdSideImage         : { type :  String, required: false, trim: true },

  forthHeading : { type : String, required: true, trim: true },
  forthDscription : { type : String, required: true, trim: true },
  forthSideImage         : { type :  String, required: false, trim: true }


});

module.exports = mongoose.model('About', AboutSchema);
