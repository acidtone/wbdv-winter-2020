const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs');

// Don't forget your urlencoded middleware
app.use(express.urlencoded({ extended: false }));

// These are sample placeholder endpoints we created yesterday
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

// Step 1: Add GET handler for register form
app.get('/definitions/new',function(req, res) {  
  res.render('definition-new',pageInfo.newDefinition);
});

// Step 2: Add POST handler for submitted data and (Step 3) render a "thank you" view that displays the submitted data
app.post('/definitions/new',function(req, res) {
  console.log(req.body);
  res.render('thank-you', 
  {
    title: 'Thank You',
    description: 'Your definition was submitted',
    formData: req.body
  });
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});