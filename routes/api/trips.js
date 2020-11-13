const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// Matches with "/api/users"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
