// Rewrite code (copied from sequelize passport)
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // If sign in is successful . . .
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });    

  // app.get("/members", function(req, res) {
  //       res.render("members");
  // });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", isAuthenticated, function(req, res) {
    res.redirect("members");
  });

};
