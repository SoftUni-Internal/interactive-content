# Conditional Statements

[slide]
# Video

[vimeo-video startTimeInSeconds="3610" endTimeInSeconds="5725"]
[stream language="EN" videoId="421764903" default /]
[stream language="RO" videoId="422795597"  /]
[/vimeo-video]

[/slide]

[slide]
# Simple If Conditions
One of the single most important statements in every programming language is the `if` statement. 

In programming we often **check particular conditions** and perform various actions depending on the result of the check. 

[image assetsSrc="02-usecase-if-statement.png" /]

# Example: 
Take as an input a grade and check if the student has passed the exam (grade >= 3.00).

```java live
Scanner sc = new Scanner(System.in);
double grade = Double.parseDouble(sc.nextLine());
if (grade >= 3.00) {
   System.out.println("Passed!");
}
```
[/slide]

[slide]
# If-Else Conditions
The `if` construction may also contain an `else` clause to give a specific action in case the Boolean expression (which is set at the beginning `if (bool expression)` ) returns a negative result (`false`). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* if the result of the condition is positive (`true`) – we perform some actions
* when it is negative (`false`) – others. 

[image assetsSrc="02-usecase-if-else-statement.png" /]

# Example: 
Upgrade the last example, so it prints "Failed!", if the mark is lower than 3.00:

As you can see now we have another case, which will be executed when the condition in the `if` statement turns out **false**.
```java live
Scanner sc = new Scanner(System.in);

double grade = Double.parseDouble(sc.nextLine());
if (grade >= 3.00) {
   System.out.println("Passed!");
} else {
   System.out.println("Failed!");
}
```
[/slide]

[slide hideTitle]
# Problem: Back in 30 Minutes
[code-task title="Back in 30 Minutes" taskId="java-fund-01-Basic-Syntax-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Every time Stamat tries to pay his bills he sees on the cash desk the sign: `I will be back in 30 minutes`. 

One day Stamat was sick of waiting and decided he needs a program, which **prints the time** after **30 minutes**.

That way he will not have to wait on the desk and come at the appropriate time. He gave the assignment to you, so you have to do it.

## Hints
* Add 30 minutes to the initial minutes, which you receive from the console. If the minutes are more than 59 - increase the hours with 1 and decrease the minutes with 60. The same way check if the hours are more than 23. When you print check for leading zero.

## Examples
|**Input**|**Output**|
|-----|------|
| 1 | 2:16 |
| 46 ||

## Examples
|**Input**|**Output**|
|-----|------|
| 0 | 0:31 |
| 01 ||


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
46
[/input]
[output]
2:16
[/output]
[/test]
[test open]
[input]
0
01
[/input]
[output]
0:31
[/output]
[/test]
[test]
[input]
23
59
[/input]
[output]
0:29
[/output]
[/test]
[test]
[input]
11
08
[/input]
[output]
11:38
[/output]
[/test]
[test]
[input]
11
32
[/input]
[output]
12:02
[/output]
[/test]
[test]
[input]
1
25
[/input]
[output]
1:55
[/output]
[/test]
[test]
[input]
23
35
[/input]
[output]
0:05
[/output]
[/test]
[test]
[input]
23
52
[/input]
[output]
0:22
[/output]
[/test]
[test]
[input]
7
25
[/input]
[output]
7:55
[/output]
[/test]
[test]
[input]
12
47
[/input]
[output]
13:17
[/output]
[/test]
[test]
[input]
11
37
[/input]
[output]
12:07
[/output]
[/test]
[test]
[input]
15
42
[/input]
[output]
16:12
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Solution: Back in 30 Minutes
[code-task title="Back in 30 Minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int hours = Integer.parseInt(input.nextLine());
    int minutes = Integer.parseInt(input.nextLine());
    int newMin = minutes + 30;
    if (newMin >= 60) {
      hours += 1;
      newMin = newMin - 60;
    }
    if (hours >= 24) {
      hours = hours - 24;
    }
    if (newMin < 10) {
      System.out.printf("%d:0%d", hours, newMin);
    } else {
      System.out.printf("%d:%d", hours, newMin);
    }
  }
}
```
[/code-editor]
[task-description]
## Description
Every time Stamat tries to pay his bills he sees on the cash desk the sign: `I will be back in 30 minutes`. 

One day Stamat was sick of waiting and decided he needs a program, which **prints the time** after **30 minutes**.

That way he will not have to wait on the desk and come at the appropriate time. He gave the assignment to you, so you have to do it.

## Hints
* Add 30 minutes to the initial minutes, which you receive from the console. If the minutes are more than 59 - increase the hours with 1 and decrease the minutes with 60. The same way check if the hours are more than 23. When you print check for leading zero.


## Examples
|**Input**|**Output**|
|-----|------|
| 1 | 2:16 |
| 46 ||

## Examples
|**Input**|**Output**|
|-----|------|
| 0 | 0:31 |
| 01 ||


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
46
[/input]
[output]
2:16
[/output]
[/test]
[test open]
[input]
0
01
[/input]
[output]
0:31
[/output]
[/test]
[test]
[input]
23
59
[/input]
[output]
0:29
[/output]
[/test]
[test]
[input]
11
08
[/input]
[output]
11:38
[/output]
[/test]
[test]
[input]
11
32
[/input]
[output]
12:02
[/output]
[/test]
[test]
[input]
1
25
[/input]
[output]
1:55
[/output]
[/test]
[test]
[input]
23
35
[/input]
[output]
0:05
[/output]
[/test]
[test]
[input]
23
52
[/input]
[output]
0:22
[/output]
[/test]
[test]
[input]
7
25
[/input]
[output]
7:55
[/output]
[/test]
[test]
[input]
12
47
[/input]
[output]
13:17
[/output]
[/test]
[test]
[input]
11
37
[/input]
[output]
12:07
[/output]
[/test]
[test]
[input]
15
42
[/input]
[output]
16:12
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# The Switch-Case Statement
The switch-case condition works as a sequence of **if-else** blocks. 

Whenever the work of our program depends on the value of one variable, instead of making consecutive conditions with `if-else` blocks, we can **use** the conditional `switch` statement. 

It is being used for **choosing between a list of possibilities**. 

The statement compares a given value with defined constants and depending on the result, it takes an action.

```java
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

```java live
int day = 4;
switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  case 4:
    System.out.println("Thursday");
    break;
  case 5:
    System.out.println("Friday");
    break;
  case 6:
    System.out.println("Saturday");
    break;
  case 7:
    System.out.println("Sunday");
    break;
  default:
    System.out.println("Error");
    break;
}
```

This is how it works:
* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* The break and `default` keywords are optional, and will be described later in this lesson.

[/slide]

[slide hideTitle]
# Problem: Month Printer
[code-task title="Month Printer" taskId="java-fund-01-Basic-Syntax-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
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
Write a program, which takes an **integer** from the console and prints the corresponding **month**.

If the number **is more than 12** or **less than 1** print `Error!`.

## Examples
|Input|Output|
|-----|------|
| 2 | February |


|Input|Output|
|-----|------|
| 13 | Error! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
February
[/output]
[/test]
[test open]
[input]
13
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
March
[/output]
[/test]
[test]
[input]
11
[/input]
[output]
November
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
Error!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Month Printer
[code-task title="Month Printer" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);
    int monthIndex = scanner.nextInt();

    switch (monthIndex) {
      case 1:
        System.out.println("January");
        break;
      case 2:
        System.out.println("February");
        break;
      case 3:
        System.out.println("March");
        break;
      case 4:
        System.out.println("April");
        break;
      case 5:
        System.out.println("May");
        break;
      case 6:
        System.out.println("June");
        break;
      case 7:
        System.out.println("July");
        break;
      case 8:
        System.out.println("August");
        break;
      case 9:
        System.out.println("September");
        break;
      case 10:
        System.out.println("October");
        break;
      case 11:
        System.out.println("November");
        break;
      case 12:
        System.out.println("December");
        break;
      default:
        System.out.println("Error!");
        break;
    }
  }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which takes an **integer** from the console and prints the corresponding **month**. If the number **is more than 12** or **less than 1** print `Error!`.

## Examples
|Input|Output|
|-----|------|
| 2 | February |

|Input|Output|
|-----|------|
| 13 | Error! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
[/input]
[output]
February
[/output]
[/test]
[test open]
[input]
13
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
March
[/output]
[/test]
[test]
[input]
11
[/input]
[output]
November
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
Error!
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
Error!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Foreign Languages
[code-task title="Foreign Languages" taskId="java-fund-01-Basic-Syntax-problem-4" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
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
Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: English **is spoken** in England and USA; Spanish **is spoken** in Spain, Argentina, and Mexico; for the others, we should print `unknown`.

## Examples
|Input|Output|
|-----|------|
| USA | English |


|Input|Output|
|-----|------|
| Germany | unknown |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
USA
[/input]
[output]
English
[/output]
[/test]
[test open]
[input]
Germany
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
England
[/input]
[output]
English
[/output]
[/test]
[test]
[input]
11
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
Spain
[/input]
[output]
Spanish
[/output]
[/test]
[test]
[input]
Mexico
[/input]
[output]
Spanish
[/output]
[/test]
[test]
[input]
France
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution Foreign Languages
[code-task title="Foreign Languages" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String county = scanner.nextLine();
    
    switch (county) {
      case "USA":
      case "England":
        System.out.println("English");
        break;
      case "Spain":
      case "Argentina":
      case "Mexico":
        System.out.println("Spanish");
        break;
      default:
        System.out.println("unknown");
    }
  }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which prints the language, that a given country speaks. You can receive only the following combinations: English **is spoken** in England and USA; Spanish **is spoken** in Spain, Argentina, and Mexico; for the others, we should print `unknown`.

## Examples
|Input|Output|
|-----|------|
| USA | English |


|Input|Output|
|-----|------|
| Germany | unknown |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
USA
[/input]
[output]
English
[/output]
[/test]
[test open]
[input]
Germany
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
England
[/input]
[output]
English
[/output]
[/test]
[test]
[input]
11
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
Spain
[/input]
[output]
Spanish
[/output]
[/test]
[test]
[input]
Mexico
[/input]
[output]
Spanish
[/output]
[/test]
[test]
[input]
France
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
