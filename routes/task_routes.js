// Header space for easier readability

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Require Express for the router
var express = require("express");

// Create the express router, and export at the end of this file
var router = express.Router();

// Require the models
var db = require("../models");

// Routes
// =============================================================

// Default
router.get("/", function(req, res) {
  db.TaskModel.findAll({}).then(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

  // GET route for getting all of the tasks
  router.get("/api/tasks", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.TaskModel.findAll({}).then(function(result) {
      // We have access to the tasks as an argument inside of the callback function
      res.json(result);
    });
  });

  // POST route for saving a new tasks
  router.post("/api/tasks", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.TaskModel.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(result) {
      // We have access to the new task as an argument inside of the callback function
      res.json(result);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node router
        res.json(err);
      });
  });

    // PUT route for updating tasks. We can get the updated tasks data from req.body
    router.put("/api/tasks", function(req, res) {

      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.TaskModel.update({
        text: req.body.text,
        complete: req.body.complete
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(result) {
        res.json(result);
      })
        .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node router
          res.json(err);
        });
    });

  // DELETE route for deleting tasks. We can get the id of the task to be deleted from
  // req.params.id
  router.delete("/api/tasks/:id", function(req, res) {
    // We just have to specify which task we want to destroy with "where"
    db.TaskModel.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });

  });


// Export routes for server.js to use.
module.exports = router;
