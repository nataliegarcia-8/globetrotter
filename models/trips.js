const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripsSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: true},
  budget: { type: Number},
  expenses: [{ type: Schema.Types.ObjectId, ref: "Expenses"}],
  activities: [{ type: Schema.Types.ObjectId, ref: "Activities"}],
  photos: [{ type: Schema.Types.ObjectId, ref: "Photos"}],
  lat: { type: Number, required: true},
  long: { type: Number, required: true},
  departure: { type: Date, required: true  },
  return: { type: Date, required: true  },
  current: { type: String, required: true}
 

});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
