// Header space for easier readability

// Set up MySQL connection.
var mysql = require("mysql");
if (process.env.JAWSDB_URL){
  var db = mysql.createConnection(process.env.JAWSDB_URL)
} else {
var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "taskManager_db"
});
}

// Make connection.
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

// Export the connection for the orm to use
module.exports = db;
