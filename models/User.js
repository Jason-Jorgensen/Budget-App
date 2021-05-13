const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  date: { type: Date, default: Date.now },
  expenses: [
    {type: Schema.Types.ObjectId,
    ref: "Expenses"}
  ],
  income: [
    {type: Schema.Types.ObjectId,
    ref: "Income"}
  ],
  debts: [
    {type: Schema.Types.ObjectId,
      ref:"Debts"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
