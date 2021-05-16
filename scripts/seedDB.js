const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/budget-app"
);

const userSeed = [
  {
    email: "test@test.com"
  },
]

const incomesSeed = [
  {
    "salary": 200,
    "bonus": 100,
    "personalCont": 3,
    "employerCont": 3,
    "additionalIncome": 120,
    "cash": 10000,
    "retirementBalance": 40000,
    "investorType": "agresive",
  }
]

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