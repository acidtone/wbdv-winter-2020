# Background: Functions, Scope and Callbacks
## First-class Functions (aka Higher Order Functions)
Functions are "first-class" in Javascript, meaning they are treated like any other value or variable.

Two phases of the function life-cycle:
1. Define the function
    - function statement
    - function expression
2. Invoke a function
    - Given a defined function `greet`, you invoke it by adding parentheses after the function name: `greet()`

### Activity: log greet vs greet()
- run the file `1-functions.js` from the command line with the following command: `$ node 1-functions.js`
- Try console logging `greet1` and then `greet1('Jane')`
- What type of value is returned when you log `greet1` vs `greet('John')`?

## Two ways to define a named function
See: [1-functions.js](1-functions.js)
1. Function statement
2. Function expression
    - Pay careful attention to the syntax on the right side of the assignment operator (`=`). This syntax is often used to create anonymous functions

## Function Scope
Functions have their own execution context. By definition, the Global Execution Context is any code that is NOT in a function.

### Execution Context Life-cycle
See: [Global Environment and the Global Object](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=1552)
Whenever an execution context is created, Javascript also creates the following for us:
- the Global Object
- `this`
Sometimes they are the same, but sometimes not

### Activity: Function scope
See: [2-function-scope.js](2-function-scope.js)
Add some `console.log()` statements and try to predict what value `myVar` has in different execution contexts

## Callback functions
Definition: 