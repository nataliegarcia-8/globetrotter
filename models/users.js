const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({

  email: { type: String, required: true, unique: true},
  cognitoId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  firstName: { type: String},
  lastName: { type: String},
  trips:[{ type: Schema.Types.ObjectId, ref: "Trips"}]

});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
