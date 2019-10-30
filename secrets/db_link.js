// TO DO:
// FINISHING MAKING THE OBJECT THAT WILL HOLD USER CONTACT INFORMATION.
// COMPLETE THE FUNCTION THAT WILL TAKE THE USER CONTACT OBJECT AND LOG IT TO THE LOG.TXT
// USE MOMENT JS TO PUT A TIME STAMP
// FIX NAV BAR FOR BOTH CONTACT AND INTRO PAGE
// ADD SOME KIND OF COOL EFFECT TO THE CONTACT PAGE.
// TEST CREATING USER DATA AND CREATING NEW TABLES FROM THE CONTACT INPUTS.


require("dotenv").config();
var mysql = require("mysql");
var fs = require('fs');
var inquirer = require("inquirer");
var keys = require("./keys.js");
var orders = [];

var connection = mysql.createConnection({
    host:keys.basic_portfolioDB.hst,
    port: keys.basic_portfolioDB.port,
    user: keys.basic_portfolioDB.usr,
    password: keys.basic_portfolioDB.secret,
    database: keys.basic_portfolioDB.db
});

connection.connect(function(err){
    if (err) throw err;
    console.log();
});

// Making a connection with mysql
function testQuery(){
connection.query('SELECT * FROM user_contact_info',function(err,results,fields){
    if(err) throw err;
    var name = results[0].name;
    var email = results[0].email;
    var comment = results[0].comment;

    // Tests the mysql query.
    console.log('Result of Query: ' + results[0].name);
    console.log('Email: ' + results[0].email);
    console.log('Email: ' + results[0].comment);
    

    // This is the object that will hold the users contact information and comment, to then put into the logToFile function.

    var userContactInfo = {
        name: name,
        email: email,
        comment:comment
    }

});
connection.end();
}

testQuery();



// Write user contact information to a log file with a time stamp. From this file

function logToFile (){
fs.writeFile('',)
};