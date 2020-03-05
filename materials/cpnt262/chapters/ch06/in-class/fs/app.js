const fs = require('fs');

const greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(`Sync: ${greet}`);

const greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(`Async callback: ${data}`);
});

console.log(`Async: ${greet2}`);

console.log('Done!');