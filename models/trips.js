const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripsSchema = new Schema({
  city: { type: String, required: true, unique: true},
  state: { type: String, required: true, unique: true},
  budget: { type: Number},
  lat: { type: Number, required: true},
  long: { type: Number, required: true},
  departure: { type: Date, required: true  },
  return: { type: Date, required: true  }

});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
