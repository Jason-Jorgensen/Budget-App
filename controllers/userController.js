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
  findEmail: function (req, res) {
    console.log("looking up email")
    console.log(req.params)
    dbUser
      .find(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("saving User")
    console.log(req.body)
    dbUser
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // insert: function (req, res) {
  //   dbUser.insertOne(req.body).exec()
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  update: function (req, res) {
    dbUser
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function (req, res) {
  //   dbUser
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};
