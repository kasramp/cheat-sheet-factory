---
title: python
category: Python
layout: 2017/sheet
updated: 2019-01-07
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

lst_copy = lst.copy()

lst.append("Six") # append a new element to a list

two = lst.pop(1) # get and remove "Two" from the list

lst.pop(0) # removes element "One" from the list
```