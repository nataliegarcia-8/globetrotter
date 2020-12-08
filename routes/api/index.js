const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");
const tripsRoutes = require("./trips");
const expensesRoutes = require("./expenses");
const activitiesRoutes = require("./activities");
const photosRoutes = require("./photos");


// Book routes
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes);
router.use("/expenses", expensesRoutes);
router.use("/activities", activitiesRoutes);
router.use("/photos", photosRoutes);




router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
module.exports = router;
