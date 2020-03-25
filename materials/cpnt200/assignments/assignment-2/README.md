# Assignment 2: Wordpress Child Theme Website
## Purpose
This task helps you become familiar with the fundamentals of WordPress by creating pages, posts, a menu, a user, and adding themes and plugins.

## Requirements
This is a child-theme assignment. Please choose a simple theme to extend into a child theme. Change the presentation and behaviour of this theme using the following methods:
1. Override two or more of the parent theme's templates (or template partials).
2. Inject a custom stylesheet(s) into the theme (don't use the default `style.css` file when you extended the parent theme) and override the presentation to suit your needs.

Important: 
- It should be obvious that the child theme has been changed from the parent theme. Try different layouts, images, colour, fonts, etc. You may also extend one of your own themes.
- Comment the code of your template and CSS overrides so your instructor knows how you've extended the theme. Otherwise, if the changes aren't obvious, you may not receive marks for the work.

## Directions
In your WordPress instance, create an elegant user design and user experience for the CG Law LLP firm. They are looking for a 3-page Wordpress website that they can edit themselves:
- Create a Post for each of the 3 lawyers, using `LawyerText.txt` for content:
  - Create a Category called ‘Lawyers';
  - Assign the ‘Lawyers' category to each lawyer post;
  - Do NOT allow comments on the Lawyer Posts;
  - Upload 3, openly licensed images for the lawyers to the Media section and display them with their bios.
- Create a Post for each of the 3 practice areas, using `PracticeAreas.txt` for content:
  - Create a Category called 'Practice Areas';
  - Assign the 'Practice Areas' Category to each Practice Area Post;
  - Do NOT allow comments on these Posts.
- Create 3 Pages:
  - Home Page
    - List the Posts added to the Practice Areas Category
    - Display a hero image (which should be stored in the Media section) that is different than the parent theme
  - About Our Firm
    - List the Posts added to the Lawyer Category
  - Contact Us 
    - Integrate a Contact Form using Contact Form 7
    - Embed an interactive Google Map (not just an image) displaying the fake address for the law firm (see plugin instructions below).
- Create a global navigation menu:
  - that lists the above Pages;
  - denotes the current page the user is on.
- Install WordPress plugins that perform the following features:
  - Search engine optimization
  - Embedded Google Map

## Deliverables and Rubric
5 points will be given to each of the following deliverables:

### 1. Code Quality
Your code should be valid, well formatted/organized and easy for your instructor to find the things while marking.

### 2. Post Setup
The Lawyer and Practice Areas content has been implemented according to the instructions.

### 3. Page Setup
The Home, About and Contact content has been implemented according to the instructions.

### 4. Template Setup
Two or more parent templates have been overridden and the visual effect is noticeably different than the parent theme behavior.

### 5. Stylesheet Injection
External stylesheets have been successfully added to the site the visual effect of the CSS is noticeably different than the parent theme behavior.

### 6. Plugin Setup
The contact form, SEO and Google Map plugins have been implemented according to the instructions.

## Submission Instructions
Upload the following project files to Brightspace
- Zipped wordpress files
- phpMyAdmin database export
and submit your repo and deployed website urls as a comment.
