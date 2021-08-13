# The Switch Statement
[slide hideTitle]
# The Switch Statement

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-24-25-switch-case-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `switch` statement works as a sequence of **if-else** blocks. 

Instead of defining consecutive conditions with `if-else` blocks, we can use a `switch` statement in case our code logic depends on a single variable. 

The switch statement provides us with a simpler syntax for constructions with more than one code block to choose from.

This statement compares a given value with the value of each case and acts accordingly - executing the corresponding block.

## Switch-statement:

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
}
```

- We place **the variable** that we want to **compare** inside the **brackets after the** `switch` operator

This variable is called **"selector"**.

- Note, that **the data types must be comparable** (numbers, strings)

- The program starts **comparing** the variable with the `labels` of each `switch case`

- Upon a match, the execution of this code block begins and continues until it reaches the `break` operator

In some programming languages (like `C` and `C++`) the `break` operator can be skipped allowing us to execute code from other `case` constructions.

In Java, the presence of `break` is **mandatory** for each `case` that contains program logic. 

When **no matches** are **found**, the `default` construction is executed, **if** such **exists**.



## The default case
The default case is executed if **there are no prevous cases matching the switch** `selector`.

If a default case is not present and there are no case matches, the switch statements is exited and the program continues executing the code after it.

The default case can appear at any place in the switch-statement, but regardless of its position in the source code, it is always run **last**, after all case labels have been processed.

## Example of a Switch-statement with a `default` case:

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
  default:
    statements;
    break;
}
```
[/slide]

[slide hideTitle]
# Example: "Yes" or "No"

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-26-switch-case-example-and-demo-FIX-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us create a program that prints **"Yes" or "No"** depending on a **given value** (`Y`, `N`) or **"Invalid response"** if an invalid input is given.

```java
Scanner scanner = new Scanner(System.in);
String choice = scanner.nextLine();
switch (choice) {
  case "Y":
    System.out.println("Yes");
    break;
  case "N":
    System.out.println("No");
    break;
  default:
    System.out.println("Invalid response");
    break;
}
```
[/slide]

[slide hideTitle]
# Multiple Labels

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-27-29-multiple-labels-in-switch-case-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **Java**, we have the possibility to use **multiple** `case` labels in the `switch-case` construction, when they have to execute **the same code**. 

This way, when our **program** finds a **match** it will execute each following code block until it reaches a `break operator`:

```java
switch (selector) {
    case value1:
    case value2:
    case value3:
        construction;
        break;
    case value4:
    case value5:
        construction;
        break;
    default:
        construction;
        break;
}
```

## Example: Animal Type
# Description

Let us review a coding problem that we have already seen. 
Create a program that prints out the class of an animal.
There are three possible output types: mammal, reptile and unknown
Input / Output

The input may hold the following values:

- mammals: dog
- reptiles: crocodile, tortoise, snake
- anything else that may come as input should produce "unknown" as output



This time, we should solve the task using `switch-case` conditions with multiple labels in the following way:
```java
Scanner scanner = new Scanner(System.in);
String animal = scanner.nextLine();
switch (animal) {
    case "dog":
    case "cat":
      System.out.println("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      System.out.println("reptile");
      break;
    default:
      System.out.println("unknown");
      break;
}
```
[/slide]
