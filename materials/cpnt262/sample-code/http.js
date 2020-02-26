const http = require('http');

http.createServer((request,response) => {

  // Set the response HTTP header with HTTP status and Content
  response.writeHead(200, {"Content-Type": "text/html"});
  
  // Send the response body "Hello World"
  response.end("<h1>Hello World!</h1>");

  // Pass in a function as the 2nd argument to listen() so that we log a message to the console when the server is running.
  }).listen(8080, () => {
      console.log(`Server running on port 8080`);
  });