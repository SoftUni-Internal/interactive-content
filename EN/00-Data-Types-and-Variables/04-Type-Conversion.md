# Type Conversion

[slide hideTitle]

# Type Conversion

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-30-31-type-conversion-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When you assign the value of one data type to another, the two types might not be compatible with each other.

If the data types are compatible, Java will perform the conversion automatically. 

This is known as **Automatic Type Conversion**, and if they are not compatible, they need to be converted explicitly.

For example, assigning an **int** value to a **long** variable.

In Java, there are two types of casting:

- **Widening conversion** \(automatic\) - converting a smaller type to a larger data type

This is also known as **implicit conversion**

```java live
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myInt);
System.out.println(myDouble);
```

Here a lower data type \(having smaller size\) is converted into a larger data type \(having larger size\). 

There is no loss in data, so this type of conversion happens automatically.

- **Narrowing conversion** \(manual\) - converting a larger type into a smaller data type. Also known as **explicit conversion**

```java live
double myDouble = 9.78;

// Manual casting: double to int
int myInt = (int)myDouble; 

System.out.println(myDouble);
System.out.println(myInt);
```

Here the greater data types \(having larger size\) are converted into lower data types \(having smaller size\). 

When this happens there can be a loss of data/precision.

This is why this type of conversion does not happen automatically. 

[/slide]

[slide hideTitle]
# Problem with Solution: Centuries to Minutes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-33-problem-and-solution-centuries-to-minutes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Centuries to Minutes" taskId="java-fund-1-data-types-lab-centuries-to-minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that accepts an **int** number of **centuries** and converts it to the respective ammount of **years**, **days**, **hours**, and **minutes**. 

The input will be of type **int**.

## Examples

| **Input** | **Output** |
| --- | --- |
| 1 | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes    |
| 5 | 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
[/output]
[/test]
[test open]
[input]
5
[/input]
[output]
5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
[/output]
[/test]
[test]
[input]
14
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Chars to String

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-problem-and-solution-chars-to-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Chars to String" taskId="java-fund-1-data-types-lab-chars-to-string" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program that reads 3 lines of input.

You will get a single character on each line.

Combine all the characters into a sigle string and print it to the console.

## Examples

| **Input** | **Output** |
| --- | --- |
| a | abc |
| b |     |
| c |     |


| **Input** | **Output** |
| --- | --- |
| % | %20 |
| 2 |     |
| 0 |     |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a
b
c
[/input]
[output]
abc
[/output]
[/test]
[test open]
[input]
%
2
0
[/input]
[output]
%20
[/output]
[/test]
[test]
[input]
1
5
p
[/input]
[output]
15p
[/output]
[/test]
[test]
[input]
d
e
f
[/input]
[output]
def
[/output]
[/test]
[test]
[input]
x
y
z
[/input]
[output]
xyz
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
0
0
0
[/input]
[output]
000
[/output]
[/test]
[test]
[input]
1
b
\#
[/input]
[output]
1b\#
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Lower or Upper

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-problem-and-solution-lower-or-upper-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Lower or Upper" taskId="java-fund-1-data-types-lab-lower-or-upper" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that prints out whether a given character is upper or lower-case.

## Examples
| **Input** | **Output** |
| --- | --- |
| L | upper-case |
| f | lower-case |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
L
[/input]
[output]
upper-case
[/output]
[/test]
[test open]
[input]
f
[/input]
[output]
lower-case
[/output]
[/test]
[test]
[input]
A
[/input]
[output]
upper-case
[/output]
[/test]
[test]
[input]
a
[/input]
[output]
lower-case
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
