const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var slugify = require('slugify')

// Define our Definition model.
// See `./models/definitions.js` for details
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

// Process form data for POST /definitions

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

/*************************/
/* /definitions Endpoint */
/*************************/

app.get('/definitions', function(request, response){
  // Set global nav class for current tab
  response.locals.currentDefinitions = 'current';

  // Use Mongoose static model (i.e. one that is not instatiated) to pull definitions list from Atlas
  Definition.find(function(error, result) { 
    response.render('definitions',{definitions: result});
  });
});

app.get('/definitions/:slug', function(request,response){
  // Use Mongoose static model (i.e. one that is not instatiated) to pull one definition that matches the slug parameter
  Definition.findOne({slug: request.params.slug},function(error, result) { 
    if(error){
      return console.log(error);
    }
    response.render('definition',result);
  });
});


app.post('/definitions', function(request, response){
  // Auto generate slug using slugify() on term field
  request.body.slug = slugify(request.body.term);

  // Create an instance of our model using the data submitted from the form. This has not been inserted into the database.
  const definition = new Definition(request.body);

  // Save our instance to the database
  definition.save(function(error, def){
    if(error){
      return console.log(error);
    }
    // TODO: create session and add success/error message
    console.log(def);
  });
  // TODO: update index view to display success.error message
  response.redirect('/definitions');
});

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