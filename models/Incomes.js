const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const IncomesSchema = new Schema({
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

const Incomes = mongoose.model("Incomes", IncomesSchema);

module.exports = Incomes;