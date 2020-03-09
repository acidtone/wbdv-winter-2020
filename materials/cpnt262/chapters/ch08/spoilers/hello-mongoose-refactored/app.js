const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var slugify = require('slugify')

/*************/
/* App Setup */
/*************/

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

/**************************/
/* Setup Early Middleware */
/**************************/

// Process POST form data from headers
app.use(express.urlencoded({ extended: false }));

// Set up global variables for navigation
app.use(function(request, response, next){
  response.locals.currentIndex = '';
  response.locals.currentDefinitions = '';
  next();
})

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});
db.once('open', function() {
  console.log('Connected to DB...');
});

/**********************/
/* /definitions Route */
/**********************/

app.use('/definitions', require('./routes/definitions'));

/*************/
/* Home Page */
/*************/

app.get('/',function(request,response) {
  // Set global nav class for current tab
  response.locals.currentIndex = 'current';
  response.render('index',{});
})

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