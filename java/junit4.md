---
title: junit4
category: Java
layout: 2017/sheet
updated: 2019-03-17
keywords:
    - "junit4"
    - "junit4 cheat sheet"
intro: |
  JUnit 4 cheat sheet
---

Shortcuts
---------
{: .-one-column}

### Commons

+ For any assertion it is possible to write a description. For instance,

```bash
    assertTrue("The assertion has failed", instance.isCorrect());
```

+ To run a method before and after each test, can use `@Before` and `@After` annotations,
   
```java 
@Before
public void setup() {
    // do something before each unit test runs
}

@After
public void teardown() {
   // do something each each unit test ran
}
```

