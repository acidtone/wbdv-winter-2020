const path = require('path');
const express = require('express');
const ejs = require('ejs');
const pageInfo = require('./pageInfo');

const app = express();

app.set('view engine','ejs');

// This middleware is required as of Express 4.x. It parses the POST data and adds it to `request.body`. We process this data in the POST endpoint handler below.
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

// This GET endpoint handler returns a form for the user to submit a new definition
app.get('/definitions/new',function(req, res) {  
  res.render('definition-new',pageInfo.newDefinition);
});

// This POST endpoint handler processes the form data. Notice that it has the same URL as the page that displays the form for GET requests. The HTTP method changes our CRUD verb from "retrieve" to "create".
app.post('/definitions/new', function(request, response){
  // urlencoded() parses the post body for us and passes it to request.body where we can access the params
  console.log(request.body);

  // This could easily be a rendered "Thank you" view.
  response.send(`Definition added for: ${request.body.term}`);
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