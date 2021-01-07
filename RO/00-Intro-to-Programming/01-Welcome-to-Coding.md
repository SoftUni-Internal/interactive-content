# What is Coding?

[slide]

# Video
[vimeo-video startTimeInSeconds="4243" endTimeInSeconds="5570"]
[stream language="EN" videoId="384741142" default /]
[stream language="RO" videoId="390421925"  /]
[/video-vimeo]

[/slide]

[slide]
# What is Coding?
**To program** means to **give commands** to the computer, for example *"to play a sound"*, *"to print something on the screen"* or *"to multiply two numbers"*. 

When the commands are one after another, they are called **a computer program**. 

The text of computer programs is called **a program code** (or a **source code**, or even shorter – **code**).

Example of command for the computer:
```java live
System.out.println("I am coding");
```
[/slide]

[slide]
# Computer Programs
Computer programs represent **a sequence of commands** that are written in certain **programming language**, like C#, Java, JavaScript, Python, C++, PHP, C, Ruby, Swift, Go or another.

Example of **computer program** in Java:
```java live no-template
public class Main {
  public static void main(String[] args) {
    int size = 5;
    System.out.println("Size = " + size);
    System.out.println("Area = " + size * size);
  }
}
```

The above program defines a **class** `Main`, holding a **method** `main()`, which holds a sequence of **3 commands**:
- Declaring and assigning a **variable**: `int size = 5;`
- Calculating and **printing** an **expression**: `System.out.println("Size = " + size);`
- Calculating and **printing** an **expression**: `System.out.println("Area = " + size * size);`

The result (output) from the above program is as follows:
```
Size = 5
Area = 25
```

We **shall explain in detail how to write programs in Java**, why we need to define a **class** and why we need to define a **method** `main()` a bit later. 

Now, assume that the Java language requires all the above code in order to execute a sequence of commands.

In order to write commands, we should know **the syntax and the semantics of the language** which we are working with, in our case – **Java**. 

Therefore, we are going to get familiar with the syntax and the semantics of the language Java, and with programming generally, by learning step by step code writing from the simpler to the more complex programming constructions.
[/slide]

[slide]
# Algorithms
Computer programs usually execute some algorithm. 

**Algorithms** are a **sequence of steps**, necessary for the completion of a certain task and for gaining some expected result, something like a "recipe".

For example, if we fry eggs, we follow some recipe (an algorithm): 
- warm up the oil in a pan
- break the eggs inside it
- wait for them to fry
- move them away from the stove

Similarly, in programming **the computer programs execute algorithms**: a sequence of commands, necessary for the completion of a certain task. 

For example, to arrange a sequence of numbers in an ascending order, an algorithm is needed, e.g. find the smallest number and print it, then find the smallest number among the rest of the numbers and print it, and this is repeated until there are no more numbers left.

For convenience when creating programs, for writing programming code, for execution of programs and other operations related to programming, we need a **development environment**, for example IntelliJ IDEA.
[/slide]

[slide]
# Console-Based Java Program – Example
Let's look at a simple program that reads from the user some amount of money in U.S. Dollars (USD) - an integer, converts it into Euro (EUR) by dividing it by the Euro's rate and prints the obtained result. 

This is a program of 3 consecutive commands:
```java 
import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    
    Scanner scanner = new Scanner(System.in);
    int dollars = scanner.nextInt();
    double euro = dollars * 0.883795087;
    System.out.print("Euro: " + euro);
  }
}
```
[/slide]