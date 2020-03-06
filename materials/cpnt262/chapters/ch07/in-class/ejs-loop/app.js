const path = require('path');
const express = require('express');
const ejs = require('ejs');
const fruit = require('./fruit');

const app = express();

app.set('view engine','ejs');

// These are sample placeholder endpoints we created yesterday
app.get('/fruit',function(req, res) {  
  res.render('fruit-list',{fruit});
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