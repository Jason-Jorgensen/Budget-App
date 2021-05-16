const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget-app"
);

const userSeed = 
  {
    email: "test@test.com"
  },


const incomesSeed = 
  {
    "Gross Income":100000,
    "Yearly Gross Bonuses":10000,
    "Other Additional Income":5000,
    "Current Available Cash":50000,
    "Tax Filing Status":"Single",
    "state":"UT",
  }


const expensesSeed = 
  {
"Rent or Mortgage":1000,
"Renters Insurance":60,
"Health Insurance":200,
"Car Insurance":80,
"Car Maintenance":50,
"Gas Expense":100,
"Groceries":300,
"Home Goods":200,
"Hygiene Products":50,
"Restaurants":200,
"Phone Payment":50,
"Internet Bill":50,
"Water/Trash/Sewage":20,
"Electricity":50,
"Natural Gas":60,
"Clothing":50,
"Haircuts":30,
"Self Care":30,
"Dates":50,
"Gifts":50,
"Charity":600,
"Miscellaneous":300,
"HOA":40,
"Gym":15,
"Video Streaming":20,
"Music":10,
"Costco, Amazon, Etc.":10
  }


const debtsSeed = 
  {
"Car Loan Amount":4000,
"Car Loan Rate %":2.9,
"Car Payment":180,
"Remaining Months on Car Loan":24,
"Total Credit Balance":10000,
"Credit Card Int. Rate":18,
"Credit Card Payment":450,
"Mortgage Balance":150000,
"Mortgage P&I Payment":800,
"Remaining Years on Mortgage":20,
"Mortgage Rate %":2.9,
"Student Loan Balance":9000,
"Student Loan Payment":500,
"Student Loan Rate %":3,
"Other Loan Balance":5000,
"Other Loan Rate %":3,
"Other Loan Remaining Months":48,
"Other Loan Payment":200,

  }



const investmentsSeed

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Incomes
  .remove({})
  .then(() => db.Incomes.collection.insertMany(incomesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });