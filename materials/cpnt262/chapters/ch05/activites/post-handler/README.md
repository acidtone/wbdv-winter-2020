# Adding a POST endpoint handler
Choose one of the sample express websites that we've built this week.
1. Add a GET handler for the endpoint `/register` that returns a contact form. Maybe use the form you used in one of your CPNT 260 projects. This form should have the following parameters:
    - `action` of `/register`
    - `method` of `POST`
    - fields:
        - `email`
        - `password`
        - `confirm-password`
2. Add a POST handler for the endpoint `/register` that accepts data that is submitted through the above form. Don't forget to add your `urlencoded()` middleware.
3. Add and render a "Thank You" view that returns the data just submitted. 

What URL shows in the browser when this view is returned?
