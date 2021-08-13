# Homework

[slide hideTitle]
# Problem: Fruit or Vegetable
[code-task title="Fruit or Vegetable" taskId="pb-java-Conditional-Statements-A-fruit-or-vegetable" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to check whether the input value represents a fruit or a vegetable:

* Read a single input line: an item from the veggie store
* Fruits: banana, apple, kiwi, cherry, lemon, grapes
* Vegetables: cucumber, pepper, carrot, onion
* Print: **"vegetable"**, **"fruit"** or **"unknown"**

## Example
| **Input** | **Output** |
| --- | --- |
| lemon | fruit |
| carrot | vegetable |

[/task-description]
[tests]
[test open]
[input]
lemon
[/input]
[output]
fruit
[/output]
[/test]
[test open]
[input]
carrot
[/input]
[output]
vegetable
[/output]
[/test]
[test]
[input]
grapes
[/input]
[output]
fruit
[/output]
[/test]
[test]
[input]
carrot
[/input]
[output]
vegetable
[/output]
[/test]
[test open]
[input]
pepper
[/input]
[output]
vegetable
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Day of Week

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-30-33-problem-solving-day-of-week-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Day of Week" taskId="pb-java-Conditional-Statements-A-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to print out the given day of the week as a word:

* Reads and integer **n**: the **day of the week** in range [1 ... 7]
* Prints the **name of the day** (as a word)
* Prints out **"Error"** if the number is not in the given range

## Examples
| **Input** | **Output** |
| --- | --- |
| 1 | Monday |
| 8 | Error |



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
8
[/input]
[output]
Error
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
10
[/input]
[output]
Error
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
3
[/input]
[output]
Wednesday
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
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel or Consonant
[code-task title="Vowel or Consonant" taskId="pb-java-Conditional-Statements-A-vowel-or-consonant" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to check whether a letter is a vowel or a consonant:

* Reads a **letter** from the English alphabet
* Prints out **"Vowel"** or **"Consonant"**

## Example
| **Input** | **Output** |
| --- | --- |
| a | Vowel |
| B | Consonant |

[hints]
[hint]
You can use an "if" statement and check if the letter is a vowel. If it is, print the correct output. However, if it is not, enter the "else" statement and print the appropriate output.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
a
[/input]
[output]
Vowel
[/output]
[/test]
[test open]
[input]
B
[/input]
[output]
Consonant
[/output]
[/test]
[test]
[input]
E
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
A
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
e
[/input]
[output]
Vowel
[/output]
[/test]
[test]
[input]
O
[/input]
[output]
Vowel
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Product of 3 Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-37-problem-product-of-three-numbers-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Product of 3 Numbers" taskId="pb-java-Conditional-Statements-A-product-of-3-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Calculate the final sign **positive**, **negative** or **zero** of the product of 3 numbers:

* Read **3 floating-point** numbers
* Print the **sign** of the product of the 3 numbers: **positive**, **negative** or **zero**
* Try to do this **without multiplying** the numbers

## Example
| **Input** | **Output** |
| --- | --- |
| 2 | negative |
| 3 |  |
| -1 |  |

| **Input** | **Output** |
| --- | --- |
| 2 | positive |
| 3 |  |
| 1 |  |

[/task-description]
[tests]
[test open]
[input]
-2
3
1
[/input]
[output]
negative
[/output]
[/test]
[test open]
[input]
2
3
1
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
-3
-4
5
[/input]
[output]
positive
[/output]
[/test]
[test]
[input]
1
2
0
[/input]
[output]
zero
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Sorted Numbers
[code-task title="Sorted Numbers" taskId="pb-java-Conditional-Statements-A-Sorted-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads 3 numbers from the console and checks if they are sorted.

* Read 3 real numbers
* Print **"Ascending"** if the numbers are in ascending order
* Print **"Descending"** if the numbers are in descending order
* Print **"Not sorted"** in any other case

## Example
| **Input** | **Output** |
| --- | --- |
| 1 | Ascending |
| 2 |  |
| 3 |  |

| **Input** | **Output** |
| --- | --- |
| 3 | Not sorted |
| 5 |  |
| 2 |  |


| **Input** | **Output** |
| --- | --- |
| 5 | Descending |
| 4 |  |
| 3 |  |

[/task-description]
[tests]
[test open]
[input]
1
2
3
[/input]
[output]
Ascending
[/output]
[/test]
[test open]
[input]
3
5
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test open]
[input]
5
4
3
[/input]
[output]
Descending
[/output]
[/test]
[test]
[input]
3
1
2
[/input]
[output]
Not sorted
[/output]
[/test]
[test]
[input]
3
2
1
[/input]
[output]
Descending
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Vacation Expenses

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-41-problem-vacation-expenses-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Vacation Expenses" taskId="pb-java-Conditional-Statements-A-Vacation-Expenses" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that calculates vacation expenses based on the following factors.

- Season
- Accommodation type
- Number of days

* Prints the total expenses, based on the price table bellow, formatted to the 2nd digit after the decimal point

|**Season**|**Hotel**|**Camping**|**Discount**|
|---|---|---|---|
|Spring|30|10|20%|
|Summer|50|30|0%|
|Autumn|20|15|30%|
|Winter|40|10|10%|

## Example
| **Input** | **Output** |
| --- | --- |
| Winter | 180.00 |
| Hotel |  |
| 5 |  |

| **Input** | **Output** |
| --- | --- |
| Summer |  90.00 |
| Camping |  |
| 3 |  |


[/task-description]
[tests]
[test open]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[test]
[input]
Winter
Camping
10
[/input]
[output]
90.00
[/output]
[/test]
[test]
[input]
Autumn
Camping
6
[/input]
[output]
63.00
[/output]
[/test]
[test]
[input]
Summer
Hotel
7
[/input]
[output]
350.00
[/output]
[/test]
[test]
[input]
Spring
Camping
8
[/input]
[output]
64.00
[/output]
[/test]
[test]
[input]
Summer
Hotel
9
[/input]
[output]
450.00
[/output]
[/test]
[test]
[input]
Autumn
Camping
10
[/input]
[output]
105.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Cinema
[code-task title="Cinema" taskId="pb-java-Conditional-Statements-A-Cinema" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Calculate the total **price** for all sold tickets to a movie screening in a cinema:

* Reads the **type of the movie**, the **rows** and the **seats per row** in the cinema
* Prints the **total price** for all seats **formatted** to the 2nd digit after the decimal point

|**Type**|**Price**|
|---|---|
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

## Example
| **Input** | **Output** |
| --- | --- |
|Premiere|1440.00|
|10||
|12|  |

| **Input** | **Output** |
| --- | --- |
|Normal|2047.50 |
|21||
|13| |

| **Input** | **Output** |
| --- | --- |
|Discount|1800.00|
|12||
|30| |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Premiere
10
12
[/input]
[output]
1440.00
[/output]
[/test]
[test open]
[input]
Normal
21
13
[/input]
[output]
2047.50
[/output]
[/test]
[test open]
[input]
Discount
12
30
[/input]
[output]
1800.00
[/output]
[/test]
[test]
[input]
Normal
88
44
[/input]
[output]
29040.00
[/output]
[/test]
[test]
[input]
Discount
43
15
[/input]
[output]
3225.00
[/output]
[/test]
[test]
[input]
Premiere
42
62
[/input]
[output]
31248.00
[/output]
[/test]
[test]
[input]
Discount
30
36
[/input]
[output]
5400.00
[/output]
[/test]
[test]
[input]
Premiere
94
17
[/input]
[output]
19176.00
[/output]
[/test]
[test]
[input]
Discount
34
7
[/input]
[output]
1190.00
[/output]
[/test]
[test]
[input]
Discount
34
93
[/input]
[output]
15810.00
[/output]
[/test]
[test]
[input]
Premiere
68
50
[/input]
[output]
40800.00
[/output]
[/test]
[test]
[input]
Normal
73
61
[/input]
[output]
33397.50
[/output]
[/test]
[test]
[input]
Normal
63
64
[/input]
[output]
30240.00
[/output]
[/test]
[test]
[input]
Normal
84
98
[/input]
[output]
61740.00
[/output]
[/test]
[test]
[input]
Normal
59
57
[/input]
[output]
25222.50
[/output]
[/test]
[test]
[input]
Premiere
52
35
[/input]
[output]
21840.00
[/output]
[/test]
[test]
[input]
Normal
36
75
[/input]
[output]
20250.00
[/output]
[/test]
[test]
[input]
Normal
65
68
[/input]
[output]
33150.00
[/output]
[/test]
[test]
[input]
Premiere
59
35
[/input]
[output]
24780.00
[/output]
[/test]
[test]
[input]
Discount
78
9
[/input]
[output]
3510.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Operations with Numbers
[code-task title="Operations with Numbers" taskId="pb-java-Conditional-Statements-A-operations-with-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to perform a calculation using a particular operator.

* Reads **two integers** and a **math operator** from the console
* The math operator could be: "+",  "-",  "/",  "%"  and  "*"
* The output should be in the following **format**: "\{N1\} \{operator\} \{N2\} = \{result\}"

## Example
| **Input** | **Output** |
| --- | --- |
| 12 | 12 + 10 = 22 |
| 10 |  |
| \+ |  |

[/task-description]
[tests]
[test open]
[input]
10
12
+
[/input]
[output]
10 + 12 = 22
[/output]
[/test]
[test]
[input]
12
10
\-
[/input]
[output]
12 \- 10 = 2
[/output]
[/test]
[test]
[input]
10
12
*
[/input]
[output]
10 * 12 = 120
[/output]
[/test]
[test]
[input]
6
2
/
[/input]
[output]
6 / 2 = 3
[/output]
[/test]
[test]
[input]
5
2
%
[/input]
[output]
5 % 2 = 1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: ATM
[code-task title="ATM" taskId="pb-java-Conditional-Statements-A-ATM" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that simulates an ATM:

* Reads: **balance**, **withdraw amount** and **limit**
* Print **"The withdraw was successful."** if the balance is sufficient
* Print **"The daily limit was exceeded."** if that is the case
* Print **"Insufficient availability."** if the balance is insufficient

## Example
  | **Input** | **Output** |
| --- | --- |
|420|The withdraw was successful. |
|20||
|25| |

 | **Input** | **Output** |
| --- | --- |
|10|The daily limit was exceeded.|
|50|Insufficient availability.|
|20|  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test open]
[input]
10
50
20
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
10
4565
345
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[test]
[input]
342
2
3
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[test]
[input]
10
50
20
[/input]
[output]
The daily limit was exceeded.
Insufficient availability.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Biggest of Five Numbers
[code-task title="Biggest of Five Numbers" taskId="pb-java-Conditional-Statements-A-Biggest-of-five-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to find the greatest of 5 numbers
* Reads **5 integers**
* Prints the **greatest** number

## Example
  | **Input** | **Output** |
| --- | --- |
| \-1|\-1|
|\-2||
|\-3||
|\-4||
|\-5|  |

  | **Input** | **Output** |
| --- | --- |
| 3|77|
|4||
|77||
|12||
|33|  |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
-1
-2
-3
-4
-5
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
5
-2
-3
9
-8
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
-1
4
3
-4
1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
4
2
5
43
1
[/input]
[output]
43
[/output]
[/test]
[test]
[input]
234234
2345
56756
67867
3453
[/input]
[output]
234234
[/output]
[/test]
[test]
[input]
3452
54756
6786
3453
4
[/input]
[output]
54756
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Personal Titles
[code-task title="Personal Titles" taskId="pb-java-Conditional-Statements-A-Personal-Titles" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

## Example: Personal Titles

Depending on someone's **age** (integer) and **gender** (**m** / **f**), print their personal title:
-  "Mr." - a man (gender "m") - 16 or older
-  "Master" - a boy (gender "m") - under 16 years old
-  "Ms." - a woman (gender "f") - 16 or older
-  "Miss" - a girl (gender "f") - under 16 years old

## Input
From the console:
- Age - floating-point number
- Gender - "**m**" or "**f**"

## Output
Print the expected Personal Title on a single line.

## Example

| **Input** | **Output** | 
| --- | --- |
| 25 | Ms. |
| f | |

| **Input** | **Output** | 
| --- |  --- |
| 13.5 | Master |
| m | |
[/task-description]
[tests]
[test open]
[input]
25
f
[/input]
[output]
Ms.
[/output]
[/test]
[test open]
[input]
13.5
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
12
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
17
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
11
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
19
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
30
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
[input]
14
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
4.5
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
16
m
[/input]
[output]
Mr.
[/output]
[/test]
[test]
[input]
16
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
[input]
15.9
m
[/input]
[output]
Master
[/output]
[/test]
[test]
[input]
15.9
f
[/input]
[output]
Miss
[/output]
[/test]
[test]
[input]
95.125
m
[/input]
[output]
Mr.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Fuel Tank
[code-task title="Fuel Tank" taskId="pb-java-Conditional-Statements-A-Fuel-tank" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Create a program that checks whether the tank of a vehicle needs refueling or not. 

## Input
The input consists of 2 lines:
- The type of fuel: "**Diesel**", "**Gasoline**" or "**Gas**"
- The fuel in the tank in liters

## Output
- If the fuel type is not one of the 3 options, print: "**Invalid fuel!**"
- If the current fuel level is >= 25 liters print:
    - "**You have enough** \{**type of fuel**\}."
    -  the type of fuel should be printed in lower case
- Otherwise print:
    - "**Fill your tank with** \{**type of fuel**\}!"
    - type of the fuel should be printed in lower case

## Example

| **Input** | **Output** |
| --- | --- |
| Diesel | Fill your tank with diesel! |
| 10 | |

| **Input** | **Output** |
| --- | --- |
| Gas | You have enough gas. |
| 25 | |

[/task-description]
[tests]
[test open]
[input]
Diesel
10
[/input]
[output]
Fill your tank with diesel!
[/output]
[/test]
[test open]
[input]
Gas
25
[/input]
[output]
You have enough gas.
[/output]
[/test]
[test]
[input]
Gasoline
40
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Kerosene
200
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[test]
[input]
Diesel
25
[/input]
[output]
You have enough diesel.
[/output]
[/test]
[test]
[input]
Gasoline
28
[/input]
[output]
You have enough gasoline.
[/output]
[/test]
[test]
[input]
Gas
20
[/input]
[output]
Fill your tank with gas!
[/output]
[/test]
[test]
[input]
Kerosene
20
[/input]
[output]
Invalid fuel!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Trade Commissions
[code-task title="Trade Commissions" taskId="pb-java-Conditional-Statements-A-Trade-Commisions" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

A real-estate company pays the following commissions to its employees according to the city they work in and the amount of sales:

| **Sales / City** | **London** | **New York** | **Sydney**|
| --- | --- | --- | --- | 
| \[0-500\] | 5% | 4.5% | 5.5% |
| \[501-1000\] | 7% | 7.5% | 8% | 
| \[1001-10000\] | 8% | 10% | 12% |
| > 10000| 12% | 13% | 14.5% |

Create a console program that reads the **name of a city**  as input and the **amount of sales** and calculates the value of the **commission**. 

## Input
Read two lines:
- City name - String
- Amount of sales - floating-point number

## Output
- Print out the final value of the commission
- The result should be **formatted to the second decimal point**
- If you receive an **invalid** city **or** an invalid amount of sales (negative number), print "**error**"

## Example
| **Input** | **Output** |  
| --- | --- |
| London | 120.00 | 
| 1500 | |  


| **Input** | **Output** | 
| --- | --- | 
| Moscow | error |
| -50 | |
[/task-description]
[tests]
[test open]
[input]
London
1500
[/input]
[output]
120.00
[/output]
[/test]
[test open]
[input]
Moscow
-50
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
Sydney
499.99
[/input]
[output]
27.50
[/output]
[/test]
[test]
[input]
New York
3874.50
[/input]
[output]
387.45
[/output]
[/test]
[test]
[input]
London
0.6
[/input]
[output]
0.03
[/output]
[/test]
[test]
[input]
London
501
[/input]
[output]
35.07
[/output]
[/test]
[test]
[input]
London
10005
[/input]
[output]
1200.60
[/output]
[/test]
[test]
[input]
New York
500
[/input]
[output]
22.50
[/output]
[/test]
[test]
[input]
New York
1000
[/input]
[output]
75.00
[/output]
[/test]
[test]
[input]
New York
9999.9999
[/input]
[output]
1000.00
[/output]
[/test]
[test]
[input]
New York
350824
[/input]
[output]
45607.12
[/output]
[/test]
[test]
[input]
Sydney
1.25
[/input]
[output]
0.07
[/output]
[/test]
[test]
[input]
Sydney
1000
[/input]
[output]
80.00
[/output]
[/test]
[test]
[input]
Sydney
8543.86
[/input]
[output]
1025.26
[/output]
[/test]
[test]
[input]
Sydney
10000.01
[/input]
[output]
1450.00
[/output]
[/test]
[test]
[input]
Madrid
1500
[/input]
[output]
error
[/output]
[/test]
[test]
[input]
Sydney
-20
[/input]
[output]
error
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Point on Rectangle Border
[code-task title="Point on Rectangle Border" taskId="pb-java-Conditional-Statements-A-Point-on-Rectangle-Border" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description
Create a program to check if a **point {x, y}** is **on** one of the sides of a rectangle **{x1, y1} - {x2, y2}**.  

## Input
The input consists of **6 lines: real numbers x1, y1, x2, y2, x and y** (considering that: **x1 < x2** and **y1 < y2**).

## Output
If the point lies on one of a rectangle's side:
- Print "**Border**"

If the point does NOT lie on a side:
- Print "**Inside / Outside**"

## Example
| **Input** | **Output** |
| --- | --- |
| 2 | Inside / Outside |
| -3 | |
| 12 | |
| 3 | |
| 8 | |
| -1 | | 

| **Input** | **Output** | 
|  --- | --- |
| 2 | Border|
| -3 | |
| 12 | |
| 3 | |
| 12 | |
| -1 | |


[hints]
[hint]
You can use one or more conditional **if** statements with logical operations. A point **{x, y}** lies on aside of a rectangle **{x1, y1} - {x2, y2}**, if one of the specified conditions is fulfilled:
[/hint]
[hint]
**x** equals **x1** or **x2** and at the same time **y** is between **y1** and **y2**
**y** equals **y1** or **y2** and at the same time **x** is between **x1** and **x2**
[/hint]
[hint]
You can check the conditions above using one more complicated **if**-**else** construction or using few more simple conditional statements or **nested if**-**else statements.**
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
2
-3
12
3
8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test open]
[input]
2
-3
12
3
12
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
80
-1
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
-8
-10
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
8
100.5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-1
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
6.28
-3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
10
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
3
[/input]
[output]
Border
[/output]
[/test]
[test]
[input]
2
-3
12
3
1
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
13.456
3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
14
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
12
-4
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
2
-5
[/input]
[output]
Inside / Outside
[/output]
[/test]
[test]
[input]
2
-3
12
3
1.43
-3
[/input]
[output]
Inside / Outside
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Summer Outfit
[code-task title="Summer Outfit" taskId="pb-java-Conditional-Statements-A-Summer-Outfit" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

Create a program to help your friend choose what clothes to wear **according to the part of day and the temperature (in degrees; Celsius)**. 

Your friend has different outfits according to the time of day and the temperature – check the **table** below.

| **Part of Day / Degrees** | **Morning** | **Afternoon** | **Evening** |
| --- | --- | --- | --- |
| 10 <= degrees C <= 18 | Outfit: Sweatshirt | Outfit: Shirt | Outfit: Shirt |
| | Shoes: Sneakers | Shoes: Moccasins | Shoes: Moccasins |
| 18 < degrees C <= 24 | Outfit: Shirt | Outfit: T-Shirt | Outfit: Shirt |
| | Shoes: Moccasins | Shoes: Sandals | Shoes: Moccasins |
| degrees C >= 25 | Outfit: T-Shirt | Outfit: Swim Suit | Outfit: Shirt |
| | Shoes: Sandals | Shoes: Barefoot | Shoes: Moccasins |

## Input
**Read two lines of input:**
- **Degrees** - an integer in range \[10…42\]
- **Part of day** : "Morning", "Afternoon", "Evening"

## Output
- Print out a **single** line:
    - "It's \{degrees\} degrees, get your \{outfit\} and \{shoes\}."

## Example
| **Input** | **Output** 
| --- | --- |
| 16 | It\'s 16 degrees, get your Sweatshirt and Sneakers. |
| Morning | |

[/task-description]
[tests]
[test open]
[input]
16
Morning
[/input]
[output]
It's 16 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test open]
[input]
22
Afternoon
[/input]
[output]
It's 22 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
28
Evening
[/input]
[output]
It's 28 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Afternoon
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
24
Morning
[/input]
[output]
It's 24 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
32
Evening
[/input]
[output]
It's 32 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
18
Evening
[/input]
[output]
It's 18 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
25
Afternoon
[/input]
[output]
It's 25 degrees, get your Swim Suit and Barefoot.
[/output]
[/test]
[test]
[input]
25
Morning
[/input]
[output]
It's 25 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
10
Morning
[/input]
[output]
It's 10 degrees, get your Sweatshirt and Sneakers.
[/output]
[/test]
[test]
[input]
24
Afternoon
[/input]
[output]
It's 24 degrees, get your T-Shirt and Sandals.
[/output]
[/test]
[test]
[input]
21
Morning
[/input]
[output]
It's 21 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[test]
[input]
11
Evening
[/input]
[output]
It's 11 degrees, get your Shirt and Moccasins.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Fishing Boat
[code-task title="Fishing Boat" taskId="pb-java-Conditional-Statements-A-Fishing-Boat" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

Tony and his friends decided to rent a fishing boat - the rent depends on the **season** and the **number** of fishermen.

**The boat rental price** according to the **season** is:
- **Spring - $3000**
- **Summer/Autumn - $4200**
- **Winter - $2600**

**The price** based on the **number** of fishermen is **discounted** in the following amounts:
- **Up to 6 people (inclusive) - 10% discount**
- **7-11 people** - **15% discount**
- **12 or more people - 25% discount**

The fishermen use another **5% discount if their group consists of an even number of people**. 

If it is **autumn** - they do **NOT** get an additional discount.

Create a **program** to **calculate** whether the fishermen will have **enough** money for the boat.

## Input
The input consists of **3 lines**:
- The **budget** of the group - real number in range \[1 .... 8000\]
- **Season**  - String : "**Spring**", "**Summer**", "**Autumn**", "**Winter**"
- **Number** of fishermen - integer in range \[4 .... 18\]

## Output
Print out a **single** line:
- If the budget **IS** enough: "Yes! You have \{money left\} dollars left."
- If the budget **IS NOT** enough: "Not enough money! You need \{money needed\} dollars."

**The prices should be formatted to the second decimal point.**

## Example
| **Input** | **Output** 
| --- | --- |
| 3000 | Not enough money! You need 570.00 dollars. |
| Summer | |
| 11 | |


| **Input** | **Output** |
| --- | --- |
| 2000 | Yes! You have 50.00 dollars left. |
| Winter | |
| 13 | |

| **Input** | **Output** |
| --- | --- |
| 3600 | Yes! You have 1035.00 dollars left. |
| Spring | |
| 6 | |

[hints]
[hint]
Determine the discount for the fishermen and if there's any additional discount.
In the summer fishing costs $4200
**11 fishermen take 15% discount** -> **4200 - 15% = $3570** , their number is **odd** so they do **not** use **additional** discount.
3000 <= 3570, hence they need $570.00 more
[/hint]
[hint]
Print the correct output.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
3000
Summer
11
[/input]
[output]
Not enough money! You need 570.00 dollars.
[/output]
[/test]
[test open]
[input]
3600
Autumn
6
[/input]
[output]
Not enough money! You need 180.00 dollars.
[/output]
[/test]
[test open]
[input]
2000
Winter
13
[/input]
[output]
Yes! You have 50.00 dollars left.
[/output]
[/test]
[test]
[input]
3780
Autumn
6
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
1949
Winter
13
[/input]
[output]
Not enough money! You need 1.00 dollars.
[/output]
[/test]
[test]
[input]
3570
Summer
11
[/input]
[output]
Yes! You have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
15
[/input]
[output]
Yes! You have 1850.00 dollars left.
[/output]
[/test]
[test]
[input]
2860
Spring
4
[/input]
[output]
Yes! You have 295.00 dollars left.
[/output]
[/test]
[test]
[input]
2231
Winter
6
[/input]
[output]
Yes! You have 8.00 dollars left.
[/output]
[/test]
[test]
[input]
1390
Winter
4
[/input]
[output]
Not enough money! You need 833.00 dollars.
[/output]
[/test]
[test]
[input]
1000
Winter
1
[/input]
[output]
Not enough money! You need 1340.00 dollars.
[/output]
[/test]
[test]
[input]
2500
Winter
1
[/input]
[output]
Yes! You have 160.00 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
3650
Summer
8
[/input]
[output]
Yes! You have 258.50 dollars left.
[/output]
[/test]
[test]
[input]
4100
Spring
1
[/input]
[output]
Yes! You have 1400.00 dollars left.
[/output]
[/test]
[test]
[input]
3800
Summer
10
[/input]
[output]
Yes! You have 408.50 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[test]
[input]
4300
Spring
11
[/input]
[output]
Yes! You have 1750.00 dollars left.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Flowers

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/03-conditional-statements-advanced/EN/interactive-programming-basics-with-java-conditional-statements-advanced-42-problem-flowers-solution-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Flowers" taskId="pb-java-Conditional-Statements-A-Flowers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Description

A flower market offers 3 types of flowers: **lilia**, **roses** and **tulips**. The prices depend on the season:

| **Season** | **Lilia** | **Rose** | **Tulip** |
| --- | --- | --- | --- |
| **Spring / Summer** | **2.00$** | **4.10$** | **2.50$** |
| **Autumn / Winter** | **3.75$** | **4.50$** | **4.15$** |

On holidays the prices of all flowers **increase by 15%**.

The market offers the following **discounts**:
- If you buy **7 or more tulips during the spring** - you get a discount of **5% of the price of the whole bouquet**
- If you buy **10 or more roses during the winter** - you get a discount of **10% of the price of the whole bouquet**
- If you buy **more than 20 flowers in total during any season** -you get a discount of **20% of the price of the whole bouquet**

**The discounts are applied in the specified order, there may be cases where we have to apply multiple discounts!**

**All of the discounts should be applied after the holiday price increase!**

There is an arrangement price, which will **always** be 2 dollars and has to be applied at the end of all calculations. 

Create a program to **calculate** the price of a bouquet.

## Input
The input consists of **5 lines**:
- Count of **lilias** - integer in range \[0 ... 200\]
- Count of **roses** - integer in range \[0 ... 200\]
- Count of **tulips** - integer in range \[0 ... 200\]
- **Season** - \[Spring, Summer, Аutumn, Winter\]
- Whether it is a **holiday** or not - \[Y - yes / N - no\]

## Output
Print out a **single number** - the price of the bouquet, **formatted to the second decimal point**.

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 46.14 |
| 4 | |
| 8 | |
| Spring | |
| Y | |


[/task-description]
[tests]
[test open]
[input]
2
4
8
Spring
Y
[/input]
[output]
46.14
[/output]
[/test]
[test]
[input]
3
10
9
Winter
N
[/input]
[output]
69.39
[/output]
[/test]
[test]
[input]
10
10
10
Autumn
N
[/input]
[output]
101.20
[/output]
[/test]
[test]
[input]
4
3
8
Winter
N
[/input]
[output]
63.70
[/output]
[/test]
[test]
[input]
3
14
0
Summer
N
[/input]
[output]
65.40
[/output]
[/test]
[test]
[input]
0
0
0
Summer
Y
[/input]
[output]
2.00
[/output]
[/test]
[test]
[input]
200
200
200
Winter
N
[/input]
[output]
1787.60
[/output]
[/test]
[test]
[input]
100
8
80
Spring
Y
[/input]
[output]
380.27
[/output]
[/test]
[test]
[input]
10
15
22
Winter
N
[/input]
[output]
143.34
[/output]
[/test]
[test]
[input]
33
33
33
Autumn
Y
[/input]
[output]
378.46
[/output]
[/test]
[test]
[input]
3
1
3
Winter
Y
[/input]
[output]
34.43
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



