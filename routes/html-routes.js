// Rewrite code (copied from sequelize passport)
var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // if (err) {
    //     return res.status(500).end();
    // }
  
      res.render("signup");
  });    

  app.get("/members", function(req, res) {
        res.render("members");
  });

  // app.get("/login", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

};
