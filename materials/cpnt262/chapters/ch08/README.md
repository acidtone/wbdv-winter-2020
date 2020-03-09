# CPNT 262 Chapter 8
## Resources
- Article: [Quickstart Mongoose Guide that will get you up to speed in no time](https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52)
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
- Recognizing promises

### ES6
- `.next()`
  - called when resolved
- `.catch()`
  - called when rejected
- popular pattern: `resolved` promises will follow the `.then()` chain but will skip to `.catch()` on error (`reject` in Promise terminology)

        someAsyncFunc(input args).then().then().catch()

### ES7
See [Hello Mongoose Refactored](spoilers/hello-mongoose-refactored) for example usage.
- `async`
- `await`

## Express Routers
See Spoiler: [Hello Mongoose Refactored](spoilers/hello-mongoose-refactored)