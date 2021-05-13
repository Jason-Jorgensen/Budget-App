const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestmentsSchema = new Schema({
    name: String,
    investorType: String,
    date: {
        type: Date,
        default: Date.now,
    }
});

const Investments = mongoose.model("Investments", InvestmentsSchema);

module.exports = Investments;