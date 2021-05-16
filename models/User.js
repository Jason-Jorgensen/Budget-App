const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  expenses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Expenses"
    }
  ],
  incomes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Incomes"
    }
  ],
  debts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Debts"
    }
  ],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
