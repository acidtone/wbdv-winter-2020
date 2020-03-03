const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension


/*
// Order matters. This app.use function happens before the app.use functions below it.
app.use(function(req, res, next) {
  console.log(req.originalUrl); // The entire URL after the domain
  console.log(req.path); // Everything before the '?'
  console.log(req.query); // Everything after the '?' but as an object

  
  // res.send(`<h1 style="font-size: 72px;">${req.query.name}</h1>`); // Ends the request-response cycle
  // res.json(req.query.hobbies); // sends json instead

  // conditionals like this are not needed with app.get
  if (req.path === '/gallery') {
    res.send(`<h1>My Sweet, Sweet Gallery</h1>`);
  } else {
    next();
  }

  // Needed if you don't send a response; otherwise the browser hang
  // next();

});
*/

// A better way!
app.get('/images',function(req, res) {  
  res.send(`<h1>My Sweet, Sweet Gallery</h1>`);
});

app.get('/images/:id/:width/:height',function(req, res) {  
  res.send(`<h1>My Sweet, Sweet Gallery: Image ${req.params.id} (${req.params.width} x ${req.params.height})</h1>`);
});

app.get('/',function(req, res) {  
  res.render('index',pageInfo.index);
});

app.get('/contact',function(req, res) {  
  res.render('contact',pageInfo.contact);
});

app.get('/resources',function(req, res) {  
  res.render('resources',pageInfo.resources);
});

app.get('/definitions',function(req, res) {  
  res.render('definitions',pageInfo.definitions);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});