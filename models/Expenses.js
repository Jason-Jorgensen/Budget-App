const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    name: String,
    ammount: Number,
    date: {
        type:Date,
        default: Date.now,
    }
    
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;