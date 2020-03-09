const express = require("express");
const route = express.Router();
// Import model
const Definition = require('../models/Definitions.js');

// GET /definitions
route.get('/', async function(request, response) {
  console.log('get /definitions');
  response.locals.currentDefinitions = 'current';
  try {
    const definitions = await Definition.find({});
    response.render('definitions',{definitions: definitions});

  } catch (err) {
    return res.status(500).send(err);
  }
});

// GET /definitions/example-term
route.get('/:slug', async function(request, response) {
  console.log('get /definitions/example-term');
  try {
    const definition = await Definition.findOne({slug: request.params.slug});
    response.render('definition',definition);

  } catch (err) {
    return res.status(500).send(err);
  }
});

// POST /definitions
route.post("/", function(request, response) {
  console.log('post /definitions');
  const definition = new Definition(request.body);

  definition.save(function(err) {
      if (err) throw err;
      // TODO: Set flash message on success/error
      response.redirect("/definitions");
    });
  });

module.exports = route;