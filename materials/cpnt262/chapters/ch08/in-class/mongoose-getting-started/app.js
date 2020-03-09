// Copy and Pasted from https://mongoosejs.com/docs/

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const kittySchema = new mongoose.Schema({
  name: String
});


kittySchema.methods.speak = function () {
  var greeting = this.name
  ? "Meow name is " + this.name
  : "I don't have a name";
  console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

var silence = new Kitten({ name: 'Silence' });

console.log(silence.name);

silence.speak();

silence.save(function (err, silence) {
  if (err) return console.error(err);
  silence.speak();
});

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
Kitten.find({ name: /^silence/ }, function(err, result){
  if (err) return console.error(err);
  console.log(result);
});