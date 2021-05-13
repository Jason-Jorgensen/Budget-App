const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const DebtsSchema = new Schema({
    name: String,
    ammount: Number,
    interest: Number,
    minpayment: Number,
    date: {
        type:Date,
        default: Date.now,
    }
});

const Debts = mongoose.model("Debts", DebtsSchema);

module.exports = Debts;