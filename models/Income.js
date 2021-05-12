const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    name: String,
    ammount: Number,
    date: {
        type:Date,
        default: Date.now,
    }
});

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;