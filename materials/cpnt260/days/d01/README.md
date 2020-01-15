# CPNT 260 Day 1
## Code Validation
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- minimum valid HTML page

### Activity: Creating a web page from Codepen
Create a single webpage from the HTML, CSS and JS listed in a Codepen of your choice. All styles and script should be embedded in the index.html page itself. Validate this page.

Tony's fave CSS nerds:
- [Mandy Michael](https://codepen.io/mandymichael)
- [Sarah Drasner](https://codepen.io/sdras/)
- [Lea Verou](https://codepen.io/leaverou)
- [Val Head](https://codepen.io/valhead)
- [Una Kravets](https://codepen.io/una)

## Box Model
- content
- width
- height
- border
- margin
- padding

### Inline vs Block vs inline-block
Source: [Stack Overflow](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)
- Inline elements:
  - respect left & right margins and padding, but not top & bottom
  - cannot have a width and height set
  - allow other elements to sit to their left and right.
  - see [very important side notes](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)
- Block elements:
  - respect all of those
  - force a line break after the block element
  - acquires full-width if width not defined
- Inline-block elements:
  - allow other elements to sit to their left and right
  - respect top & bottom margins and padding
  - respect height and width

## Semantic HTML
Source: [Free Code Camp](https://guide.freecodecamp.org/html/html5-semantic-elements/)
- `&lt;article&gt;`
- `&lt;aside&gt;`
- `&lt;details&gt;`
- `&lt;figcaption&gt;`
- `&lt;figure&gt;`
- `&lt;footer&gt;`
- `&lt;header&gt;`
- `&lt;main&gt;`
- `&lt;mark&gt;`
- `&lt;nav&gt;`
- `&lt;section&gt;`
- `&lt;summary&gt;`
- `&lt;time&gt;`

## CSS Colour
Overview of positive and negative colour models.
- Positive: RBG
- Negative: CMYK

Overview of the four colour modes of CSS
- colour names
- hexcode
- RBG
- HSL

## Images
### file formats 
See [the complete list of browser supported formats](https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support).
- jpg/jpeg
- png
- svg (displayed as raster)
- gif*
- bmp*

### Images: Are they content or presentation?
- content (html)
  - img tag
    - src attribute
    - alt attribute
    - inline by default
      - display: block -> block level element
      - line boxes
    - floats
    - semantics
      - figure tag
      - figcaption tag
- presentation (css)
  - background-image
    - url()
    - background-position
    - background-size
    - background-repeat
    - multiple backgrounds
    - gradients
      - linear
      - radial
