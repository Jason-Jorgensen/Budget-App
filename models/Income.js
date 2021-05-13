const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    salary: Number,
    bonus: Number,
    personalCont: Number,
    employerCont: Number,
    additionalIncome: Number,
    cash: Number,
    retirementBalance: Number,
    investorType: String,
    date: {
        type:Date,
        default: Date.now,
    }
});

const Income = mongoose.model("Income", IncomeSchema);

module.exports = Income;