const router = require("express").Router();
const userController = require("../../controllers/userController");
const incomeController = require("../../controllers/incomeController");
const expensesController = require("../../controllers/expensesController");
const debtsController = require("../../controllers/debtsController");
// const incomeController = require("../../controllers/incomeController");


// Matches with "/api/income"
router.route("/")
  .get(incomeController.findAll)
  .post(incomeController.create);

// Matches with "/api/income/:id"
router
  .route("/:id")
  .get(incomeController.findById)
  .put(incomeController.update)
  .delete(incomeController.remove);



module.exports = router;
