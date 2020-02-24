// Two ways to define a function (there are more)
// 1. Function statement
function greet1(name) {
  return 'Hello ' + name;   
}
console.log(greet1('John'));
// console.log(greet1);

// 2. Function expression
var greet2 = function(name) {
  return 'Hello ' + name;
};
console.log(greet2('Jane'));
// console.log(greet2);
