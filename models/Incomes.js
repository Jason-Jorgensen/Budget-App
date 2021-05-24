const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomesSchema = new Schema({
    
    "Gross Income":  { type: Number, default: 0 },
    "Yearly Gross Bonuses":  { type: Number, default: 0 },
    "Other Additional Income":  { type: Number, default: 0 },
    "Current Available Cash":  { type: Number, default: 0 },
    "Tax Filing Status": String,
    "state": String,
}, {timestamps: true });

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;