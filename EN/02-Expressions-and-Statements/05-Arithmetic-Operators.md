# Arithmetic Operations

[slide]
# Video

[vimeo-video startTimeInSeconds="6282" endTimeInSeconds="7007 "]
[stream language="EN" videoId="341522009/063bddc415" default /]
[stream language="RO" videoId="386049133/766a425069"  /]
[/video-vimeo]

[/slide]

[slide]
# Arithmetic Operations
Let's examine the basic **arithmetic operations** in programming. 

We can add, subtract, multiply and divide numbers using the operators `+`, `-`, `*` and `/`.

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
For **multiplication** of numbers we use the `*` operator:
```java live
int a = 5;
int b = 7;
System.out.println(a * b); // 35
```

## Dividing Numbers
**Dividing** numbers is done using the `/` operator. 

It works differently with **integers** and **floating point numbers**.
* When we divide two integers, an **integer division** is applied, and the obtained output is without its fractional part. 
  * Example: `11 / 3 = 3`.
* When we divide two numbers and at least one of them is a float number, a **floating division** is applied, and the obtained result is a float number, just like in math. 
  * Example: `11 / 4.0 = 2.75`
  * When it cannot be done with exact precision, the result is being rounded, for example `11.0 / 3 = 3.66666666666667`.
* The integer **division by 0** causes an **exception** during runtime (runtime exception).
* Float numbers **divided by 0** do not cause an exception and the result is **+/- infinity** or a special value **NaN**. 
  * Example `5 / 0.0 = ∞`.

Here are a few examples with the division operator:
```java live
int a = 25;
int i = a / 4;
System.out.println(i);
double f = a / 4.0;
System.out.println(f);
```

### Dividing Integers
Let's examine a few examples for **integer division** (remember that when we **divide integers** in Java the result is an **integer**):
```java live
int a = 25;
System.out.println(a / 4);
```

Dividing an integer by zero leads to an error.
``` java live
int a = 5;
System.out.println(a / 0);
```

### Dividing Floating-Point Numbers
Let's look at a few examples for **floating division**. 

When we divide floating point numbers, the result is always a **float number** and the division never fails.

It also works correctly with the special values **+∞** and **-∞**:
```java live
int a = 15;
System.out.println(a / 2.0);
System.out.println(a / 0.0);
System.out.println(-a / 0.0);
System.out.println(0.0 / 0.0);
```

When printing the values ∞ and -∞, the console output may be `?`.

This happens because the console in Windows does not work correctly with Unicode and breaks most of the non-standard symbols, letters and special characters.

### Remainder
The remainder operator `%` computes the remainder after dividing its left-hand operand by its right-hand operand.
```java live
int a = 7;
int b = 2;
System.out.println(a % b);
System.out.println(3.5 % 1);
```
It is useful if we want to check whether a number is **even** or **odd**.

If the remainder when dividing by 2 is equal to 0, then the number is even, otherwise it is odd.

See the following example: 
```java live
System.out.println(3 % 2);
System.out.println(4 % 2);
```
[/slide]