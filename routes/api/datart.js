const router = require("express").Router();

const dataController = require("../../controllers/dataController");


// Matches with "/api/data"
router.route("/")
  .get(dataController.findAll)
  

// Matches with "/api/data/:id"
router
  .route("/:id")
  .get(dataController.findById)
  



module.exports = router;