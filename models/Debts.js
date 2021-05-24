const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const DebtsSchema = new Schema({
    "Car Loan Amount":  { type: Number, default: 0 },
    "Car Loan Rate":  { type: Number, default: 0 },
    "Car Payment":  { type: Number, default: 0 },
    "Remaining Months on Car Loan":  { type: Number, default: 0 },
    "Total Credit Balance":  { type: Number, default: 0 }, 
    "Credit Card Int Rate":  { type: Number, default: 0 },
    "Credit Card Payment":  { type: Number, default: 0 },
    "Mortgage Balance":  { type: Number, default: 0 },
    "Mortgage P&I Payment":  { type: Number, default: 0 },
    "Remaining Years on Mortgage":  { type: Number, default: 0 },
    "Mortgage Rate":  { type: Number, default: 0 },
    "Student Loan Balance":  { type: Number, default: 0 }, 
    "Student Loan Payment":  { type: Number, default: 0 }, 
    "Student Loan Rate":  { type: Number, default: 0 },
    "Other Loan Balance":  { type: Number, default: 0 }, 
    "Other Loan Rate":  { type: Number, default: 0 }, 
    "Other Loan Remaining Months":  { type: Number, default: 0 },
    "Other Loan Payment":  { type: Number, default: 0 },

});

const Debts = mongoose.model("Debts", DebtsSchema);

module.exports = Debts;