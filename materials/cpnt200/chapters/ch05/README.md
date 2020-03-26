# CPNT 200 Chapter 5 - Theme Anatomy
## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic

## Announcements
https://events.hashicorp.com/workshops

## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic

### Relevant Docs
- [Theme Handbook](https://developer.wordpress.org/themes/)
  - [Theme Basics](https://developer.wordpress.org/themes/basics/)
  - [Post Types](https://developer.wordpress.org/themes/basics/post-types/)
  - [Ogranizing Theme Files](https://developer.wordpress.org/themes/basics/organizing-theme-files/)
  - [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
  - [The Loop](https://developer.wordpress.org/themes/basics/the-loop/)

### CRUD Content Strategy: Questions to ask
- Create
  - How often is new content added?
  - Is it published on a regular(ish) schedule?
  - How much of it is there?
  - How much will there (hopefully) be?
- Retrieve
  - Does the content naturally fall into categories?
  - Can the content be sorted by date?
  - Would tagging help filter the content?
  - Is this content public or password protected.
- Update
  - How often is the content changing?
  - Who owns the content?
- Delete
  - Is content ever really deleted?

### WP Pages
- Great for content:
  - that is important enough to be in the navigation
  - that doesn't change often
  - adding structured layouts
    - Codex: [Page Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/)
    - Codex: [Custom Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/#creating-a-custom-page-template-for-one-specific-page)
    - Codex: [Template Partials](https://developer.wordpress.org/themes/template-files-section/partial-and-miscellaneous-template-files/#content-slug-php)
    - Note: Template pages override custom pages
- Not a lot of options:
  - limited settings;
  - no scheduling.

### WP Posts 
- Great for content that:
  - has an author(s);
  - has a category;
    - Codex: [Post Categories](https://en.support.wordpress.com/posts/categories/)
  - can be tagged;
    - Codex: [Post Tags](https://en.support.wordpress.com/posts/tags/)
  - has a date:
    - is organized by date;
    - needs to be scheduled.
- Each post type can be assigned a page template;
  - Codex: [Post Templates](https://developer.wordpress.org/themes/template-files-section/post-template-files/)
- Don't support custom templates;
- Can be customized by setting a [Post Format](https://developer.wordpress.org/themes/functionality/post-formats/) (the theme must explicitly support this).

### Live code: Hide and Seek
- Admin overview
- Underscores tour
- RPG (included in starter) as Posts
- Hide and Seek with `echo()`

## Activity 1: RPG from Scratch
Convert the RPG static site (included in `starter` files) into a basic Wordpress Theme
- add `style.css` and `index.php`
- create a Page for Cleric, Warrior and Wizard using the content from the `rpg` starter files.
- add a primary navigation menu to `index.php` that links to each of these three pages.

## Activity 2: Template Detective
Activate the Underscores theme (included in `starter` files). Answer the following questions:
1. What template file is responsible for displaying a Page?
2. What template could you insert to override this behaviour?

Feel free to edit and delete this theme. You can always [make another](https://underscores.me/).