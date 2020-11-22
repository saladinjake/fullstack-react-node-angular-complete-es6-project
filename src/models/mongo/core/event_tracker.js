const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const EventSchema = new Schema({
  id           : { type : Number, required: true },
  action : { type : String, required: true, trim: true },
  user : { type : String, required: false, trim: true },
  status : { type : String, required: true, trim: true },
  date         : { type :  String, required: true, trim: true }
});

module.exports = mongoose.model('Event', EventSchema);
