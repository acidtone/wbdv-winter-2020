function a() {
  // Re-assigns the x that's attached to the global object
  // x = 2;

  // Declares and assigns a new variable that is hidden inside the function context 
  let x = 2;

  console.log(`a(): ${x}`);

  function b() {
    console.log(`b(): ${x}`)
  }
  
  b();

}

let x = 1;
console.log(`global: ${x}`); // 1

a();

console.log(`global: ${x}`); // 
