const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    "Rent or Mortgage":Number,
    "Renters Insurance":Number,
    "Health Insurance":Number,
    "Car Insurance":Number,
    "Car Maintenance":Number,
    "Gas Expense":Number,
    "Groceries":Number,
    "Home Goods":Number,
    "Hygiene Products":Number,
    "Restaurants":Number,
    "Phone Payment":Number,
    "Internet Bill":Number,
    "Water/Trash/Sewage":Number,
    "Electricity":Number,
    "Natural Gas":Number,
    "Clothing":Number,
    "Haircuts":Number,
    "Self Care":Number,
    "Dates":Number,
    "Gifts":Number,
    "Charity":Number,
    "Miscellaneous":Number,
    "Gym":Number,
    "Video Streaming":Number,
    "Music":Number,
    "Costco, Amazon, Etc":Number
    
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;