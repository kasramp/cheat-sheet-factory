---
title: python
category: Python
layout: 2017/sheet
tags: [Featured]
updated: 2019-02-04
keywords:
    - "python"
    - "python cheat sheet"
intro: |
  Python cheat sheet 
---

Shortcuts
---------
{: .-two-column}

## Basics

### Import

```bash
#!/us/bin/python

import gi # import a package
from games import NumberGuessing # import a class from 'games' package 
```

### Print

```bash
text = "Hello World!"

print(text*2) # print 'Hello World!' twice

# add space automatically 

name = "Mike"
print("Hello", name, "How are you?") # print Hello Mike How are you?
```

### String interpolation

```bash
value = 4 * 20

print("The value is {value}".format(value=value)) # print 'The value is 80' 

# without specifying the parameter name explicitly

print("The value is {value}".format(value)) # print 'The value is 80'

# passing parameters in order

text = "Hello {0}. Are you really {1} years old?"

print(text.format("Mike", 30)) # print 'Hello Mike. Are you really 30 years old?'

# passing parameters via a dictionary

a_dict = {
    "firstName": "Mike",
    "lastName": "Miller",
    "age": "30"
}

a_str = "Hello {firstName} {lastName}. Your age is {age}"

print(a_str.format(**a_dict)) # print 'Hello Mike Miller. Your age is 30'
```

### List

```bash
lst = ["One", "Two", "Three", "Four", "Five"]

# print a list elements one by one
for element in lst:
    print(element)
    
print(len(lst)) # list length

print(lst[2]) # get third element of a list

lst_copy = lst.copy() # copy python 3

lst_copy = lst[:] # copy list for both python 2 and 3

lst[1:] # ['Two', 'Three', 'Four', 'Five']
lst[:2] # ['One', 'Two']
lst[-2:] # ['Four', 'Five']
lst[:-2] # ['One', 'Two', 'Three']
lst[-1] # 'Five'

lst.append("Six") # append a new element to a list

two = lst.pop(1) # get and remove "Two" from the list

lst.pop(0) # removes element "One" from the list
```

### Dictionary

```bash
a_dict = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five"
}

a_dict[2] # return 'two'

a_dict[6] # throw exception

a_dict.get(6) # return None 

a_dict[6] = "Six" # append to dictionary

a_dict[1] = "Something else" # change the value of key '1'

a_dict+={10: "Ten"}

print(a_dict[5] * 2) # print 'FiveFive'

len(a_dict) # get dictionary length

# iterating through a dictionary
for i in a_dict.keys():
    print("{key} = {value}".format(key = i, value = a_dict[i]))


# filtering string in a dictionary and modifying it at the same time
str_lst = []

for element in a_dict.copy().keys():
    if isinstance(element, str):
        a_dict.pop(element)
        str_lst.append(element)
```

### Conditions

```bash

x = 10

if x is 10:
    print("Ten")
elif x == 9:
    print("Nine")
else:
    print("Unknown")

text = "Hello world!"

if isinstance(text, str):
    print("It's a text message")
elif isinstance(text, int):
    print("It's an integer")
else:
    print("Noops")

number = 3

if number > 0 and number % 2 is not 0:
    print("Something")
elif number > 0 or number == 3:
    print("Something else")     

```

### Loop

```bash

lst = ["One", "Two", "Three", "Four", "Five"]

# for-each type of loop
for element in lst:
    print(element)

# traditional for-loop
for i in range(len(lst)):
    print(lst[i])
    
for i in range(10, 20):
    print(i) # print 10 to 19 NOT 20

# while-loop
i, n = 0, 20 
while i < n:
    print(i) # print 0 to 19
    i += 1
```

### Class

```bash

# class creation
class Person:
    __age = 0 # similar to private field

    __gender = "Male" # similar to private field

    def get_age(self):
        return self.__age

    def get_gender(self):
        return self.__gender
        
    def set_gender(self, gender = "Male"):
        self.__gender = gender     

# class instantiation

a_person = Person()

print(a_person.get_gender())

a_person.set_gender("Female")

print(a_person.get_gender())

a_person.set_gender()

print(a_person.get_gender())
```

### Inheritance

```bash
class Mammal:

    __name = "Nothing"

    __age = 0

    __gender = "Male"

    def __init__(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

    def set_age(self, age):
        self.__age =  age

    def get_gender(self):
        return self.__gender

    def set_gender(self, gender):
        self.__gender = gender


class Human(Mammal):

    __education = "Diploma"

    __occupation = "Developer"

    def __init__(self, age, gender, education, occupation):
        # calling parent class method
        super().__init__("Human")
        super().set_age(age)
        super().set_gender(gender)
        self.__education = education
        self.__occupation = occupation

    def get_education(self):
        return self.__education

    def get_occupation(self):
        return self.__occupation


cat = Mammal("Kitty")
cat.set_age(2)
cat.set_gender("Female")
print(cat.get_age())

developer = Human(30, "Male", "Masters", "Developer")
print(developer.get_age())
```

### Abstract Base Class (ABC) or Interface

```bash
# Base class
import abc


class Game(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def get_name(self):
        pass

    @abc.abstractmethod
    def play(self):
        pass

# Implementation


import random

from games import Game


class NumberGuessing(Game):
    def get_name(self):
        # method implementation

    def play(self):
        # method implementation
```

### Get and initialize subclasses of a class

```bash

# Defining parent and child classes
class Parent:
    
    def printHello(self):
        print("Hello")
        
class ChildOne(Parent):
    
    def printHello(self):
        print("Hallo")

class ChildTwo(Parent):
    
    def printHello(self):
        print("Hola!")

children = [cls() for cls in Parent.__subclasses__()]


for child in children:
    child.printHello() # prints 'Hallo' and 'Hola!'
```