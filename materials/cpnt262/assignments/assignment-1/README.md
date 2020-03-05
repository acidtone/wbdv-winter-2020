# Assignment 1 - Simple Express Website
## Due
Friday, March 6th @ 8pm

## Weight
20% of Node portion (10% of CPNT 262)

## Details
In this assignment, we are going to deploy a simple multi-page website using Express and a view engine (either EJS or Pug).

## Instructions
Choose a 3 or 4-page static web project of your choice. Each page should have repeating page and layout elements such as a header, footer, navigation, etc. The index page may have a unique hero section that is different than the "internal" pages.

### Project and Server Setup
- Initialize a new project using npm.
- Install Express and either [EJS](https://ejs.co/) or [Pug](https://pugjs.org/api/getting-started.html).
- Serve static assets from a `public` directory.
- Return 404 errors when a static file or endpoint cannot be found.

### Template Setup
For each page of your site:
- Create a template using either [EJS](https://ejs.co/) or [Pug](https://pugjs.org/api/getting-started.html) and store them in a `views` directory.
- Move repeating page elements (`head`,`header`,`nav`,`footer`, etc) to separate template "partials" and save them to a `views/partials` directory.
- Include the appropriate template partials in each page template.
- Create a GET endpoint handler to render and serve each page template.

### Additional Requirements
- Each page should have a unique page `<title>`.
- The current page should be indicated/highlighted in the global navigation (i.e. maybe the Contact link has a different background when the user is on the Contact page).
- CSS for all pages should be linked to a single external stylesheet and be included in all pages using a template partial.
- The `footer` partial should contain a copyright notice for the current year using the `moment` module.

## Submitting Your Assignment
In order to receive a grade, you must:
1. Deploy your Express app to Heroku or similar online platform.
2. Zip your project (including node_modules) and submit them to Brightspace.
3. Include a link to your GitHub repo as a comment with your Brightspace submission.

## Marking Rubric?
This assignment will be marked out of 20 points. 5 points will be given for each of the following:
1. Code Quality - Code is properly organized, indented and commented.
2. Server Setup - The server successfully handles the requirements listed above.
3. Template Setup - The templates are properly setup to handle the requirements listed above.
4. Additional Requirements - The site is properly setup to handle the requirements listed above.