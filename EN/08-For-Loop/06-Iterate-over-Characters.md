# Iterating over Characters

[slide]
# Video

[vimeo-video startTimeInSeconds="3555" endTimeInSeconds="4281"]
[stream language="EN" videoId="342471604" default /]
[stream language="RO" videoId="389927500"  /]
[/vimeo-video]

[/slide]

[slide]
# Iterating over Characters
It is good to know that the **for loops** don't only work with numbers. 

We can also use **for loops** to iterate over **characters**.

Here is an example of how a loop can pass sequentially through some **letters** in the English alphabet:
```java live
for (char ch = 'a'; ch <= 'd'; ch++) {
  System.out.print(ch + " ");
}
```

# ASCII Table
**ASCII** stands for American Standard Code for Information Interchange. 
 
Computers can only understand numbers, so an **ASCII** code is the numerical representation of a character such as 'a' or '@' or an action of some sort. 

This is an example part of the table:

[image assetsSrc="04-for-loop-ascii.png" /]

And here you can check the whole **ASCII Table**: **http://www.asciitable.com**

The columns that you would most probably use for the purposes of this course are the **decimal** and **character** ones.

For example, the decimal value of the character **'a'** is **97** and the one corresponding to **'@'** is **64**.
[/slide]

[slide]
# Problem: Latin Letters
[code-task title="Latin Letters" executionStrategy="java-code" requiresInput]
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

* Reads **2 letters**, each on a separate line
* Prints **all letters** in the given range **inclusive**

## Example
| **Input** | **Output** 
| --- | --- |
| a | a |
| c | b |
|  | c |
[/task-description]
[tests]
[test]
[input]
a
c
[/input]
[output]
a b c
[/output]
[/test]
[test]
[input]
f
l
[/input]
[output]
f g h i j k l
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Latin Letters
[code-task title="Latin Letters" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char firstLetter = scanner.nextLine().charAt(0);
        char secondLetter = scanner.nextLine().charAt(0);

        for (char i = firstLetter; i <= secondLetter; i++) {
            System.out.print(i + " ");
        }
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads **2 letters**
* Prints **all letters** in the given range **inclusive**

## Example
| **Input** | **Output** 
| --- | --- |
| a | a |
| c | b |
|  | c |
[/task-description]
[tests]
[test]
[input]
a
c
[/input]
[output]
a b c
[/output]
[/test]
[test]
[input]
f
l
[/input]
[output]
f g h i j k l
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]