---
title: kotlin
category: Kotlin
layout: 2017/sheet
tags: [Featured]
updated: 2019-10-15
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
| This is
| an example
| of a very
| long text
| in multiple line
"""
```
