// Header space for easier readability

// Inside tasks.js, import orm.js into tasks.js
var orm = require("../config/orm");

// Also inside tasks.js, create the code that will call the ORM functions using task specific input for the ORM.
var Task = {
    all: function(cb) {
      orm.all("tasks", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("tasks", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("tasks", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("tasks", condition, function(res) {
        cb(res);
      });
    }
  };

// Export at the end of the tasks.js file.
module.exports = Task;
