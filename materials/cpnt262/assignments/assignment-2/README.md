# Gallery Custom Module
## Due
Monday, March 9 @ 8pm

## Weight
20% of Node portion (10% of CPNT 262)

## Details
In this assignment, we are going to deploy a dynamic gallery using a Node custom module, Express and a view engine (either EJS or Pug).

## Instructions
### App Setup
- Express server
  - Static file handler
  - 404 handler
- require() gallery custom module (note: gallery.js throws a syntax error as currently written; you'll have to fix that as part of this assignment)

### Gallery Endpoint
- GET `/gallery`
  - The server should respond with an HTML gallery when the user navigates to `/gallery` on your website.
- View setup
  - A list of all images in the gallery collection is displayed on the page. The image files have been provided as part of this assignment.
  - Data for gallery images should be stored and accessed from a custom module, based on the javascript object provided with this assignment.
- Card design: each image should be displayed semantically using the `figure`, `img` and `figcaption` elements like so:
  - `figure`
    - `img` 
      - `src` -> small image
      - `alt` -> title
    - `figcaption` -> title with credit (photographer name)

### Image Endpoint
- GET `/gallery/:id`
- View setup
  - A single image from the gallery collection, along with the extra information listed below, is displayed on the page. The image files have been provided as part of this assignment.
  - Data for the single gallery image should be stored and accessed from a custom module, based on the javascript object provided with this assignment.
- Card design: same as `gallery` above except:
  - large image used as `src`
  - credit expanded to include:
    - photographer name is linked to attribution.url
    - source site (Lorem Picsum) is mentioned

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your Express app to Heroku or similar online platform.
2. Zip your project (including node_modules) and submit them to Brightspace.
3. Include a link to your GitHub repo as a comment with your Brightspace submission.

## Marking Rubric?
This assignment will be marked out of 20 points. 5 points will be given for each of the following:

1. Code Quality - Code is properly organized, indented and commented.
2. App Setup - The server successfully handles the requirements listed above.
3. Gallery Endpoint - The `/gallery` endpoint is properly setup to handle the requirements listed above.
4. Single Image Endpoint - The `/gallery/:id` endpoint is properly setup to handle the requirements listed above.