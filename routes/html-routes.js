// Rewrite code (copied from sequelize passport)
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // if (err) {
    //     return res.status(500).end();
    // }
  
      res.render("login");//change to login
  });

  app.get("/login", function(req, res) {
    // if (req.user) {
    //   res.redirect("/members");
    // } else {
      res.render("/login");
    // }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/members", function(req, res) {
    res.render("members");
  });

  app.get("/newuser", function(req, res) {
    res.render("newuser");
  });

};
