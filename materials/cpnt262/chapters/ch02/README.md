# CPNT 262: Chapter 2
## Review from Yesterday
- names, values and expressions
- a better `3 > 2 > 1`
- objects

## Functions and Scope
Whenever a function is invoked, a new execution context is created that contains the following:
- Global Object (specifically, the [Node Global Object](https://nodejs.org/api/globals.html#globals_global_objects))
- a new `this` object
- an Outer Environment
Variables created inside a function are invisible from the outside environment but the function always has access to the global object (and all the variables associated with it).

## Functions as Methods
When a function is invoked as a method of an object, `this` will be defined as the object. For example, `recipe.title` will be available as `this.title`.

## Using Node Modules
- See:
  - [What is require()?](https://nodejs.org/en/knowledge/getting-started/what-is-require/)
- `require('url')`
  - [sample code](../../sample-code/url.js)
  - Documentation: [URL Module](https://nodejs.org/api/url.html)
- `require('http')`
  - [sample code](../../sample-code/http.js)
  - Documentation: [HTTP Module](https://nodejs.org/api/http.html)

## Creating Custom Modules
- `modules.export`
  - Search: [node modules.export](https://www.google.com/search?q=node+modules.export)

## Activity 1: Extending recipe
Following the `customTitle(something)` example from class add the following methods to the `recipe` object:
- `customIngredients(something)`: logs `ingredients` with `something` added to the end of the array.
- `customDirections(something)`: logs `directions` after the word "something" (near the end of the string) is replaced by `something`

## Activity 2: Custom Modules
Using the `hello-world.js` starter code, create and `require()` a custom recipe module that `exports` the recipe object created earlier.