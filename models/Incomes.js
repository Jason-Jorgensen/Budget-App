const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomesSchema = new Schema({
    "Current Available Cash": Number,
    "Gross Income": Number,
    "Other Additional Income": Number,
    "Tax Filing Status": String,
    "Yearly Gross Bonuses": Number,
    "state": String,
}, {timestamps: true });

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;