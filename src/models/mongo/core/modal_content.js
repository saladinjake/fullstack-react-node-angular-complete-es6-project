const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const ModalSchema = new Schema({
  // id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  caption : { type : String, required: false, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

// module.exports = mongoose.model('Modal', ModalSchema);


let Modal = mongoose.model('Modal', ModalSchema);

module.exports = Modal
module.exports.seedModal = async () => {
  let teamStatsDb = await Modal.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/modals.json');
    for (let ab of about) {
      Modal.create({
        title: ab.title,
        caption: ab.caption,
        description:ab.description,
        image:ab.image
      })
    }


  }
