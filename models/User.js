const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  date: { type: Date, default: Date.now },
  debts: [
    {type: Schema.Types.ObjectId,
    ref: "Debts"}
  ],
  income: [
    {type: Schema.Types.ObjectId,
    ref: "Income"}
  ],
  credit: [
    {type:Schema.Types,ObjectId,
      ref:"Credit"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
