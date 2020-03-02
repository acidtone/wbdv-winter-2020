const url = require('url');
const path = require('path');

console.log(path);

const recipe = {}; 

recipe.title = 'Aioli';
recipe.serving = '3/4 cup'
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

recipe.directions = 'In large bowl: combine garlic, egg yolks, lemon juice, salt and sugar. Add pepper to taste. Whisking constantly, very slowly drizzle oil into egg mixture until thick and creamy. Season with a dash of something and serve.';

recipe.source = 'https://www.cooksillustrated.com/recipes/7079-spanish-style-toasted-pasta-with-shrimp';

const parsedURL = url.parse(recipe.source);
// console.log(recipe);

console.log(path.basename(parsedURL.pathname));
