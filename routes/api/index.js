const router = require("express").Router();
const userRoutes = require("./user");
const incomeRoutes = require("./income");

// user routes
router.use("/user", userRoutes);

// income routes
router.use("/income", incomeRoutes);

module.exports = router;
