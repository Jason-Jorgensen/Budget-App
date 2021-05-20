const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestmentsSchema = new Schema({
    "Current Retirement Balance":Number,
    "Your 401K Contribution %":Number,
    "Employer 401K Contribution %":Number,
    "What Kind of Investor are You?":String
});

const Investments = mongoose.model("Investments", InvestmentsSchema);

module.exports = Investments;