const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestmentsSchema = new Schema({
    "Current Retirement Balance": { type: Number, default: 0 },
    "Your 401K Contribution %": { type: Number, default: 0 },
    "Employer 401K Contribution %": { type: Number, default: 0 },
    "What Kind of Investor are You?":String
});

const Investments = mongoose.model("Investments", InvestmentsSchema);

module.exports = Investments;