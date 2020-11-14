const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripsSchema = new Schema({
  city: { type: String, required: true, unique: true},
  lat: { type: Number},
  long: { type: Number},
  departure: { type: Date, required: true  },
  return: { type: Date, required: true  }

});

const Trips = mongoose.model("Trips", tripsSchema);

module.exports = Trips;
