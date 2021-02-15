[slide hideTitle]
# Nested Conditions

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/java-basics-conditional-statements-advanced-9-10-nested-conditional-statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pretty often the program logic requires the use of `if` or `if-else` statements, which are contained one inside another.  
They are called **nested** `if` or `if-else` statements. 

As implied by the title **"nested"**, these are `if` or `if-else` statements that are placed inside other `if` or `else` statements.

```java
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

# Example: Personal Titles
Depending on **age** (decimal number and **gender** (**m** / **f**), print a personal title:
-  "Mr." – a man (gender "m") – 16 or more years old
-  "Master" – a boy (gender "m") under 16 years
-  "Ms." – a woman (gender "f") – 16 or more years old
-  "Miss" – a girl (gender "f") under 16 years

# Solution: Person Titles
We should notice that the **output** of the program **depends on a few things**. 

**First**, we have to check what is the entered **gender** and **then** check the **age**. 

Respectively, we are going to use **a few** `if-else` blocks. 

These blocks will be **nested**, meaning from **the result** of the first, we are going to **define** which one of the **others** to execute.

The diagram below illustrates the process in detail:

[image assetsSrc="01.Personal-titles-01.jpg" /]

After reading the input data from the console, the following program logic should be executed:
```java
Scanner scanner = new Scanner(System.in);
int age = Integer.parseInt(scanner.nextLine());
String gender = scanner.nextLine();

if (age < 16) {
    if (gender == "m") {
        System.out.println("Master");
    } else if (gender == "f") {
        System.out.println("Miss");
    }
} else {
    if (gender == "m") {
        System.out.println("Mr.");
    } else if (gender == "f") {
        System.out.println("Ms.");
    }
}
```

# Deep nesting
Nesting of **more than three conditional statements** inside each other is not considered a good practice.

It **has to be avoided**, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement.
[/slide]

[slide hideTitle]
# Problem with Solution: Marketplace

interactive-programming-basics-with-java-conditional-statements-advanced-12-problem-marketplace

[code-task title="Marketplace" taskId="java-basics-nested-conditions-marketplace" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main
{
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program which:
  * Reads a **product** and **day** from the console
  * Prints the **price**, formatted to 2nd digit, based on the price table below

|Product|Weekday|Weekend| 
|-------|-------|-------|
|Banana|2.50|2.70|
|Apple|1.30|1.60|
|Kiwi|2.20|3.00|
# Example

| Input | Output |
| ------- | ------- |
| Banana | 2.50 |
| Weekday |

[/task-description]
[tests]
[test]
[input]
Banana
Weekday
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
Apple
Weekend
[/input]
[output]
1.60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]



[slide hideTitle]
# Problem with Solution: Biggest Number of Three

interactive-programming-basics-with-java-conditional-statements-advanced-14-problem-greatest-number-of-three

[code-task title="Biggest Number of Three" taskId="java-basics-nested-conditions-biggest-number-of-three" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

  * Reads **3 numbers** from the console
  * Prints **the biggest** number
# Example

| Input | Output |
| ------- | ------- |
| 1 | 3 |
| 2 |
| 3 |

[/task-description]
[tests]
[test]
[input]
1
2
3
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
-1
-5
-9
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
1
5
3
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

