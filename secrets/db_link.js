require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var keys = require("./keys.js");
var orders = [];

var connection = mysql.createConnection({
    host:keys.bamazon_db.hst,
    port: keys.bamazon_db.port,
    user: keys.bamazon_db.usr,
    password: keys.bamazon_db.secret,
    database: keys.bamazon_db.db
});

connection.connect(function(err){
    if (err) throw err;
    console.log();
});


// I might have to export this page and require it some where else in this set up.
// Need to test db
// Also need to fix contact tool bar and index tool bar.