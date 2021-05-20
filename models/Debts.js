const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const DebtsSchema = new Schema({
    "Car Loan Amount":Number,
    "Car Loan Rate":Number,
    "Car Payment":Number,
    "Remaining Months on Car Loan":Number,
    "Total Credit Balance":Number, 
    "Credit Card Int Rate":Number,
    "Credit Card Payment":Number,
    "Mortgage Balance":Number,
    "Mortgage P&I Payment":Number,
    "Remaining Years on Mortgage":Number,
    "Mortgage Rate":Number,
    "Student Loan Balance":Number, 
    "Student Loan Payment":Number, 
    "Student Loan Rate":Number,
    "Other Loan Balance":Number, 
    "Other Loan Rate":Number, 
    "Other Loan Remaining Months":Number,
    "Other Loan Payment":Number,

});

const Debts = mongoose.model("Debts", DebtsSchema);

module.exports = Debts;