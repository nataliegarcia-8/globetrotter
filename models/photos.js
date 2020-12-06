const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photosSchema = new Schema({
  photo: { type: String, required: true }
});

const Photos = mongoose.model("Photos", photosSchema);

module.exports = Photos;