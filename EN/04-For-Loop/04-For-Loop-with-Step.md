  [slide hideTitle]
# For-Loop With a Special Step

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-19-20-for-loop-with-step-and-demo -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this section we will take a look at the most important part of the **for-loop**, i.e. its **loop-step**.

The **loop-step** is the part of the **for-loop** construction which specifies how to **increase** or **decrease** the value of the **loop variable**. 

It is the last element of the **declarative structure** of the for-loop.

When using a **step size** of `1` a shorter syntax can be implemented: `i++` or `i--`, instead of `i += 1` or `i -= 1`

```java live
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}
```

When required to increment using a value **greater than 1** the following syntax can be used: `i += x`.

For instance, when incrementing with a **step value of 2** the for-loop would be expressed as follows:
```java live
for (int i = 0; i < 10; i += 2) {
  System.out.println(i);
}
```

In case a **decreasing step** is requred: `i -= x` . 

The **end condition** should be clearly defined in order to **avoid** unintentionally creating an **infinite loop**.

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

