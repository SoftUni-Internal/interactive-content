[slide hideTitle]
# Lambda Functions

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-16-18-lambda-functions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A lambda expression is an **anonymous function** containing **expressions and statements**. 

It **replaces an entire function** and **improves** code writing. 

A lambda function is a **shorter-expression** that gives result but it is not always necessary.

Use the lambda operator `->`, which is read as "goes to"

The **left** side of the operator specifies the **input** parameters.

The **right** side holds the method body of the lambda function - **expression** or **statement**.

Lambda functions are **inline methods** (functions) that take input parameters and return values:

Instead of writing a method that accepts an integer parameter `int a` and then returns whether `a` is larger than 5 or not. 

It is possible to write that like this using lambda expression:

```java
(a -> a > 5)
```

Here are a few examples of **lambda functions**:

- This lambda function `x -> x / 2` is the equivalent to this method that accepts an integer as a single parameter and returns an integer divided by 2

```java
static int function(int x) { 
    return x / 2; 
}
```

- This lambda function `x -> x != 0` is the equivalent to this method that accepts an integer as a single parameter and returns a boolean

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- This lambda function `() -> 42` is equivalent to this method that always returns `42`

```java
static int function() { 
    return 42; 
}
```

If the lambda function requires more than one input value, we need to type them in parentheses `()`.

If it does not require any input values, we need to type only parentheses `()` for the input.

[/slide]
