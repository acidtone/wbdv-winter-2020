const path = require('path');
const express = require('express');

const app = express();

const requestTime = function (request, response, next) {
  response.locals.requestTime = Date.now();
  console.log(response);
  next();
}

app.use(requestTime)

// Gets all users
// app.get('/api/users',function(request,response){
//   response.json(users);
// });

// Gets one user
// app.get('/api/users/:id', function (request, response){
//   response.json(users.filter(function(user) {
//     return user.id === parseInt(request.params.id);
//   }));
// });

// Gets one user by status
// app.get('/api/users/status/:status', function (request, response){
//   response.json(users.filter(function(user) {
//     console.log(typeof user.id + ' ' + typeof parseInt(request.params.id));
//     return user.status === request.params.status;
//   }));
// });

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});