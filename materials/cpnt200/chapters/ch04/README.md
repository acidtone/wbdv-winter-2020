# CPNT 200 Chapter 4 - Installing Wordpress
## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic

### Troubleshooting LAMP stack installation


### Manual Wordpress installation step-by-step
Assumption: You have installed PHP, MySQL and phpMyAdmin
1. Download and Expand the latest WP Zip. (search: [`Wordpress download`](https://www.google.com/search?q=wordpress+download))
2. Move WP directory to your web root (defined by Apache, XAMPP, MAMPP, etc).
3. Create empty MySQL database (using phpMyAdmin).
4. Navigate to your WP directory in your browser.
5. Fill in the required fields. 
    - You will need to know your root MySQL password. Use the database name you created in Step 3. 
    - You will choose a username/password for your admin account.
6. Complete installation and login with your admin account.

Done!

### PHP Overview
- See: [PHP Beginners Crash Course](https://youtu.be/LEffbgKrhHU?t=1402) (skipping past the boring stuff)
- PHP file extension
  - needed for the PHP module to parse the page as PHP
- PHP delimiter
  - open tag: `<?php`
  - close tag: `?>`
- Live demo
  - See: Starter website from Chapter 2
  - `include()` and `require()`
  - Class PHP: the `includes` folder
- Reminder: Fundamental programming structures
    1. Names
    2. Values
    3. Expressions
    4. Operators
    5. Functions
    6. Arrays
    7. Objects
- PHP in a Nushell
  - See: [PHP Cheat Sheet](https://websitesetup.org/php-cheat-sheet/)
  - PHP parser: multi-threaded (as opposed to Node which is single-threaded) and not at all asynchronous
  - Ignores HTML by default
  - Dynamically typed (meaning variables can switch types)
  - Variable naming convention: snake_case
  - Indexed vs associative arrays
    - Indexed array --> array in javascript
    - Associative array --> object in javascript (kinda)
- Top troubleshooting functions
    - `echo` (or `print`)
    - `var_dump()` (or `print_r`)

### mySQL Overview
- See:
  - [Summary - Relational Database Model](https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl)
  - [MariaDB vs MySQL](https://www.guru99.com/mariadb-vs-mysql.html)
- Tour: [phpMyAdmin](https://www.phpmyadmin.net/docs/)
  - You will not need to manually interact with a WP database except to:
    - Create a new database prior to WP installation
    - Exporting an existing database
    - Importing an existing database
    - Changing global options `siteurl` and `home`
    - Manually resetting your admin password
      - BTW, the hash for 'password': `$P$B1shCzLv0hiowqH3vNwmuZ8Jeilh1Z1`

### Wordpress Tour
See:
  - [Getting Started with Wordpress](https://codex.wordpress.org/Getting_Started_with_WordPress)
  - [Basic Usage](https://wordpress.org/support/category/basic-usage/)
  - [Developer Handbook](https://developer.wordpress.org/)

## Afternoon Check-in
- Recap
- Student learnings, obstacles, comments
- Assignment 2