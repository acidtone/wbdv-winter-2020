// function statememt
function a(callback) {
  // Do something before function invokation
  const favouritePet = 'Spot';

  // Then invoke callback
  callback(favouritePet);
}

console.log('First!');

a(function(pet) {
  console.log(`My first pet: ${pet}`);
});

a(function(pet) {
  console.log(`My second pet: ${pet} II`);
});