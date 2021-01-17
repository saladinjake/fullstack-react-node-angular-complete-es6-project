const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const OfferSchema = new Schema({
  // id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

// module.exports = mongoose.model('Notification', NotificationSchema);



let Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer
module.exports.seedOffer = async () => {
  let teamStatsDb = await Offer.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/offers.json');
    for (let ab of about) {
      Offer.create({
        title: ab.title,
        description:ab.description,
        image:ab.image
      })
    }


  }
