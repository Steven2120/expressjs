var express = require("express");
var router = express.Router();

/* GET users listing. */

// Stretch Goal
router.get("/", function (req, res, next) {
  res.render("users", { title: "Users" });
});

router.get("/myname", (req, res, next) => {
  res.send("Steven Moyano");
});

router.get("/myfavoritemovies", (req, res, next) => {
  res.json(["Topgun", "Avatar", "Godfather"]);
});

module.exports = router;
