---
title: python
category: Python
layout: 2017/sheet
updated: 2019-01-11
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

