# MongoDB/Mongoose Gallery
## Due
Thursday, March 12 @ 8pm

## Weight
20% of Node portion (10% of CPNT 262)

## Details
In this assignment, we are going to refactor Assignment 2 to use a MongoDB database. Data and CRUD operations will be managed using Mongoose.

## Instructions
### Server Setup
- Express server
  - Static file handler
  - 404 handler
- require
  - express
  - dotenv
  - mongoose
- Mongoose connection
  - .on event for errors
  - .once event for successful connection

### Model Definition and Model Compilation/Export
- Define `Image` Schema in a dedicated `/models` directory
- export compiled `Image` model
- require `Image` model in app.js

### Refactor GET handlers for Mongoose
Refactor the endpoints you used in Assignment 2 to use Mongoose instead of a custom module
- GET /images (call also use /gallery instead)
  - use model.find() to return all image documents from Atlas and render a view
  - response should look like the image list you rendered for Assignment 2
- GET /images/:id
  - use model.findOne() to return a single image document from Atlas and render a view
  - response should look like the single image page you rendered for Assignment 3

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your Express app to Heroku or similar online platform.
2. Zip your project (including node_modules) and submit them to Brightspace.
3. Include a link to your GitHub repo as a comment with your Brightspace submission.

## Marking Rubric?
This assignment will be marked out of 20 points. 5 points will be given for each of the following:

1. Code Quality
2. Server Setup
3. Model Definition
4. Endpoint Refactor