const fs = require("fs");
const mysql = require("mysql2");
const DB_JSON_FILENAME = __dirname + "/../../database.json";
const data = fs.readFileSync(`${DB_JSON_FILENAME}`);
const conf = JSON.parse(data);

// database connection
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

module.exports = connection;
