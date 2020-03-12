const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const slugify = require('slugify')
const bcryptjs = require('bcryptjs');
const Definition = require('./models/Definitions.js');

/*************/
/* App Setup */
/*************/
const app = express();
app.set('view engine','ejs');

/**************************/
/* Setup Early Middleware */
/**************************/

// Serve static before any other work is done
app.use(express.static(path.join(__dirname, 'public')));

// Process JSON data for POST /definitions

app.use(express.json());

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

// Set up a pending connection to the database
// See: https://mongoosejs.com/docs/
const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Connect to database. Mongoose handles the asynchronous aspects internally so we don't have to.
var db = mongoose.connection;

// Set a callback in case there's an error.
db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});
// Set a callback to let us know we're successfully connected
db.once('open', function() {
  console.log('Connected to DB...');
});

/**********************/
/* /definitions Route */
/**********************/

app.use('/api/v1/definitions', require('./routes/definitions'));
app.use('api/v1/users', require('./routes/users'))

/**************/
/* Catch 404s */
/**************/

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

/****************/
/* Start Server */
/****************/

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});