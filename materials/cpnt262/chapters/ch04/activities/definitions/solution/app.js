const path = require('path');
const express = require('express');
const definitions = require('./definitions');

const app = express();

// A better way!
app.get('/definitions',function(req, res) {  
  res.json(definitions);
});

app.get('/definitions/:slug',function(req, res) {  
  res.json(definitions.filter(function(definition) {
    return definition.slug == req.params.slug;
  }));
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