// Header space for easier readability

// Inside the burgers_controller.js file, import the following:
// Express
var express = require("express");

var router = express.Router();
// task.js
// Create the router for the app, and export the router at the end of your file.
// Import the model (Task.js) to use its database functions.
var Grape = require("../models/Grape");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Grape.all(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tasks", function(req, res) {
  Grape.create([
    "name", "completed"
  ], [
    req.body.name, false
  ], function(result) {
    // Send back the ID of the new task
    res.json({ id: result.insertId });
  });
});

router.put("/api/tasks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  Grape.update({
    completed: req.body.completed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tasks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  Grape.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
