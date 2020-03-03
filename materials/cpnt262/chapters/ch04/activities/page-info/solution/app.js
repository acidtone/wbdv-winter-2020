const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');

const app = express();

app.get('/',function(req, res) {  
  res.json(pageInfo.index);
});

app.get('/contact',function(req, res) {  
  res.json(pageInfo.contact);
});

app.get('/resources',function(req, res) {  
  res.json(pageInfo.resources);
});

app.get('/definitions',function(req, res) {  
  res.json(pageInfo.definitions);
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