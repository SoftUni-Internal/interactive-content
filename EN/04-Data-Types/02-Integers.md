# Integers

[slide]
# Video
[vimeo-video startTimeInSeconds="1406" endTimeInSeconds="1957"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]
[/slide]

[slide]
# Integer types

**Integer types** stores whole numbers, positive or negative (such as 123 or -456), without decimals.

Valid types are **byte**, **short**, **int** and **long**, which type you should use, depends on the numeric value.

|Type| Default Value | Min Value | Max Value| Size |
|-----|------|-----|------|-----|
| byte | 0 | -128 (-2<sup>7</sup>) | 127  (2<sup>7</sup> - 1)| 8 bit |
| short | 0 | -32768 (-2<sup>15</sup>) | 32767 (2<sup>15</sup> - 1) | 16 bit |
| int | 0 | -2147483648 (-2<sup>31</sup>) | 2147483647 (2<sup>31</sup> - 1) | 32 bit |
| long | 0 | -9223372036854775808 (-2<sup>63</sup>) | 9223372036854775807 (2<sup>63</sup> - 1) | 64 bit |

## Examples

### Byte

The **byte** data type can store whole numbers from -128 (-2<sup>7</sup>) to 127 (2<sup>7</sup> - 1). 

This can be used instead of **int** or other integer types to save memory when you are certain that the value will be within (-2<sup>7</sup>) and (2<sup>7</sup> - 1):

```java live
byte myNum = 100;
System.out.println(myNum);
```

### Short
The **short** data type can store whole numbers from -32768 (-2<sup>15</sup>) to 32767 (2<sup>15</sup> - 1):

```java live
short myNum = 5000;
System.out.println(myNum);
```

### Int
The **int** data type can store whole numbers from -2147483648 (-2<sup>31</sup>) to 2147483647 (2<sup>31</sup> - 1). 

In general, and in our course, the **int** data type is the preferred data type when we create variables with a numeric value.

```java live
int myNum = 100000;
System.out.println(myNum);
```

### Long
The **long** data type can store whole numbers from -9223372036854775808 (-2<sup>63</sup>) to 9223372036854775807 (2<sup>63</sup> - 1). 

This is used when int is not large enough to store the value.

Note that you should end the value with an "L":

```java live
long myNum = 15000000000L;
System.out.println(myNum);
```

[/slide]


[slide]
# Problem: Convert Meters to Kilometers
[code-task title="Convert Meters to Kilometers" taskId="java-fundamentals-Data-Types-and-Variables-01" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will be given an integer that will be distance in meters.

Write a program that converts meters to kilometers formatted to the second decimal point.

## Examples
|**Input**|**Output**|
|-----|------|
| 1852 | 1.85 |
| 798 | 0.80 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1852
[/input]
[output]
1.85
[/output]
[/test]
[test]
[input]
798
[/input]
[output]
0.80
[/output]
[/test]
[test]
[input]
5000
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
825
[/input]
[output]
0.83
[/output]
[/test]
[test]
[input]
1254
[/input]
[output]
1.25
[/output]
[/test]
[test]
[input]
2450
[/input]
[output]
2.45
[/output]
[/test]
[test]
[input]
4589
[/input]
[output]
4.59
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Solution: Convert Meters to Kilometers
[code-task title="Convert Meters to Kilometers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int meters = Integer.parseInt(scanner.nextLine());
        double kilometers = meters / 1000 d;

        System.out.println(String.format("%.2f", kilometers));
    }
}
```
[/code-editor]
[task-description]
## Description
You will be given an integer that will be distance in meters.

Write a program that converts meters to kilometers formatted to the second decimal point.

## Examples
|**Input**|**Output**|
|-----|------|
| 1852 | 1.85 |
| 798 | 0.80 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1852
[/input]
[output]
1.85
[/output]
[/test]
[test]
[input]
798
[/input]
[output]
0.80
[/output]
[/test]
[test]
[input]
5000
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
825
[/input]
[output]
0.83
[/output]
[/test]
[test]
[input]
1254
[/input]
[output]
1.25
[/output]
[/test]
[test]
[input]
2450
[/input]
[output]
2.45
[/output]
[/test]
[test]
[input]
4589
[/input]
[output]
4.59
[/output]
[/test]
[/tests]
[/code-task]
[/slide]