# Real Number Types

[slide hideTitle]
# Floating-Point Types

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-18-19-What-are-floating-point-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Floating-point data types** are used when we need to store a decimal number, such as 9.99 or 3.14515.

Floating-point types also:

- Have a specific range and precision (number of decimal places) depending on the amount of memory they occupy
- May behave abnormally in calculations
- May hold both very small and great values such as **0.00000000000001** or **100000000000000000000000000.0**

They can be either **float** or **double**:

| Type   | Size   | Precision       |
| --- | --- | --- |
| float  | 32 bit | up to 7 digits  |
| double | 64 bit | up to 16 digits |

[/slide]

[slide hideTitle]
# Floating-Point Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-20-floating-point-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Float**: used for to store fractional numbers. 

Note that you should suffix the value with an `f`:

```java live
float myNum = 5.75f;
System.out.println(myNum);
```

The **default value** of **float** is **0.0F**.

- **Double**: We are going to use **double** most of the time

```java live
double myNum = 19.99;
System.out.println(myNum);
```
The **default value** of **double** is **0.0D**.
[/slide]

[slide hideTitle]
# PI Precision

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-21-PI-precision-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There is a difference in precision when using **float** and **double**:

```java live
float floatPI = 3.141592653589793238f;
double doublePI = 3.141592653589793238;
System.out.println("Float PI is: " + floatPI);
System.out.println("Double PI is: " + doublePI);
```

**NOTE**: The `f` suffix in the first statement signifies that it should be interpreted as a float.

- Real numbers are interpreted as **double** by default

- We can explicitly convert them to **float** in case we need this
[/slide]

[slide hideTitle]
# Problem with Solution: Pounds to Dollars

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/java-fund-data-types-and-variables-22-problem-and-solution-pounds-to-dollars-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Pounds to Dollars" taskId="java-fund-1-data-types-lab-pounds-to-dollars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that converts British pounds into US dollars. 

The result should be formatted up to the 2nd decimal place.

Assume that **1 British Pound = 1.31 Dollars**.

## Examples
| **Input** | **Output** |
| --- | --- |
| 80 | 104.800 |
| 39 | 51.090 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
80
[/input]
[output]
104.800
[/output]
[/test]
[test open]
[input]
39
[/input]
[output]
51.090
[/output]
[/test]
[test]
[input]
25.50
[/input]
[output]
33.405
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
0.000
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
131.000
[/output]
[/test]
[test]
[input]
55.55
[/input]
[output]
72.771
[/output]
[/test]
[test]
[input]
99.85
[/input]
[output]
130.803
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Scientific Notation

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-23-scientific-notation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When working with large numbers, scientific notation is exceptionally helpful.

In scientific notation, the letter `E` represents `10 to the power of E`. 

For example, `1.51E+1` means: `1.51x10^1`.

Let us review some examples using scientific notation:

```java live
double exampleVariableOne = 1E+3;
System.out.println(exampleVariableOne);

double exampleVariableTwo = 1E+12;
System.out.println(exampleVariableTwo);

double exampleVariableThree = 1E-4;
System.out.println(exampleVariableThree);
```
[/slide]

[slide hideTitle]
# Floating-Point Division

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-24-floating-point-division-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are two types of numeric division: integral and floating-point division.

See the examples below:

```java live
System.out.println(10 / 4);
System.out.println(10 / 4.0);
System.out.println(10 / 0.0);
System.out.println(-10 / 0.0);
System.out.println(0 / 0.0);
System.out.println(8 % 2.5);
//System.out.println(10 / 0);     ArithmeticException
```
[/slide]

[slide hideTitle]
# Floating-Point Abnormalities

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-25-floating-point-calculations-abnormalities-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Keep in mind that sometimes floating-point numbers may exhibit unexpected behavior.

We encourage you to read more about the `IEEE 754` standard online.

## Example

```java live
double a = 1.0f;
double b = 0.33f;
double sum = 1.33d;

System.out.printf("a+b=%f \nsum=%f \nequal=%b", a + b, sum, (a + b == sum));
```

```java live
double num = 0;

for (int i = 0; i < 10000; i++) {
    num += 0.0001;
}

System.out.println(num);
```
[/slide]

[slide hideTitle]
# BigDecimal

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-26-big-decimal-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Occasionally, floating-point numbers behave abnormally in calculations

You can read more about **IEEE 754** by looking it up in any search engine.

```java live
BigDecimal bigDecimal1 =
 new BigDecimal("243156478.7384930212");
BigDecimal bigDecimal2 =
 new BigDecimal("843753892.4637281941");

// Addition of two BigDecimals
bigDecimal1 = bigDecimal1.add(bigDecimal2);
System.out.println(bigDecimal1);

// Subtraction of two BigDecimals
bigDecimal1 = bigDecimal1.subtract(bigDecimal2);
System.out.println(bigDecimal1);

// Multiplication of two BigDecimals
bigDecimal1 = bigDecimal1.multiply(bigDecimal2);
System.out.println(bigDecimal1);

// BigDecima1 raised to the power of 2
bigDecimal1 = bigDecimal1.pow(2);
System.out.println(bigDecimal1);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Exact Sum of Real Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/java-fund-data-types-and-variables-27-solution-exact-sum-of-real-numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Problem: Exact Sum of Real Numbers" taskId="java-fund-1-data-types-lab-exact-sum-of-real-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that accepts numbers, calculates and prints their **exact sum** (without rounding).

## Examples
| **Input** | **Output** |
| --- | --- |
| 3 | 1000000000000000015 |
| 1000000000000000000 |  |
| 5 |  |
| 10 |  |

| **Input** | **Output** |
| --- | --- |
| 2 | 333333333333.30000000003 |
| 0.00000000003 |  |
| 333333333333.3 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
1000000000000000000
5
10
[/input]
[output]
1000000000000000015
[/output]
[/test]
[test open]
[input]
2
0.00000000003
333333333333.3
[/input]
[output]
333333333333.30000000003
[/output]
[/test]
[test]
[input]
5
0.11
0.22
0.33
1.11
10.11
[/input]
[output]
11.88
[/output]
[/test]
[test]
[input]
2
1000000000000000000
5
[/input]
[output]
1000000000000000005
[/output]
[/test]
[test]
[input]
4
100000000000
0.00001
100000000000
0.00001
[/input]
[output]
200000000000.00002
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
