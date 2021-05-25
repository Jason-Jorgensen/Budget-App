const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    "Rent or Mortgage":  { type: Number, default: 0 },
    "Renters Insurance":  { type: Number, default: 0 },
    "Health Insurance":  { type: Number, default: 0 },
    "Car Insurance":  { type: Number, default: 0 },
    "Car Maintenance":  { type: Number, default: 0 },
    "Gas Expense":  { type: Number, default: 0 },
    "Groceries":  { type: Number, default: 0 },
    "Home Goods":  { type: Number, default: 0 },
    "Hygiene Products":  { type: Number, default: 0 },
    "Restaurants":  { type: Number, default: 0 },
    "Phone Payment":  { type: Number, default: 0 },
    "Internet Bill":  { type: Number, default: 0 },
    "Water/Trash/Sewage":  { type: Number, default: 0 },
    "Electricity":  { type: Number, default: 0 },
    "Natural Gas":  { type: Number, default: 0 },
    "Clothing":  { type: Number, default: 0 },
    "Haircuts":  { type: Number, default: 0 },
    "Self Care":  { type: Number, default: 0 },
    "Dates":  { type: Number, default: 0 },
    "Gifts":  { type: Number, default: 0 },
    "Charity":  { type: Number, default: 0 },
    "Miscellaneous":  { type: Number, default: 0 },
    "Gym":  { type: Number, default: 0 },
    "Video Streaming":  { type: Number, default: 0 },
    "Music":  { type: Number, default: 0 },
    "Costco, Amazon, Etc":  { type: Number, default: 0 },    
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

module.exports = Expenses;