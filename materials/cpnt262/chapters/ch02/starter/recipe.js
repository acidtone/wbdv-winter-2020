
// Currently an empty object, this will be a simple aoili recipe. We will add properties to this object bit by bit.
// Note: we can add/remove/change items of an object/array that is declared with `const` but we can't reassign them.
const recipe = {}; 

// Assign some general recipe properties (variables but in an object)
// Note: we don't need a declaration keyword for `recipe.title`; recipe has already been declared so its properties are included in the same memory space
recipe.title = 'Aioli';
recipe.serving = '3/4 cup'

// Assign an array of ingredients in chronological order (see recipe.directions)
recipe.ingredients = [
  {
    item: 'clove garlic, finely grated',
    amount: 1
  },
  {
    item: 'large egg yolks',
    amount: 2
  },
  {
    item: 'lemon',
    amount: '2 tsp'
  },
  {
    item: 'salt',
    amount: '1/4 tsp'
  },
  {
    item: 'sugar',
    amount: '1/8 tsp'
  },
  {
    item: 'ground white pepper'
  },
  {
    item: 'olive oil',
    amount: '3/4 cup'
  }
];

// Assign a (human-readable) string describing the steps in the recipe
recipe.directions = 'In large bowl: combine garlic, egg yolks, lemon juice, salt and sugar. Add pepper to taste. Whisking constantly, very slowly drizzle oil into egg mixture until thick and creamy. Season with a dash of something and serve.';

// Attribute the original source
recipe.source = 'https://www.cooksillustrated.com/recipes/7079-spanish-style-toasted-pasta-with-shrimp';

// Let's take a look at the object we created
console.log(recipe);

// For later: Let's define a method (an object name/value pair where the value is a function) to customize the base recipe with a dash of something
const dashOf = function(something) {
  return `with a dash of ${something}`;
}