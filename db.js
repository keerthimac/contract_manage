const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "arch",
  password: "0542222175",
  port: 3306,
  multipleStatements: true,
});

module.exports = pool;
