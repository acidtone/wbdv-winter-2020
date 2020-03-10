// This file imports gallery.js into your Mongo database. Change your db and collection names as needed.

// Setup Mongo Client
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Import source data for insert
const images = require('./gallery.js');

// Setup server credentials securely
const uri = process.env.MONGODB_URL;

// Connect to MongoDB Atlas
// Notice that most of the code is inside a callback
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true },  function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');

   // Choose our database
   const db = client.db("gallery");

   // Target our collection
   const imgCol = db.collection('images');

   // Drop the current collection, if there is any. The purpose of this script is to reset a test database to its default state.
   imgCol.deleteMany();
   console.log('Dropped');

   // Create a fresh collection using the custom module data
   imgCol.insertMany(images).then(function(cursor) {
    console.log(cursor.insertedCount);
    client.close()
  }).catch(function(err){
    console.log(err);
  });
});
