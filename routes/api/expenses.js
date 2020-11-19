const router = require("express").Router();
const expensesController = require("../../controllers/expensesController");

// Matches with "/api/expenses"
router.route("/")
  .get(expensesController.findAll)
  .post(expensesController.create);

// Matches with "/api/expenses/:id"
router
  .route("/:id")
  .get(expensesController.findById)
  .post(expensesController.create)
  .put(expensesController.update)
  .delete(expensesController.remove);

module.exports = router;
