/**
 * Our Database Interface
 */
var mongoose = require('mongoose');

/**
 * Schema Imports
 */
var UserModel = require('./schemas/users');


// Connections
// Default to development environment
var dbConn = 'mongodb://localhost/test';

// If we're in production...
if (process.env.NODE_ENV === 'production') {
    // set our database to the development one
    dbConn = 'urlToYourProductionMongoDb';
}

// connect to it via mongoose
mongoose.connect(dbConn);

// get an instance of our connection to our database
var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));
// Open the connection
db.once('open', function callback () {
  console.log('Databsae Connection Successfully Opened at ' + dbConn);
});

/**
 * Schema Assignments
 */
exports.users = UserModel;