[slide hideTitle]

# Expressions

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-28-29-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Expressions** are sequences of operators, literals, and variables that get evaluated to a value.
  * They contain at least one **operand**
  * Can have 1 or more **operators**

```java
int y = x + 5;
```
```java
String name = "John Doe";
```
In most contexts, after expressions are processed, the result is a single value.

* If `x` and `y` are integers, the expression `x + y` evaluates to a numeric value. Every value has an associated type

  * for example, if x and y are both variables of type **int**, the value of the expression `x + y` is also an **int**

* If the value is assigned to a variable of a different type, or if `x` and `y` are different types, they need to be converted to the same type

## Numerical expressions

We can calculate numeric expressions:

```java
int r = (150-20) / 2 + 5;
```

The standard mathematical rules for the **priorities** of arithmetic operations is applied here as well: multiplications and divisions are always executed before additions and sutractions. 

If there is an expression placed in **parentheses**, it is calculated **with priority**, just like in math.

[/slide]

