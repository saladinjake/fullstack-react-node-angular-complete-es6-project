const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const MenuSchema = new Schema({
  title : { type : String, required: true, trim: true },
  link : { type : String, required: false, trim: true },

});

let Menu = mongoose.model('Menu', MenuSchema);


module.exports = Menu
module.exports.seedMenu = async () => {
  let teamStatsDb = await Menu.find({});

  if (teamStatsDb.length > 0) {
    return;
  }


    let about = require('../db/data/core/menu.json');
    for (let ab of about) {
      Menu.create({
        title: ab.title,
        link: ab.link,

      })
    }


  }
