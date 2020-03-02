
const recipe = {
  topping: null, // If this property is null, the other methods return default values
  title: 'Aioli',
  getTitle: function(){
    if(this.topping){
      // Add the topping to the title if it exists
      return `${this.title}, with a dash of ${this.topping}!`;
    } else {
      return this.title;
    }
  },
  serving: '3/4 cup',
  ingredients: [
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
  ],
  getIngredients: function(){
    if(this.topping){
      // Add the topping to ingredients if it exists
      this.ingredients.push({item: this.topping});
    }
    return this.ingredients;
  },
  directions: 'In large bowl: combine garlic, egg yolks, lemon juice, salt and sugar. Add pepper to taste. Whisking constantly, very slowly drizzle oil into egg mixture until thick and creamy. Season with a dash of something and serve.',
  source: 'https://www.cooksillustrated.com/recipes/7079-spanish-style-toasted-pasta-with-shrimp',
  getDirections: function(){
    if(this.topping){
      // Replace 'something' with a topping if it exists
      this.directions = this.directions.replace('something',this.topping);
    }
    return this.directions;
  }
};

// Comment this single line if to show default values
recipe.topping = 'grapefruit';

console.log(recipe.getTitle());
console.log(recipe.getIngredients());
console.log(recipe.getDirections());
