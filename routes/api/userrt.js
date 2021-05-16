const router = require("express").Router();
const userController = require("../../controllers/userController");
const incomeController = require("../../controllers/incomeController");
const expensesController = require("../../controllers/expensesController");
const debtsController = require("../../controllers/debtsController");
// const userController = require("../../controllers/userController");


// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Matches with "/api/user/:email"
router
  .route("/:email")
  .get(userController.findOne);

module.exports = router;
