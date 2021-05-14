const router = require("express").Router();
const userRoutes = require("./userrt");
const incomeRoutes = require("./incomert");

// user routes
router.use("/user", userRoutes);

// income routes
router.use("/income", incomeRoutes);

module.exports = router;
