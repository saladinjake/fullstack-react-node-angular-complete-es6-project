const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const MenuSchema = new Schema({
  id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  link : { type : String, required: false, trim: true },
  
});

module.exports = mongoose.model('Menu', MenuSchema);
