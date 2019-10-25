---
title: kotlin
category: Kotlin
layout: 2017/sheet
tags: [Featured]
updated: 2019-10-17
keywords:
  - "kotlin"
  - "kotlin cheat sheet"
prism_languages: [kotlin]
intro: |
  Kotlin cheat sheet
---

## Shortcuts

{: .-two-column}

## Basics

### Kotlin REPL

```bash
$ kotlinc-jvm
```

Exit the REPL:

```kotlin
:quit
```

### Print

```kotlin
print("Hello world!")
println("HEllo world!")
```

### Variable declaration

```kotlin
// Mutable variable. Value can be changed
var name : String = "James"

// Immutable value. Similar to Java final
val countryCode : String = "MYR"
```

### Nullable variable

```kotlin
var name: String? = null

name = "Hello"
```

### Check for null

```kotlin
var name: String? = "Hello World"

name?.toUpperCase()

name?.let {
    print(it.length)
    print(it.toUpperCase())
}
```

### String interpolation

```kotlin
val name: String = "Martin"

print("Hello $name. Welcome to Kotlin")
```

### Multiple line string

```kotlin
val longText = """
This is
an example
of a very
long text
in multiple line
"""

// Mult line with formatting

val longText = """
| This is
| an example
| of a very
| long text
| in multiple line
""".trimMargin()
```

### Ternary operation

```kotlin
val randomNumber : Int = 11
val isGreaterThanTen : Boolean  = if(randomNumber > 10) true else false
```

### Bitwise operations

```kotlin
val x : Boolean = true
val y : Boolean = false

x and y // false
x or y // true
x xor y // true
32 shr 1 // shift right 16
32 shl 2 // shift left 128
-32 ushr 2 // shift right unsigned 1073741816
```

### Type checking

```kotlin

interface Vehicle {
        fun getPlateNumber(): String
}

class Car(private val number: String, val seatNumber: Int) : Vehicle {
    override fun getPlateNumber(): String {
        return number
    }
}

val randomVehicle : Vehicle = Car("ABX", 4)
println(randomVehicle.getPlateNumber())
if(randomVehicle is Car) {
    val car : Car = randomVehicle
    println(car.seatNumber)
}
```

### Range condition

```kotlin
val number : Int = 100

if(number in 1..100) {
    println("Number is between 1 to 100")
}
```

### When operation

```kotlin
val number : Int = 55
when(number) {
    in Int.MIN_VALUE .. -1 -> println("It's negative")
    0 -> println("It's zero")
    in 1..9 -> println("It's single positive digit")
    in 10..99 -> println("It's double digit")
    100 -> println("It's hundred")
    else -> println("Something else!")
}

// Other form

when {
    number < 0 -> println("It's negative")
    number == 0 -> println("It's zero")
    number in 1..9 -> println("It's single positive digit")
    number in 10..99 -> println("It's double digit")
    number == 100 -> println("It's hundred")
    else -> println("Something else!")
}
```

### Looping

```kotlin
val x = 10
// print 1 to 10
for(i in 1..10) {
    println(i)
}

// print 1 to 9
for(i in 1 until 10) {
    println(i)
}

// print 1, 3, 5, 7, 9
for(i in 1..10 step 2) {
    println(i)
}

// print 10 to 1
for(i in 10 downTo 1) {
    println(i)
}

// print 10, 8, 6, 4, 2
for(i in 10 downTo 1 step 2) {
    println(i)
}

val languages : Map<String, String> = mapOf("EN" to "Hello", "DE" to "Hallo", "FA" to "Salam")

languages.forEach{ (languageCode, greeting) ->
    println("Language: $languageCode - Greeting: $greeting")
}

for((languageCode, greeting) in languages) {
    println("Language: $languageCode - Greeting: $greeting")
}

val myList : List<Int> = listOf(1, 10, 3, -500, 5, -1, 34, 44, -2)

myList.filter { it > 0 }.sorted().forEach { println(it) }
```

### Collections

#### Arrays

```kotlin
val arr = arrayOf("x", "y", "z")
println(arr[0])

val (key, value) = "EN=Hello".split("=")
println("Language is $key, message is $value")
```

#### List

```kotlin
val lst : List<String> = listOf("One", "Two", "Three")
```

#### Map

```kotlin
val mp : Map<String, Int> = mapOf("One" to 1, "Two" to 2, "Three" to 3)
mp.forEach { (k, v) -> println("$k = $v")}
```

### Methods

```kotlin

fun sum(val x: Int, val y: Int) : Int {
    return x + y
}

fun sum(val x: Int, val y: Int) : Int = return x + y

// varargs
fun sum(vararg numbers: Int) : Int {
    return numbers.sum()
}
```

### Classes

#### Java-like class

```kotlin

/* Class with empty constructor */

class Book {
    var name : String = ""
    var author : String = ""
    var isbn : String = ""
}
```

#### Class with all constructor values

```kotlin
val book : Book = Book()
book.name = "12 rules of life"
book.author = "Jordan Peterson"
book.isbn = "1234ABC"

/* Class with all constructor values */

class Book(val name: String, private val author: String, val isbn: String) {
fun printAuthorName() {
println(author)
}
fun getAuthorName(): String = author
}

val book = Book("12 rules for life", "Jordan Peterson", "ABC")
book.printAuthorName()

// book.author -> doesn't work since author is private
book.getAuthorName()
```

#### Class with default value in constructor

```kotlin
class Book(val name: String, private val author: String, val isbn: String = "DEFAULT ISBN") {

    fun printAuthorName() {
        println(author)
    }

    fun getAuthorName(): String = author
}

// We do not pass ISBN, uses 'DEFAULT ISBN'
val book = Book("12 rules for life", "Jordan Peterson")

// We pass all values
val bookWithIsnb = Book("12 rules for life", "Jordan Peterson", "ABCD")
```

#### Class with lazy value initialization

```kotlin
class Book(val name: String, private val author: String, var isbn: String = "DEFAULT ISBN") {

    fun printAuthorName() {
        println(author)
    }

    fun getAuthorName(): String = author
    }
}
```

#### Companion object

```kotlin
class Book(val name: String, private val author: String, var isbn: String = DEFAULT_ISBN) {

    companion object {
        const val DEFAULT_ISBN : String = "DEFAULT ISBN"
        val logger : Logger = LoggerFactory.getLogger(Book.javaClass)
    }


    fun printAuthorName() {
        logger.info("Author is $author")
        println(author)
    }

    fun getAuthorName(): String = author
}
```

#### Utility class with Java like static methods

```kotlin
class SomeUtility {
    private constructor()

    companion object {
        fun doSomething() {

        }

        fun doOtherThing() {

        }
    }
}
```

#### Class with custom getter and setter

```kotlin
class Book(val name: String, private val author: String, var isbn: String = DEFAULT_ISBN) {

    private var nameA: String = ""
        set(value) {
            if (!value.isNotEmpty()) {
                throw IllegalArgumentException("Title must not be empty")
            }
            field = value
        }
        get() {
            return field
        }

    companion object {
        const val DEFAULT_ISBN: String = "DEFAULT ISBN"
        val logger: Logger = LoggerFactory.getLogger(Book.javaClass)
    }
}
```

#### Primary, secondary constructors

```kotlin
class Car(val name: String, val plateNo: String) {
    var new: Boolean? = null
    var colour: String = ""

    constructor(name: String, plateNo: String, new: Boolean) : this(name, plateNo) {
        this.new = new
    }

    constructor(name: String, plateNo: String, new: Boolean, colour: String ) :
            this(name, plateNo, new) {
        this.colour = colour
    }
}

// directly calls primary constructor
val car1 = Car("Peugeot 504", "XYZ234")
// directly calls 1st sec. constructor
val car2 = Car("Peugeot 504", "XYZ234", false)
// directly calls last sec. constructor
val car3 = Car("Peugeot 504", "XYZ234", false, "grey")
```

#### Adding functionalities to class without inheriting

```kotlin
fun Int.triple(): Int {
  return this * 3
}

var result = 3.triple()
```

### Late initialization

It is used when we want to postpone the object initialization to another stage.

```kotlin
internal lateinit var person: Person
```

And somewhere else in the code:

```kotlin
person = Person()
```

It's only applicable to `non-null var`.

### Lazy initialization

It's used when we want to defer the calling to an expensive call. For instance, hitting the database. It's the same concept as lazy loading. Means the object is not initialized until it's accessed for the first time.

```kotlin
private val bookService = BookService()
val books : List<Book> by lazy {
    bookService.getAllBook()
}
```

It's only applicable to `val`.
