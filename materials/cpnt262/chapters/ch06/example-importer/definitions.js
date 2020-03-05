module.exports = [
  {
    term:'Global',
    definition: 'All code that is not inside a function. ',
    slug: 'global'
  },
  {
    term:'Global Execution Context',
    definition: 'The environment that is available everywhere in your app.',
    slug: 'global-execution-context'
  },
  {
    term:'Lexical Environment',
    definition: 'Where something sits physically in the code you write. In Javascript, *where* you write your code is important',
    slug: 'lexical-environment'
  },
  {
    term:'Syntax Parser',
    definition: 'A program that reads your code and determines what it does and if its grammar is valid',
    slug: 'syntax-parser'
  },
  {
    term:'Execution Context',
    definition: 'A wrapper to help manage the code that is running. The lexical environment that is currently running is managed via execution contexts.',
    slug: 'execution-context'
  },
  {
    term:'Variable Environment',
    definition: 'Where a named value lives.',
    slug: 'variable-environment'
  },
  {
    term:'Name/Value Pair',
    definition: 'A name which maps to a unique value.',
    slug: 'name-value-pair'
  },
  {
    term:'Primitive Type',
    definition: 'A Type of data that represents a single value.',
    slug: 'primitive-type'
  },
  {
    term:'Operator',
    definition: 'A special function that is syntactically written differently. Generally, operators take two arguments and return one result.',
    slug: 'operator'
  },
  {
    term:'Operator Precedence',
    definition: 'Which operator function gets call first (i.e. BEDMAS).',
    slug: 'operator-precedence'
  },
  {
    term:'Operator Associativity',
    definition: 'What order operator functions get called in. left-to-right or right-to-left.',
    slug: 'operator-associativity'
  },
  {
    term:'Expression',
    definition: 'A piece of code that returns a value.',
    slug: 'expression'
  },
  {
    term:'Coersion',
    definition: 'Converting a value from one type to another.',
    slug: 'coersion'
  },
  {
    term:'Object',
    definition: 'A collection of name/value pairs (in terms of Javascript).',
    slug: 'object'
  },
  {
    term:'First-class Function',
    definition: 'Everything you can do with other types, you can do with functions.',
    slug: 'first-class-function'
  },
  {
    term: 'Callback',
    definition: 'A function passed to another function , which we assume will be invoked at some point.',
    slug: 'callback'
  },
  {
    term: 'Error-first Callback',
    definition: 'Callbacks that take an error object as their first parameter. `null` if no error, otherwise this will be an object containing our error.',
    slug: 'error-first-callback'
  }
]