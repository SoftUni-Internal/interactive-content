# Real Number Types

[slide]

# Video

[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"][stream language="en" videoid="343678060" default /]
[stream language="RO" videoId="391452320" /][/vimeo-video]
[/slide]

[slide]

# What are Floating-Point Types?

You should use a **floating point type** whenever you need a number with a decimal, such as 9.99 or 3.14515.

Floating-point types also:

- Have range and precision depending on the memory used.
- Sometimes behave abnormally in the calculations.
- May hold very small and very big values like **0.00000000000001** and **100000000000000000000000000.0**.

Valid types are **float** and **double**:

| Type   | Size   | Precision       |
| ------ | ------ | --------------- |
| float  | 32 bit | up to 7 digits  |
| double | 64 bit | up to 16 digits |

## Examples

- **Float**: data type can store fractional numbers, note that you should end the value with an `f`:

```java live
float myNum = 5.75f;
System.out.println(myNum);
```

- **Double**: in this course when we need floating point number, most of the time we're going to use **double**.

```java live
double myNum = 19.99;
System.out.println(myNum);
```

## PI Precision

There are difference in precision when using **float** and **double**:

```java live
float floatPI = 3.141592653589793238f;
double doublePI = 3.141592653589793238;
System.out.println("Float PI is: " + floatPI);
System.out.println("Double PI is: " + doublePI);
```

- NOTE: The `f` suffix in the first statement!

- Real numbers are by default interpreted as double.

- One should explicitly convert them to float
  [/slide]

[slide]

# Problem: Pounds to Dollars

[code-task title="Problem: Pounds to Dollars" taskId="f3a7e5c2-c8f2-41a7-b7f8-848749f955b2" executionType="tests-execution" executionStrategy="java-code" requiresInput][code-editor language=java]

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```

[/code-editor][task-description]

## Description

Write a program that converts **British pounds** to **US dollars** formatted to 3th decimal point.

Exchange rate: 1 British Pound \= 1.31 Dollars

## Examples

| **Input** | **Output** |
| --------- | ---------- |
| 80        | 104.800    |
| 39        |            |

[/task-description][code-io /]
[tests][test open]
[input]
80
[/input][output]
104.800
[/output][/test]
[test open][input]
39
[/input][output]
51.090
[/output][/test]
[test][input]
25.50
[/input][output]
33.405
[/output][/test]
[test][input]
0
[/input][output]
0.000
[/output][/test]
[test][input]
100
[/input][output]
131.000
[/output][/test]
[test][input]
55.55
[/input][output]
72.771
[/output][/test]
[test][input]
99.85
[/input][output]
130.803
[/output][/test]
[/tests][/code-task]
[/slide]

[slide]

# Solution: Pounds to Dollars

[code-task title="Problem: Pounds to Dollars" taskId="2e55d28f-adb6-4222-8650-9ea91e1717a5" executionType="tests-execution" executionStrategy="java-code" requiresInput][code-editor language=java]

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double dolars = Double.parseDouble(scanner.nextLine());
        double pounds = dolars * 1.31;
        System.out.printf("%.3f", pounds);
    }
}
```

[/code-editor][task-description]

## Description

Write a program that converts **British pounds** to **US dollars** formatted to 3th decimal point.

Exchange rate: 1 British Pound \= 1.31 Dollars

## Examples

| **Input** | **Output** |
| --------- | ---------- |
| 80        | 104.800    |
| 39        |            |

[/task-description][code-io /]
[tests][test open]
[input]
80
[/input][output]
104.800
[/output][/test]
[test open][input]
39
[/input][output]
51.090
[/output][/test]
[test][input]
25.50
[/input][output]
33.405
[/output][/test]
[test][input]
0
[/input][output]
0.000
[/output][/test]
[test][input]
100
[/input][output]
131.000
[/output][/test]
[test][input]
55.55
[/input][output]
72.771
[/output][/test]
[test][input]
99.85
[/input][output]
130.803
[/output][/test]
[/tests][/code-task]
[/slide]

[slide]

# Scientific Notation

When working with large numbers, scientific notation is exceptionally helpful.

In scientific notation, the letter `E` represents `10 to the power of E`. For example, `1.51E+1` means the same thing as `1.51x10^1`.

Let's review some examples of scientific notation below.

```java live
double exampleVariableOne = 1E+3;
System.out.println(exampleVariableOne);

double exampleVariableTwo = 1E+12;
System.out.println(exampleVariableTwo);

double exampleVariableThree = 1E-4;
System.out.println(exampleVariableThree);
```

# Floating-Point Division

Integral division and floating-point division are different.

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

# Floating-Point Calculations – Abnormalities

Keep in mind that sometimes floating-point numbers work incorrectly!

We encourage you to read more about `IEEE 754`.

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

# BigDecimal Class

Java includes a `BigDecimal` class for performing high-precision arithmetic with 32-bit integer scale, which can be used in banking or financial domain based application.

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

[slide]

# Problem: Exact Sum of Real Numbers

[code-task title="Problem: Exact Sum of Real Numbers" taskId="8ca6d9d-661b-43ce-a8ea-c39f8" executionType="tests-execution" executionStrategy="java-code" requiresInput][code-editor language=java]

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```

[/code-editor][task-description]

## Description

Write program to enter n numbers and calculate and print their exact sum \(without rounding\).

## Examples

| **Input**           | **Output**          |
| ------------------- | ------------------- |
| 3                   | 1000000000000000015 |
| 1000000000000000000 |                     |
| 5                   |                     |
| 10                  |                     |

| **Input**      | **Output**               |
| -------------- | ------------------------ |
| 2              | 333333333333.30000000003 |
| 0.00000000003  |                          |
| 333333333333.3 |                          |

[/task-description][code-io /]
[tests][test open]
[input]
3
1000000000000000000
5
10
[/input][output]
1000000000000000015
[/output][/test]
[test open][input]
2
0.00000000003
333333333333.3
[/input][output]
333333333333.30000000003
[/output][/test]
[test][input]
5
0.11
0.22
0.33
1.11
10.11
[/input][output]
11.88
[/output][/test]
[test][input]
2
1000000000000000000
5
[/input][output]
1000000000000000005
[/output][/test]
[test][input]
2
0.00000000003
333333333333.3
[/input][output]
333333333333.30000000003

[/output][/test]
[test][input]
4
100000000000
0.00001
100000000000
0.00001
[/input][output]
200000000000.00002
[/output][/test]
[/tests][/code-task]
[/slide]

[slide]

# Solution: Exact Sum of Real Numbers

[code-task title="Problem: Exact Sum of Real Numbers" taskId="d9d-61b-3ce-a8ea-c39f8" executionType="tests-execution" executionStrategy="java-code" requiresInput][code-editor language=java]

```
import java.math.BigDecimal;
import java.util.Scanner;

public class ExactSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        BigDecimal sum = new BigDecimal(0);
        for (int i = 0; i < n; i++) {

            BigDecimal num = new BigDecimal(scanner.nextLine());
            sum = sum.add(num);

        }
        System.out.println(sum);
    }
}
```

[/code-editor][task-description]

## Description

Write program to enter n numbers and calculate and print their exact sum \(without rounding\).

## Examples

| **Input**           | **Output**          |
| ------------------- | ------------------- |
| 3                   | 1000000000000000015 |
| 1000000000000000000 |                     |
| 5                   |                     |
| 10                  |                     |

| **Input**      | **Output**               |
| -------------- | ------------------------ |
| 2              | 333333333333.30000000003 |
| 0.00000000003  |                          |
| 333333333333.3 |                          |

[/task-description][code-io /]
[tests][test open]
[input]
3
1000000000000000000
5
10
[/input][output]
1000000000000000015
[/output][/test]
[test open][input]
2
0.00000000003
333333333333.3
[/input][output]
333333333333.30000000003
[/output][/test]
[test][input]
5
0.11
0.22
0.33
1.11
10.11
[/input][output]
11.88
[/output][/test]
[test][input]
2
1000000000000000000
5
[/input][output]
1000000000000000005
[/output][/test]
[test][input]
2
0.00000000003
333333333333.3
[/input][output]
333333333333.30000000003

[/output][/test]
[test][input]
4
100000000000
0.00001
100000000000
0.00001
[/input][output]
200000000000.00002
[/output][/test]
[/tests][/code-task]
[/slide]

[slide]

# Problem: Town Info

[code-task title="Problem: Town Info" taskId="f59291-02a4-4eb7-95aa-a272a71da021" executionType="tests-execution" executionStrategy="java-code" requiresInput][code-editor language=java]

```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```

[/code-editor][task-description]

## Description

You will be given 3 lines of input.

On the first line you will be given the name of the town, on the second – the population and on the third the area.

Use the correct data types and print the result in the following format:

\"Town \{town name\} has population of \{population\} and area \{area\} square km.\"

## Examples

| **Input** | **Output**                                                       |
| --------- | ---------------------------------------------------------------- |
| Bucharest | Town Bucharest has population of 1829897 and area 226 square km. |
| 1829897   |                                                                  |
| 226       |                                                                  |

[/task-description][code-io /]
[tests][test open]
[input]
Bucharest
1829897
226
[/input][output]
Town Bucharest has population of 1829897 and area 226 square km.
[/output][/test]
[test open][input]
a
1
2
[/input][output]
Town a has population of 1 and area 2 square km.
[/output][/test]
[test][input]
A
1233
320
[/input][output]
Town A has population of 1233 and area 320 square km.
[/output][/test]
[test][input]
KEF
10000
500
[/input][output]
Town KEF has population of 10000 and area 500 square km.
[/output][/test]
[/slide]
