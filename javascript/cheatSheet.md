---
title: javascript
category: Javascript
layout: 2017/sheet
tags: [Featured]
updated: 2020-01-03
keywords:
    - "javascript"
    - "javascript cheat sheet"
prism_languages: [javascript]
intro: |
  Javascript cheat sheet 
---

Shortcuts
---------
{: .-two-column}

## Basics

### Print stdout

```javascript
console.log("Hello World!");
```

### Defining a variable

```javascript
let name = 'Kasra';
// It's common to define a string with single quote in JS
```

### Defining a constant

```javascript
const englishLanguageCode = 'EN';
```

### Primitive types

```javascript
let name = 'Kasra';  // string
let evenNumber = 20; // number
let isMarried = false; // boolean

// If variable is not initialized the default value is 'undefined'

// It is also possible to set a variable to null

name = null;
```

### Getting the type of variable

```javascript
typeof name // prints 'string'

let someVar = null;
typeof someVar // prints 'object'
let anotherVar;
typeof anotherVar // prints 'undefined'
```

### Defining an object

```javascript
let person = {
    name : 'Kasra',
    age : 30,
    gender: 'Male'
};

console.log(person.name); // prints 'Kasra'
person.name = 'John';
console.log(person.name); // prints 'John'
// Another approach of setting value of an object
person['name'] = 'Joe'; // sets name as 'Joe'
// Or
let propertyVal = 'name';
person[propertyVal] = 'David'; // sets name as 'David'
```

### Defining an array

```javascript
let languages = ['English', 'German', 'Persian'] ;

console.log(languages[0]); // prints 'English'

languages[3] = 'French'; // Add 'French' to language array

typeof languages;  // prints object
```

### Defining a function

```javascript
function add(x, y) {
    return x + y;
}

console.log(add(10, 20)); // prints '30'

function printFullName(firstName, lastName) {
  console.log("FirstName: " + firstName + "\n" + "LastName: " + lastName);
}

printFullName("Kasra"); // since only one argument has passed, it prints 'FirstName: Kasra \n LastName: undefined'
```

### Strings

#### Length

```javascript
str = "Kasra";
str.length;
```

#### Get first character

```javascript
str[0]
```

#### String interpolation

```javascript
function concat(str1, str2) {
    return `${str1} ${str2}`
}
```

