# Project Structure

[slide hideTitle]

# Splitting Code Into Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-3-4-5-6-Projects-structure-Methods-1-2-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We use **methods** to split code into functional blocks.

This improves code **readability** and allows for easier **debugging**.

Let us take a look at this **example**.

We can convert these nested loops:
```java
for (char move : moves){
  for (int r = 0; r < room.length; r++)
    for (int c = 0; c < room[r].length; c++)
      if (room[row][col] == 'b')
        …
}
```

Into a more readable combination of **methods**:
```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```

Methods let us easily **reuse code** without having to retype it in different places.

**Changing the method** once will change the behavior of the method anywhere it is called.

**Example:**

```java
BankAccount bankAcc = new BankAccount();
bankAcc.setId(1);
bankAcc.deposit(20);
System.out.printf("Account %d, balance %d",
		bankAcc.getId(),bankAcc.getBalance());
bankAcc.withdraw(10);
// ...
System.out.println(bankAcc.toString());
//Override .toString() to set a global printing format

```

We can override the `toString()` method in the **BankAccount** class to return the account details in String format. 

Although this change is done in one place, it will affect the code globally every time we call the method on any object of type **BankAccount**.



[/slide]

[slide hideTitle]

# Problemă cu Soluție: Rhombus of Stars

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/interactive-java-oop-basics-more-oop-concepts-7-rhombus-of-stars-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Rhombus of Stars" taskId="oop-basics-java-more-oop-concepts-lab-Rhombus-of-Stars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
# Description
Create a program that reads a **positive integer n** as input and prints a **rhombus** with size **n** to the console.

[image assetsSrc="more-oop-concepts-example(1).png" /]

## Hint

Create a `printRow()` method to easily reuse code.

# Examples

## Example 1

[image assetsSrc="java-oop-basics-rhombus1.png" /]


## Example 2

[image assetsSrc="java-oop-basics-rhombus2.png" /]

## Example 3

[image assetsSrc="java-oop-basics-rhombus3.png" /]


## Example 4

[image assetsSrc="java-oop-basics-rhombus4.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
[/input]
[output]
   \*
  \* \*
 \* \* \*
\* \* \* \*
 \* \* \*
  \* \*
   \*
[/output]
[/test]
[test]
[input]
48
[/input]
[output]
                                               \*
                                              \* \*
                                             \* \* \*
                                            \* \* \* \*
                                           \* \* \* \* \*
                                          \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                  \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                   \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                    \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                     \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                      \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                       \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                        \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                         \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                          \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                           \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                            \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                             \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                              \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                               \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                \* \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                 \* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                  \* \* \* \* \* \* \* \* \* \* \* \* \* \*
                                   \* \* \* \* \* \* \* \* \* \* \* \* \*
                                    \* \* \* \* \* \* \* \* \* \* \* \*
                                     \* \* \* \* \* \* \* \* \* \* \*
                                      \* \* \* \* \* \* \* \* \* \*
                                       \* \* \* \* \* \* \* \* \*
                                        \* \* \* \* \* \* \* \*
                                         \* \* \* \* \* \* \*
                                          \* \* \* \* \* \*
                                           \* \* \* \* \*
                                            \* \* \* \*
                                             \* \* \*
                                              \* \*
                                               \*
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
              \*
             \* \*
            \* \* \*
           \* \* \* \*
          \* \* \* \* \*
         \* \* \* \* \* \*
        \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
\* \* \* \* \* \* \* \* \* \* \* \* \* \* \*
 \* \* \* \* \* \* \* \* \* \* \* \* \* \*
  \* \* \* \* \* \* \* \* \* \* \* \* \*
   \* \* \* \* \* \* \* \* \* \* \* \*
    \* \* \* \* \* \* \* \* \* \* \*
     \* \* \* \* \* \* \* \* \* \*
      \* \* \* \* \* \* \* \* \*
       \* \* \* \* \* \* \* \*
        \* \* \* \* \* \* \*
         \* \* \* \* \* \*
          \* \* \* \* \*
           \* \* \* \*
            \* \* \*
             \* \*
              \*
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
\*
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
 \*
\* \*
 \*
[/output]
[/test]
[test open]
[input]
3
[/input]
[output]
  \*
 \* \*
\* \* \*
 \* \*
  \*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Splitting Code Into Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02-Java-OOP-Basics-More-OOP-Concepts-10-11-12-Splitting-code-into-classes-1 - Copy-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Just like methods, **classes should not "know" or do too much**.

**Example:**

```java
GodMode master = new GodMode();
int[] numbers = master.parseAny(input);
// ...
int[] numbers2 = master.copyAny(numbers);
master.printToConsole(master.getDate());
master.printToConsole(numbers);
```

The above is an example of a class that does too much.

We should break our code up logically into classes which:

- **Hides implementations**
- Allows us to **change the output destination**
- Helps us to **avoid repeating code**

**Example:** Same block of code before and after using classes.

**Before:**

```java
List<Integer> input = Arrays.stream(
	sc.nextLine().split(" "))
	  .map(Integer::parseInt)
	  .collect(Collectors.toList()); 
...
String result = input.stream()
		      .map(String::valueOf)
		      .collect(Collectors.joining(", "));
System.out.println(result);
```

**After:**

```java
ArrayParser parser = new ArrayParser();
OuputWriter printer = new OuputWriter();
int[] numbers = parser.integersParse(args);
int[] coordinates = parser.integerParse(args1);
printer.printToConsole(numbers);
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Point in Rectangle

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/interactive-java-oop-basics-more-oop-concepts-13-point-in-rectangle-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Point in Rectangle" taskId="oop-basics-java-more-oop-concepts-lab-Point-in-Rectangle" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a class **Point** and a class **Rectangle**.

The **Point** class should hold **coordinates X** and **Y**.

The **Rectangle** class should hold 2 **Points** – its **bottom left** and **top right** corners.

In the **Rectangle** class, you should implement a `contains(Point point)` method that returns **true** or **false**, based on **whether** the **Point** argument passed to the method is **inside** or **outside** of the **Rectangle** object.

Points **on the side** of a Square are considered **inside**.

## Input

- On the first line, read the coordinates of the bottom left and top right corner of the Rectangle in the format:

`<bottomLeftX>` `<bottomLeftY>` `<topRightX>` `<topRightY>`
     
- On the second line, read an integer **n** and on the next **n** lines, read the coordinates of points

## Output

- For each point, print out the result of the `Contains()` method


# Examples

## Example 1

| **Input** | **Output** |
| --- | --- |
| 0 0 3 3 | true |
| 5 | true |
| 0 0 | false |
| 0 1 | false |
| 4 4 | true |
| 5 3 |  |
| 1 2 |  |

## Example 2

| **Input** | **Output** |
| --- | --- |
| 2 -3 12 3 | true |
| 4 | true |
| 8 -1 | false |
| 11 3 | false |
| 1 1 |  |
| 2 4 |  |

## Example 3

| **Input** | **Output** |
| --- | --- |
| 5 8 12 15 | false |
| 6 | true |
| 0 0 | true |
| 5 8 | true |
| 12 15 | true |
| 8 15 | true |
| 7 15 |  |
| 8 12 |  |

[/task-description]
[code-upload allowedMemory="30" /] 
[tests]
[test open]
[input]
2 -3 12 3
4
8 -1
11 3
1 1
2 4
[/input]
[output]
true
true
false
false
[/output]
[/test]
[test open]
[input]
0 0 3 3
5
0 0
0 1
4 4
5 3
1 2
[/input]
[output]
true
true
false
false
true
[/output]
[/test]
[test open]
[input]
5 8 12 15
6
0 0
5 8
12 15
8 15
7 15
8 12
[/input]
[output]
false
true
true
true
true
true
[/output]
[/test]
[test]
[input]
2 -3 12 3
6
8 -1
11 3
1 1
2 4
1 1
2 4
1 1
2 4
[/input]
[output]
true
true
false
false
false
false
[/output]
[/test]
[test]
[input]
0 0 3 3
10
0 0
0 1
4 4
5 3
1 2
-1 5
0 2
3 0
4 3
1 2
3 3
[/input]
[output]
true
true
false
false
true
false
true
true
false
true
[/output]
[/test]
[test]
[input]
5 8 12 15
9
0 0
5 8
12 15
8 15
7 15
8 12
15 8
15 7
12 8
[/input]
[output]
false
true
true
true
true
true
false
false
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
