const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitiesSchema = new Schema({
  activity: { type: String, required: true },
  date: { type: Date}
});

const Activities = mongoose.model("Activities", activitiesSchema);

module.exports = Activities;