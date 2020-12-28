---
title: Python
category: Python
layout: 2017/sheet
tags: [Featured]
updated: 2020-12-28
keywords:
    - "python"
    - "python cheat sheet"
prism_languages: [python]
intro: |
  Python cheat sheet 
---

Shortcuts
---------
{: .-two-column}

## Basics

### ABC Basics

```python
name = input() # gets input from a user
len("Hello") # prints a string length
str(20) # converts number to string
int("20") # converts string to number
float("20.5") # converts string to float
round(33.33333, 2) # round a number to two decimal places
bool("true") # string to boolean
```
+ `None` datatype is equal to `null` in Java.

### Import

```python
#!/us/bin/python

import gi # import a package
from games import NumberGuessing # import a class from 'games' package 
```

### Multi Import

```python
import random, sys, os, math
```

### Different Import approaches

```python
import random

random.randint(1, 20)
```

or

```python
from random import *

randin(1, 200)
```

### Print

```python
text = "Hello World!"

print(text*2) # print 'Hello World!' twice

# add space automatically 

name = "Mike"
print("Hello", name, "How are you?") # print Hello Mike How are you?
```

### String interpolation

```python
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

### String manipulation

```python
st = '''
Here goes
multiple line
of a string
'''

print(r 'John\'s house') # raw prints John\'s house instead of John's house

# Multiline comment
"""
Some comments
to add here
"""

hello_str = "Hello World"

hello_str[0:5] # sub string, returns 'Hello'

"Hello" in hello_str # search in a string, returns true
hello_str.upper() # to uppercase
hello_str.lower() # to lowercase
hello_str.isupper() # check whether a string is in uppercase
hello_str.islower() # check whether a string is in lowercase
hello_str.isalpha() # whether a string is all alphabet and is not blank
hello_str.isalnum() # whether a string is alphanumeric and is not blank
hello_str.isdecimal() # whether a string is only consists of number and is not blank
hello_str.isspace() # whether a string only consists of whitespaces
hello_str.istitle() # whether a string has first character of each word in uppercase like 'Hello World'
hello_str.startswith("Hello") # whether a string starts with a certain substring
hello_str.endswith("World") # whether a string ends with a certain substring
hello_str.split() # split a string to a list base on space ['Hello', 'World'], also can pass separator as argument .split("\t")
", ".join(['Hello', 'World']) # converts a list to a string and use ',' as delimiter
hello_str.strip() # removes all whitespaces from left and right sides of a string
hello_str.lstrip() # removes all whitespaces from left side of a string
hello_str.rstrip() # removes all whitespaces from right side of a string

# clipboard 
import pyperclip
pyperclip.copy('Hello world!')
pyperclip.paste()
```

### Pattern matching

```python
import re
regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # match number in 123-456-7890 format
m = regex.search('My number is 123-567-4242.')
print(m.group()) # prints 123-567-4242
re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)') # separating area code
m = regex.search('My number is 123-567-4242.')
print(m.group(1)) # 123
print(m.group(2)) # 567-4242
print(m.group()) # 123-567-4242
regex = re.compile(r'(\(\d\d\d\)) (\d\d\d-\d\d\d\d)') # parentheses support
m = regex.search('My number is (021) 123-4567')
print(m.group(1)) # (021)
print(m.group(2)) # 123-4567
print(m.group()) # (021) 123-4567
regex = re.compile(r'John|Jacob') # either or matches the first only
m = regex.search('John and Jacob are friends')
print(m.group()) # John
lst = regex.findall('John and Jacob are friends') # find all occurrences
print(lst) # ['John', 'Jacob']
regex = re.compile(r'John (Wick|Anderson|Smith)') # match first should be John and (Wick or Anderson or Smith)
m = regex.search('Johns are friends, especially John Wick and John Smith')
print(m.group) # prints John wick
batRegex = re.compile(r'Bat(wo)?man') # optional either should match Batman or Batwoman `(wo)?` indicates `wo` is optional
m = batRegex.search('The Adventures of Batman')
print(m.group()) # prints Batman

batRegex = re.compile(r'Bat(wo)*man') # optional either should match Batman or Batwoman or Batwowowoman `(wo)*` 
# indicates either zero or more instance `wo` is matching
m = batRegex.search('The Adventures of Batman')
print(m.group()) # prints Batman
m = batRegex.search('The Adventures of Batwoman')
print(m.group()) # prints Batwoman
m = batRegex.search('The Adventures of Batwowoman')
print(m.group()) # prints Batwowoman
m = batRegex.search('The Adventures of Batwowowoman')
print(m.group()) # prints Batwowowoman

batRegex = re.compile(r'Bat(wo)+man') # optional either should match Batwoman or Batwowowoman `(wo)+` 
# but no Batman. Indicates at least one instance `wo` is matching
m = batRegex.search('The Adventures of Batman') # matches nothing
m = batRegex.search('The Adventures of Batwoman')
print(m.group()) # prints Batwoman
m = batRegex.search('The Adventures of Batwowoman')
print(m.group()) # prints Batwowoman
m = batRegex.search('The Adventures of Batwowowoman')
print(m.group()) # prints Batwowowoman

regex = re.compile(r'(Ha){3}') # repetition match, indicates `Ha` strings repeated EXACTLY three times
m = regex.search('HaHa') # matches nothing
m = regex.search('HaHaHa')
print(m.group()) # prints HaHaHa
m = regex.search('HaHaHaHa') # matches nothing

regex = re.compile(r'(Ha){3,5}') # repetition match, indicates `Ha` string repeated between three to five times
m = regex.search('HaHa') # matches nothing
m = regex.search('HaHaHa')
print(m.group()) # prints HaHaHa
m = regex.search('HaHaHaHa')
print(m.group()) # prints HaHaHaHa which is greedy
# none greedy
regex = re.compile(r'(Ha){3,5}?')
m = regex.search('HaHaHaHa')
print(m.group()) # prints HaHaHa which is none greedy

# character classes
# \d Any numeric digit from 0 to 9
# \D Any character that is not a numeric digit from 0 to 9 
# \w Any letter, numeric digit, or the underscore character (word)
# \W Any character that is not a letter, numeric digit, or the underscore character
# \s Any space, tab, or newline character. (Think of this as matching “space” characters.)
# \S Any character that is not a space, tab, or newline.

# custom character class
regex = re.compile(r'[2468]') # match only odd number
m = regex.findall('12 3456 7890') # matches ['2', '4', '6', '8']

regex = re.compile(r'[^02468]') # not condition which essentially matches odd numbers and any other characters like space

regex = re.compile(r'^hello') # means hello should be at the begining
m = regex.search('hello world') # returns hello
m = regex.search('world! hello') # returns nothing
regex = re.compile(r'hello$') # means hello should be at the end
m = regex.search('hello world') # returns nothing
m = regex.search('world! hello') # returns hello

atRegex = re.compile(r'.at') # matches anything at has at in it
atRegex.findall('The cat in the hat sat on the flat mat.') # returns ['cat', 'hat', 'sat', 'lat', 'mat']

nameRegex = re.compile(r'First Name: (.*) Last Name: (.*)') # match anything started with First Name: and then anything 
# and then followed by Last Name: anything
m = nameRegex.search('First Name: Al Last Name: Sweigart')
print(m.group(0)) # prints Al
print(m.group(1)) # prints Sweigart

noNewlineRegex = re.compile('.*') # newline match

regex = re.compile(r'hello', re.I) # ignore case

namesRegex = re.compile(r'Agent \w+') # string substitution
namesRegex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.') # 'CENSORED gave the secret documents to CENSORED.'
```

### List

```python
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

lst = ['Hello', 'Hallo', 'Howdy']
lst1 = ['A', 'B', 'C']
del lst[0] # remove 'Hello'
lst.remove('Howdy')
new_lst = lst + lst1 # concat list
lst = lst + "XXX"
'Howdy' in lst # search for an element in list
lst1.sort() # sort a list
import copy
lst_copy = copy.copy(lst) # create a copy with different reference
lst_copy_deep = copy.deepcopy(lst) # create a deep copy which supports inner lists and objects with different references
```

### Dictionary

```python
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

### keys(), values(), items(), get(), setdefault() in a dictionary

```python
d = { "first_name": "John", "last_name": "Wick", "age": 44}

d.keys() # return first_name, last_name, age
d.values() # return John, Wick, 44
d.items() # return a dict_items of tuple ([('first_name', 'John'), ('last_name', 'Wick'), ('age', 44)])
d.get("first_name") # return John
d.setdefault("first_name", "David") # tries to get the value of first_name key, if doesn't exist set the default
```

### Conditions

```python

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

```python

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

```python

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

```python
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

```python
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

```python

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

### Get type and type comparison
```python
tup = (1, 2, 3, 4)
type(tup) # prints <class 'tuple'>
isinstance(tup, tuple) # prints 'True'
isinstance(tup, dict) # prints 'False'
isinstance(tup, list) # prints 'False'
```

### Interaction with pip

```bash
$ pip install [package name] # install system-wide
$ pip install [package name] --user # install per user
$ pip uninstall [package name] # remove a package
```

### Working with files

#### OS path

```python
import os
os.path.join("home", "John", "Desktop") # returns a joined path of /home/John/Desktop
os.getcwd() # get current directy
os.chdir("/usr/bin") # change directory
os.path.basename("/home/john/notes.txt") # gets filename `notes.txt`
os.path.dirname("/home/john/notes.txt") # gets path excluding the filename `/home/john`
os.path.split("/home/john/notes.txt") # splits the path to a list of [filename, file path]
os.path.getsize("notes.txt") # get file size in byte
os.listdir(os.getcwd()) # ls of the current directory
os.path.exists(path) # checks a path exists
os.path.isdir(path) 
os.path.isfile(path)
```

#### Open/Read/Write file

```python
# read file
file = open("notes.txt")
content = file.read()
file.close()

# read line by lines
file = open("notes.txt")
content = file.readlines()
for line in content:
    print(line)
file.close()

# alternative reading file line by line

with open('file.txt') as f:
    lines = f.readlines()
for line in lines:
    print(line)
f.close()

# write to file
file = open("notes.txt", "w")
file.write("Something") # it overwrites all the content
file.close()

# alternative write to file
o = open("file.txt", "a")
o.write("{colum1}, {column2}, {column3}\n".format(column1="A", column2="B", column3="C"))
o.close()

# append to file
file = open("notes.txt", "a")
file.write("Append") # it appends to the current file and not overwriting the content
file.close()
```

#### Shelve configuration files

```python
import shelve

sfile = shelve.open('config')
sfile['key'] = ['v1', 'v2', 'v3']
sfile.close()

list(sfile.keys()) # returns `key`
list(sfile.values()) # returns `['v1', 'v2', 'v3']`
sfile.get('key') # returns `['v1', 'v2', 'v3']`
sfile.pop('key') # returns `['v1', 'v2', 'v3']` and remove the entery from the file
```

#### Copy, move, delete, listing files

```python
import shutil
import os

shutil.copy("source", "target") # copy a file
shutil.copytree("source", "target") # copy a directory recursive with all files and sub-directories
shutil.move("source", "target")
os.unlink("file") # permanently deletes a file
os.rmdir("directory") # deletes an empty directory
shutil.rmtree("directory") # deletes an entire directory with its contents

# sending the file to trash
import send2trash
send2trash.send2trash("file")

# walking path
for directory_name, sub_directories, files in os.walk(os.getcwd()):
    print("Current directory" + directory_name)
    for sub_directory in sub_directories:
        print("Sub directory of " + directory_name + " is : " + sub_directory)
    for file in files:
        print(directory_name + "/" + sub_directory + "/" + file)
```

#### Zip files

```python
import zipfile

# read content of a zip file
file = zipfile.ZipFile("test.zip")
file.namelist()
file.close()

# extract zip file contents
file = zipfile.ZipFile("z.zip")
file.extractall()
file.close()

# creating a zip file
file = zipfile.ZipFile("z.zip", "w")
file.write("note.txt", compress_type=zipfile.ZIP_DEFLATED)
file.write("picture.jpg", compress_type=zipfile.ZIP_DEFLATED)
file.close()
```

### Difference between `class Name:` and `class Name(object):`

```python
# the old syntax prior to python 2.2
class Test:

# new synatx recommended after python 2.2
# supports metadata
# supports getters and setter
class Test(object): 

```

### Exception handling

```python
try:
    raise Exception("A test exceptioin") # throw an exception
except Exception as ex:
    print(ex) # catches the exception and prints the message
```

### Logging

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s - %(message)s')
# log to a file
logging.basicConfig(filename = "prog.log", level=logging.DEBUG, format=' %(asctime)s - %(levelname)s - %(message)s')

logging.debug("DEBUG LOG")
logging.info("INFO LOG")
logging.warn("WARNING LOG")
logging.error("ERROR LOG")
logging.critical("FATAL LOG")
logging.disable(logging.DEBUG) # disable debug log
```

### HTTP requests

```python
import requests

# simple get request
url = "http://weather-api.madadipouya.com/v1/weather/currentbyip"
response = requests.get(url)
if response.ok and response.status_code == 200:
    json = response.json()
    print(json['country'])

# get request with param
url = "http://weather-api.madadipouya.com/v1/weather/currentbyip"
response = requests.get(url, params = {"fahrenheit": "true"})
# it would be equal to http://weather-api.madadipouya.com/v1/weather/currentbyip?fahrenheit=true"

# get request with custom headers
url = "http://weather-api.madadipouya.com/v1/weather/currentbyip"
response = requests.get(url, params = {"fahrenheit": "true"}, headers = {"user-agent": "my-app/0.0.1"})

# post request (form)
url = "https://httpbin.org/post"
response = requests.post(url, data = {"first_name": "John", "last_name": "Wick", "age": 31}, params = {"page_number": 0})

# post request (json)
import json
url = "https://httpbin.org/post"
response = requests.post(url, data = json.dumps({"first_name": "John", "last_name": "Wick", "age": 31}), params = {"page_number": 0}, headers = {"user-agent": "Test"})
# or added in version 2.4.2
response = requests.post(url, json = {"first_name": "John", "last_name": "Wick", "age": 31}, params = {"page_number": 0}, headers = {"user-agent": "Test"})
```

### Working with CSV

```python
import csv

file = open("file.csv")
reader = csv.reader(file)
content = list(reader) # content of csv file in list
file.close()

# reading csv line by line

for line in reader:
    print("line number: " + reader.line_num + " " + line)

# writing to a csv file

file = open("file.csv")
writer = csv.writer(file)
writer.writerow(['id', 'first_name', 'last_name'])
writer.writerow(['1', 'John', 'Wick'])
file.close()

# custom delimiter
cv.writer(file, delimiter='\t', lineterminator='\n\n')
```

### Working with JSON

```python
import json

# string to json object
json_string = '{"id": 1, "first_name": "John", "last_name": "Wick"}'
json_object = json.loads(json_string)

# json object to string
new_json_string = json.dumps(json_object)
isinstance(new_json_string, str) # returns true
```

### Reading terminal arguments

```python
import sys

if len(sys.argv < 2):
    print("No argument passed")
    sys.exit()
arg1 = sys.argv[1]
arg_array = sys.argv[1:]
```

### Date and Time

```python
import time
import datetime
time.time() # epoch time in seconds
time.sleep(5) # sleeps for 5 seconds

dt = datetime.datetime.now()
dt.year
dt.month
dt.day
dt.hour
dt.minute
dt.second
old_dt = datetime.datetime(2000, 12, 27, 22, 10, 30)
old_dt > dt # return false

duration = datetime.timedelta(days=20, hours=1, minutes=2, seconds=40)
delta.total_seconds() # returns the duration in seconds
dt = datetime.datetime.strptime('2015/10/21 16:29:00', '%Y/%m/%d %H:%M:%S') # string to date time
```

### Multithreading

```python
import threading

def print_hello_world():
    print("Hello World!")

def multiple(x, y):
    print(x*y)
thread_hello = threading.Thread(target=print_hello_world)
thread_hello.start()
thread_multiple = threading.Thread(target=multiple, args = [10, 20])
thread_multiple.start()

# thread join
threads = [thread_hello, thread_multiple]
for thread in threads:
    thread.join()

# thread pooling
from concurrent.futures.thread import ThreadPoolExecutor
thread_pool = ThreadPoolExecutor(5)
thread_pool.submit(print_hello_world)
thread_pool.submit(multiple, 10, 20)

# subprocess
import subprocess
chromium = subprocess.Popen("chromium-browser") # opens chromium
subprocess.Popen(["chromium-browser", "youtube.com"]) # subprocess with argument
chromium.wait() # waits until chromium to close
chromium.poll() # whether the subprocess is still running
```

### Working with pip

| `pip install --user youtube-dl` | Installs Youtube-dl in user space |
| `pip install --user --upgrade youtube-dl` | Updates Youtube-dl |
| `pip uninstall youtube-dl` | Removes Youtube-dl |


### Scaffold a project with pip

+ Install `virtualenv`

```bash
$ python3 -m pip install --user virtualenv
```

+ Create project directory

```bash
$ mkdir myproject && cd myproject
```

+ Create `virtualenv`

```bash
$ python3 -m venv env
```

+ Activate `virtualenv`

```bash
$ source env/bin/activate
```

+ Ensure `virtualenv` is working

```bash
$ which python # should point to a virtualenv path
```

+ Install packages

```bash
$ pip3 install [package name] # e.g., pip3 install python-socketio
```

+ Save installed packages to `requirements.txt` file

```bash
$ pip3 freeze > requirements.txt
```

+ Install all packages from requirements.txt

```bash
$ pip3 install -r requirements.txt
```

+ Leave `virtualenv`

```bash
$ deactivate
```

### Sources

+ [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/)