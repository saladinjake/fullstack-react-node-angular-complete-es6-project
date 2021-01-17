const mongoose = require('mongoose'),
   Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const AboutSchema = new Schema({
  // id           : { type : Number, required: true },
  firstHeading : { type : String, required: true, trim: true },
  firstDescription : { type : String, required: true, trim: true },
  firstHeroImage         : { type :  String, required: false, trim: true },


  secondHeading : { type : String, required: true, trim: true },
  secondDescription : { type : String, required: true, trim: true },
  secondSideImage         : { type :  String, required: false, trim: true },

  thirdHeading : { type : String, required: true, trim: true },
  thirdDescription : { type : String, required: true, trim: true },
  thirdSideImage         : { type :  String, required: false, trim: true },

  forthHeading : { type : String, required: true, trim: true },
  forthDescription : { type : String, required: true, trim: true },
  forthSideImage         : { type :  String, required: false, trim: true }


});

let About = mongoose.model('About', AboutSchema);



module.exports = About
module.exports.seedAbout = async () => {
  let teamStatsDb = await About.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/about.json');
    for (let ab of about) {
      About.create({
        firstHeading: ab.firstHeading,
        firstDescription: ab.firstDescription,
        firstHeroImage:ab.firstHeroImage,

        secondHeading: ab.secondHeading,
        secondDescription: ab.secondDescription,
        secondSideImage: ab.secondSideImage,

        thirdHeading:ab.thirdHeading,
        thirdDescription: ab.thirdDescription,
        thirdSideImage: ab.thirdSideImage,

        forthHeading:ab.forthHeading,
        forthDescription:ab.forthDescription,
        forthSideImage: ab.forthSideImage
      })
    }


  }
