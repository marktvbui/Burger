// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
  } else {
    connection = mysql.createConnection({
  host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "etodwl7togs00qju",
  password: "q0vc46hy1k7dz4mn",
  database: "burgers_db",
  port: "3306"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
