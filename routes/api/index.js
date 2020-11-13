const path = require("path");
const router = require("express").Router();
const usersRoutes = require("./users");

// Book routes
router.use("/users", usersRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
module.exports = router;
