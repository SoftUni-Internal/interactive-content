# Refactoring

[slide hideTitle]

# Refactoring

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-16-17-Refactoring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Refactoring means restructuring the code without changing its behavior.**

This aims to **improve** code readability and **reduce** its complexity.

**Example:**

**Before** refactoring:

```java
class ProblemSolver { public static void doMagic() { … } }
```

**After** refactoring:

```java
class CommandParser { 
	public static <T> Function<T, T> parseCommand() { … } }
class DataModifier { public static <T> T execute() { … } }
class OutputFormatter { public static void print() { … } }
```
[/slide]

[slide hideTitle]

# Refactoring Techniques

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-18-Refactoring-Techniques-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Breaking code** into reusable units
- **Extracting parts of methods** and **classes** into **new** ones

`depositOrWithdraw()` => `deposit()` and `withdraw()`

- **Improving names** of variables, methods, classes, etc.

`String str;` => `String name;`

- **Moving methods** or **fields** to more appropriate classes

`Car.open();` => `Door.open();`

[/slide]

[slide hideTitle]
# Problem with Solution: Student System

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP-Concepts-19-student-system-problem-and-solution-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Student System" taskId="oop-basics-java-more-oop-concepts-lab-Student-System" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-basics/01-Java-OOP-basics-More-OOP-Concepts-Lab-Resources.zip) **for this task.**

This is a **working project** for a simple **Student database**. The code is very poorly organized. 

Split the code **logically** into **smaller functional units** – **methods** and **classes**, without damaging the program.

The program supports the following commands:

- "**Create** **studentName studentAge studentGrade**" - creates a new student entry and adds them to the repository
- "**Show** **studentName**" - prints information about a student in the format:
"\{**studentName**\} **is** \{**studentAge**\} **years old.** \{**commentary**\}", where the **commentary** is based on the student's grade.
- "**Exit**" – closes the program

**Do not** add any **extra validation** or **functionality**!

## Submit

You should submit your solution in a `.zip` archive.

## Example
| **Input** | **Output** |
| --- | --- |
| Create Bob 20 5.50 | Bob is 20 years old. Excellent student. |
| Create Melany 18 4.50 | Melany is 18 years old. Average student. |
| Create George 25 3 |  |
| Show Bob |  |
| Show Melany |  |
| Exit |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create Bob 20 5.50
Create Melany 18 4.50
Create George 25 3
Show Bob
Show Melany
Exit
[/input]
[output]
Bob is 20 years old. Excellent student.
Melany is 18 years old. Average student.
[/output]
[/test]
[test]
[input]
Create Todor 19 2.00
Show Sasho
Show Todor
Create Sasho 20 3.00
Show Todor
Show Sasho
Exit
[/input]
[output]
Todor is 19 years old. Very nice person.
Todor is 19 years old. Very nice person.
Sasho is 20 years old. Very nice person.
[/output]
[/test]
[test]
[input]
Create Maria 80 5.7
Create Pesho 25 4.5
Create Gosho 12 3.00000
Exit
[/input]
[output]

[/output]
[/test]
[test]
[input]
Create Pesho -20 -20
Show Pesho
Exit
[/input]
[output]
Pesho is -20 years old. Very nice person.
[/output]
[/test]
[test]
[input]
Create Stamat 12 6.00
Show Stamat
Show Stamat
Create Stamat 20 4.00
Show Stamat
Exit
Show Stamat
[/input]
[output]
Stamat is 12 years old. Excellent student.
Stamat is 12 years old. Excellent student.
Stamat is 12 years old. Excellent student.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
