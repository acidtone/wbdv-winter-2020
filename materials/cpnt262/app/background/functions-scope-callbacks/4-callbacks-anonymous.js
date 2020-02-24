function greet(callback) {

  const data = {
    firstName: "John",
    lastName: "Wick",
    salutation: "Mr."
  }

  callback(data);

}

greet(function(data){
  console.log(`You're dead, ${data.lastName}!`);
});

greet(function(data){
  console.log(`Greetings, ${data.salutation} ${data.lastName}.`);
});