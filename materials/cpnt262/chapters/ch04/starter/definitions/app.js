const path = require('path');
const express = require('express');
const definitions = require('./definitions.js');

const app = express();

app.get('/api/v1/definitions', function(request, response){
  response.json(definitions);
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
