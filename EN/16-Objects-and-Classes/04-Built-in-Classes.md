[slide]
# Built-in Classes

Java provides **ready-to-use** classes, which are organized inside **Packages**. This classes provide predefined methods and fields that help to save time and effort in writing code and repeating it.

Example: `java.util.Scanner;` `java.utils.List;` `java.lang.Math;` `java.math.BigInteger;`


Using **static** Java classes and their methods requires only to call the class name and the needed method:
```java
LocalDateTime today = LocalDateTime.now();
double cosine = Math.cos(Math.PI);
```

Using **non-static** Java classes and their methods requires creating object (instance) of the current class:
```java
Random rnd = new Random();
int randomNumber = rnd.nextInt(10);
```
[/slide]


[slide]
## Math

Math class methods are **static** and  help to perform the **numeric operations** and commonly used **mathematical functions** like rounding, comparing, square root, cube root, exponential, logarithm and trigonometric operations.

- `abs(a)` : Returns the absolute value of the passed parameter `a`
```java live
int a = Math.abs(5);
int b = Math.abs(-10);
System.out.println(a);
System.out.println(b);
```
- `ceil(a)` : Rounds a floating point value `a` up to the nearest integer value, returned as a `double`
```java live
double ceil = Math.ceil(8.357);
System.out.println(ceil);
```
- `floor(a)` : Rounds a floating point value `a` down to the nearest integer value, returned as a `double`
```java live
double floor = Math.floor(8.357);
System.out.println(floor);
```
- `max(a, b)` : Returns the largest of two values passed as parameter
```java live
int max = Math.max(5, 10);
System.out.println(max);
```
- `min(a, b)` : Returns the smallest of two values passed as parameter
```java live
int min = Math.min(5, 10);
System.out.println(min);
```
- `round(a)` : Rounds a float or double to the nearest integer using normal math round rules (either up or down)
```java live
double roundedDown = Math.round(29.459);
double roundedUp = Math.round(29.549);
System.out.println(roundedDown);
System.out.println(roundedUp);
```
- `pow(a, b)` : Returns the value of the first parameter `a` raised to the power of the second parameter `b`
```java live
double number = Math.pow(3,2);
System.out.println(number);
```
- `sqrt(a)` : Calculates the square root of the given parameter `a`
```java live
double number = Math.sqrt(9);
System.out.println(number);
```
- `toDegrees(a)` : Converts an angle in radians to degrees
```java live
double degrees = Math.toDegrees(3.141592653589793);
System.out.println(degrees);
```
- `toRadians(a)` : Reverse of `toDegrees`, converts an angle in degrees to radians
```java live
double radians = Math.toRadians(180);
System.out.println(radians);
```
- Trigonometric Functions - calculate the value of come angle value in radians `sin(a)` `cos(a)` `tan(a)`


[/slide]


[slide]
## Random

The class `java.util.Random;` is used to generate random numbers of types integer, float, double, long, boolean. 
Random class methods are **non-static**.

Declare a Random:
`Random random = new Random();`

Random methods include:
- `nextInt()` - Returns next pseudorandom `int` value from random number sequence
```java live
Random random = new Random();
int number = random.nextInt();
System.out.println(number);
```
- `nextInt(n)` - Returns next pseudorandom `int` value in the range from 0 to 9 both inclusive
```java live
Random random = new Random();
int numOne = random.nextInt(10);
int numTwo = random.nextInt(10);
System.out.println(numOne);
System.out.println(numTwo);
```
- `nextDouble()` - Returns next pseudorandom `double` value in the range from 0.0 to 1.0
```java live 
Random random = new Random();
double numOne = random.nextDouble();
double numTwo = random.nextDouble();
System.out.println(numOne);
System.out.println(numTwo);
```
- `nextBoolean()` - Returns next pseudorandom `boolean` value, which can either be `true` or `false`
```java live
Random random = new Random();
boolean isValid = random.nextBoolean();
System.out.println(isValid);
```

[/slide]

[slide]
# Problem: Randomize Words
[code-task title="Randomize Words" taskId="edbcb9f1-7763-463c-8292-c065268b8432" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are given a **list of words in one line**.

**Randomize their order** and print **each word at a separate line**.

## Examples

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Welcome to SoftUni and have fun learning programming | learning | The order of the words in the output will be different after each program execution. |
| | Welcome | |
| | SoftUni | |
| | and | |
| | fun | |
| | programming | |
| | have | |
| | to | |




[/task-description]
[code-io /]
[tests]
[test]
[input]
PHP Java C\#
[/input]
[output]
b
a
[/output]
[/test]
[test]
[input]
hello
[/input]
[output]
7H
JS
10S
9C
9D
[/output]
[/test]
[test]
[input]
Java
PHP
C\#
[/input]
[output]
10S 7H 9C 9D JS
[/output]
[/test]
[test open]
[input]
learning
Welcome
SoftUni
and
fun
programming
have
to
[/input]
[output]
Welcome to SoftUni and have fun learning programming
[/output]
[/test]
[test]
[input]
a b
[/input]
[output]
hello
[/output]
[/test]
[test]
[input]
pesho gosho kiro miro niki pipi koko
[/input]
[output]
kiro
gosho
koko
miro
niki
pesho
pipi
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Randomize Words
[code-task title="Randomize Words"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Random;
import java.util.Scanner;

public class RandomizeWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

         String [] words = scanner.nextLine().split(" ");

         Random random= new Random();

        for (int i = 0; i < words.length ; i++) {
            int firstIndex = random.nextInt(words.length);
            int secondIndex = random.nextInt(words.length);

            String swapWord = words[firstIndex];
            words[firstIndex] = words[secondIndex];
            words[secondIndex] = swapWord;
        }

        System.out.println(String.join(System.lineSeparator(), words));

    }
}
```
[/code-editor]
[task-description]
## Description
You are given a **list of words in one line**.

**Randomize their order** and print **each word at a separate line**.

## Examples

| **Input** | **Output** | **Comments** |
| --- | --- | --- |
| Welcome to SoftUni and have fun learning programming | learning | The order of the words in the output will be different after each program execution. |
| | Welcome | |
| | SoftUni | |
| | and | |
| | fun | |
| | programming | |
| | have | |
| | to | |




[/task-description]
[code-io /]
[tests]
[test]
[input]
PHP Java C\#
[/input]
[output]
b
a
[/output]
[/test]
[test]
[input]
hello
[/input]
[output]
7H
JS
10S
9C
9D
[/output]
[/test]
[test]
[input]
Java
PHP
C\#
[/input]
[output]
10S 7H 9C 9D JS
[/output]
[/test]
[test open]
[input]
learning
Welcome
SoftUni
and
fun
programming
have
to
[/input]
[output]
Welcome to SoftUni and have fun learning programming
[/output]
[/test]
[test]
[input]
a b
[/input]
[output]
hello
[/output]
[/test]
[test]
[input]
pesho gosho kiro miro niki pipi koko
[/input]
[output]
kiro
gosho
koko
miro
niki
pesho
pipi
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
## BigInteger

The class `java.math.BigInteger;` provides **operations analogues** to all of Java's **primitive integer operations** and for **all relevant methods** from `java.lang.Math;`.
`BigInteger` class helps to deal with **very large Integers**. BigInteger class methods are **non-static**.

Declare a BigInteger:  
- `BigInteger num = BigInteger.valueOf(1234567890);` 
  - Here the number `1234567890` is a `long` variable (64 bits).
- `BigInteger num = new BigInteger("12345688901234567890");`
  - Here the number `12345688901234567890` is too large, can not fit in 64bits, so take the **numeric String** as parameter.

BigInteger **fields** include:
- `BigInteger.ONE` : Constant one
- `BigInteger.ZERO` : Constant zero
- `BigInteger.TEN` : Constant ten

BigInteger **methods** include:
- `abs()` : Returns the absolute value of current BigInteger
```java live
BigInteger number = BigInteger.valueOf(-123);
number = number.abs();
System.out.println(number);
```
- `add(value)` : Assigns **new value** to current BigInteger, performs **addition** (current + value)
```java live
BigInteger number = BigInteger.valueOf(123);
number = number.add(BigInteger.TEN);
System.out.println(number);
```
- `subtract(value)` :  Assigns **new value** to current BigInteger, performs **subtraction** (current - value)
```java live
BigInteger number = BigInteger.valueOf(123);
number = number.subtract(BigInteger.TEN);
System.out.println(number);
```
- `multiply(value)` : Assigns **new value** to current BigInteger, performs **multiplication** (current * value)
```java live
BigInteger number = BigInteger.valueOf(123);
number = number.multiply(BigInteger.TEN);
System.out.println(number);
```
- `divide(value)` : Assigns **new value** to current BigInteger, performs **division** (current / value)
```java live
BigInteger number = BigInteger.valueOf(123);
number = number.divide(BigInteger.TEN);
System.out.println(number);
```
- `pow(value)` : Assigns **new value** to current BigInteger, performs **power raise** (current ^ value)
```java live
BigInteger number = BigInteger.valueOf(123);
number = number.pow(2);
System.out.println(number);
```
- `intValue()` : Converts to an `int`
- `doubleValue()` : Converts to a `double`
- `toString()` : Returns the decimal String representation


[/slide]