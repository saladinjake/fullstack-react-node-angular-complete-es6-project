const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const NotificationSchema = new Schema({
  // id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  caption : { type : String, required: false, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

// module.exports = mongoose.model('Notification', NotificationSchema);



let Notification = mongoose.model('Notification', NotificationSchema);

module.exports = Notification
module.exports.seedNotification = async () => {
  let teamStatsDb = await Notification.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/notification.json');
    for (let ab of about) {
      Notification.create({
        title: ab.title,
        caption: ab.caption,
        description:ab.description,
        image:ab.image
      })
    }


  }
