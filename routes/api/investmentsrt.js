const router = require("express").Router();
// const userController = require("../../controllers/userController");
// const incomeController = require("../../controllers/incomeController");
// const expensesController = require("../../controllers/expensesController");
// const debtsController = require("../../controllers/debtsController");
// const userController = require("../../controllers/userController");
const investmentsController = require("../../controllers/investmentsController");


// Matches with "/api/investments"
router.route("/")
  .get(investmentsController.findAll)
  .post(investmentsController.create);

// Matches with "/api/expenses/:id"
router
  .route("/:id")
  .get(investmentsController.findById)
  .put(investmentsController.update)
  .delete(investmentsController.remove);



module.exports = router;