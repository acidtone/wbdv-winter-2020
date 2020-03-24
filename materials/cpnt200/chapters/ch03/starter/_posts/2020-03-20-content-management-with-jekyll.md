---
layout: post
title:  "Content Management with Jekyll"
date:   2020-03-20 08:00:00 -0600
categories: cpnt200 jekyll
---
# {{page.title}}
## Assignment 1
See [Winter 2020 Assignments](../../assignments/README.md)

## Morning Live Stream Agenda
- Reminders for Tony
    1. Hit Record
    2. Turn on Chat
    3. Put on mic
- Ruby DevOps
  - Ruby/Jekyll terms: see [Setup](https://jekyllrb.com/docs/step-by-step/01-setup/)
    - Ruby
    - Gem and RubyGem
    - Gemfile
    - Bundler/`bundle`
  - Options for installing
    - bare metal
    - `rbv`: Ruby version manager
    - docker
  - Questions to ask
    - How often do you use Ruby?
    - Do you have multiple Ruby projects to maintain?
    - Is your laptop close to death?
  - installation
    - Mac
    - Windows
- CRUD of content
- Hagrid and Hermoine
  - Hagrid CRUD
    - Creating and Retrieve: 
      - Request comes in
      - Hagrid will assemble index.html using views and db info
      - Respond with finished HTML
  - Hermoine CRUD
    - Create:
      - parse markdown of the site from file database
      - create every possible static page of the site ONCE
    - Retrieve: 
      - finds index.html in the file system
      - returns it.
- differences between WP and Jekyll (there are lots more)
  - database
    - WP -> mysql
    - Jekyll -> file database
- Live code: vanilla jekyll
  - [Jekyll Documentation](https://jekyllrb.com/docs/)
  - Basic jekyll structure
    - [Great Jekyll Summary](http://jekyllbootstrap.com/lessons/jekyll-introduction.html)
  - [YAML](https://yaml.org/)

[20 min break]

- Live code: try a couple [Top 10](https://jekyll-themes.com/blog/top-jekyll-themes/) installs
  - pagination headaches
  - localization
  - skins

### Afternoon Check-in
- How far did we get installing Jekyll?
- Update from Kim/Karen meeting
- Overview of minimal mistakes theme
- Anything else?

### Q&A
- Q:
  A:

## Jekyll
### [Requirements](https://jekyllrb.com/docs/installation/#requirements)
- Ruby version 2.4.0 or above, including all development headers (ruby version can be checked by running ruby -v)
- RubyGems (which you can check by running gem -v)
- GCC and Make (in case your system doesn’t have them installed, which you can check by running gcc -v,g++ -v and make -v in your system’s command line interface)

### [Installation](https://jekyllrb.com/docs/installation/#guides)
- [macOS](https://jekyllrb.com/docs/installation/macos/)
- [Ubuntu Linux](https://jekyllrb.com/docs/installation/ubuntu/)
- [Other Linux distros](https://jekyllrb.com/docs/installation/other-linux)
- [Windows](https://jekyllrb.com/docs/installation/windows/)
- [Docker](https://hub.docker.com/r/jekyll/jekyll/)
  - [README.md](https://github.com/envygeeks/jekyll-docker/blob/master/README.md)

### Getting Started
- [Jekyll Documentation](https://jekyllrb.com/docs/)
  - [Step-by-step Tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/)
- [Great Jekyll Summary](http://jekyllbootstrap.com/lessons/jekyll-introduction.html)
- [Jekyll Example Sites](https://talk.jekyllrb.com/t/jekyll-showcase-share-your-sites-built-with-jekyll/44/20)

## Jekyll on GitHub Pages
- GitHub
  - [Setting up a GitHub Pages site with Jekyll](https://help.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll)
  - [Remote Themes on GitHub Pages](https://github.blog/2017-11-29-use-any-theme-with-github-pages/)
- Search: [github pages jekyll](https://www.google.com/search?q=github+pages+jekyll)

## Activity 1: Jekyll Setup
1. Install Ruby, RubyGems (and possibly GCC and Make) on your system (See [Installation Guide](https://jekyllrb.com/docs/installation/#guides))
2. [Install Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/)
3. [Create Hello World site](https://jekyllrb.com/docs/step-by-step/01-setup/#create-a-site)
4. Optional: [Continue with Jekyll Step-by-step](https://jekyllrb.com/docs/step-by-step/02-liquid/)

## Activity 2: Try installing one or more 3rd party themes
- Search: [top jekyll themes](https://www.google.com/search?q=top+jekyll+themes)
  - [Top 10](https://jekyll-themes.com/blog/top-jekyll-themes/)
  - [Free Themes on Jekyll Themes](https://jekyll-themes.com/free/)

1. Pick a theme that speaks to you as a person.
2. Install theme according to the theme's instructions (sometimes a bumpy road).
3. Customize site as needed (hint: [Assignment 1](../../assignments/assignment-1/README.md)).

## Activity 3: Install Jekyll Using the GitHub Pages Theme Chooser
- [Theme Chooser Step-by-Step](https://help.github.com/en/github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser#adding-a-theme-with-the-theme-chooser)
- [List of all default GH Jekyll Themes](https://github.com/pages-themes)

