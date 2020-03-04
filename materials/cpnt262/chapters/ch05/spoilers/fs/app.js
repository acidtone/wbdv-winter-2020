// Require the node built-in 'fs' module
const fs = require('fs');

// The synchronous method of retrieving a file. This script stops and waits for the file to be read and returned to the greet variable
// The second argument `utf8` tells node that we expect text to be outputted. Without this, node returns the raw binary buffer that lives in "the heap" (node's memory space)
const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// If it took 1 second to read the file, this script holds up the server for 1 second. This is bad.
console.log(`Sync: ${greet}`);

// It's recommended you write your node app so it operates asynchronously. `readFile` is the async version of `readFileSync`
// Notice that the async version of this method expects an error object as the callback's first argument. This is a popular pattern in node called "Error-first callbacks". That way we can add a custom number of arguments to our callback without changing the position of our error argument.
const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(`Async callback: ${data}`);
});

// Uh oh, `greet2` returns `undefined` instead of "Hello World!". Why?
console.log(`Async: ${greet2}`);

// Here's a clue: what order are each of these console.logs printing out?
console.log('Done!');