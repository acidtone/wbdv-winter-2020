// Two ways (of a few) to define a function
// 1. As a function statement
function dashOf(string) {
  return 'With a dash of ' + string +'!';
}
console.log(dashOf('salt'));

// 2. As a function expression
let dashOfExp = function(string) {
  return 'With a dash of ' + string +' as an expression!';
}

// returns a string because we invoked (or ran) the function
console.log(dashOfExp('salt')); 

// returns a function because that's the value `function(){}` returned to the assignment operator
console.log(dashOfExp); 