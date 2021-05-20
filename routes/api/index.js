const router = require("express").Router();
const userRoutes = require("./userrt");
const dataRoutes = require("./datart")
const incomeRoutes = require("./incomert");
const expensesRoutes = require("./expensesrt");
const debtsRoutes = require("./debtsrt");
const investmentsRoutes = require("./investmentsrt");
// const { route } = require("./userrt");

// user routes
router.use("/user", userRoutes);

// data routes
router.use("/data", dataRoutes);

// income routes
router.use("/incomes", incomeRoutes);

// expenses routes
router.use("/expenses", expensesRoutes);

// debt routes
router.use("/debts", debtsRoutes)

// debt routes
router.use("/investments", investmentsRoutes)

module.exports = router;
