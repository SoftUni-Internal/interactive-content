[slide hideTitle]
# For-Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-14-for-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming, we often need to repeat a block of commands multiple times. 

To do that constructions called **loops** are used. 

Let us examine an example of a **for-loop** that passes through the numbers from 1 to 10 and prints them:
```java live
for (int i = 1; i <= 10; i += 1) {
  System.out.println(i);
}
```

We can get a better understanding of this algorithm from this use-case diagram:

[image assetsSrc="04-for-loop-use-case.png" /]

The loop is declared using the `for` operator and passes through all values for a particular variable in a given range. For example the numbers from 1 to 10 (included), and for each value it performs a series of commands.
[/slide]

[slide hideTitle]
# Syntax: For-Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-12-13-for-loop-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Upon declaring the loop, we should specify a **start value** and an **end value**. 

The **body** of the loop is usually enclosed in curly brackets `{ }` and represents a block of **one or multiple commands**.

The code block below shows the structure of a `for` loop:
```
for (initialization; condition; update) {
  loop body;
}
```

It consists of:
* An **initialization part** for the counter (in the pattern `int i = 0`)
* A **boolean** condition (`i < 10`)
* An expression, **updating** the counter (``i += 1``)
* Body 

In most cases a **for-loop** is run between `1` and `n` times (for example from 1 to 10). 

The purpose of the loop is to pass sequentially through the numbers 1, 2, 3, …, n and execute a block of code on each iteration. 

In the first example, the `i` variable accepts the values from 1 to 10 and the **current** value is printed in the body of the loop. 

The loop repeats 10 times and each of these repetitions is called an **"iteration"**.
[/slide]


[slide hideTitle]
# Problem with Solution: Print Sum of N Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-15-problem-and-solution-print-sum-of-n-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Sum of N Numbers" taskId="java-basics-for-loop-print-sum-of-n-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which:

* Reads a number **n** from the console
* **Prints out** all numbers from **1** to **n**
* **Sums** all numbers from **1** to **n**
* **Prints out** the final sum to the console

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | 1 |
|  | 2 |
|  | 3 |
|  | 4 |
|  | 5 |
|  | 15 |
[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


