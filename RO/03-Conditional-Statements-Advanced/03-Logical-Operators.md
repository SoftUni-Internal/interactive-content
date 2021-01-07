# More Complex Conditions

[slide]
# Video

[vimeo-video startTimeInSeconds="2834" endTimeInSeconds="4109"]
[stream language="EN" videoId="341582556" default /]
[stream language="RO" videoId="388314290"  /]
[/vimeo-video]

[/slide]

[slide]
# More Complex Conditions
Let's take a look at how we can create more **complex logical conditions** in programming. 

We can use:
* logical **"AND"** (`&&`)
* logical **"OR"** (`||`)
* logical **negation** (`!`) 
* **brackets** (`()`).

# Logical "AND", "OR" and "NOT"
This is a short example that demonstrates the power of logical **"AND"**, logical **"OR"** and logical **"NOT"**:
```java
Scanner scanner = new Scanner(System.in);
String animal = scanner.nextLine();
int speed = Integer.parseInt(scanner.nextLine());

if ((animal == "horse" || animal == "donkey") && (speed > 40)) {
    System.out.println("Run fast");
} else if ((animal == "shark" || animal == "dolphin") && (speed > 45)) {
    System.out.println("Swim fast");
} else if (!(speed > 30 || animal == "turtle")) {
    System.out.println("Move slow");
}
```

We shall explain the logical **AND** (`&&`), the logical **OR** (`||`), and the logical **NOT** (`!`) in the next few sections, along with examples and exercises.
[/slide]

[slide]
# Logical AND
As we saw, in some tasks we have to make **many checks at once**. 

But what happens when in order to execute some code **more** conditions have to be executed and we **don't want** to make a **negation** (`else`) for each one of them? 

The option with nested `if` **blocks** is valid, but the code would look very unordered and for sure – **hard to read and maintain**.

The logical **"AND"** (operator `&&`) means a few conditions have to be **fulfilled simultaneously**. 

The following table of truthfulness is applicable:

| Operand1 | Operand2 | AND |
|---|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

# How Does the `&&` Operator Work?
The `&&` operator accepts **a couple of Boolean** (conditional) statements, which have a `true` or `false` value, and returns one bool statement as a result. 

Using it instead of a couple of nested `if` blocks, makes the code **more readable**, **ordered** and **easy** to maintain. 

But how does it **work**, when we put a **few** conditions one after another? 

As we saw above, the logical **"AND"** returns `true`, **only** when it accepts as **arguments statements** with value `true`. 

Respectively, when we have a **sequence** of arguments, the logical **"AND"** **checks** either until one of the arguments is **over**, or until it **meets** an argument with value `false`. 

# Example
```java live
boolean a = true;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a && b && c && d;
System.out.println(result);
```

The program will run in the **following** way: 
- **It starts** the check form `a`, **reads** it and accepts that it has a `true` value, after which it **checks** `b`. 
- After it has **accepted** that `a` and `b` return `true`, **it checks the next** argument. 
- It gets to `c` and sees that the variable has a `false` value. 
- After the program accepts that the argument `c` has a `false` value, it calculates the expression **before** `c`, **independent** of what the value of `d` is. 
- That is why the evaluation of `d` is being **skipped** and the whole expression is calculated as `false`.

# Example: Point in a Rectangle
Checks whether **`point {x, y}`** is placed **inside the rectangle {x1, y1} – {x2, y2}**. 

[image assetsSrc="03.Point-in-rectangle-01.png" /]

The input data is read from the console and consists of 6 lines: 
- the decimal numbers `x1`, `y1`, `x2`, `y2`, `x` and `y` (as it is guaranteed that `x1 < x2` and `y1 < y2`).

## Sample Input and Output
|Input|Output|
|-----|------|
|2|Inside|
|-3||
|12||
|3||
|8||
|-1||

## Solution
A point is internal for a given polygon, if the following four conditions are applied at the same time:
-  The point is placed to the right from the left side of the rectangle.
-  The point is placed to the left from the right side of the rectangle.
-  The point is placed downwards from the upper side of the rectangle.
-  The point is placed upwards from the down side of the rectangle.

```java live
double x1 = 2;
double y1 = -3;
double x2 = 12;
double y2 = 3;

double x = 8;
double y = -1;

if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    System.out.println("Inside");
} else {
    System.out.println("Outside");
}
```
[/slide]

[slide]
# Problem: Bonus Points
[code-task title="Bonus Points" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that applies bonus to given points
  * If points are between **0** and **3**, adds **5**
  * If points are between **4** and **6**, adds **15**
  * If points are between **7** and **9**, adds **20**
# Example
## Input
- 4
## Output
- 19
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
19
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Bonus Points
[code-task title="Bonus Points" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int points = Integer.parseInt(scanner.nextLine());
        if (points >= 0 && points <= 3) {
            points += 5;
        } else if (points >= 4 && points <= 6) {
            points += 15;
        } else if (points >= 7 && points <= 9) {
            points += 20;
        }
        
        System.out.println(points);
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program that applies bonus to given points
  * If points are between **0** and **3**, adds **5**
  * If points are between **4** and **6**, adds **15**
  * If points are between **7** and **9**, adds **20**
# Example
## Input
- 4
## Output
- 19
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
19
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Logical OR Operator
The logical **OR** (operator `||`) means that **at least one** among a few conditions is fulfilled. 

Similar to the operator `&&`, the logical **OR** accepts a few arguments of **bool** (conditional) type and returns `true` or `false`. 

We can easily guess that we **obtain** a value `true` every time when at least one of the arguments has a `true` value. 

| Operand1 | Operand2 | OR |
|---|---|---|---|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

At school the teacher says: "John or Peter should clean the board". To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it.

# How Does the `||` Operator Work?
We have already learned what the logical **OR** represents. But how is it actually being achieved? 

Just like with the logical **"AND"**, the program **checks** from left to right **the arguments** that are given. 

In order to obtain `true` from the expression, it is necessary for **just one** argument to have a `true` value. 

Respectively, the checking **continues** until an **argument** with **such** value is met or until the arguments **are over**.

Here is one **example** of the `||` operator in action:

```java live
boolean a = false;
boolean b = true;
boolean c = false;
boolean d = true;
boolean result = a || b || c || d;
System.out.println(result);
```

The programs **checks** `a`, accepts that it has a value `false` and continues. 

Reaching `b`, it understands that it has a `true` value and the whole **expression** is calculated as `true`, without having to check `c` or `d`, because their values **wouldn't change** the result of the expression.
[/slide]

[slide]
# Problem: Food or Drink
[code-task title="Food or Drink" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
  * Reads single line and print "***drink***", "***food***" or "***unknown***"
  * Foods: curry, noodles, sushi, spaghetti 
  * Drinks: tea, water, coffee
  * Everything else is unknown
# Example
## Input
- curry
## Output
- food
## Input
- flower
## Output
- unknown
[/task-description]
[tests]
[test]
[input]
curry
[/input]
[output]
food
[/output]
[/test]
[test]
[input]
tea
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
something
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide]
# Solution: Food or Drink
[code-task title="Food or Drink" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        if (input.equals("curry") || input.equals("noodles") ||
                input.equals("sushi") || input.equals("spaghetti")) {
            System.out.println("food");
        } else if (input.equals("tea") || input.equals("water") ||
                input.equals("coffee")) {
            System.out.println("drink");
        } else {
            System.out.println("unknown");
        }
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:
  * Reads single line and print "***drink***", "***food***" or "***unknown***"
  * Foods: curry, noodles, sushi, spaghetti 
  * Drinks: tea, water, coffee
  * Everything else is unknown
# Example
## Input
- curry
## Output
- food
## Input
- flower
## Output
- unknown
[/task-description]
[tests]
[test]
[input]
curry
[/input]
[output]
food
[/output]
[/test]
[test]
[input]
tea
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
something
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]


[slide]
# Logical NOT Operator
Logical negation (operator **!**) means a given condition is **not fulfilled**.

| a | !a |
|---|---|
| true | false |

The operator `!` accepts as an **argument** a bool variable and **returns** its value.

# Example: Invalid Number
A given **number is valid** if it is in the range **\[100 … 200\]** or it is **0**. Do a validation for an **invalid** number.

For example, `75` and `220` are **invalid**, but `150` is **valid**.

```java live
int num = 75;

boolean inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    System.out.println("invalid");
}
```
[/slide]

[slide]
# The Parenthesis  Operator
Like the rest of the operators in programming, the operators `&&` and `||` have a priority, as in the case `&&` is with higher priority than `||`. 

The operator `()` serves for **changing the priority of operators** and is being calculated first, just like in maths. 

Using parentheses also gives the code better readability and is considered a good practice.

Example of checking whether a variable belongs to certain ranges:
```java 
if (x < 0) || ((x >= 5) && (x <= 10)) || (x > 20) {
    // Commands
}
```
[/slide]