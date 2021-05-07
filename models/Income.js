const mongoose = require ("mongoose");
const Schema = mongoos.Schema;

const IncomeSchema = new Schema({
    name: String,
    ammount: Number
});

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;