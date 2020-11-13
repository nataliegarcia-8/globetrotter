const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove)
  .post(usersController.create);

module.exports = router;
