# CPNT 260: Day 2
## Images
### file formats 
See [the complete list of browser supported formats](https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support).
- jpg/jpeg
  - best for photos
- png
  - best for icons and logos
- svg (displayed as raster)
  - best for icons and logos
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

## Activity: Hero Section
Using what you've learned about the box model and CSS images, create sample page with a hero image and heading. 

The trademarks of a hero section:
- Large banner image that is flush with the edges of the top, left and right sides of the window.
- Image ends more than half way down the viewport. It will often take up the entire initial viewport.
- A large heading or call to action (CTA) will sit on top of the background image. Make sure your text is high enough contrast.

For the purposes of this exercise, ignore any primary navigation links. This will be covered when we tackle Flexbox.

See [The power of hero image design: 35 striking case studies to inspire your own](https://www.canva.com/learn/hero-images/) for examples of modern hero sections.

## Web Typography
### Type Faces
There are four broad categories of type faces:
- serifs
  - old style
  - transitional
  - neoclassical & didone
  - slab
  - clarendon
  - glyphic
- sans serifs
  - grotesque
  - square
  - humanistic
  - geometric
- scripts
  - formal
  - casual
  - caligraphic
  - black letter
  - lombardic
- decorative
  - grundge
  - psychedelic
  - graffiti
- monospaced

Limit your body text to serif and sans serif type faces. Reserve scripts and decorative fonts for headings and hero type.

### Balancing the typography triad
- font size
  - for screen design, a good range is 14-25 pixels
- line spacing
  - usually 120-150% of your font size
  - default depends on browser and font family but is often 1.2 (120%)
  - in general, the longer your line length, the more line height you need
- line length 
  - long line lengths are a common problem in web
  - stay within 45-75 characters long
  - use the `ch` unit to control character length

### Generic keywords
Source: [MDN font-family documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names. The following keywords are defined:
- serif
- sans-serif
- monospace
- cursive
- fantasy
- system-ui
- emoji
- math
- fangsong

### Web safe fonts
Source: [Font stacks for Window & Mac browsers](https://coderwall.com/p/57imrw/common-fonts-for-windows-mac)

- Arial, Helvetica, Sans-Serif
- Arial Black, Gadget, Sans-Serif
- Comic Sans MS, Textile, Cursive
- Courier New, Courier, Monospace
- Georgia, Times New Roman, Times, Serif
- Impact, Charcoal, Sans-Serif
- Lucida Console, Monaco, Monospace
- Lucida Sans Unicode, Lucida Grande, Sans-Serif
- Palatino Linotype, Book Antiqua, Palatino, Serif
- Tahoma, Geneva, Sans-Serif
- Times New Roman, Times, Serif
- Trebuchet MS, Helvetica, Sans-Serif
- Verdana, Geneva, Sans-Serif
- MS Sans Serif, Geneva, Sans-Serif
- MS Serif, New York, Serif

### Activity: Create a font sheet
Write a class decoration for each of the system font stacks above.
- name each class descriptively but briefly
- assign the font stack using `font-family`

### Font services
Search: [Google Fonts vs Adobe Fonts](https://www.google.com/search?q=fonts+google+vs+adobe&oq=fonts+google+vs+adobe)

## @import vs @font-face
Source: [Difference between @font-face and @import url?](https://stackoverflow.com/questions/56141957/difference-between-font-face-and-import-url)

### Activity: Create a font reference
Write an html page that uses each of the classes you wrote in the previous exercise.
- create one card per font stack that includes a heading and paragraph
- try using the semantic tags `section` and/or `article`
- use sample text of your choice
- keep your line length to 40-75ch
- bonus: make it responsive using `min-width` or `max-width`

### Icon fonts
Search: [icon fonts](https://www.google.com/search?q=icon+fonts)

## HTML Entities
- Reference: [List of all official HTML entities](https://html.spec.whatwg.org/multipage/)