const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo.js');

const app = express();

app.set('view engine','ejs'); // allows us to exclude the file extension

app.get('/', function(request, response){
  response.render('index',pageInfo.index);
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