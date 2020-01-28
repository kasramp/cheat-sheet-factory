---
title: npm
category: Javascript
layout: 2017/sheet
tags: [Featured]
updated: 2020-01-27
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
```

And then add the below line to `package.json` under `script` section,

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon app.js --exec babel-node --"
}
```

Lastly, run the app `npm run start`

### 