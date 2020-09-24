# While or For Loop?

[slide]
# Video

[vimeo-video startTimeInSeconds="1958" endTimeInSeconds="2495"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]

[/slide]

[slide]
# While or For Loop?

`while` and `for` loops both **repeat** a block of **code**.

But there are different situations when writing code that require either the first loop, or the other.

When you know **exactly how many times** you want to loop through a block of code, use the `for` loop.
```java live
for (int i = 0; i <= 5; i++) {
    System.out.println(i);
}
```

It is usually appropriate for loops in which the initialization and increment are single statements and logically related. 

It is more compact than `while` and it keeps the loop control statements together in one place.

But, there could be many **complex** problems where number of iterations depend upon a certain **condition** and can't be predicated beforehand. 

That means we don't know in advance **how many times** to repeat a loop.

In those situation it is better to use `while` loop.
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

[slide]
# Problem: Odd Number
[code-task title="Odd Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number

## Example
### Input
- 2
- 4
- 8
- 3
### Output
- 3
[/task-description]
[tests]
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

[slide]
# Solution: Odd Number
[code-task title="Odd Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int num = Integer.parseInt(scanner.nextLine());

      while (num % 2 == 0) {
        num = Integer.parseInt(scanner.nextLine());
      }

      System.out.println(num);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
## Example
### Input
- 2
- 4
- 8
- 3
### Output
- 3
[/task-description]
[tests]
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

[slide]
# Problem: Number Processor
[code-task title="Number Processor" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Reads a number from the console
* Reads the following commands:
* **Add** - Аdds 1 to the number
* **Subtract** - Subtracts 1 from the number
* **END** -  Prints the number and stops the program

## Example
### Input
- 5
- Add
- END
### Output
- 6
[/task-description]
[tests]
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

[slide]
# Solution: Number Processor
[code-task title="Number Processor" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in); 
      int number = Integer.parseInt(scanner.nextLine());
      String command = scanner.nextLine();

      while (!command.equals("END")) {
        switch (command) {
          case "Add": 
            number++; 
            break;
          case "Subtract": 
            number--; 
            break;
        }

        command = scanner.nextLine();
      }
      
      System.out.println(number);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which:

* Reads a number from the console
* Reads the following commands:
* **Add** - Аdds 1 to the number
* **Subtract** - Subtracts 1 from the number
* **END** -  Prints the number and stops the program

## Example
### Input
- 5
- Add
- END
### Output
- 6
[/task-description]
[tests]
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