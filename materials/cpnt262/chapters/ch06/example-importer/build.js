// Setup Mongo Client
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Import source data for insert
const definitions = require('./fixtures/definitions');

// Setup server credentials securely
const uri = process.env.DB_CONNECTION;

// Connect to MongoDB Atlas
// Notice that most of the code is inside a callback
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true },  function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');

   // Choose our database
   const db = client.db("glossary");

   // Target our collection
   const defCol = db.collection('definitions');

   // Drop the current collection, if there is any. The purpose of this script is to reset a test database to its default state.
   defCol.drop();
   console.log('Dropped');

   // Create a fresh collection using the custom module data
   defCol.insertMany(definitions, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });

  // Close the connection. This is often problematic in asynchronous environments
  client.close();
});