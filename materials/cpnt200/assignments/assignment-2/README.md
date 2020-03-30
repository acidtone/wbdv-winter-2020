# Assignment 2: Wordpress Simple Parent Theme
## Purpose
This task helps you become familiar with the fundamentals of WordPress by creating pages, posts, a menu, a user, and adding themes and plugins.

## Directions
In your WordPress instance, create an elegant user design and user experience for the CG Law LLP firm. 

They are looking for a 3-page Wordpress website that they can edit themselves:
- Create a Post for each of the 3 lawyers, using `lawyer-text.txt` for content:
  - Create a Category called ‘Lawyers';
  - Assign the ‘Lawyers' category to each lawyer post;
  - Do NOT allow comments on the Lawyer Posts;
  - Upload 3, openly licensed images for the lawyer profile pictures to the Media section and display them with their bios.
- Create a Post for each of the 3 practice areas, using `practice-areas.txt` for content:
  - Create a Category called 'Practice Areas';
  - Assign the 'Practice Areas' Category to each Practice Area Post;
  - Do NOT allow comments on these Posts.
- Create 3 Pages:
  - Home Page
    - List the Posts added to the Practice Areas Category
    - Post navigation should be removed (either from the template or using CSS)
    - Display a hero image (which should be stored in the Media section) that is different than the parent theme
  - About Our Firm
    - List the Posts added to the Lawyer Category
    - Post navigation should be removed (either from the template or using CSS)
    - Create a custom Page template for this content. Maybe display these posts in a grid?
  - Contact Us 
    - Integrate a Contact Form using Contact Form 7
    - Embed an interactive map (Google, OpenLayers, Leaflet, etc) displaying the fake address for the law firm (see plugin instructions below).
- Create a global navigation menu:
  - that lists the above Pages;
  - denotes the current page the user is on.
- Install WordPress plugins that perform the following features:
  - Contact Form 7
  - Search engine optimization
  - Embedded Map (if required/recommended/convenient)

## Requirements
- You may not use any pre-built themes (exception below).
- You may use code examples from the following sources without attribution:
  - Underscores starter WP theme;
  - Wordpress Codex;
  - Code provided as course material.
- You may adapt code from other sources but you must document and attribute code that is not yours.
- Final website must be deployed to a live server (see Submission Requirements below).

## Deliverables and Rubric
5 points will be given to each of the following deliverables:

### 1. Code Quality
Your code should be valid, well formatted/organized and easy for your instructor to find the things while marking.

### 2. Post Setup
The Lawyer and Practice Areas content has been implemented according to the instructions.

### 3. Page Setup
The Home, About and Contact content has been implemented according to the instructions. The primary navigation works as expected.

### 4. Stylesheet Injection
External stylesheets have been successfully added to the site to enhance the presentation of the website. The design can be minimal but adherence to basic UX principles is expected.

### 5. Plugin Setup
The contact form, SEO and Google Map plugins have been implemented according to the instructions.

## Submission Instructions
Upload the following project files to Brightspace
- Create an admin account in the WP Admin panel:
  - username: instructor
  - password: password
- Zipped wordpress files
- phpMyAdmin database export
and submit your repo and deployed website urls as a comment.
