[slide hideTitle]
# While-Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-5-6-7-While-Loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming a **while-loop** is used when we want to **repeat** the execution of a certain logic until a specified condition is reached. 

In this case the **"condition"** is an **expression** that returns `true` or `false`. 

If the **condition** returns **false** the while-loop is **interrupted** and the program **continues** to execute the remaining code. 

[image assetsSrc="05-use-case-while.png" /]

The **syntax of the while-loop** looks like this:
```java
while (condition) {
  loop body;
}
```

In the example above, the condition can be any **expression that returns a Boolean result** - `true` or `false`. 

How many times the loop body will be repeated depends on the `condition`. 

In this example, the `loop body` is the programming code that is executed on each iteration of the loop whenever the **condition is true**.

In the **while-loop** the **condition** is evaluated first and if it returns **true**, then the statements inside the loop get executed.  

Consequently, the condition is checked once more and if it is **true** the body of the loop is executed. 

This process is repeated again and again **until the conditional expression returns** `false`. 

Then, the execution process jumps to any code following the **while-loop** .


## Example: Sequence of Numbers 2k+1
Create a program that prints all **numbers that are smaller than or equal to** `n`. 

The first number will be equal to **1**. The second number will be equal to 1 * 2 + 1, which is equal to **3**. 

Subsequent numbers are calculated by the formula: **previous number * 2 + 1**.

Therefore, the first few numbers are **1, 3, 7, 15, 31, …,** 

Here is how we can solve this problem:
- First we create a **num** variable with an assigned **value of 1**
- For a loop condition, we specify that **the current number should be smaller than or equal to** `n`
- In **the body of the loop**, we print the value of the **current number**, and we increase it by using the formula provided in the problem's description

Here is a sample implementation of this algorithm:
```java
Scanner scanner = new Scanner(System.in);
int n = Integer.parseInt(scanner.nextLine());
int num = 1;
while (num <= n) {
  System.out.println(num);
  num = 2 * num + 1;
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Decreasing Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-8-Problem-and-solution-Decreasing-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Decreasing Numbers" taskId="java-basics-while-loop-decreasing-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:

* Reads a number from the console
* Prints all the numbers between the **input number** and **1** (**inclusive**), each on a new line
## Example

| **Input** | **Output** |
| ---- | ---- |
| 4 | 4 |
|| 3 |
|| 2 |
|| 1 |

[/task-description]
[tests]
[test open]
[input]
4
[/input]
[output]
4
3
2
1
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
4
3
2
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]
# Problem with Solution: Number in Range

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-10-11-Problem-and-solution-Number-in-range-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number in Range" taskId="java-basics-while-loop-number-in-range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that:

* Reads a **number** from the console
* Checks if the number is in the range between **1 and 100**
* If it is not in this range - accepts a **new number**
* If it is - **prints the number** and the program stops

## Example

| **Input** | **Output** |
| ---- | ---- |
| -10 | 50 |
| 101 |
| 50 |

[/task-description]
[tests]
[test open]
[input]
-10
101
50
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
-5
104
60
[/input]
[output]
60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

