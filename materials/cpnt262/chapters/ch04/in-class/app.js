const path = require('path');
const express = require('express');

const app = express();

// Order matters. This app.use function happens before the app.use functions below it.
app.use(function(req, res, next) {
  console.log(req.originalUrl); // The entire URL after the domain
  console.log(req.path); // Everything before the '?'
  console.log(req.query); // Everything after the '?' but as an object

  // res.send(`<h1 style="font-size: 72px;">${req.query.name}</h1>`); // Ends the request-response cycle
  res.json(req.query.hobbies);

  // Needed if you don't send a response; otherwise the browser hang
  // next();
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