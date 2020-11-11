const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const user = mongoose.model("user", userSchema);

module.exports = user;
