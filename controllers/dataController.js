const db = require("../models/");
const dbUser = db.User;

// Defining methods for the user Controller
module.exports = {
  findAll: function (req, res) {
    console.log("findAll")
    console.log(req)
    dbUser
      .find({email: req.query})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("looking by ID")
    console.log(req.params)
    dbUser
      .findById(req.params.id)
      .populate([
        {"path": "incomes"},
        {"path": "debts"},
        {"path": "expenses"},
        {"path": "investments"}
      ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  
};
