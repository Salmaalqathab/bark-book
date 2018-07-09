//REVIEW CODE

var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  // Add an entry
  app.post("/api/signup", function(req, res) {
    console.log("newDog Data:");
    console.log(req.body);
    db.User.create({
    
      name: req.body.name,
      dogName: req.body.dogName,
      favorite_park: req.body.favorite_park,
      preferred_time: req.body.preferred_time,
      size: req.body.size,
      personality: req.body.personality,
      activity_level: req.body.activity_level
    })
      .then(function() {
        res.render("members");
      });
  });

  // app.post("/api/signup", function(req, res) {
  //   console.log(req.body);
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(function() {
  //     res.redirect(307, "/api/login");
  //   }).catch(function(err) {
  //     console.log(err);
  //     res.json(err);
  //   });
  // });

  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     res.json({});
  //   }
  //   else {
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

};
