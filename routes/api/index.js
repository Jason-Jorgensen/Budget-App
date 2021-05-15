const router = require("express").Router();
const userRoutes = require("./userrt");
const incomeRoutes = require("./incomert");
const expensesRoutes = require("./expensesrt");
const debtsRoutes = require("./debtsrt")
// const { route } = require("./userrt");

// user routes
router.use("/user", userRoutes);

// income routes
router.use("/income", incomeRoutes);

// expenses routes
router.use("/expenses", expensesRoutes);

// debt routes
router.use("/debts", debtsRoutes)

module.exports = router;
