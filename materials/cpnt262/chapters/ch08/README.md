# CPNT 262 Chapter 8
## Resources
- Article: [Quickstart Mongoose Guide that will get you up to speed in no time](https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52)
- MDN: [Express Tutorial Part 3: Using a Database (with Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
- Stack Overflow: [Nested objects in mongoose schemas](https://stackoverflow.com/questions/39596625/nested-objects-in-mongoose-schemas)
- Documentation:
  - [Mongoose Getting Started](https://mongoosejs.com/docs/)
  - [Mongoose Connections](https://mongoosejs.com/docs/connections.html)

## Dependencies
- express
- mongoose
- dotenv
- ejs or pug
- slugify

## Reasons for Mongoose
- Connection handling
- Targeting collections
- Data integrity

## Mongoose Connection
### Connection Events
See: 
- Mongoose: [Getting Started](https://mongoosejs.com/docs/)
- Spoilers: [Hello Mongoose](spoilers/hello-mongoose) - code comments are provided

### Handling errors and successful connections
- `connection.on`
- `connection.once`

## Live Code: Kitty Model
See: [Mongoose Getting Started](https://mongoosejs.com/docs/)

## GET and POST endpoint handlers with Mongoose
See: [Quickstart Mongoose Guide that will get you up to speed in no time](https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52)

## Aside: Promises
- Promise overview
  - Video: [Async JS Crash Course - Callbacks, Promises, Async Await](https://www.youtube.com/watch?v=PoRJizFvM7s) by Brad Traversy
- Recognizing promises

### ES6
- `.next()`
  - called when resolved
- `.catch()`
  - called when rejected
- popular pattern: `resolved` promises will follow the `.then()` chain but will skip to `.catch()` on error (`reject` in Promise terminology)

        somePromise(input args).then().then().catch()

### ES7
- Search: [async await node](https://www.google.com/search?q=async+await+node)
- See [Hello Mongoose Refactored](spoilers/hello-mongoose-refactored) for example usage.
#### Definitions
- `async`
  - when placed in front of a function, `async` forces it to return a promise (even if it wasn't explicitly written to do so)
- `await`
  - when placed in front of a function, `await` forces it to wait for a response (i.e. Promise is resolved) from the `async` function or another (directly) previous `await` function
  - is only available inside `async` functions

## Overview: Express Routers
See Spoiler: [Hello Mongoose Refactored](spoilers/hello-mongoose-refactored). Commented code is provided.