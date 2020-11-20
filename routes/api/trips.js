const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");
const activitiesController = require("../../controllers/activitiesController");


// Matches with "/api/trips"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .post(activitiesController.create)
  
  .put(tripsController.update)
  .delete(tripsController.remove);

module.exports = router;
