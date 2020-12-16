# Lambda Expressions

[slide]
# Video

[vimeo-video startTimeInSeconds="4407" endTimeInSeconds="5621"]
[stream language="EN" videoId="421796076" default /]
[stream language="RO" videoId="435043258"  /]
[/video-vimeo]

[/slide]

[slide]
# Lambda Expressions

A lambda expression is an **anonymous function** containing **expressions and statements**. It **replaces an entire function** and **improves** code writing. It is used mostly **with Stream API**, which is explained in the next chapter.  

Lambda function is a **shorter-expression** that gives result, but it is not always necessary.

Use the lambda operator `->`, which is read as "goes to"

The **left** side of the operator specifies the **input** parameters.
The **right** side holds the method body of the lambda function - **expression** or **statement**.

Lambda functions are **inline methods** (functions) that take input parameters and return values:

Instead of writing a function that accepts for example an integer parameter `int a` and then returns whether `a` is larger than 5 or not. It is possible to write that like this using lambda expression:

```java
(a -> a > 5)
```
Examples:

- This lambda function `x -> x / 2` is the equivalent to this method that accepts an integer as a single parameter and returns an integer divided by 2:

```java
static int function(int x) { 
    return x / 2; 
}
```

- This lambda function `x -> x != 0` is the equivalent to this method that accepts an integer as a single parameter and returns a boolean:

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- This lambda function `() -> 42` is equivalent to this method that always returns `42` :
```java
static int function() { 
    return 42; 
}
```

When there is no parameter just type empty brackets `()`. If there are multiple parameters type them in brackets `()`, comma-separated.

[/slide]
