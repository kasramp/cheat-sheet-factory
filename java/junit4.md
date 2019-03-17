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

```java
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

+ To limit running `@Before` and `@After` to the entire class, we can use `@BeforeClass` and `@AfterClass` which execute one time when a unit test class running.
    
```java
@BeforeClass
public static void setup() {
    // do something before the unit test class runs
}

@AfterClass
public static void teardown() {
    // do something after the unit test class ran
} 
```

+ For comparing two arrays, use `assertArrayEquals`.

+ Testing an exception in Junit,

```java
@Test(expected=NullPointerException.class)
public void testSortClassNPE() {
    int[] numbers = null;
    Arrays.sort(numbers);
}
```

+ Adding performance test on Junit tests,

```java
@Test(timeout=100)
public void testPerformance() {
} 
```

+ Creating parameterized tests,

```java
@RunWith(Parameterized.class)
public class TestClass {
    private String input;
    private String output;

    public TestClass(String input, String output) {
        this.input = input;
        this.output = output;
    }

    @Parameters
    public Collection<String[]> testConditions() {
        String[][] expectedOutputs = {{"Input1", "Output1"}, {"Input2", "Output2"}}
        return Arrays.asList(expectedOutputs);
    }

    @Test
    public void testDoWhatever() {
        assertEquals(output, myClass.doSomething(input));
    } 
}
```

+ It is not possible to have two parameterized tests in a single class, it must be a separate class.

+ Creating test suits,

```java
@RunWith(Suite.class)
@SuiteClasses({ Test1.class, Test2.class })
public class TestSuiteOne {

}
``` 