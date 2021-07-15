
[slide hideTitle]

# Iterating over Characters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-25-26-27-the-ASCII-table-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## The ASCII Table

**ASCII** stands for **American Standard Code for Information Interchange**. 
 
Computers can only process numbers; therefore, the ASCII code is used as a numerical equivalent of any character, i.e. "a" or "@". 

Here is a part of the ASCII table:

| **Dec** | **Hex** | **Char** | **Dec** | **Hex** | **Char** |
| :-----: | :-----: | :------: | :-----: | :-----: | :------: |
|   64    |   40    |    \@    |   96    |   60    |    \`    |
|   65    |   41    |    A     |   97    |   61    |    a     |
|   66    |   42    |    B     |   98    |   62    |    b     |
|   67    |   43    |    C     |   99    |   63    |    c     |
|   68    |   44    |    D     |   100   |   64    |    d     |
|   69    |   45    |    E     |   101   |   65    |    e     |
|   70    |   46    |    F     |   102   |   66    |    f     |
|   71    |   47    |    G     |   103   |   67    |    g     |
|   72    |   48    |    H     |   104   |   68    |    h     |
|   73    |   49    |    I     |   105   |   69    |    i     |
|   74    |   4A    |    J     |   106   |   6A    |    j     |

Here you can see the entire [ASCII Table](http://www.asciitable.com)

The columns that are most commonly used in this course are **decimal** and **character**.

For example, the decimal value of the character **'a'** is **97** and the corresponding decimal value to **'@'** is **64**.

## Iterating over Characters

It is important to note that **for-loops** do not just work with numbers. 

**for-loops** can be used to iterate over **characters**.

Here is an example of how a loop can iterate through a range of **letters** in the English alphabet:
```java live
for (char ch = 'a'; ch <= 'd'; ch++) {
  System.out.print(ch + " ");
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Latin Letters

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-28-problem-and-solution-latin-letters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Latin Letters" taskId="java-basics-for-loop-numbers-latin-letters" executionStrategy="java-code" requiresInput]
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

* Reads **2 letters** (each on a separate line)
* Prints **all letters** in the given range **inclusive**

## Example
| **Input** | **Output** 
| --- | --- |
| a | a b c|
| c | |

[/task-description]
[tests]
[test open]
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

