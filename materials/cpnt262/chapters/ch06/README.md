# CPNT 262 Chapter 6
## Prep
- Search: [node mongodb](https://www.google.com/search?q=node+mongodb+tutorial)
- Search: [express mongoose mongodb](https://www.google.com/search?q=express+mongoose+mongodb)
- [MongoDB Crash Course](https://www.youtube.com/watch?v=-56x56UppqQ) by Brad Traversy
- [MongoDB Full Tutorial w/ Node.js, Express, & Mongoose](https://www.youtube.com/watch?v=4yqu8YF29cU) by Free Code Camp

## SQL vs NoSQL
- Search: [SQL vs NoSQL](https://www.google.com/search?q=sql+vs+nosql)

## Overview: Relational Databases
- Objects
  - database (spreadsheet file)
    - tables (spreadsheet tabs)
      - columns (sometimes called fields)
      - rows
    - joins and views: combining data from multiple tables into one query result
- Constraints: relational databases are great at maintaining data integrity
  - data types: what data type the column accepts
  - primary keys: restricts the id of the table (unique, int, etc)
  - check constraints: what values a column can contain
  - foreign keys: relate a column value of one field to the id of another
- SQL Query Language
  - CRUD operations
    - Create -> INSERT
    - Retrieve -> SELECT
    - Update -> UPDATE
    - Delete -> DELETE
  - Target -> Tables
  - Filters -> WHERE
- Schemas
  - Database structure in relational databases is strictly defined at the beginning of a project and is difficult to change after data has been inserted.
- Common engines
  - mySQL
  - PostgreSQL
  - Oracle
  - SQL Server

## What is JSON?
- Search: [What is JSON](https://www.google.com/search?q=what+is+JSON)
- Search: [js to JSON Converter](https://www.google.com/search?q=js+to+json+converter)

## Overview: MongoDB
- Objects
  - database: roughly the same as SQL database
  - collection: roughly the same as SQL table
  - document: roughly the same as SQL row; the "columns" are represented by the name/value pairs stored in JSON format within each document
- Constraints
  - there aren't many
    - document structure is defined by the JSON object within the document
    - the JSON structure of a collection's documents can change from document to document
  - we'll be using Mongoose to add constraints as a 3rd party module
- CRUD Operations (See Mongo reference on [CRUD Operations](https://docs.mongodb.com/manual/crud/))
  - Create
    - insertOne()
    - insertMany()
  - Retrieve
    - find()
    - find()
  - Update
    - updateOne()
    - updateMany()
    - replaceOne()
  - Delete
    - deleteOne()
    - deleteMany()
- Common engines: See [Best NoSQL Databases of 2020](https://www.improgrammer.net/most-popular-nosql-database/)

## Aside: Callbacks
- The next two Asides should help with some of the non-intuitive behaviour we'll see while working with databases in NodeJS.
- Live code: a sample greet() function
  - [See spoilers](../ch05/spoilers/callbacks/app.js)

## Aside: Asynchronous File Access
- Documentation: [Node File System Module](https://nodejs.org/api/fs.html)
- Live Code: [readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) vs [readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
  - [See spoilers](../ch05/spoilers/fs/app.js)

## MongoDB CRUD Operations
- Example code and tutorials
  - MongoDB Reference: 
    - [CRUD Operations](https://docs.mongodb.com/manual/crud/)
    - [Query Examples](https://docs.mongodb.com/manual/tutorial/query-documents/#read-operations-query-argument)
  - Tutorial: [Building a Simple CRUD Application with Express and MongoDB](https://zellwk.com/blog/crud-express-mongodb/) by Zell Liew
    - [finished code](https://zellwk.com/blog/crud-express-mongodb/)
    - [Demo](https://crud-express-mongo.herokuapp.com/)
- Recognizing callbacks and asynchronous operations
  - When does code get run?
  - Where do I put my endpoint handlers with respect to MongoDB connection code?
- Live code: sample import script
  - There is an error in this code because of the asynchronous nature of Node. We'll discuss and fix.
  - [official importing options](https://docs.atlas.mongodb.com/import/)

## Activity: Refactoring Zell Liew's Demo CRUD App
See [Activity README](activities/mongo-crud/README.md) for details. 
