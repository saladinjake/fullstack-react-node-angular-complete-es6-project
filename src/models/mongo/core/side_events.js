const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const SideEventSchema = new Schema({
  // id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  caption : { type : String, required: false, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

let SideEvent = mongoose.model('SideEvent', SideEventSchema);




module.exports = SideEvent
module.exports.seedEvent = async () => {
  let teamStatsDb = await SideEvent.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/notification.json');
    for (let ab of about) {
      SideEvent.create({
        title: ab.title,
        caption: ab.caption,
        description:ab.description,
        image:ab.image
      })
    }


  }
