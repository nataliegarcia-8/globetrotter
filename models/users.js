const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({

  email: { type: String, required: true, unique: true},
  id: { type: String, required: true },
  date: { type: Date, default: Date.now },
  firstName: { type: String, required: true},
  lastName: { type: String, required: true},
  trips:[{ type: Schema.Types.ObjectId, ref: "Trips"}]

});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
