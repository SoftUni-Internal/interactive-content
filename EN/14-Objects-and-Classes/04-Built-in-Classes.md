# Built-in Classes

[slide]
# Video

[vimeo-video startTimeInSeconds="3354" endTimeInSeconds="5995"]
[stream language="EN" videoId="421789645" default /]
[stream language="RO" videoId="433520664"  /]
[/video-vimeo]

[/slide]

[slide]
# Built-in Classes

Java provides **ready-to-use** classes, which are organized inside **Packages**. These classes provide predefined methods and fields that help to save time and effort in writing code and repeating it.

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
# Math

Math class methods are **static** and help to perform the **numeric operations** and commonly used **mathematical functions** like:
- rounding

- comparing

- square root

- cube root

- exponential

- logarithm

- trigonometric operations.

Math methods include:

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
# Random

The class `java.util.Random;` is used to generate random numbers of types integer, float, double, long. It can also generate random boolean type and return result between `true` or `false`. 
Random class methods are **not-static**.

Declare a Random:
```java
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
    }
}
```

Random methods include:

* `nextInt()` - Returns next pseudorandom `int` value from random number sequence. 
If you press the `Run` button several times you will see different results on the console.

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

[slide hideTitle]
# Solution: Randomize Words
[code-task title="Randomize Words" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Random;
import java.util.Scanner;

public class RandomizeWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] words = scanner.nextLine().split(" ");

        Random random = new Random();

        for (int i = 0; i < words.length; i++) {
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
[test open]
[input]
Welcome to SoftUni and have fun learning programming
[/input]
[output]
learning
Welcome
SoftUni
and
fun
programming
have
to
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# BigInteger

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
- `subtract(value)` : Assigns **new value** to current BigInteger, performs **subtraction** (current - value)
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

[slide hideTitle]
# Problem: Sum Big Numbers
[code-task title="Sum Big Numbers" taskId="java-fund-16-Objects-and-Classes-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You will receive two numbers **(0 to 10 ^ 50)**, print their sum.

## Examples

| **Input** | **Output** |
| --- | --- |
| 923847238931983192462832102 | 934573817465075391826664309019448 |
| 934572893617836459843471846187346 | |

| **Input** | **Output** |
| --- | --- |
| 4 | 104 | 
| 100 | | 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
100
[/input]
[output]
104
[/output]
[/test]
[test open]
[input]
923847238931983192462832102
934572893617836459843471846187346
[/input]
[output]
934573817465075391826664309019448
[/output]
[/test]
[test]
[input]
1234567890
1234567890
[/input]
[output]
2469135780
[/output]
[/test]
[test]
[input]
129830419415091450143
3478410041470111511474904
[/input]
[output]
3478539871889526602925047
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999
9999999999999999999999999999999999
[/input]
[output]
1000009999999999999999999999999999999998
[/output]
[/test]
[test]
[input]
00001
0000002
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
982374328974238974913824792347
3127642874284682374
[/input]
[output]
982374328977366617788109474721
[/output]
[/test]
[test]
[input]
9999
1
[/input]
[output]
10000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Sum Big Numbers
[code-task title="Sum Big Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.math.BigInteger;
import java.util.Scanner;

public class SumBigNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BigInteger firstNumber = new BigInteger(scanner.nextLine());
        BigInteger secondNumber = new BigInteger(scanner.nextLine());

        BigInteger sum = firstNumber.add(secondNumber);

        System.out.println(sum);
    }
}
```
[/code-editor]
[task-description]
## Description
You will receive two numbers **(0 to 10 ^ 50)**, print their sum.

## Examples

| **Input** | **Output** |
| --- | --- |
| 923847238931983192462832102 | 934573817465075391826664309019448 |
| 934572893617836459843471846187346 | |

| **Input** | **Output** |
| --- | --- |
| 4 | 104 | 
| 100 | | 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
100
[/input]
[output]
104
[/output]
[/test]
[test open]
[input]
923847238931983192462832102
934572893617836459843471846187346
[/input]
[output]
934573817465075391826664309019448
[/output]
[/test]
[test]
[input]
1234567890
1234567890
[/input]
[output]
2469135780
[/output]
[/test]
[test]
[input]
129830419415091450143
3478410041470111511474904
[/input]
[output]
3478539871889526602925047
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999
9999999999999999999999999999999999
[/input]
[output]
1000009999999999999999999999999999999998
[/output]
[/test]
[test]
[input]
00001
0000002
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
982374328974238974913824792347
3127642874284682374
[/input]
[output]
982374328977366617788109474721
[/output]
[/test]
[test]
[input]
9999
1
[/input]
[output]
10000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Big Factorial
[code-task title="Big Factorial" taskId="java-fund-16-Objects-and-Classes-problem-6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You will receive N – number in range **\[0 – 1000]**.

Calculate **Factorial of N** and print the result.

## Examples

| **Input** | **Output** |
| --- | --- |
| 5 | 120 |

| **Input** | **Output** |
| --- | --- |
| 50 | 30414093201713378043612608166064768844377641568960512000000000000 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
120
[/output]
[/test]
[test open]
[input]
50
[/input]
[output]
30414093201713378043612608166064768844377641568960512000000000000
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
3628800
[/output]
[/test]
[test]
[input]
12
[/input]
[output]
479001600
[/output]
[/test]
[test]
[input]
88
[/input]
[output]
185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000
[/output]
[/test]
[test]
[input]
101
[/input]
[output]
9425947759838359420851623124482936749562312794702543768327889353416977599316221476503087861591808346911623490003549599583369706302603264000000000000000000000000
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
3232856260909107732320814552024368470994843717673780666747942427112823747555111209488817915371028199450928507353189432926730931712808990822791030279071281921676527240189264733218041186261006832925365133678939089569935713530175040513178760077247933065402339006164825552248819436572586057399222641254832982204849137721776650641276858807153128978777672951913990844377478702589172973255150283241787320658188482062478582659808848825548800000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[test]
[input]
333
[/input]
[output]
10334465434588059156093965538297516550622260041682062823432902469783188597914276568552700194849877929894375950252570477080418352732597658745665925604704669227133726477243854317836635130694123893711638533001980496229875665476598568821806170303765540489814402234159901540440432134155844542962445153646330595588291605924429211352279943471372817279938720974895260387784578239150931816946786416232516666251965421919651838044618050991294403546958930745419743836966520198735201123255884089263272829846640538826979843642885775791641575109178753509580001660392092396798648924375401024147883702298145910046889402880394195369984000000000000000000000000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Solution: Big Factorial
[code-task title="Big Factorial" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.math.BigInteger;
import java.util.Scanner;

public class BigFactorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        BigInteger f = new BigInteger(String.valueOf(1));

        for (int i = 1; i <= n; i++) {
            f = f.multiply(BigInteger.valueOf(Integer.parseInt(String.valueOf(i))));
        }

        System.out.println(f);
    }
}
```
[/code-editor]
[task-description]
## Description
You will receive N – number in range **\[0 – 1000]**.

Calculate **Factorial of N** and print the result.

## Examples

| **Input** | **Output** |
| --- | --- |
| 5 | 120 |

| **Input** | **Output** |
| --- | --- |
| 50 | 30414093201713378043612608166064768844377641568960512000000000000 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
120
[/output]
[/test]
[test open]
[input]
50
[/input]
[output]
30414093201713378043612608166064768844377641568960512000000000000
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
3628800
[/output]
[/test]
[test]
[input]
12
[/input]
[output]
479001600
[/output]
[/test]
[test]
[input]
88
[/input]
[output]
185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000
[/output]
[/test]
[test]
[input]
101
[/input]
[output]
9425947759838359420851623124482936749562312794702543768327889353416977599316221476503087861591808346911623490003549599583369706302603264000000000000000000000000
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
3232856260909107732320814552024368470994843717673780666747942427112823747555111209488817915371028199450928507353189432926730931712808990822791030279071281921676527240189264733218041186261006832925365133678939089569935713530175040513178760077247933065402339006164825552248819436572586057399222641254832982204849137721776650641276858807153128978777672951913990844377478702589172973255150283241787320658188482062478582659808848825548800000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[test]
[input]
333
[/input]
[output]
10334465434588059156093965538297516550622260041682062823432902469783188597914276568552700194849877929894375950252570477080418352732597658745665925604704669227133726477243854317836635130694123893711638533001980496229875665476598568821806170303765540489814402234159901540440432134155844542962445153646330595588291605924429211352279943471372817279938720974895260387784578239150931816946786416232516666251965421919651838044618050991294403546958930745419743836966520198735201123255884089263272829846640538826979843642885775791641575109178753509580001660392092396798648924375401024147883702298145910046889402880394195369984000000000000000000000000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
