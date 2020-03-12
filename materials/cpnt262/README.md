# CPNT 262 - Javascript/NodeJS
## Assignments
- [Assignment 1: Basic Express Website](assignments/assignment-1/README.md)
  - Due Friday, March 6 @ 8pm
  - Weight: 30% of Node mark
- [Assignment 2: Gallery Custom Module](assignments/assignment-2/README.md)
  - Due Monday, March 9 @ 8pm
  - Weight: 30% of Node mark
- [Assignment 3: Mongoose Gallery](assignments/assignment-3/README.md)
  - Due Monday, March 16 @ 8pm
  - Weight: 40% of Node mark

## Definitions
Source: [Javascript the Weird Parts](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts) (and Tony)
### Big Picture
- Global: All code that is not inside a function. 
- Global Execution Context: the environment that is available everywhere in your app.
- Lexical Environment: Where something sits physically in the code you write. In Javascript, *where* you write your code is important
- Syntax Parser: A program that reads your code and determines what it does and if its grammar is valid
- Execution Context: A wrapper to help manage the code that is running. The lexical environment that is currently running is managed via execution contexts.

### Nitty Gritty
- Variable Environment: Where a named value lives.
- Name/Value Pair: A name which maps to a unique value.
- Primitive Type: A Type of data that represents a single value.
  - undefined: represents a lack of existence (you shouldn't set a variable to this).
  - null: represents a lack existence (you can set a variable to this).
  - boolean: true or false
  - number: floating point number (there's always some decimals). Integers are aproximated.
  - string: a sequence of characters surrounded by single or double quotes.
  - symbol: Used in ES6. This won't be covered in this course.
- Operator: A special function that is syntactically written differently. Generally, operators take two arguments and return one result.
- Operator Precedence: Which operator function gets call first (i.e. BEDMAS).
- Operator Associativity: What order operator functions get called in. left-to-right or right-to-left.
- Expression: A piece of code that returns a value.
- Coersion: Converting a value from one type to another. 
- Object: A collection of name/value pairs (in terms of Javascript).
- First-class Function: Everything you can do with other types, you can do with functions

### Resources
- [Eloquent Javascript](https://eloquentjavascript.net/)
- [Free Code Camp](https://www.freecodecamp.org/learn)
- [Javascript the Weird Parts](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)