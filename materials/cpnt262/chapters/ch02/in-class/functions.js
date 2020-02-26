// Defining our first funtion
function a() {
  // This code is not executed until a() is invoked

  // Re-assigns the x that's attached to the global object
  // x = 2;

  // Use a declaration keyword to declare and assign a new variable that is attached to a()'s execution context (and is hidden from its outer environment)
  let x = 2;

  console.log(`a(): ${x}`); // -> 2

  // Defining a second function. 
  function b() {
    // This code is not executed until b() is invoked
    // b() inherits x from its outer environment
    console.log(`b(): ${x}`) // -> 2
  }

  // Invoking the function creates a new execution context
  b();

}

// x is declared and assigned within the global execution context
let x = 1;
console.log(`global: ${x}`); // -> 1

// Run the code that's inside a(). This creates a new execution context
a();

// The global context has no knowledge of a()'s variable environment
console.log(`global: ${x}`); // -> 1
