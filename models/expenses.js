const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expensesSchema = new Schema({
  expense: { type: Number, required: true},
  category: { type: String, required: true }
});

const Expenses = mongoose.model("Expenses", expensesSchema);

module.exports = Expenses;
