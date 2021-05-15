const router = require("express").Router();
// const userController = require("../../controllers/userController");
const expensesController = require("../../controllers/expensesController");
// const expensesController = require("../../controllers/expensesController");
// const debtsController = require("../../controllers/debtsController");
// const expensesController = require("../../controllers/expensesController");


// Matches with "/api/expenses"
router.route("/")
  .get(expensesController.findAll)
  .post(expensesController.create);

// Matches with "/api/expenses/:id"
router
  .route("/:id")
  .get(expensesController.findById)
  .put(expensesController.update)
  .delete(expensesController.remove);



module.exports = router;
