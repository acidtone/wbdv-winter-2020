# CPNT 200 Chapter 5 - Theme Anatomy
## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic

### Relevant Docs
- [Theme Handbook](https://developer.wordpress.org/themes/)
  - [Theme Functions](https://developer.wordpress.org/themes/basics/theme-functions/)
  - [Linking Theme Files & Directories](https://developer.wordpress.org/themes/basics/linking-theme-files-directories/)
  - [Including CSS & JavaScript](https://developer.wordpress.org/themes/basics/including-css-javascript/)
  - [Conditional Tags](https://developer.wordpress.org/themes/basics/conditional-tags/)
  - [Categories, Tags & Custom Taxonomies](https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/)

### Basic Theme CSS
- creating a minimal theme from static html
- it works, but relative links require a wp function to operate
  - `get_template_directory_uri()`.'/css/path/here.css'

### Enqueue CSS and Scripts
- Adding external css and js to your theme
- Linking to external styles and scripts the "right" way
- Use add_action to add your hook function
  - `add_action('wp_enqueue_scripts', '[name-of-function]')`
- Create your hook function to create link and script tags
  - styles: `wp_enqueue_style('blendmode-styles',paht-to-css,false);`
  - scripts: `wp_enqueue_script('blendmode-scripts',path-to-js, false);`

### Deployment!
Deployment is a requirement for Assignment 2
1. Decide on a host to deploy your Wordpress site.
    - What's your budget?
    - Does it need to be live after you finish the program (take advantage of a trial period)?
2. Sign up (for just a trial, if needed).
3. Follow the instructions provided by the host for migrating your site. This differs depending on server setup. Older sites ask you to FTP while managed hosts often prefer deploying by git repo.

Try to get a Hello World site up now so you have the process ironed out by the time you submit the assignment.