# CPNT 260 Day 5
## Tool Time: Code organization
- main.css (naming alternatives exist)
  - reset.css
  - fonts.css
  - colour.css
- `style` == scratch pad
  - when you're happy with today's code, move your embedded css into a forms.css (or whatever) file
- optional: push your fave css files to GH Pages and link to them with an absolute url

## HTML Forms
### Resources
- Codepen spoilers:
  - [Forms, the wrong way](https://codepen.io/acidtone/pen/KKPrgNp)
  - [Minimal, basic CSS](https://codepen.io/acidtone/pen/WNeYRwy)
  - [CSS Grid form](https://codepen.io/acidtone/pen/vYBQgJm)
- MDN Reference: [HTML5 Form tag reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Search: [forms](https://css-tricks.com/?s=forms) on CSS Tricks

### Common Forms
- contact us
- signin
- register
- predictive search
- add to cart
  - checkout
    - mailing address
- newletter subscription
- polls
- postal code (for accessing location services)

### Activity: Top 10 best practices
Break into groups of 3 or 4 and rank your Top 10 of the best practices listed in [58 Form Design Best Practices & Form UX Examples](https://www.ventureharbour.com/form-design-best-practices/). Base your decisions on your own experiences filling out forms.

### Anatomy of a form
- form container
  - method
  - action
  - enctype
- input types (see [complete list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- text based fields
  - text
  - password
  - phone
  - email
  - textarea
- selection fields
  - one of many
    - radio buttons
    - menu select
  - one or more of many
    - checkbox
    - multi-select
- special fields
  - file upload
    - enctype required
  - range
  - color picker

### Activity: Over-18 button
Head out of the gutter! Many industries (ex. brewery/cannabis in Canada) are legally required to have a splash page with a click-through "agreement" that you're over the age of 18. Build the button:
- must be an operable form
- use a proper form submit input instead of a button
- bonus: build the button as a label/input:checkbox pair. Hint, an input with `display: none` can still be checked/unchecked using its label. Have the background of the label change when the input is checked.

### Considerations with forms
- accessbility
  - fieldset and legend
  - labels
  - layout
- placeholders
- adjacent and sibling selectors
- :checked pseudo-selector

## Flexbox vs Grid Forms, Neither?
- html structure considerations
- browser support
- usability

## Activity: Email form
Find a free form submission service online and create a working Contact form with the following fields:
  - name
  - email
  - message