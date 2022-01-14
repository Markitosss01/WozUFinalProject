const mysql = require("mysql");

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   username: "root",
//   password: "Password1!",
//   database: "SocialMedia",
// });


const db = mysql.createConnection({
  "user": "root",
  "password": "Password1!",
  "database": "SocialMedia",
  "host": "127.0.0.1",
  "dialect": "mysql",
  "operatorsAliases": false,
  "define": {"timestamps" : false}
});

module.exports = db;
