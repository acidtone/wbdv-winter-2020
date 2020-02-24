function greet(callback) {

  const data = {
    firstName: "John",
    lastName: "Wick",
    salutation: "Mr."
  }

  callback(data);

}

function threat(data) {
  console.log(`You're dead, ${data.lastName}!`);
}

function formal(data){
  console.log(`Greetings, ${data.salutation} ${data.lastName}.`);
}

greet(threat);

greet(formal);