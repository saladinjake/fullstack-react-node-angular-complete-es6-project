const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const ModalSchema = new Schema({
  id           : { type : Number, required: true },
  title : { type : String, required: true, trim: true },
  caption : { type : String, required: false, trim: true },
  description : { type : String, required: true, trim: true },
  image         : { type :  String, required: false, trim: true }
});

module.exports = mongoose.model('Modal', ModalSchema);
