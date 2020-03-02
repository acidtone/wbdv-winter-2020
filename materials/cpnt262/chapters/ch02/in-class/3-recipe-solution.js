
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

// console.log(recipe);

// Assign a method that returns a custom title based on an argument
recipe.customTitle = function(something) {
  // This code only runs when it's invoke with this.customTitle(something)
  // The `this` keyword of a method points to the object on which the method is attached
  console.log(this);

  // Now we can access the internal properties and methods without worrying about what the object name is (in this case: recipe)
  return `${this.title}, with a dash of ${something}!`;
}

// const customTitle = `${recipe.title}, ${dashOf('pizza')}!`
console.log(recipe.customTitle('durian'));

// Activity 1a: customIngredients()
recipe.customIngredients = function(something) {
  const item = {item: something};
  this.ingredients.push(item);
  console.log(this.ingredients);
}
console.log(recipe.ingredients);
console.log(recipe.customIngredients('crushed Cheetos'));

// Activity 1b: customDirections()
recipe.customDirections = function(something) {
  this.directions = this.directions.replace('something',something);
  console.log(this.directions);
  console.log(this);
}
console.log(recipe.directions);
console.log(recipe.customDirections('crushed Cheetos'));
