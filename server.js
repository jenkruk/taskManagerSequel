// Header space for easier readability


// Require express
var express = require ("express");

// Define Port
var PORT = process.env.PORT || 8080;

// Use express for app
var app = express();

// Require models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/task_routes");
app.use(routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
});
