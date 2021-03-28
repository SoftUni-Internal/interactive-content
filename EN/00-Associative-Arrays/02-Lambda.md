[slide hideTitle]
# Lambda Functions

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/01.Java-Fundamentals-Associative-Arrays/EN/interactive-java-fundamentals-associative-arrays-16-18-lambda-functions-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A lambda expression is an **anonymous function** that contains **expressions and statements**. 

It is similar to a method, but it **does not need a name** and it can be implemented directly in the body of a method, which can save us a lot of time and improve code readability.

A lambda function is a **short block of code** that takes in parameters and returns a value.

Use the lambda operator `->`, which is read as "goes to"

The **left** side of the operator specifies the **input** parameters.

The **right** side holds the method body of the lambda function - **expression** or **statement**.

Instead of creating a method that accepts an integer parameter `int a`, and then returns whether `a` is larger than **5** or not, it is possible to create a labda expression that will look like this:  

```java
(a -> a > 5)
```

Here are a few examples of **lambda functions**:

- The lambda function `x -> x / 2` is the equivalent to the following method that accepts an integer as a single parameter and returns the result of the division of `x` by **2**

```java
static int function(int x) { 
    return x / 2; 
}
```

- The lambda function `x -> x != 0` is the equivalent to the following method that accepts an integer as a single parameter and returns a boolean

```java
static boolean function(int x) { 
    return x != 0; 
}
```

- The lambda function `() -> 42` is the equivalent to the following method that always returns `42`

```java
static int function() { 
    return 42; 
}
```

If the lambda function requires more than one input parameter, the parameters are placed between parantheses `()`.

If it does not require any input parameters, we add an empty pair of parentheses `()`.

[/slide]
