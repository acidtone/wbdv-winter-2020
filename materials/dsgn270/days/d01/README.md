# DSGN 270: Day 1

## The Trolley Problem
How are online interactions different from the real world?

## Tool Time: Installing VitalSource
VitalSource Bookshelf is the software that displays your E-Text. Installation requires an active Internet connection and administrator access to your computer.

1. To install the VitalSource Bookshelf, go to https://www.vitalsource.com/download
2. Under Bookshelf Download Page, identify the device you are using and click "Download." Follow the download instructions.
3. Open the VitalSource Bookshelf and complete all fields in the Registration Form and click "Submit."
4. Click the Account tab in the tool bar and select Redeem Code.
5. Enter your code in the Redemption Code field, click OK.
6. The title will display in the center window pane, double-click on the title to open your E-Text.

## User Experience (UX)
### Mental Models
- [Definition](https://youtu.be/9gM8K4ooavY?t=241)
    - Key Principle: A mental model is how you think something will work, based on your learning and experience.
- Facts: 
    - We're always comparing our mental models with the real world.
    - Mental models can evolve over time. Example: users now have no problem scrolling.
    - When you've taken people into a new paradigm, you can then evolve that paradigm
- A designer fills the gap between System Models and Interaction Models
    - "If you're creating something unfamiliar, base it in the familiar first"
- Key Takeaway: If a mental model closely matches the actual behaviour of the device or interface, then people can:
    1. make accurate predictions,
    2. make correct decisions, and
    3. choose appropriate actions.

### Steve Shrug's Facts of Life
1. We don't read pages. We scan them.
2. We don't make optimal choices. We satisfice.
3. We don't figure out how things work. We muddle through.

### Take Advantage of Web Conventions (i.e. Mental Models)
- Where things are located on a page.
- How things work. Example: the shopping cart metaphor.
- How things look. Example: errors are red and like buttons are blue.

### Making Pages Scannable
#### Create Visual Hierarchies
- Prominence -> importance
- Logically related -> visually related
- Nesting -> parent/child relationships

#### Design Content for Cards
- Break pages up into clearly defined areas
- Use plenty of headings
- Keep paragraphs short
- Use bullet points and numbered lists

#### Extras
- Make it obvious what's clickable
- Highlight key terms
- Keep text readable by increasing contrast with their background

## Activity: Design and Usability
- Visit a few different websites.
- What problem are they trying to solve overall?
- How do they approach solving that problem?
- Look at different parts of the site and look at
what works well and what doesn't work well.
    - What conventions do you see?
    - Are there any violations in convention?
    - Are they effectively creating visual hierarchy? Why/why not?

## Accessibility

What are some types of disabilities that may affect how someone uses a website?
- sight: blind or low vision
- hearing: deaf or hard of hearing (caption on videos) 
- mobility: unable to use mouse, only uses keyboard, uses voice commands
- cognitive disabilities: 
    - brain injury/disease
    - dyslexia
    - memory
    - ADHD

### WGAC 2.0 Four Principles
1. _Perceivable_: Information and user interface components must be presentable to users in ways they can perceive.
2. _Operable_: User interface components and navigation must be operable.
3. _Understandable_: Information and the operation of user interface must be understandable.
4. _Robust_: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

### Assistive Technologies
- Screen reader
- Screen magnification software
- Text reader
- Speech input software
- Alternative input devices
    - Head pointer
    - Motion tracking/eye tracking
    - Single switch entry device

### Keys to basic accessibility
1. Appropriate image `alt` text usage
    - if you want a screen reader to read it, use text that describes what's in the image, not just an image title
    - if not (such as for an icon), leave alt attribute blank or use a CSS image instead
2. Replace `div` tags with semantic markup such as `nav`, `header`, `main`, `section`, `article`, `aside`, `footer`, etc
3. Use descriptive link text. Example: "click here" is NOT descriptive.
4. Create high colour contrast text.
5. Make text quickly scannable (i.e. for ADHD, memory disabilities). See the above UX section for details on how to do this.
6. Forms:
    - Use `fieldset` and `legend` tags to provide the purpose and directions for filling out a form
    - `label` your `input` fields
    - Be careful when altering `:focus` behaviour
    - Make sure keyboard entry is preserved when submitting a form via javascript

### Accessibility Bonuses 
Designing a website for accessibility comes with some easy wins
- The site will usually have better SEO. Search bots operate much like a blind user.
- Making content brief and scannable lends itself to card-based design patterns (more on this tomorrow when we talk about responsive design)
- Accessible websites often carry advantages over to all users. Example: Step-by-step Google Map directions started as an accessibility project.

## Activity: Accessibility
See the [DSGN 270 Resource page](../../README.md) for links to the spec and tools.
- Visit a few different websites (or your selected HTML template from yesterday).
- How accessible is the website? You will have to view the source or inspect the pages to find out.
- Try using an accessbility checker (either online or as a browser extension) to automate this process.

### Questions to ask:
- What is the contrast of the text?
- Are the images using `alt` attributes properly?
- Is the site using semantic tags? If not, are there any `role` attributes used?
- Are the forms constructed in am accessible manner?

## Prep for Tomorrow
- Video: [Pasteup -> Grid](https://youtu.be/E005mjqpZ9Y)
- Article: [Designing Card-Based User Interfaces](https://www.smashingmagazine.com/2016/10/designing-card-based-user-interfaces/)
- Article: [The Thumb Zone: Designing For Mobile Users](https://www.smashingmagazine.com/2016/09/the-thumb-zone-designing-for-mobile-users/)
