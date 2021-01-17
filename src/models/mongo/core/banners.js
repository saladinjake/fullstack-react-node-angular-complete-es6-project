const mongoose = require('mongoose'),
   Schema = mongoose.Schema,
     ObjectId = Schema.ObjectId;

const BannersSchema = new Schema({

  title : { type : String, required: true, trim: true },
  caption : { type : String, required: false, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

// module.exports = mongoose.model('Banner', BannersSchema);

let Banner = mongoose.model('Banner', BannersSchema);

module.exports = Banner
module.exports.seedBanner = async () => {
  let teamStatsDb = await Banner.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/banners.json');
    for (let ab of about) {
      Banner.create({
        title: ab.title,
        caption: ab.caption,
        description:ab.description,
        image:ab.image
      })
    }


  }
