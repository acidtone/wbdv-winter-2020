# CPNT 260 Day 8
## Housekeeping
### Assignments (15% each)
- Jan 22: Assignment 1 - Hero section
- Jan 27: Assignment 2 - Team card
- Jan 29: Assignment 3 - Signin and Registration

### Final Exam
Monday, Jan 27 @ 12:45PM

Worth: 20%
- 20 MC Questions
- ~24 minutes

### Final Project
Due: Sunday, Feb 1st @ 8PM

Worth: 35%

Synopsis: Build a single page incorporating Assignments 1-3. Stay tuned for additional requirements and rubiric.

## Prep
- [Parts 3-7: Resilient CSS](https://www.youtube.com/playlist?list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y) on Layout Land
  - [CSS Error Handling](https://youtu.be/NJjlzxud4_M)
  - [CSS Overrides](https://youtu.be/0X6zrW2QW8Q)
  - [Feature Queries: Part 1](https://youtu.be/T8uxmUQZsck)
  - [Feature Queries: Part 2](https://youtu.be/7y-xfxC2jGA)
  - [Failing Excellently](https://youtu.be/X3xvMKgtB-c)

## Progressive enchancement
1. Lock down your HTML
    - is it semantic?
    - will it make sense to screen readers and bots?
    - is the most important content higher in the source order?
2. Consider older browsers
    - what's the support for the newer features being used?
    - what's the user experience without these declarations?
    - is the site broken? 
      - if not, is it worth fixing?
3. Craft better code
    - how do we science the sh*t out of this?

### Hero example
Source: [CSS Overrides](https://youtu.be/0X6zrW2QW8Q) by Jen Simmons

### Activity: Progressively Enhance clip-path and shape-outside
See [README](activities/progressive/README.md) for details.

## Feature Queries
- chain queries together with AND
- consider browsers that don't support Feature Queries
  - avoid the NOT statement
  - avoid using Feature Queries with `display: flex`
- is the feature worth the work of progressive enhancement?
- live code: adding `initial-letter` to the `clip-path` section.

### Activity: `@supports (display: grid)`
Take a grid project that you're most proud of. Move the grid code into a Feature Query. What's the minimum amount of work needed to salvage the experience for browsers that don't support grid?