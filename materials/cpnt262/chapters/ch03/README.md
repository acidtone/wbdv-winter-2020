# CPNT 262: Chapter 3
## Overview Static Express Website
- [Official Site](https://expressjs.com/)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

## Introduction to Dependencies
- Search: [software dependencies](https://www.google.com/search?q=software+dependencies)
- Dependency management tools
  - npm: Node Package Manager
  - Search: [npm introduction](https://www.google.com/search?q=npm+introduction)
  - [npm Registry](https://www.npmjs.com/)
- [Semantic versioning](https://semver.org/)
  - major releases
  - minor releases
  - patch releases
  - npm: `~` vs `^`
    - Search: [npm tilde vs caret](https://www.google.com/search?q=npm+tilde+vs+caret)

**Environment Setup**: In case you haven't already...

### Install npm (comes with NodeJS)
Type the following in your command line to see if you have NPM installed:

```bash
$ npm --version
```

### npm Best Practices
- Don't initialize projects within projects.
- Add `node_modules` to your `.gitignore` file. This directory stores all your dependencies (often lots of files) which should not be committed to your repository.
- Commit `package.json` and `package-lock.json` to your repository.
- Don't manually edit `package-lock.json`.
- Update `package.json` by the command line (or other tool) unless you're comfortable editing the file manually (we'll be doing this in Activity 2).

### Activity 1: Initialize a Project
1. Create a new project directory called `express-hello-world`
2. Copy `app.js` and `public` from today's starter directory into `express-hello-world`.
3. Navigate to `express-hello-world` on the command line.
4. Initialize a new NPM project with the following command:

        $ npm init -y
    `-y` skips the set up questions; defaults are fine for now

5. A `package.json` file was created in the current directory. This directory is now an NPM project.
6. Install Express with the following command:

        $ npm i express --save 

    `--save` adds express as a project dependency in `package.json`  
7. A `node-modules` directory was created in the current directory. This is where NPM will store your local dependencies.

## Activity 2a: Preparing for Heroku
1. In your `package.json` file, change this:

        scripts: {
            "test": "echo \"Error: no test specified\" && exit 1"
        },

    To this:

        scripts: {
            "start": "node app.js"
        }

2. In the same file, add the following property after `"version": "1.0.0",`:

          "engines": {
            "node": "^12.16.1"
          },

## Activity 2b: Deploy a Static Express Site to Heroku
Heroku is a popular host that supports NodeJS and has a free plan available.

1. Push your project to a public GitHub repo. Be sure to .gitignore your `node_modules` directory but include `package.json` (with the changes you made in Activity 2a above) and `package-lock.json`.
2. Create a Heroku Account if you haven't already.
3. Create a New App.
4. Under Deploy, connect your app to your GitHub repo.
5. Optional: Enable automatic deploys from GitHub

See also: 
- [How to deploy a NodeJS app to Heroku from Github](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)
