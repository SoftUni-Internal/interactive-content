# If-Else Conditions

[slide]
# Video

[vimeo-video startTimeInSeconds="2681" endTimeInSeconds="3553"]
[stream language="EN" videoId="341539841/456a08950e" default /]
[stream language="RO" videoId="387657941/b7f1ede8f0"  /]
[/vimeo-video]

[/slide]


[slide]
# If-Else Conditions
The `if` construction may also contain an `else` clause to give a specific action in case the Boolean expression (which is set at the beginning `if (bool expression)` ) returns a negative result (`false`). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* if the result of the condition is positive (`true`) – we perform some actions
* when it is negative (`false`) – others. 

[image assetsSrc="02-usecase-if-else-statement.png" /]

The format of the construction is:
```java
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

If condition is `false`, the else-statement runs.

Because a condition can’t be simultaneously `true` and `false`, the then-statement and the else-statement of an `if-else` statement can **never both run**. 

After the then-statement or the `else`-statement runs, control is transferred to the next statement after the `if` statement.

In an `if` statement that doesn’t include an else statement, if condition is `true`, the then-statement runs. 

If condition is `false`, control is transferred to the next statement after the if statement.

Both the then-statement and the else-statement can consist of a single statement or multiple statements that are enclosed in braces `{ }`. 

For a single statement, the braces are optional but recommended.

The statement or statements in the then-statement and the else-statement can be of any kind, including another if statement nested inside the original if statement.

# Example: Weather
This is an extended version of the example from the previous slide.

As you can see now we have another case, which will be executed when the condition in the `if` statement turns out **false**.
```java
Scanner scanner = new Scanner(System.in);
String weather = scanner.nextLine();

if (weather.equals("rainy")) {
    System.out.println("Take an umbrella!");
} else {
    System.out.println("Leave your umbrella at home!")
}
```
[/slide]

[slide]
# Block of Code
When we have **only one command** in the body of the **if construction**, we can **skip the curly brackets**, indicating the conditional operator body. 

When we want to execute **block of code** (group of commands), curly brackets are **required**. 

In case we drop them, **only the first line** after the **if clause** will be executed.

Here is an example where dropping curly braces leads to confusion:
```java live
String color = "red";
if (color.equals("red")) 
  System.out.println("tomato");
else
  System.out.println("banana");
System.out.println("lemon"); 
```

With curly braces:
```java live
String color = "red";
if (color.equals("red")) {
  System.out.println("tomato");
  System.out.println("strawberry"); 
} else {
  System.out.println("banana");
  System.out.println("lemon");
}
```
[/slide]

[slide]
# Problem: Even or Odd
[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print "**even**"
  * If it's odd, print "**odd**"
# Example
## Input
- 4
## Output
- even
## Input
- 7
## Output
- odd
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Even or Odd
[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
        if (num % 2 == 0) {
            System.out.println("even");
        } else {
            System.out.println("odd");
        }
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print "**even**"
  * If it's odd, print "**odd**"
# Example
## Input
- 4
## Output
- even
## Input
- 7
## Output
- odd
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Greater Numbers
[code-task title="Greater Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Write a program, which finds the greater of two numbers:

  * Read two **integers**
  * Find the greater number
  * Print `"Greater number: "` + the **greater** number
# Example
## Input
- 4
- 8
## Output
- Greater number: 8

[/task-description]
[tests]
[test]
[input]
4
8
[/input]
[output]
Greater number: 8
[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
Greater number: 7
[/output]
[/test]
[test]
[input]
1
2
[/input]
[output]
Greater number: 2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide]
# Solution: Greater Numbers
[code-task title="Greater Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = Integer.parseInt(scanner.nextLine());
        int num2 = Integer.parseInt(scanner.nextLine());
        if (num1 > num2) {
            System.out.println("Greater number: " + num1);
        } else {
            System.out.println("Greater number: " + num2);
        }
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which finds the greater of two numbers:

  * Read two **integers**
  * Find the greater number
  * Print `"Greater number: "` + the **greater** number
# Example
## Input
- 4
- 8
## Output
- Greater number: 8
[/task-description]
[tests]
[test]
[input]
4
8
[/input]
[output]
Greater number: 8
[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
Greater number: 7
[/output]
[/test]
[test]
[input]
1
2
[/input]
[output]
Greater number: 2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]