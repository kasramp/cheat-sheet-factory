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
let name = "Kasra";
// It's common to define a string with single quote in JS
```

### Defining a constant

```javascript
const englishLanguageCode = "EN";
```

### Primitive types

```javascript
let name = "Kasra"; // string
let evenNumber = 20; // number
let isMarried = false; // boolean

// If variable is not initialized the default value is 'undefined'

// It is also possible to set a variable to null

name = null;
```

### Getting the type of variable

```javascript
typeof name; // prints 'string'

let someVar = null;
typeof someVar; // prints 'object'
let anotherVar;
typeof anotherVar; // prints 'undefined'
```

### Defining an object

```javascript
let person = {
  name: "Kasra",
  age: 30,
  gender: "Male"
};

console.log(person.name); // prints 'Kasra'
person.name = "John";
console.log(person.name); // prints 'John'
// Another approach of setting value of an object
person["name"] = "Joe"; // sets name as 'Joe'
// Or
let propertyVal = "name";
person[propertyVal] = "David"; // sets name as 'David'

delete person.age; // delete the object property

person.hasOwnProperty("age"); // returns false, since the property is deleted
```

### Object with functions

```javascript
let person = {
  name: "Kasra",
  age: 30,
  getMood: function(timeOfDay) {
    timeOfDay = timeOfDay.toLowerCase();
    if (timeOfDay === "noon") {
      return "No bad!";
    } else if (timeOfDay === "morning") {
      return "Okaish";
    } else {
      return "No Good!";
    }
  }
};
```

### Defining an array

```javascript
let languages = ["English", "German", "Persian"];

console.log(languages[0]); // prints 'English'

languages[3] = "French"; // Add 'French' to language array

typeof languages; // prints object
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

**Note:** If you don't define a return value, the default value is undefined.

### Strings

#### Length

```javascript
str = "Kasra";
str.length;
```

#### Get first character

```javascript
str[0];
```

#### String interpolation

```javascript
function concat(str1, str2) {
  return `${str1} ${str2}`;
}
```

### Array

```javascript
let arr = ["Kasra", 30, "Male"];
```

#### Nested array

```javascript
let people = [
  ["John", 40, "Male"],
  ["Kasra", 30, "Male"]
];

console.log(people[0]); // prints `[ 'John', 40, 'Male' ]`

people[0][1] = 37;

console.log(people[0]); // prints `[ 'John', 37, 'Male' ]`
```

#### Add element to array

```javascript
people.push(["Elizabeh", 20, "Female"]);
```

#### Remove the last element

```javascript
let elizabethProfile = people.pop();
```

#### Remove from the first element

```javascript
let johnProfile = people.shift();
```

#### Add element to the first index

```javascript
people.unshift(["Bean", 60, "Male"]);
```

### Equality and strict equality

```javascript
console.log(10 == 10); // prints true
console.log(10 == "10"); // prints true
console.log(10 === 10); // prints true
console.log(10 === "10"); // prints false

console.log(10 != 10); // prints false
console.log(10 != "10"); // prints false
console.log(10 !== 10); // prints false
console.log(10 !== "10"); // prints true
```

### Clone an object

```javascript
let clone = JSON.parse(JSON.stringify(originalObject));
```

### Constructor function

```javascript
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.mood = function(timeOfDay) {
    timeOfDay = timeOfDay.toLowerCase();
    if (timeOfDay === "noon") {
      return "No bad!";
    } else if (timeOfDay === "morning") {
      return "Okaish";
    } else {
      return "No Good!";
    }
  };
}

let kasra = new Person("Kasra", 30, "Male");
kasra.mood("morning");
```

**Note:** Since the above code is the constructor function, the name should start with a capital letter to mimic
the class in `Java`.

### Generate random number between 0..X

```javascript
Math.floor(Math.random() * factor); // factor = 20 generates number between 0 to 19
```

### Prototyping (AKA class inheritaince ploymorphism)

```javascript
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.render = function() {
  console.log("I'm a " + this.width + " x " + this.height + " rectangle");
};

var rectangle = new Rectangle(2, 4);
rectangle.render();

function Square(dimension) {
  Rectangle.call(this, dimension, dimension);
}
Square.prototype = Object.create(Rectangle.prototype);

var square = new Square(16);
Square.prototype.render = function() {
  console.log("I'm a square!");
};

square.render();
```

## Private fields, functions

```javascript
var rectObject = (function() {
  var width = 0;
  var height = 0;

  return {
    resize: function(w, h) {
      width = w;
      height = h;
    },

    printSizes: function() {
      console.log(width + " " + height);
    }
  };
})();

rectObject.printSizes();
rectObject.resize(10, 10);
rectObject.printSizes();

console.log(rectObject.width);
```

**Note:** In the above code `width` and `height` properties are private and inaccessible from outside.

### String to int

```javascript
parseInt("10"); // returns 10
```

## References

- [Java To JavaScript Cheat Sheet](https://techgarage.io/index.php/2017/02/06/java-to-javascript-cheat-sheet/)