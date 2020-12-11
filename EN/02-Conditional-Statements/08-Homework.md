# Homework

[slide]
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
Write a program to check a password:

  * Read a string: the password **guess**.
  * Print **"Welcome"** if the password guess is **"s3cr3t!"**.
  * Print **"Wrong password!"** in all other cases .

## Example:
| **Input** | **Output** |
| --- | --- |
| s3cr3t! | Welcome |
| | |

| **Input** | **Output** |
| --- | --- |
| qwerty | Wrong password! |
| | |

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
random password
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

[slide]
# Problem: Boiling Water
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
Write a program, which checks for hot water: 

  * Read a floating-point number: the water **temperature** (in °C).
  * Print **"The water is boiling"** if the number **> 100**.
  * Prints **"The water is not hot enough"** in all other cases.

  
## Example
| **Input** | **Output** |
| --- | --- |
| 104.8 | The water is boiling |
| | |

| **Input** | **Output** |
| --- | --- |
| 29 | The water is not hot enough |
| | |

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

[slide]
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
Write a program to check for fast / slow speed: 

  * Read the **speed** (a floating-point number).
  * Print **"Slow"** if the speed **<= 30**.
  * Print **"Fast"** if the speed **> 30**.


## Example
| **Input** | **Output** |
| --- | --- |
| 30 | Slow |
| | | 

| **Input** | **Output** |
| --- | --- |
| 60 | Fast |
| | | 

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

[slide]
# Problem: Area of Figures
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
Write a program to calculate the area of different figures:
  * Reads a string: the figure **type**.
  * Checks if the entered figure is **square**, **rectangle** or **circle**.
  * Reads a number for square and circle or two numbers for rectangle.
    * Numbers will be floating-point.
  * Prints the calculated area **formatted** to the second digit after the decimal point.
  * For unknown figure print **"Unknown figure"**.

## Examples:

| **Input** | **Output** |
| --- | --- |
| square | 25.00 |
| 5 |  |
| | |

| **Input** | **Output** |
| --- | --- |
| rectangle | 30.00 |
| 3 |  |
| 10 |  |
| | | 

| **Input** | **Output** |
| --- | --- |
| trapezoid | Unknown figure |
| | | 

| **Input** | **Output** |
| --- | --- |
| circle | 19.63 |
| 2.5 | |
| | | 
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

[slide]
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
Write a program to **calculate** a ticket price:

  * Read a ticket type: either **student** or **regular**.
  * Print the **price** in the following format "$\{price\}":
    * The price should be **formatted** to 2nd digit after the decimal point.
  * Student ticket price: **1.00**.
  * Regular ticket price: **1.60**.
  * For invalid type print **"Invalid ticket type!"**.
  
## Example
| **Input** | **Output** |
| --- | --- |
| student | $1.00 |
| | | 

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

[slide]
# Problem: Coffee Shop
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
Write a program to calculate the drink price in a coffee shop:

  * Read a drink: either **"coffee"** or **"tea"**.
  * Read an extra: either **"sugar"** or **"no"**.
  * Print the price in format `"Final price: ${price}"`.
    * The price should be **formatted** to 2nd digit after the decimal point.
  
Prices:

  * Coffee price: **1.00**
  * Tea price: **0.60**
  * Sugar price: **0.40**

## Example
| **Input** | **Output** |
| --- | --- |
| coffee | Final price: $1.40 |
| sugar |  |
| | |

## Example
| **Input** | **Output** |
| --- | --- |
| tea | Final price: $0.60 |
| no |  |
| | |

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

[slide]
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
Write a program to check if a triangle is valid by its sizes:

  * Read 3 integers: the **sides of a triangle**.
  * Checks if each side is less than the sum of the others 2.
    * Prints **"Valid Triangle"** if the above condition is met.
    * Prints **"Invalid Triangle"** otherwise.

    
## Example:
| **Input** | **Output** |
| --- | --- |
| 3 | Valid Triangle |
| 4 |  |
| 5 |  |
| | |

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
Invalid  Triangle
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


[slide]
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
40 % of the wine-making crop is allocated from a vineyard of X square meters. 

From 1 square meter vineyard are earn **Y kilos of grapes**. 

For 1 liter of wine are needed **2.5 kg grapes**. 

The desired amount of wine for sale is **Z liters**. 

Write a program that calculates how much wine can be produced and whether this quantity is enough. 
- If sufficient, the remainder is divided equally between the workers of the vineyard.

## Input
The entrance is read from the console and consists of exactly 4 rows:
- **X sq. m is the vineyard** - integer in range \[10 … 5000\]
- **Y grapes for one sq. m** - floating-point number in range \[0.00 … 10.00\]
- **Z need liters of wine** - integer in range \[10 … 600\]
- **Number of workers** - integer in range \[1 … 20\]

## Output
The following should be printed on the console: 
-  If the wine produced is less than necessary:
    - "It will be a tough winter! More \{unattainable wine\} liters wine needed."
        - The result must be rounded to a lower integer.
- If the wine produced is more than or equal to necessary:
    - "Good harvest this year! Total wine: \{Total wine\} liters."
        - The result must be rounded to a lower integer.
    -  "\{remaining wine\} liters left -> \{wine for 1 worker\} liters per person."
        - Both results must be rounded to the higher integer

## Example
| **Input** | **Output** |
| --- | --- |
| 650 | Good harvest this year! Total wine: 208 liters. |
| 2 | 33 liters left -> 11 liters per person. |
| 175 | |
| 3 | |
| | |

### Comments
- Total Grapes: 650 \* 2 = 1300
- Wine = 40% \* 1300/2.5 = 208
- 208 > 175 
- 208 \- 175 = 33 liters remain \-> 11 liters per person

## Example
| **Input** | **Output** |
| --- |  --- |
| 1020 | It will be a tough winter! More 180 liters wine needed.|
| 1.5 | |
| 425 | |
| 4 | |
| | |

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
It will be a tough winter! More 180 liters wine needed.
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
It will be a tough winter! More 153 liters wine needed.
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
It will be a tough winter! More 93 liters wine needed.
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
It will be a tough winter! More 600 liters wine needed.
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
It will be a tough winter! More 79 liters wine needed.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide]
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
Write a program that reads from the console an **hour** and **minutes** from 24-hour day, and calculates what will be the time **after 15 minutes**. 

## Input
The input consists **two** lines:
- The hours - integer in range \[0...23\]
- The minutes - integer in range \[0...59\]

## Output
Print the result in the following format: "\{hours\}:\{minutes\}".
- The hours should be formatted **without leading zero**.
- The minutes should be formatted **with leading zero**.

## Example:
| **Input** | **Output** |
| --- | --- |
| 11 | 11:23|
| 08 | |
| | |

| **Input** | **Output** |
| --- | --- |
| 1 | 2:01 | 
| 46 | |
| | |
[/task-description]
[tests]
[test open]
[input]
1
46
[/input]
[output]
2:01
[/output]
[/test]
[test open]
[input]
0
01
[/input]
[output]
0:16
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


[slide]
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

Write a program that reads an integer from the console and prints **day of the week** (in English) in range \[1…7\] and "**Error**" if the number is **invalid**.

## Example

| **Input** | **Output** |
| --- |  --- |
| 2 | Tuesday |
| | |

| **Input** | **Output** |
| --- | --- |
| -1 | Error |
| | |
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
-2
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



[slide]
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

Write a program that prints the **type** of an animal according to its **name**.

## Input / Output
- **dog -> mammal**
- **crocodile, tortoise, snake -> reptile**
- **others -> unknown**

## Example:

| **Input** | **Output** |
| --- | | --- |
| dog | mammal |

| **Input** | **Output** |
| --- | --- |
| snake | reptile |

| **Input** | **Output** |
| --- | --- |
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


[slide]
# Problem: Pets
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
Write a **program** calculating the **amount of kilograms** food Martina\'s pets will eat for the time she is **on adventure** and **checks if the food is enough**. 

Each animal eats certain amount food per day.

## Input
Read **five** lines from the console:
- **number of days** - an integer in range \[1…5000\]
- **left food in kilograms** - an integer in range \[0…100000\]
- **food for the dog per day in kilograms** - double in range \[0.00…100.00\]
- **food for the cat per day in kilograms** - double in range \[0.00…100.00\]
- **food for the turtle per day in grams** - double in range \[0.00…10000.00\]

## Output
Print on the console a **single** line:
- If the left food **IS enough**:
  - "\{kilograms remain\} kilos of food left." The result should be **rounded to the nearest lower integer**.
- If the left food **IS NOT enough**:
  - "\{kilograms needed\} more kilos of food are needed.". The result should be **rounded to the nearest higher integer**.

## Example
| **Input**  | **Output** |
| --- | --- |
| 2 | 3 kilos of food left. |
| 10 | |
| 1 | |
| 1 | |
| 1200 | |

### Comments
- **Food needed for:**
- **dog** = 2 days \* 1 kg = **2** kg;
- **cat** = 2 days \* 1 kg = **2** kg;
- **turtle** = 2 days \* 1200 g = **2.4** kg;
- **Total amount of food** = 2 + 2 + 2.4 = **6.4** kg;
- **6.4 < 10** => 10 - 6.4 = **3.6** -> **3 kg food remain**

## Example
| **Input**  | **Output** |
| --- | --- |
| 5 | 7 more kilos of food are needed. |
| 10 | |
| 2.1 | |
| 0.8 | |
| 321 | |

### Comments
- **Needed food for:**
- **dog** = **10.5** kg;
- **cat** = 5 days \* 0.8 kg = **4** kg;
- **turtle** = 5 days \* 321 g = **1.605** kg;
- **Total amount of food** = 10.5 + 4 + 1.605 = **16.105** ;
- 16.105 – 10 = 6.105 -> 7 kg of food are needed

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



[slide]
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
A pool with **volume V** has **two pipes** that fill it. 

**Every pipe has certain flow** (liters water that going through a single pipe per hour). 

The worker turns on the pipes **at the same time** and goes out for **N hours**. 

Write a program that shows the condition of the pool **at the moment the worker comes back**.

## Input
**Four** lines of input:
- **V** - **The volume of the pool in liters** - integer in range \[1…10000\]
- **P1** - **flow of the first pipe per hour** - integer in range \[1…5000\]
- **P2** - **flow of the second pipe per hour** - integer in range \[1…5000\]
- **H** - **hours the worker is missing** - float-pointing number in range \[1.0…24.00\]

## Output
Print on the console **one of both possibilities**:
- How far the pool has been filled and which pipe how much contributed in percentage
  - "The pool is \{occupancy of the pool in percent\}% full. Pipe 1: \{percent water from the first pipe\}%. Pipe 2: \{percent water from the second pipe\}%."
- If the pool is overflowing – how many liters are overflowed for the given time
  - "For \{hours pipes are filling the pool\} hours the pool overflows with \{liters water overflow\} liters."
- All numbers in the output should be formatted to 2nd digit after the decimal point.

## Example
| **Input** | **Output** |
| --- | --- |
| 1000 | The pool is 66.00% full. Pipe 1: 45.45%. Pipe 2: 54.55%. |
| 100 | |
| 120 | |
| 3 | |

### Comments
- For 3 hours: The first pipe fills up 300 liters
- The second pipe fills up 360 liters
- In total – 660 l < 1000 l => 66% are filled up
- The first pipe is contributed with 45% (300 of 660 liters).
- The second pipe is contributed with 54% (360 of 660 liters).

## Example
| **Input** | **Output** |
| --- | --- |
| 100 | For 2.50 hours the pool overflows with 400.00 liters. |
| 100 | |
| 100 | |
| 2.5 | |

### Comments
- For 2.5 hours: The first pipe fills up 250 l 
- The second pipe fills up 250 l
- In total – 500 l > 100 l => 400 l are overflowed.

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


















[slide]
# Homework Results

[tasks-results/]

[/slide]