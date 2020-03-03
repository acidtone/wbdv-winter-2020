# Activity: Create template partials
You should have a 'views' folder in your EJS app that contains your new ejs files. Move the repeating elements in your design to ejs partials:

1. Create a 'partials' directory in your views directory.
2. Create a template "partial" for a nav bar or header that is shared across multiple files.
3. Take a header or nav bar from your main ejs template and save it to a new header.ejs or nav.ejs file and store it in views/partials
4. Using the 'include' syntax, include your new partial in the parent ejs files that require them.

Test your app. It should behave the same way as the public/html version did, but you only have to change header/nav code in one place.