[slide hideTitle]
# Arithmetic Operations

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-23-27-arithmetic-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us learn about the basic **arithmetic operations** in programming. 

We can add, subtract, multiply and divide numbers using the folowing operators: `+`, `-`, `*`, `/`

## Summing up Numbers

We can **sum** up numbers using the `+` operator:
```java live
int a = 5;
int b = 7;
int sum = a + b;
System.out.println(sum); // 12 
```

## Subtracting Numbers

**Subtracting** numbers is done using the `-` operator:
```java live
int a = 15;
int b = 7;
System.out.println(a - b); // 8
```

## Multiplying Numbers

To **multiply** numbers we use the `*` operator:
```java live
int a = 5;
int b = 7;
System.out.println(a * b); // 35
```

## Dividing Numbers

**Dividing** numbers is done using the `/` operator. 

It works differently with **integers** and **floating point numbers**.

* When we divide two integers, **integer division** is applied, and the obtained output will not contain a fractional part (a remainder)

  * Example: `11 / 3 = 3`

* When we divide two numbers and at least one of them is a **float** number, **floating division** is applied, and the obtained result will be a float number. 

  * Example: `11 / 4.0 = 2.75`

  * When the division cannot be completed with exact precision, the result will be rounded, for example: `11.0 / 3 = 3.66666666666667`

* Integer **division by 0** causes an **exception** during runtime (runtime exception)

* Float numbers **divided by 0** do not cause an exception and the result is **+/- infinity** or the special value **NaN**
  * Example `5 / 0.0 = ∞`

Here are a few examples with the division operator:
```java live
int a = 25;
int i = a / 4;
System.out.println(i);
double f = a / 4.0;
System.out.println(f);
```

## Dividing Integers

Let us examine a few examples of **integer division** (remember that when we **divide integers** in Java the result is always an **integer**):

```java live
int a = 25;
System.out.println(a / 4);
```

Dividing an integer by zero results in an error.
``` java live
int a = 5;
System.out.println(a / 0);
```

## Dividing Floating-Point Numbers
Here are some examples of **floating division**. 

When we divide floating point numbers, the result is always a **float number** and the division will always produce a result.

It also works correctly with the special values `+∞` and `-∞`:
```java live
int a = 15;
System.out.println(a / 2.0);
System.out.println(a / 0.0);
System.out.println(-a / 0.0);
System.out.println(0.0 / 0.0);
```

When printing the values `∞` and `-∞`, to the console the output may be `?`.

This happens because the console in Windows does not work correctly with Unicode charachters and malfunctions when facing most of the non-standard symbols, letters and special characters.

## Remainder

The modular division operator `%` computes the remainder of dividing its left-hand operand by its right-hand operand.

```java live
int a = 7;
int b = 2;
System.out.println(a % b);
System.out.println(3.5 % 1);
```

It is useful if we want to check whether a number is **even** or **odd**.

If the remainder of dividing a number by 2 is equal to 0, then the number is even, otherwise it is odd.

Example: 
```java live
System.out.println(3 % 2);
System.out.println(4 % 2);
```
[/slide]

[slide hideTitle]
# Concatenating Text and Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-22-concatenating-text-and-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Other than summing up numbers, the `+` operator is also used for **joining pieces of text** (concatenation of strings). 

In programming, joining two pieces of text is called **"concatenation"**. 

Here is how we can concatenate a piece of text with a number using the `+` operator:

```java live
String firstName = "John";
String lastName = "Doe";
int age = 19;
String str = firstName + " " + lastName + " @ " + age;
System.out.println(str);  // John Doe @ 19
```

## Examples: Concatenating Text and Numbers

Here is another **example** of concatenating text and numbers:
```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + a + b;
System.out.println(sum);  // The sum is: 1.52.5
```

Note that the numeric values `a` and `b` were not summed.

The result above is absolutely correct, according to the language logic. 

If we want to sum the numbers, we have to use **parentheses**, in to change the order of execution:

```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + (a + b);
System.out.println(sum);  // The sum is: 4
```

[/slide]
