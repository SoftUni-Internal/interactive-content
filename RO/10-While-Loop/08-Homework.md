# Homework

[slide]
# Video
[vimeo-video startTimeInSeconds="6246" endTimeInSeconds="8624"]
[stream language="EN" videoId="343678060"  /]
[stream language="RO" videoId="391452320" default /]
[/vimeo-video]
[/slide]

[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image assetsSrc="homework.png" /]
[/slide]

[slide]
# Problem: Sum Digits
[code-task title="Sum Digits" taskId="27-05-p-01" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number from the console
* **Sums** the **digits** of a number
* Prints the sum

## Example
| Input | Output |
| --- | --- |
| 5634 | 18 |
[/task-description]
[tests]
[test]
[input]
123456
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
489451
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
8498498
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
000000
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5684915
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Favorite Book
[code-task title="Favorite Book" taskId="27-05-p-02" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads a **book's name** from the console
* Receives names until it gets **book with the same name as the first one**
* Prints "Book found! Attempts: \{attemptsCount\}" and stops afterwards

## Example
| Input | Output |
| --- | --- |
| Alice in Wonderland | Book found! Attempts: 3 |
| Winnie the Pooh | |
| Peter Pan | |
| Alice in Wonderland | |
[/task-description]
[tests]
[test]
[input]
Fav Book
Book1
Book2
Book3
Book4
Book5
Book6
Book7
Book8
Book9
Book10
Book11
Fav Book
[/input]
[output]
Book found! Attempts: 12
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Find Min and Max
[code-task title="Find Min and Max" taskId="27-05-p-03" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Receives integers until **"END"**
* Prints the **biggest** and the **smallest** integer in the following format:
   * Max number: \{max number\}
   * Min number: \{min number\}

## Example
| Input | Output |
| --- | --- |
| 10 | Max number: 304 |
| 20 | Min number: 0 |
| 304 |  |
| 0 |  |
| 50 |  |
| END |  |

[/task-description]
[tests]
[test]
[input]
5
10
66
456
-4
1
0
END
[/input]
[output]
Max number: 456
Min number: -4
[/output]
[/test]
[test]
[input]
3
15
56
32
7
9
END
[/input]
[output]
Max number: 56
Min number: 3
[/output]
[/test]
[test]
[input]
-34
-4
-12
-45
END
[/input]
[output]
Max number: -4
Min number: -45
[/output]
[/test]
[test]
[input]
0
1
4
5
END
[/input]
[output]
Max number: 5
Min number: 0
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Special Number
[code-task title="Special Number" taskId="27-05-p-04" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Special number is number **divisible by all of its digits** without remainder. 

Write a program, which: 
* Receives integer
* **Prints** "\{num\} is special", if the number is special
* Otherwise, prints "\{num\} is not special"

## Example
| Input | Output |
| --- | --- |
| 23 | 23 is not special |

## Example
| Input | Output |
| --- | --- |
| 404 | 404 is special |
[/task-description]
[tests]
[test]
[input]
55
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
43
[/input]
[output]
43 is not special
[/output]
[/test]
[test]
[input]
202
[/input]
[output]
202 is special
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Special Bonus
[code-task title="Special Bonus" taskId="27-05-p-05" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads an **integer** number from the console
* Keeps reading integers until it finds the **same one as the first one**
* When it finds it, it increases the value of the **previous** number **before it** with 100% and prints it

## Example
| Input | Output |
| --- | --- |
| 25 | 60 |
| 20 | |
| 30 | |
| 25 | |
[/task-description]
[tests]
[test]
[input]
20
5
5
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
20
20
[/input]
[output]
40
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Sequence 2k + 1
[code-task title="Sequence 2k + 1" taskId="27-05-p-06" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Reads a number **n** from the console
* Prints a **sequence** of numbers, which are **<= n** and satisfy the following condition:
* Each number is equal to the previous one multiplied by **2** plus **1**

## Example
| Input | Output |
| --- | --- |
| 8 | 1 |
|  | 3 |
|  | 7 |
[/task-description]
[tests]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
1
3
7
15
31
63
[/output]
[/test]
[test]
[input]
511
[/input]
[output]
1
3
7
15
31
63
127
255
511
[/output]
[/test]
[test]
[input]
10000
[/input]
[output]
1
3
7
15
31
63
127
255
511
1023
2047
4095
8191
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Account Balance
[code-task title="Account Balance" taskId="27-05-p-07" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which: 

* Receives the **amount of money** for each transaction untill **"END"**
* **Adds** the money to the **balance** and **prints**: "Increase: \{money\}", format `money` to the **2nd digit** after the decimal point
* After **"END"** calculates and **prints** the total balance: "Total: \{balance\}", format `balance` to the **2nd digit** after the decimal point

## Example
| Input | Output |
| --- | --- |
| 5.51 | Increase: 5.51 |
| 69.42 | Increase: 69.42 |
| 100 | Increase: 100.00 |
| END | Total: 174.93 |
[/task-description]
[tests]
[test]
[input]
5.50
60.23
100
END
[/input]
[output]
Increase: 5.50
Increase: 60.23
Increase: 100.00
Total: ‭165.73‬
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Homework Results

[tasks-results /]
[/slide]