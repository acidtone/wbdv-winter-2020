# CPNT 200 Chapter 3
## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic

### Setup: hello-jekyll
- Reference repos: throw-away clones of Jekyll scaffolds
- Live code:
    1. Create GH Pages repo
    2. How to create?
        - `$ jekyll new .`
        - `$ jekyll new . --blank`
        - from scratch?

### List pattern
- Overview of starter files
- Lists and items
- Jekyll list types
  - Posts
    - Jekyll Docs: [Posts](https://jekyllrb.com/docs/posts/)
    - Jekyll Tutorial: [Writing Posts](https://youtu.be/gsYqPL9EFwQ)
    - CloudCannon Tutorial: [Introduction to blogging](https://learn.cloudcannon.com/jekyll/introduction-to-blogging/)
  - Collections
    - Jekyll Docs: [Collections](https://jekyllrb.com/docs/collections/)
    - CloudCannon Tutorial: [Introduction to collections](https://learn.cloudcannon.com/jekyll/introduction-to-jekyll-collections/)
  - Data Files
    - Jekyll Docs: [Data files](https://jekyllrb.com/docs/datafiles/)
    - Jekyll Tutorial: [Data files](https://youtu.be/M6b0KmLB-pM)
    - CloudCannon Tutorials
      - [Introduction to data files](https://learn.cloudcannon.com/jekyll/introduction-to-data-files/)
      - [Simple Navigation](https://learn.cloudcannon.com/jekyll/simple-navigation/)
    - Don't forget to vlaidate you YML: [search 'YAMLLint'](https://www.google.com/search?q=yamllint)
- [Information architecture best practices](https://ben.balter.com/jekyll-style-guide/information-architecture/) (source: [Opinionated style guide](https://ben.balter.com/jekyll-style-guide/))
### Live code poll: What should Tony code?
- Posts list at `index.md` --> post page
- RPG Character collection at `characters.md`
- Definition data at `definitions.md`

### Notes
- Lists and items
  - endpoints
    - list: `GET /users`
    - item: `GET /users/:id`

## Activity 1
Try completing one of the live code options above. See `starter` directory in this repo for sample files.

## Activity 2
Make sure your system is ready for Wordpress. See the [Official System Requirements](https://wordpress.org/support/article/requirements/) here.

- Popular LAMP installation options
  - bare metal: install directly on your machine
  - XAMPP/MAMP
  - Docker Desktop
- Platform considerations
  - Mac: tony's tale of bare metal installation
  - Windows

## Activity 3
Try this [advanced navigation tutorial](https://learn.cloudcannon.com/jekyll/advanced-navigation/). It relates directly to Assignment 1.

## Further Resources
- [CloudCannon Tutorials](https://learn.cloudcannon.com/)
  - Tutorial: [Advanced Navigation](https://learn.cloudcannon.com/jekyll/advanced-navigation/)
- Plugins
  - [Top 33 Jekyll Plugins](https://planetjekyll.github.io/plugins/top)
  - [Jekyll Plugins](http://www.jekyll-plugins.com/)
