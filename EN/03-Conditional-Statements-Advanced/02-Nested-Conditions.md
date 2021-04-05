[slide hideTitle]
# Nested Conditions

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-9-10-11-nested-conditional-statements-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Often, program logic requires the use of `if` or `if-else` statements, which are contained one inside another.  
These are called **nested** statements. 

As implied by the word **"nested"**, these are `if` or `if-else` statements that are placed inside other `if` or `else` statements.

```java
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

## Example: Personal Titles
Depending on someones **age** (integer) and their **gender** (**m** / **f**), print their personal title:
-  "Mr." - a man (gender "m") - 16 or older
-  "Master" - a boy (gender "m") - under 16 years old
-  "Ms." - a woman (gender "f") – 16 or molder
-  "Miss" - a girl (gender "f") - under 16 years old

## Solution: Personal Titles
We should notice that the **output** of the program **depends on a few conditions**. 

**First**, we have to check what their **gender** is and **then** their **age**. 

We are going to use **a few** `if-else` blocks. 

These blocks will be **nested**, so that by **the result** of the outer one, we are going to **define** which one of the **inner ones** to execute.

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

## Deep nesting
Nesting **more than three levels of conditional statements** is not considered a good practice.

We can optimize the code structure by using another type of conditional statement.


[/slide]

[slide hideTitle]
# Problem with Solution: Marketplace

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-12-problem-and-solution-marketplace-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program that:
  * Reads a **product** and whether it is currently a **weekday** or a **weekend** 
  * Prints out the product **price**, formatted up to 2nd decimal place, based on the price table below

|**Product**|**Weekday**|**Weekend**| 
|---|---|---|
|Banana|2.50|2.70|
|Apple|1.30|1.60|
|Kiwi|2.20|3.00|

## Example

| **Input** | **Output** |
| --- | --- |
| Banana | 2.50 |
| Weekday |

[/task-description]
[tests]
[test open]
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

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-14-problem-and-solution-greatest-number-of-three-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Create a program, that:

  * Reads **3 numbers** from the console
  * Prints out **the greatest** number of the 3

## Example

| **Input** | **Output** |
| --- | --- |
| 1 | 3 |
| 2 |
| 3 |

[/task-description]
[tests]
[test open]
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

