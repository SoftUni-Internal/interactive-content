[slide hideTitle]

# If-Else Conditions

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-18-simple-conditions-if-else-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `if` construction may also contain an `else` statement providing an alternative action in case the initial Boolean expression returns a negative result ("**false**"). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* If the result of the condition is positive ("**true**") - commands placed within it will be executed
* If it is negative ("**false**") - commands placed within the body of the else statement will be executed 

[image assetsSrc="02-usecase-if-else-statement.png" /]

The format of the construction is:
```java
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

If the condition is "**false**", the else-statement runs.

Because a condition cannot be simultaneously "**true**" and "**false**" only one of the if-else cases can be executed.

After executing the body of the `if` or `else`- statements, control is transferred to the next statement in our code if there are any.

In an `if` construction that does not include an else-statement, if the condition is true its body will be executed, if not the program will simply exit it and contunue.

Both the bodies of if - and else-statements can consist of a single or multiple lines of code that are enclosed in braces `{ }`. 

If the body of an if-statement holds just one line of code, the braces are optional (but recommended).

The statement (or statements) in the if-statement and the else-statement can be of any kind, including other if-statements - nested inside the original if-statement.
[/slide]

[slide hideTitle]

# Example: Weather

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-18-simple-conditions-if-else-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[slide hideTitle]
# Block of Code

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-19-20-block-of-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we have **only one command** in the body of the **if mechanics**, we can **skip the curly brackets**

When we want to execute a **block of code** (a group of commands), the curly brackets are **required**. 

In case we omit them, **only the first line** after the **if clause** will be executed.

Here is an example where removing the curly brackets changes the order of execution completely:
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

[slide hideTitle]
# Problem with Solution: Even or Odd

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-21-problem-and-solution-even-or-odd-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even or Odd" taskId="pb-java-Conditional-Statements-even-or-odd" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which checks if a number is **even** or **odd**

  * If it is even, print "**even**"
  * If it is odd, print "**odd**"
## Example

| **Input** | **Output** | 
| ---- | ---- |
| 4 | even|
| 7 | odd |

[/task-description]
[tests]
[test open]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test open]
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



[slide hideTitle]
# Problem with Solution: Greater Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-23-problem-and-solution-greater-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Greater Number" taskId="pb-java-Conditional-Statements-greater-number"  executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that finds the greater of two numbers:

  * Read two **integers**
  * Find the greater number
  * Print `"Greater number: "` + the **greater** number
# Example

| **Input** | **Output** | 
| ---- | ---- |
| 4 | Greater number: 8 |
| 8 |

[/task-description]
[tests]
[test open]
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
