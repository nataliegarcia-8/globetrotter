const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");
const tripsRoutes = require("./trips");
const expensesRoutes = require("./expenses");
const activitiesRoutes = require("./activities");



// Book routes
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes);
<<<<<<< HEAD
router.use("/img", require("./photos"))
=======
router.use("/expenses", expensesRoutes);
router.use("/activities", activitiesRoutes);

>>>>>>> 415fd428c1e486f1ac09c9f568c14a012a099262


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
module.exports = router;
