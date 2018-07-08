//recheck code
// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

// Set up port
var PORT = process.env.PORT || 8080;

// Import models
var db = require("./models");


// Set up express app
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Use passport
app.use(passport.initialize());
app.use(passport.session());

// Require routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "dogs_DB"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main page
app.get("/", function(req, res) {
  connection.query("SELECT * FROM User;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("login", { User: data });
  });
});


// Start server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
