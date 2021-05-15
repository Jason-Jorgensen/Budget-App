const router = require("express").Router();
// const userController = require("../../controllers/userController");
// const incomeController = require("../../controllers/incomeController");
// const expensesController = require("../../controllers/expensesController");
const debtsController = require("../../controllers/debtsController");
// const incomeController = require("../../controllers/incomeController");


// Matches with "/api/debts"
router.route("/")
  .get(debtsController.findAll)
  .post(debtsController.create);

// Matches with "/api/debts/:id"
router
  .route("/:id")
  .get(debtsController.findById)
  .put(debtsController.update)
  .delete(debtsController.remove);



module.exports = router;
