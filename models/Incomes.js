const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomesSchema = new Schema({
    
    "Gross Income": Number,
    "Yearly Gross Bonuses": Number,
    "Other Additional Income": Number,
    "Current Available Cash": Number,
    "Tax Filing Status": String,
    "state": String,
}, {timestamps: true });

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;