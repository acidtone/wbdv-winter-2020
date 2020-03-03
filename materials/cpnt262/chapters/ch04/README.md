# CPNT 262 Chapter 4
## Prep
- [Pug](https://pugjs.org/api/getting-started.html)
  - Search: [node pug tutorial](https://www.google.com/search?q=node+pug+tutorial)
- [EJS](https://ejs.co/)
  - Search: [node ejs tutorial](https://www.google.com/search?q=node+ejs+tutorial)
- [Handlebars](https://handlebarsjs.com/)
  - Search: [node handlebars tutorial](https://www.google.com/search?q=node+handlebars+tutorial)

## Express Documentation
See: [Express 4.x API](https://expressjs.com/en/api.html)

## Middleware
- app.use
  - req
  - res
  - next

## Request object
- req.url
  - pathname
  - search
  - query
- params
  - Examples:
    - :id
    - :email
    - :status

## REST, CRUD and HTTP Verbs
- Create
  - HTTP verb: POST
  - Example:
    - `POST /users`: adds a new user
- Retrieve
  - HTTP verb: GET
  - Example: 
    - `GET /users`: retrieves a list of users
    - `GET /users/8`: retrieves user with id of 8
- Update
  - HTTP verb: PUT
  - Example:
    - `PUT /user/8`: updates user with id of 8
- Delete
  - HTTP verb: DELETE
  - Example:
    - `DELETE /user/8`: deletes user with id of 8

## Endpoint handlers
- app.get

## Response object
- res.writeHead
- res.write
- res.end
- res.locals
- res.json
- res.render

## View Engines
- EJS
  - <% %>: inject javascript into HTML
  - <%= %>: output a variable
  - <%- %>: include a template partial
- PUG