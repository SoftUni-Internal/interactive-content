# Homework

[slide hideTitle]
# Problem: Guess the Password
[code-task title="Guess the Password" taskId="pb-java-Conditional-Statements-guess-the-password" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to check whether we have entered the right password or not:

  * Read the input
  * Print **"Welcome"** if the input password is **"s3cr3t!"**
  * Print **"Wrong password!"** in all other cases 

## Examples
| **Input** | **Output** |
| --- | --- |
| s3cr3t! | Welcome |
| qwerty | Wrong password! |


[/task-description]
[tests]
[test open]
[input]
s3cr3t!
[/input]
[output]
Welcome
[/output]
[/test]
[test open]
[input]
qwerty
[/input]
[output]
Wrong password!
[/output]
[/test]
[test]
[input]
s3cr3t!
[/input]
[output]
Welcome
[/output]
[/test]
[test]
[input]
wrong
[/input]
[output]
Wrong password!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Boiling Water

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-38-problem-boiling-water-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Boiling Water" taskId="pb-java-Conditional-Statements-Boiling-water" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which checks whether the water in a pot is boiling: 

  * Read a floating-point number: the water **temperature** (in °C)
  * Print out **"The water is boiling"** if the number **> 100**
  * Print out **"The water is not hot enough"** in all other cases

  
## Examples
| **Input** | **Output** |
| --- | --- |
| 104.8 | The water is boiling |
| 29 | The water is not hot enough |

[/task-description]
[tests]
[test open]
[input]
104.8
[/input]
[output]
The water is boiling
[/output]
[/test]
[test open]
[input]
29
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[test]
[input]
105
[/input]
[output]
The water is boiling
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Speed Info
[code-task title="Speed Info" taskId="pb-java-Conditional-Statements-Speed-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a piece of code that checks wheter an object is moving fast or slow according to its speed:

  * Read the **speed** (a floating-point number)
  * Print **"Slow"** if the speed is **<= 30**
  * Print **"Fast"** if the speed is **> 30**


## Examples
| **Input** | **Output** |
| --- | --- |
| 30 | Slow |
| 60 | Fast |


[/task-description]
[tests]
[test open]
[input]
30
[/input]
[output]
Slow
[/output]
[/test]
[test open]
[input]
60
[/input]
[output]
Fast
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
Slow
[/output]
[/test]
[test]
[input]
43
[/input]
[output]
Fast
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Area of Figures

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-42-problem-area-of-figures-and-solution -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Area of Figures" taskId="pb-java-Conditional-Statements-Area-of-Figures" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to calculate the area of some different figures:
  * Reads a string: the figure **type**
  * Checks if the figure is a **square**, a **rectangle** or a **circle**
  * Accepts one number for a square or a circle or two numbers for a rectangle
    * numbers will be floating-point
  * Prints out the calculated area **formatted** to the second digit after the decimal point
  * For unknown figures print out **"Unknown figure"**

## Examples

| **Input** | **Output** |
| --- | --- |
| square | 25.00 |
| 5 |  |

| **Input** | **Output** |
| --- | --- |
| rectangle | 30.00 |
| 3 |  |
| 10 |  |

| **Input** | **Output** |
| --- | --- |
| trapezoid | Unknown figure |

| **Input** | **Output** |
| --- | --- |
| circle | 19.63 |
| 2.5 | |
[/task-description]
[tests]
[test open]
[input]
square
5
[/input]
[output]
25.00
[/output]
[/test]
[test open]
[input]
rectangle
3
10
[/input]
[output]
30.00
[/output]
[/test]
[test open]
[input]
trapezoid
[/input]
[output]
Unknown figure
[/output]
[/test]
[test open]
[input]
circle
2.5
[/input]
[output]
19.63
[/output]
[/test]
[test]
[input]
square
6
[/input]
[output]
36.00
[/output]
[/test]
[test]
[input]
rectangle
5
10
[/input]
[output]
50.00
[/output]
[/test]
[test]
[input]
circle
3.5
[/input]
[output]
38.48
[/output]
[/test]
[test]
[input]
figure
[/input]
[output]
Unknown figure
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Tickets
[code-task title="Tickets" taskId="pb-java-Conditional-Statements-Tickets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to **calculate** the price of a ticket based on the following:

  * Read the ticket type: either **student** or **regular**
  * Print the **price** in the following format "$\{**price**\}":
    * the price should be **formatted** to the 2nd digit after the decimal point
  * Student ticket price: **1.00**
  * Regular ticket price: **1.60**
  * For any other input print out: **"Invalid ticket type!"**
  
## Example
| **Input** | **Output** |
| --- | --- |
| student | $1.00 |

[/task-description]
[tests]
[test open]
[input]
student
[/input]
[output]
$1.00
[/output]
[/test]
[test open]
[input]
regular
[/input]
[output]
$1.60
[/output]
[/test]
[test open]
[input]
discount
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[test]
[input]
student
[/input]
[output]
$1.00
[/output]
[/test]
[test]
[input]
regular
[/input]
[output]
$1.60
[/output]
[/test]
[test]
[input]
ticket
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Coffee Shop

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-46-problem-coffee-shop-and-solution  -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Coffee Shop" taskId="pb-java-Conditional-Statements-Coffee-Shop" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to calculate the price for a particular drink in a coffee shop:

  * The first line of input will be either **"coffee"** or **"tea"**
  * The second: either **"sugar"** or **"no"**
  * Print the price in the following format: "**Final price:** $\{**price**\}"
    * the price should be **formatted** to the 2nd digit after the decimal point
  
Prices:

  * Coffee price: **1.00**
  * Tea price: **0.60**
  * Sugar price: **0.40**

## Examples
| **Input** | **Output** |
| --- | --- |
| coffee | Final price: $1.40 |
| sugar |  |

| **Input** | **Output** |
| --- | --- |
| tea | Final price: $0.60 |
| no |  |

[/task-description]
[tests]
[test open]
[input]
coffee
sugar
[/input]
[output]
Final price: $1.40
[/output]
[/test]
[test open]
[input]
tea
no
[/input]
[output]
Final price: $0.60
[/output]
[/test]
[test]
[input]
coffee
sugar
[/input]
[output]
Final price: $1.40
[/output]
[/test]
[test]
[input]
coffee
no
[/input]
[output]
Final price: $1.00
[/output]
[/test]
[test]
[input]
tea
sugar
[/input]
[output]
Final price: $1.00
[/output]
[/test]
[test]
[input]
tea
no
[/input]
[output]
Final price: $0.60
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Valid Triangle
[code-task title="Valid Triangle" taskId="pb-java-Conditional-Statements-Valid-triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to check if a triangle could exist judging by the input:

  * Read 3 integers: the **sides of a triangle**
  * Check if each side is less than the sum of the other 2
    * prints **"Valid Triangle"** if the above condition is met
    * prints **"Invalid Triangle"** otherwise

    
## Example
| **Input** | **Output** |
| --- | --- |
| 3 | Valid Triangle |
| 4 |  |
| 5 |  |

[/task-description]
[tests]
[test open]
[input]
3
4
5
[/input]
[output]
Valid Triangle
[/output]
[/test]
[test open]
[input]
10
16
6
[/input]
[output]
Invalid Triangle
[/output]
[/test]
[test]
[input]
6
8
10
[/input]
[output]
Valid Triangle
[/output]
[/test]
[test]
[input]
5
8
3
[/input]
[output]
Invalid Triangle
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Harvest
[code-task title="Harvest" taskId="pb-java-Conditional-Statements-Harvest" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

The **Happy Wine Brothers Company** has asked you to create a simple program to calculate whether they will be able to reach their wine production goals in one of their vineyards.

**This vineyard is responsible for 40% of the total wine production.**

Let us assume that 1 square meter of land yields **Y kilos of grapes**. This value will be provided as input.

To produce **1 liter** we need **2.5kg of grapes**.

The company has a goal for the number of liters they need to produce for sale. You will also receive this as input.

Create a program that calculates how much wine can be produced and whether this quantity is enough for the company to reach its production goal.

If the produced amount is sufficient to meet the goal, the remaining wine is distributed among the workers at the vineyard.

## Input
You will receive the following as input from the console:
- **The size of the vineyard** in square meters - an integer in range \[10 … 5000\]
- **The yield per sq. m** - a floating-point number in range \[0.00 … 10.00\]
- **The production goal in liters** - an integer in range \[10 … 600\]
    - Remember that this particular vineyard is responsible for only 40% of the total production
- **Number of workers** - an integer in range \[1 … 20\]

## Output
Print one of the following output templates to the console, depending on the result:
-  If the produced wine amount is less than the goal:
    - "**It will be a tough winter!** \{**amount of wine needed**\} **liters of wine needed to reach the goal.**"
        - the result must be **rounded down** to the nearest integer
- If the produced wine amount is more than or equal to the production goal:
    - "**Good harvest this year! Total wine:** \{**Total wine**\} **liters.**"
        - the result must be **rounded down** to the nearest integer
    -  "\{**remaining wine**\} **liters left** **->** \{**wine for 1 worker**\} **liters per person.**"
        - The remaining wine amount and wine per worker must be **rounded up** to the nearest integer

## Example
| **Input** | **Output** |
| --- | --- |
| 650 | Good harvest this year! Total wine: 208 liters. |
| 2 | 33 liters left -> 11 liters per person. |
| 175 | |
| 3 | |


[hints]
[hint]
Calculate the total yield in kilograms.
Total Yield in kg: 650 \* 2 = 1300 
[/hint]
[hint]
Determine the total wine produced and check if the goal was reached.
Then print the correct output.
Wine Produced by this vineyard = (40% \* 1300) / 2.5 = 208
208 > 175 - the goal was reached 
208 \- 175 = 33 liters remain \-> each worker receives 11 liters
[/hint]
[/hints]

## Example
| **Input** | **Output** |
| --- |  --- |
| 1020 | It will be a tough winter! 180 liters of wine needed to reach the goal.|
| 1.5 |  |
| 425 | |
| 4 | |

[/task-description]
[tests]
[test open]
[input]
650
2
175
3
[/input]
[output]
Good harvest this year! Total wine: 208 liters.
33 liters left -> 11 liters per person.
[/output]
[/test]
[test open]
[input]
1020
1.5
425
4
[/input]
[output]
It will be a tough winter! 180 liters of wine needed to reach the goal.
[/output]
[/test]
[test]
[input]
525
1.75
300
2
[/input]
[output]
It will be a tough winter! 153 liters of wine needed to reach the goal.
[/output]
[/test]
[test]
[input]
950
3
125
7
[/input]
[output]
Good harvest this year! Total wine: 456 liters.
331 liters left -> 48 liters per person.
[/output]
[/test]
[test]
[input]
2450
3.5
560
4
[/input]
[output]
Good harvest this year! Total wine: 1372 liters.
812 liters left -> 203 liters per person.
[/output]
[/test]
[test]
[input]
3000
0.5
333
10
[/input]
[output]
It will be a tough winter! 93 liters of wine needed to reach the goal.
[/output]
[/test]
[test]
[input]
320
0.00
600
5
[/input]
[output]
It will be a tough winter! 600 liters of wine needed to reach the goal.
[/output]
[/test]
[test]
[input]
750
2.5
300
5
[/input]
[output]
Good harvest this year! Total wine: 300 liters.
0 liters left -> 0 liters per person.
[/output]
[/test]
[test]
[input]
5000
5.5
245
20
[/input]
[output]
Good harvest this year! Total wine: 4400 liters.
4155 liters left -> 208 liters per person.
[/output]
[/test]
[test]
[input]
150
2.1
130
9
[/input]
[output]
It will be a tough winter! 79 liters of wine needed to reach the goal.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]






[slide hideTitle]
# Problem: Time + 15 Minutes
[code-task title="Time + 15 Minutes" taskId="pb-java-Conditional-Statements-time-15minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that receives two integers representing an exact time in the format: **"\{hours\}:\{minutes\}"** and prints out what the time will be after 15 minutes.

## Input
The input consists of **two** lines:
- The hours - integer in range \[0...23\]
- The minutes - integer in range \[0...59\]

## Output
Print the result in the following format: "\{hours\}:\{minutes\}".
- The hours should be formatted **without a leading zero**
- The minutes should be formatted **with a leading zero**

## Example
| **Input** | **Output** |
| --- | --- |
| 11 | 11:23|
| 08 | |

| **Input** | **Output** |
| --- | --- |
| 1 | 2:01 | 
| 46 | |

[/task-description]
[tests]
[test open]
[input]
11
08
[/input]
[output]
11:23
[/output]
[/test]
[test open]
[input]
1
46
[/input]
[output]
2:01
[/output]
[/test]
[test]
[input]
23
59
[/input]
[output]
0:14
[/output]
[/test]
[test]
[input]
11
08
[/input]
[output]
11:23
[/output]
[/test]
[test]
[input]
12
49
[/input]
[output]
13:04
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0:15
[/output]
[/test]
[test]
[input]
0
44
[/input]
[output]
0:59
[/output]
[/test]
[test]
[input]
0
45
[/input]
[output]
1:00
[/output]
[/test]
[test]
[input]
0
48
[/input]
[output]
1:03
[/output]
[/test]
[test]
[input]
0
59
[/input]
[output]
1:14
[/output]
[/test]
[test]
[input]
8
30
[/input]
[output]
8:45
[/output]
[/test]
[test]
[input]
12
35
[/input]
[output]
12:50
[/output]
[/test]
[test]
[input]
12
45
[/input]
[output]
13:00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Day of Week
[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a program that reads an integer \[1...7\] from the console and prints out **the corresponding word for the day of the week** or "**Error**" if the number is **invalid**.

## Example

| **Input** | **Output** |
| --- |  --- |
| 2 | Tuesday |
| -1 | Error |

[/task-description]
[tests]
[test open]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
-1
[/input]
[output]
Error
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
Wednesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Error
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Animal Type
[code-task title="Animal Type" taskId="pb-java-Conditional-Statements-Animal-Type" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a program that prints out the **class** of an animal.
There are three possible output types: **mammal**, **reptile** and **unknown**


## Input / Output
The input may hold the following values: 
- mammals: **dog** 
- reptiles: **crocodile**, **tortoise**, **snake** 
- anything else that may come as input should produce **unknown** as output

- **dog -> mammal**
- **crocodile, tortoise, snake -> reptile**
- **anything else -> unknown**

## Example

| **Input** | **Output** |
| --- | --- |
| dog | mammal |
| snake | reptile |
| cat | unknown |

[/task-description]
[tests]
[test open]
[input]
dog
[/input]
[output]
mammal
[/output]
[/test]
[test open]
[input]
snake
[/input]
[output]
reptile
[/output]
[/test]
[test open]
[input]
cat
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
crocodile
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
tortoise
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
snake
[/input]
[output]
reptile
[/output]
[/test]
[test]
[input]
cat
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem with Solution: Pets

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-47-problem-pets-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Pets" taskId="pb-java-Conditional-Statements-pets" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Your friend has 3 pets. 

She would like to go on a trip and needs you to help her calculate whether she currently has enough food to leave to her pets so that they will stay fed during her time away.

## Input
Read **five** lines from the console:
- **number of days** - an integer in range \[1 ... 5000\]
- **left food in kilograms** - an integer in range \[0 ... 100000\]
- **food for the dog per day in kilograms** - a double in range \[0.00 ... 100.00\]
- **food for the cat per day in kilograms** - a double in range \[0.00 ... 100.00\]
- **food for the turtle per day in grams** - a double in range \[0.00 ... 10000.00\]

## Output
Print out a **single** line:
- If the food **IS enough**:
  - "\{**kilograms remain**\} **kilos of food left.**" 
  
The result should be **rounded down to the nearest integer**.
- If the left food **IS NOT enough**:
  - "\{**kilograms needed**\} **more kilos of food are needed.**"
  
The result should be **rounded up to the nearest integer**.

## Examples
| **Input**  | **Output** |
| --- | --- |
| 2 | 3 kilos of food left. |
| 10 | |
| 1 | |
| 1 | |
| 1200 | |


## Example
| **Input**  | **Output** |
| --- | --- |
| 5 | 7 more kilos of food are needed. |
| 10 | |
| 2.1 | |
| 0.8 | |
| 321 | |


[/task-description]
[tests]
[test open]
[input]
2
10
1
1
1200
[/input]
[output]
3 kilos of food left.
[/output]
[/test]
[test open]
[input]
5
10
2.1
0.8
321
[/input]
[output]
7 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
2
8
1.2
0.8
342
[/input]
[output]
3 kilos of food left.
[/output]
[/test]
[test]
[input]
4
8
3.3
2.3
1345
[/input]
[output]
20 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
1
50
25
24
1000
[/input]
[output]
0 kilos of food left.
[/output]
[/test]
[test]
[input]
14
20
2.5
1.5
999
[/input]
[output]
50 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
49
197
100
100
0
[/input]
[output]
9603 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
86
124
0
0
0
[/input]
[output]
124 kilos of food left.
[/output]
[/test]
[test]
[input]
512
2562
2
2
3405
[/input]
[output]
1230 more kilos of food are needed.
[/output]
[/test]
[test]
[input]
987
2345
1.1
0.5
1
[/input]
[output]
764 kilos of food left.
[/output]
[/test]
[test]
[input]
5000
100000
2.5
2.01
10
[/input]
[output]
77400 kilos of food left.
[/output]
[/test]
[test]
[input]
10
319
1
1
1
[/input]
[output]
298 kilos of food left.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Pipes In Pool
[code-task title="Pipes In Pool" taskId="pb-java-Conditional-Statements-pipes-in-pool" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
A pool with a **volume of V** is filled by **two pipes**.

Each pipe has a maximal transfer volume per hour

A worker turns on both pipes **at the same time** and leaves them running for **N hours**. 

Create a program that calculates the water level in the pool **at the moment the worker comes back**.

## Input
**Four** lines of input:
- **V** - **The volume of the pool in liters** - integer in range \[1 ... 10000\]
- **P1** - **flow of the first pipe per hour** - integer in range \[1 ... 5000\]
- **P2** - **flow of the second pipe per hour** - integer in range \[1 ... 5000\]
- **H** - **hours the worker is away** - float-pointing number in range \[1.0 ... 24.00\]

## Output
Print out **one of the following outcomes**:
- How full the pool is and the percentage of water each pipe transferred to the pool in the process
  - "**The pool is** \**{percentage of volume**\}% **full.** **Pipe 1:** \{**transferred percentage**\}**%.** **Pipe 2:** \{**transferred percentage**\}**%.**"
  - 
- If the pool is overflowing – the volume of unnecessary water transferred
  - "**For** \{**amount of time**\} **hours the pool overflows with** \{**liters of unnecessary water transferred**\} **liters.**"
- All numbers in the output should be formatted up to the 2nd digit after the decimal point

## Example One
| **Input** | **Output** |
| --- | --- |
| 1000 | The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%. |
| 100 | |
| 120 | |
| 3 | |

## Example Two
| **Input** | **Output** |
| --- | --- |
| 100 | For 2.50 hours the pool overflows with 400.00 liters. |
| 100 | |
| 100 | |
| 2.5 | |

[hints]
[hint]
Calculate the capacity for each pipe.
For 3 hours: The first pipe fills up 300 liters
The second pipe fills up 360 liters
In total – 660 liters < 1000 lliters => 66% are filled up
[/hint]
[hint]
Check if the total output from both pipes is enough to fill the pool.
Then print the correct output.
The first pipe has transferred 45% (300 of 660 liters).
The second pipe has transferred 54% (360 of 660 liters).
[/hint]

[/hints]


[/task-description]
[tests]
[test open]
[input]
1000
100
120
3
[/input]
[output]
The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test open]
[input]
100
100
100
2.5
[/input]
[output]
For 2.50 hours the pool overflows with 400.00 liters.
[/output]
[/test]
[test]
[input]
12345
123
123
10
[/input]
[output]
The pool is 19.93% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
8685
3
3
100
[/input]
[output]
The pool is 6.91% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
3942
12
32
5
[/input]
[output]
The pool is 5.58% full. Pipe 1: 27.27%. Pipe 2: 72.73%.
[/output]
[/test]
[test]
[input]
929
123
321
12
[/input]
[output]
For 12.00 hours the pool overflows with 4399.00 liters.
[/output]
[/test]
[test]
[input]
10000
5000
5000
24
[/input]
[output]
For 24.00 hours the pool overflows with 230000.00 liters.
[/output]
[/test]
[test]
[input]
2000
100
120
5.4
[/input]
[output]
The pool is 59.40% full. Pipe 1: 45.45%. Pipe 2: 54.55%.
[/output]
[/test]
[test]
[input]
1258
321
333
7.7
[/input]
[output]
For 7.70 hours the pool overflows with 3777.80 liters.
[/output]
[/test]
[test]
[input]
5946
1000
1
5
[/input]
[output]
The pool is 84.17% full. Pipe 1: 99.90%. Pipe 2: 0.10%.
[/output]
[/test]
[test]
[input]
7869
1
12
23.99
[/input]
[output]
The pool is 3.96% full. Pipe 1: 7.69%. Pipe 2: 92.31%.
[/output]
[/test]
[test]
[input]
2
2
1
1
[/input]
[output]
For 1.00 hours the pool overflows with 1.00 liters.
[/output]
[/test]
[test]
[input]
2
1
1
0.5
[/input]
[output]
The pool is 50.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
2222
1111
1111
1
[/input]
[output]
The pool is 100.00% full. Pipe 1: 50.00%. Pipe 2: 50.00%.
[/output]
[/test]
[test]
[input]
4501
12
10
21.93
[/input]
[output]
The pool is 10.72% full. Pipe 1: 54.55%. Pipe 2: 45.45%.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

