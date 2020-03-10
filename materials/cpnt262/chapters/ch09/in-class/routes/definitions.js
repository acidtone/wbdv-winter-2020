const express = require('express');
const route = express.Router();
const slugify = require('slugify');

// Import model
const Definition = require('../models/Definitions.js');

// GET /api/v1/definitions
route.get('/', function(request, response){
  // Use Mongoose static model (i.e. one that is not instatiated) to pull definitions list from Atlas
  Definition.find(function(error, result) { 
    response.json(result);
  });
});

// GET /api/v1/definitions/example-term
route.get('/:slug', function(request,response){
  // Use Mongoose static model (i.e. one that is not instatiated) to pull one definition that matches the slug parameter
  Definition.findOne({slug: request.params.slug},function(error, result) { 
    if(error){
      return console.log(error);
    }
    response.json(result);
  });
});

// POST /api/v1/definitions
route.post('/', function(request, response){
  // Auto generate slug using slugify() on term field
  request.body.slug = slugify(request.body.term);

  // Create an instance of our model using the data submitted from the form. This has not been inserted into the database.
  const definition = new Definition(request.body);

  // Save our instance to the database
  definition.save(function(error, def){
    if(error){
      return console.log(error);
    }
    // TODO: create session and add success/error message
    console.log(def);
    // TODO: update index view to display success.error message
    response.json(def);
  });
});

// PUT /api/v1/definitions/:id

// DELETE /api/v1/definitions/:id

module.exports = route;