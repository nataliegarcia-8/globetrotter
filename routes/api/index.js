const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");
const tripsRoutes = require("./trips");


// Book routes
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes);
router.use("/img", require("./photos"))


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
module.exports = router;
