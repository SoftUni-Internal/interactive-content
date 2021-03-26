  [slide hideTitle]
# For-Loop With a Special Step

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-19-20-for-loop-with-step-and-demo -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this section, we will look into a particular and very important part of the **for-loop**, namely its **loop-step**.

**The loop-step** is that **part** of the **for-loop** construction that specifies **how** to **increase** or **decrease** the value of the **loop variable**. 

It the last element of the **declarative structure** of the for-loop.

Most often, we have **a step size of** `1`, and in this case, instead of writing `i += 1` or `i -= 1` we can use a shorter syntax: `i++` or `i--`.

```java live
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}
```

If we want our step to be **different than 1**, when **increasing**, we use the `i +=` + **a step size**.

 With a step of 2, the for-loop would look like this:
```java live
for (int i = 0; i < 10; i += 2) {
  System.out.println(i);
}
```

We might want to have a **decreasing step** - `i -=` . 

In this case, we should pay attention to the end condition to **avoid** creating an **infinite loop**.

```java live
for (int i = 10; i >= 1; i--) {
  System.out.println(i);
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Numbers Ending with 7 

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-21-problem-and-solution-numbers-ending-with-seven-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers Ending with 7" taskId="java-basics-for-loop-numbers-ending-with-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads a number **n**
* Prints all numbers from **7 to n**, **which end in 7**

## Example
| **Input** | **Output** 
| --- | --- |
| 30 | 7 |
|  | 17 |
|  | 27 |

[/task-description]
[tests]
[test open]
[input]
30
[/input]
[output]
7
17
27
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
7
17
27
37
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]
# Problem with Solution: Exam Countdown

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-23-problem-and-solution-exam-countdown-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Exam Countdown" taskId="java-basics-for-loop-exam-countdown" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which:

* Reads an integer - number of **days before an exam**
* On **each iteration** it prints: "\{**currentDay**\} **days before the exam**"
* Finally it prints: **"The exam has come"**

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 3 days before the exam |
|  | 2 days before the exam |
|  | 1 days before the exam |
|  | The exam has come |

[/task-description]
[tests]
[test open]
[input]
3
[/input]
[output]
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

