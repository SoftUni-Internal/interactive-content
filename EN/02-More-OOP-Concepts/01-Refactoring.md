[slide]

# Refactoring

**Refactoring represent restructures the code without changing the behaviour**
- **Improves** code readability
- **Reduces** complexity

Example:

Before refactoring:

```java
class ProblemSolver { public static void doMagic() { … } }
```

After refactoring:

```java
class CommandParser { 
	public static <T> Function<T, T> parseCommand() { … } }
class DataModifier { public static <T> T execute() { … } }
class OutputFormatter { public static void print() { … } }
```
## Refactoring Techniques

- **Breaking code** into reusable units
- **Extracting parts of methods** and **classes** into **new** ones

`depositOrWithdraw()` => `deposit()`
                         `withdraw()`

- **Improving names** of variables, methods, classes, etc.

`String str;` => `String name`;

- **Moving methods** or **fields** to more appropriate classes

`Car.open();` => `Door.open`;

[/slide]

[slide]
# Problem: Student System
[code-task title="Problem: Student System" taskId="ee31d215-7910-4bd0-83f9-b336496d283b" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
You are given a **working project** for a small **Student System**, but the code is very poorly organized. Break up the code **logically** into **smaller functional units – methods** and **classes** and don’t break the functionality.

The program supports the following commands:
- “**Create `<studentName>` `<studentAge>` `<studentGrade>`**” – creates a new student and adds them to the repository.
- “**Show `<studentName>`**” – prints on the console information about a student in the format:
“**`<studentName>` is `<studentAge>` years old. `<commentary>`**”, where the **commentary** is based on the student’s grade.
- “**Exit**” – closes the program.

**Do not** add any **extra validation** or **functionality** to the app!

Download the resources folder [here](https://mega.nz/file/7JgGDZzD#L37q5RDXatFRTFlsQiRZnSJPlNvXoSydMGlRl0xUWiM)

## Submit
Submit .zip

## Examples
| **Input** | **Output** |
| --- | --- |
| Create Bob 20 5.50 | Bob is 20 years old. Excellent student. |
| Create Melany 18 4.50 | Melany is 18 years old. Average student. |
| Create George 25 3 |  |
| Show Bob |  |
| Show Melany |  |
| Exit |  |

[/task-description]
[code-io /]
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

[slide]

## Solution: Student System


- Class StudentSystem 
```java
import java.util.HashMap;
import java.util.Map;

public class StudentSystem {
    private Map<String, Student> studentsByNames;

    public StudentSystem() {
        this.studentsByNames = new HashMap<>();
    }

    public Map<String, Student> getStudentsByNames() {
        return this.studentsByNames;
    }

    public String parseCommand(String[] args) {

        String result = null;

        if (args[0].equals("Create")) {
            Student student = CreateStudentCommand.createStudent(args);
            studentsByNames.putIfAbsent(student.getName(), student);
        } else if (args[0].equals("Show")) {
            ShowStudentInfoCommand showStudentInfoCommand =
                    new ShowStudentInfoCommand(studentsByNames.get(args[1]));
            result = showStudentInfoCommand.execute();
        } else {
            result = new ExitCommand().execute();
        }

        return result;
    }
}
```
- Class Student

```java
public class Student {
    private String name;
    private int age;
    private double grade;

    public Student(String name, int age, double grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getGrade() {
        return this.grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        String out = String.format("%s is %s years old.", this.getName(), this.getAge());

        if (this.getGrade() >= 5.00) {
            out += " Excellent student.";
        } else if (this.getGrade() < 5.00 && this.getGrade() >= 3.50) {
            out += " Average student.";
        } else {
            out += " Very nice person.";
        }

        return out;
    }
}
```

- Class CreateStudentCommand

```java
public class CreateStudentCommand {

    public static Student createStudent(String[] data) {
        var name = data[1];
        var age = Integer.parseInt(data[2]);
        var grade = Double.parseDouble(data[3]);
        return new Student(name, age, grade);
    }
}
```
- Class ShowStudentInfoCommand

```java
public class ShowStudentInfoCommand {
    private Student student;

    public ShowStudentInfoCommand(Student student) {
        this.student = student;
    }

    public String execute() {
        return this.student != null ? this.student.toString() : null;
    }
}
```
- Class ExitCommand

```java
public class ExitCommand {

    public String execute() {
        return "Exit";
    }
}
```
- Class Main

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StudentSystem studentSystem = new StudentSystem();

        boolean hasToExit = false;

        while (!hasToExit) {
            String[] input = scanner.nextLine().split(" ");

            String executionResult = studentSystem.parseCommand(input);

            hasToExit = executionResult != null && executionResult.equals("Exit");

            if (!hasToExit && executionResult != null) {
                System.out.println(executionResult);
            }
        }
    }
}
```
[/slide]