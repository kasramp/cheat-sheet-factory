---
title: NPM
category: Javascript
layout: 2017/sheet
tags: [Featured]
updated: 2020-04-10
keywords:
  - "npm"
  - "npm cheat sheet"
  - "node package manager"
prism_languages: [bash]
intro: |
  NPM cheat sheet
---

## Shortcuts

{: .-two-column}

## Basics

### Create a project

```bash
$ npm init
```

### Install dependencies

```bash
$ npm install
```

### Add package

```bash
$ npm install express # installs express
```

### Add package globally (don't use it)

```bash
$ sudo npm install -g express
```

### Add package (development env only)

```bash
$ npm install eslint --save-dev # installs eslint
```

### Run linting

```bash
$ npm run lint
```

### Generate an express app skeleton

```bash
$ npm install express-generator -g
$ express helloworld
$ code helloworld && npm install
```

### Start a green field express project

```bash
$ npm init
$ npm install express --save
$ npm install babel-cli --save # compile ES6 to ES5
$ npm install babel-preset-es2015 --save # compile ES6 to ES5
$ echo '{ "presets": ["es2015"] }' >> .babelrc
$ npm install nodemon --save-dev # for live reload
$ npm install --save body-parser # to parse request body
```

And then add the below line to `package.json` under `script` section,

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon app.js --exec babel-node --"
}
```

Lastly, run the app `npm run start`

### Scaffold express app with express-generator

```bash
$ npx express-generator my_new_fancy_app
$ express my_new_fancy_app
```

### Remove a dependency

```bash
$ npm uninstall jade
$ npm prune 
```
