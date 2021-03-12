[slide hideTitle]
# Difference Between While-Loop And For-Loop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-12-13-While-or-for-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Both `while-loop` and `for-loop` **repeat** a block of **code**.

There are different situations when we have to choose the right loop to achieve our goals. 

When we know **exactly how many times** we want to loop through a block of code, we use а `for-loop`. 
```java live
for (int i = 0; i <= 5; i++) {
    System.out.println(i);
}
```

A **for-loop** is more structured than а **while-loop**. The keyword `for` is used, followed by three statements:

- Statement 1 sets a variable before the loop starts (int `i` = 0)

- Statement 2 defines the condition for the loop to run (`i` must be less than 5). If the condition is **true**, the loop will start over again. If it is **false**, the loop will end

- Statement 3 increases a value (`i`++) each time the code block in the loop has been executed


There could be many **complex** problems where the number of iterations depends on a certain **condition** so that it can not be predicted. 

In other words, if the number of iteration is not fixed, it is recommended to use a `while-loop`.

```java live
Scanner scanner = new Scanner(System.in);
String command = scanner.nextLine();
int number = Integer.parseInt(scanner.nextLine());
while (command != "End") {
    switch (command) {
        case "Add":
            number += 1;
            break;
        case "Subtract":
            number -= 1;
            break;
    }

    command = scanner.nextLine();
}

System.out.println(number);
```
[/slide]

[slide hideTitle]
# Problem with Solution: Odd Number

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-14-15-Problem-and-Solution-Odd-Number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Odd Number" taskId="java-basics-while-loop-odd-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads numbers from the console, until an **odd number** is entered
* Prints the **odd** number

## Example

| **Input** | **Output** |
| ---- | ---- |
| 2 | 3 |
| 4 |
| 8 |
| 3 |

[/task-description]
[tests]
[test open]
[input]
2
4
8
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide hideTitle]
# Problem with Solution: Number Processor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/EN/Java-While-Loops-16-17-Problem-and-Solution-Number-Processor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number Processor" taskId="java-basics-while-loop-number-processor" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
* Reads the following commands and executes the specified actions:
* **Add** - Аdds **1** to the number
* **Subtract** - Subtracts **1** from the number
* **END** -  Prints the number and ends the program

## Example One

| **Input** | **Output** |
| ---- | ---- |
| 5 | 6 |
| Add |
| END |

[/task-description]
[tests]
[test open]
[input]
5
Add
END
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
4
Add
END
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
4
Subtract
END
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
4
Add
Add
Subtract
END
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

