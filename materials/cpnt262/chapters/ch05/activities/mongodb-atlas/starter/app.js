// The connect code from this article
// ref: https://codeforgeek.com/mongodb-atlas-node-js/

const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

// replace the uri string with your connection string.
const uri = process.env.DB_CONNECTION
const dbName = 'test';
const collectionName = 'devices';
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   const collection = client.db(dbName).collection(collectionName);
   collection.find().forEach(function(doc) {
      // handle
      console.log(doc);
    }, function(err) {
      // done or error
      console.log(err);
    });
   console.log('Connected...');
   // client.close();
});
