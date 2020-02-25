// Two ways (of a few) to define a function
// 1. As a function statement
function dashOf(string) {
  return 'With a dash of ' + string +'!';
}
console.log(dashOf('salt'));

// 2. As a function expression
let dashOfExp = function(string) {
  return 'With a dash of ' + string +' as an expression!';
}

// returns a string because we invoked (or ran) the function
console.log(dashOfExp('salt')); 

// returns a function (notice the lack of parentheses) because `function(){}` returns a function to the assignment operator
console.log(dashOfExp); 

// A list of ingredients
const ingredients = ['tofu','salt','veggies','hot sauce'];

console.log(ingredients);

// Use bracket notation to access items by index
console.log(ingredients[1]);

const recipe = {
  title: 'Stir Fry',
  cookingTime: 30,

//ingredients: ingredients

// anonymous array: identical output as line above but without the variable
  ingredients: ['tofu','salt','veggies','hot sauce']

}

// Standard dot notation for accessing object values by name
console.log(recipe);
console.log(recipe.title);
// Can mix dot notation and bracket notation when array is inside an object
console.log(recipe.ingredients[3]); 

// Maybe a search string from the website
const searchString = 'ingredients';

// Returns undefined
console.log(recipe.searchString);
// You must use bracket notation when resolving dynamic property/method names
console.log(recipe[searchString][2]);

// Using object literal to expand functionality of the previous ingredients
const ingredientsObj = {
  name: 'eggs',
  amount: 3
}

const recipe2 = {
  title: 'Stir Fry',
  cookingTime: 30,

//ingredients: ingredientsObj

// anonymous object: identical output as line above
  ingredients: {
    name: 'eggs',
    amount: 3
  }
}

console.log(recipe2.ingredients);
// You can chain as many dots as you need to reach the value you need
console.log(recipe2.ingredients.name);

// Need to use let since we're re-assigning later
// JSON is often served as an array of objects
let cookBook = [recipe, recipe2];

// The output below is identical as the statement above. 
cookBook = [
  {
    title: 'Stir Fry',
    cookingTime: 30,
    ingredients: ['tofu','salt','veggies','hot sauce']
  },
  {
    title: 'Stir Fry',
    cookingTime: 30,
    ingredients: {
      name: 'eggs',
      amount: 3
    }
  }
];
console.log(cookBook);