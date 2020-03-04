// greet will accept a callback, we don't know what that function will do.
function greet(callback) {
  // Logged when we invoke greet()
  console.log('Hello!');
  
  // This data could come from a file or database
	var data = {
		name: 'John Wick'
	};
  
  // At some point we invoke the callback (still not knowing what it will do) and pass it our data.
	callback(data);
}

// We invoke greet the first time and do something with the data
greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});

// We invoke greet a second time and do another thing with the data in a different way.
greet(function(data) {
	console.log('A second callback was invoked!');
	console.log(data.name);
});