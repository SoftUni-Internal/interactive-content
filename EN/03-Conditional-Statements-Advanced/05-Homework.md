# Homework


[slide]
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
## Description
Write a program to check for fruit or vegetable:

* Read a single input line: an item from the greengrocery
* Fruits: banana, apple, kiwi, cherry, lemon, grapes
* Vegetables: cucumber, pepper, carrot, onion
* Print: **"vegetable"**, **"fruit"** or **"unknown"**

## Example
| **Input** | **Output** |
| --- | --- |
| lemon | fruit |

## Example
| **Input** | **Output** |
| --- | --- |
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

[slide]
# Problem: Day of Week
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
## Description
Write a program to print the day of week as words:

* Read and integer **n**: the **day of the week** in range [1..7]
* Print the **name of the day** (as words, in English)
* Print **"Error"** if the number is not in the given range

## Example
| **Input** | **Output** |
| --- | --- |
| 1 | Monday |

## Example
| **Input** | **Output** |
| --- | --- |
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
1
[/input]
[output]
Monday
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
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
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
Write a program to check a letter for vowel or consonant:

* Read a **letter** from the English alphabet
* Print either **"Vowel"** or **"Consonant"**

## Example
| **Input** | **Output** |
| --- | --- |
| a | Vowel |

## Example
| **Input** | **Output** |
| --- | --- |
| B | Consonant |

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
b
[/input]
[output]
Consonant
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Product of 3 Numbers
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
Calculate the sign of the product of 3 numbers:

* Read **3 floating-point** numbers
* Print the **sign** of the product of the entered 3 numbers: **positive**, **negative** or **zero**
* Try to do this **without multiplying** the numbers

## Example
| **Input** | **Output** |
| --- | --- |
| 2 | negative |
| 3 |  |
| -1 |  |

## Example
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

[slide]
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
Write a program, which checks for **sorted 3 numbers**:

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

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | Not sorted |
| 5 |  |
| 2 |  |


## Example
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

[slide]
# Problem: Vacation Expenses
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
Write a program, which calculates vacation expenses:

* Read season, accommodation type and count of the days
* Print the total expenses, based on the price table bellow,formatted to the 2nd * digit after the decimal point

|Season|Hotel|Camping|Discount|
|-----|------|-------|--------|
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

[/task-description]
[tests]
[test]
[input]
Winter
Hotel
5
[/input]
[output]
180.00
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
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
Calculate the **price** for all the tickets for a cinema movie:

* Reads the **type of the movie**, the **rows** and the **seats per row** in the cinema
* Prints the **total price** for all seats **formatted** to the 2nd digit after the decimal point

|Type|Price|
|-----|----|
|Premiere|12.00|
|Normal|7.50|
|Discount|5.00|

## Example
| **Input** | **Output** |
| --- | --- |
| Normal | 810.00 |
| 12 |  |
| 9 |  |

[/task-description]
[tests]
[test]
[input]
Normal
12
9
[/input]
[output]
810.00
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
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
Write a program to apply an operator for given two numbers:

* Read **two integers** and **math operator** from the console
* The math operator could be: "+", "-", "/", "%" and "*"
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

[slide]
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
Write a program to simulate an ATM withdrawal:

* Read: **balance**, **withdraw** and **limit**
* Print **"The withdraw was successful."** if the balance is enough
* Print **"The daily limit was exceeded."** if the limit is exceeded
* Print **"Insufficient availability."** if the balance isn't enough

## Example
| **Input** | **Output** |
| --- | --- |
| 420 | The withdraw was successful. |
| 20 |  |
| 25 |  |

## Example
| **Input** | **Output** |
| --- | --- |
| 10 | The daily limit was exceeded. |
| 50 | Insufficient availability. |
| 20 |  |

[/task-description]
[tests]
[test]
[input]
420
20
25
[/input]
[output]
The withdraw was successful.
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
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
Write a program to find the biggest among 5 numbers
* Read **5 integers**
* Print the **biggest** number

## Example
| **Input** | **Output** |
| --- | --- |
| -1 | -1 |
| -2 |  |
| -3 |  |
| -4 |  |
| -5 |  |
[/task-description]
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
1
2
3
4
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
## Description

Write a **console** program that reads **age (floating-point number)** and **gender**("**m**" or "**f**") and and prints an address according to these principles:
- "**Mr.**" - a man (gender "**m**") of age 16 or more
- "**Master**" - a boy (gender "**m**") under 16 years old
- "**Ms.**" - a woman (gender "**f**") of age 16 or more
- "**Miss**" - a girl (gender "**f**") under 16 years old

## Input
Entered from the console:
- age - floating-point number
- gender - "**m**" or "**f**"

## Output
Print the expected address on a single line.

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
25
f
[/input]
[output]
Ms.
[/output]
[/test]
[test]
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

[slide]
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
## Description
Write a program that knows whether the tank of a vehicle needs refueling or not. 

## Input
The input is consists of 2 lines:
- First you have to read from the console the type of fuel - text with options: "Diesel", "Gasoline" or "Gas"
- The second line of input reads the fuel in the tank in liters

## Output
- If the fuel is other than the specified print "Invalid fuel!".
- Otherwise if the fuel in the tank is more than or equal to 25 liters print:
    - "You have enough \{type of fuel\}."
    - Type of the fuel should be printed in lower case.
- Otherwise print:
    - "Fill your tank with \{type of fuel\}!". 
    - Type of the fuel should be printed in lower case.

### Example

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


[slide]
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
## Description

A company pays the following commissions to its employees according to the city they work in and the amount of sales:

| **Sales / City** | London | New York | Sydney|
| --- | --- | --- | --- | 
| \[0-500\] | 5% | 4.5% | 5.5% |
| \[501-1000\] | 7% | 7.5% | 8% | 
| \[1001-10000\] | 8% | 10% | 12% |
| > 10000| 12% | 13% | 14.5% |

Write a console program that reads as input the **name of a city** and the **amount of sales** and calculates the value of the **trade commission**. 

## Input
Read from the console two lines:
- Name of a city - String
- Amount of sales - floating-point number

## Output
- Print on the console the calculated value of trade commission.
- The result should be **formatted to the second decimal point**. 
- If you receive **invalid** name of city **or** amount of sales (negative number), print "**error**".

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
Moscow
-50
[/input]
[output]
error
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

[slide]
# Problem: Point on Rectangle Border
[code-task title="Point on Rectangle Border" taskId="pb-java-Conditional-Statements-A-Point-on-Rectangle-Borer" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to check if a **point {x, y}** is **on** some of the sides of a rectangle **{x1, y1} – {x2, y2}**.  

## Input
The input comes from the console and it consists of **6 rows, introduced from the user: real numbers x1, y1, x2, y2, x and y** (it will be always true that **x1 < x2** and **y1 < y2**).

## Output
If the point lies on one of the rectangle's sides:
- Print "**Border**"

If the point does NOT lie on a side:
- Print "**Inside / Outside**"

## Example
| **Input** | **Output** 
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

\* **Hint**: use one or more conditional **if** statements with logical operations. A point **{x, y}** lies on aside of a rectangle **{x1, y1} – {x2, y2}**, if one of the specified conditions is fulfilled:

- **x** equals **x1** or **x2** and at the same time **y** is between **y1** and **y2**
- **y** equals **y1** or **y2** and at the same time **x** is between **x1** and **x2**

You can check the conditions above using one more complicated **if**-**else** construction or using few more simple conditional statements or **nested if**-**else statements.**
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


[slide]
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
## Description
It's summer with changeable weather and Victor needs your help. 

Write a program that recommends Victor which clothes to choose **according to the part of day and degrees (Celsius)**. 

Your friend has different plans for every part of the day with different outfits – check the **table** below.

| **Part of Day / Degrees** | Morning | Afternoon | Evening |
| --- | --- | --- | --- |
| 10 <= deg <= 18 | Outfit: Sweatshirt | Outfit: Shirt | Outfit: Shirt |
| | Shoes: Sneakers | Shoes: Moccasins | Shoes: Moccasins |
| 18 < deg <= 24 | Outfit: Shirt | Outfit: T-Shirt | Outfit: Shirt |
| | Shoes: Moccasins | Shoes: Sandals | Shoes: Moccasins |
| deg >= 25 | Outfit: T-Shirt | Outfit: Swim Suit | Outfit: Shirt |
| | Shoes: Sandals | Shoes: Barefoot | Shoes: Moccasins |

## Input
**Read two lines of input:**
- **Degrees** - an integer in range \[10…42\]
- **Part of day** - text - possibilities: "Morning", "Afternoon", "Evening"

## Output
- Print on the console a **single** line:
    - It's \{degrees\} degrees, get your \{outfit\} and \{shoes\}."

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

[slide]
# Prolem: Fishing Boat
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
## Description

Tony and his friends decided to rent a boat - the rent depends on the **season** and the **number** of fishermen.

**The price** on the basis of **season**:
- **Spring - 3000 $**
- **Summer and autumn - 4200 $**
- **Winter - 2600 $**

**The price** on the basis of **number** of fishermen uses **discount:**
- If the group is **up to 6 people (inclusive) -  10% discount**
- If the group members are in range \[7…11\] -  **15% discount**
- If the group is **12 or more people - 25% discount**

The fishermen use another **5 % discount if they are even number** except when it is **NOT** autumn – then they do **NOT** have additional discount.

Write a **program** to **calculate** whether the fishermen will gather **enough** money.

## Input
The input is consists of exactly **3 lines**:
- The **budget** of the group - real number in range \[1…8000\]
- **Season**  - String : "**Spring**", "**Summer**", "**Autumn**", "**Winter**"
- **Number** of fishermen - integer in range \[4…18\]

## Output
Print on the console a **single** line:
- If the budget **IS** enough: "Yes! You have \{money left\} dollars left."
- If the budget **IS NOT** enough: "Not enough money! You need \{money needed\} dollars."

**The prices should be formatted to the second decimal point.**

## Example
| **Input** | **Output** 
| --- | --- |
| 3000 | Not enough money! You need 570.00 dollars. |
| Summer | |
| 11 | |

### Comments
- In the summer fishing costs 4200$,
- **11 fishermen take 15% discount** -> **4200 - 15% = 3570** $, their number is **odd** so they do **not** use **additional** discount.
- 3000 <= 3570, hence they need 570.00 $ more

## Example
| **Input** | **Output** |
| --- | --- |
| 2000 | Yes! You have 50.00 dollars left. |
| Winter | |
| 13 | |

## Example
| **Input** | **Output** |
| --- | --- |
| 3600 | Yes! You have 1035.00 dollars left. |
| Spring | |
| 6 | |

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

[slide]
# Problem: Flowers
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
## Description

A flower market offers **3 types of flowers: lilia**, **roses** and **tulips**. The prices depend on the season:

| **Season** | **Lilia** | **Rose** | **Tulip** |
| --- | --- | --- | --- |
| **Spring / Summer** | **2.00$** | **4.10$** | **2.50$** |
| **Autumn / Winter** | **3.75$** | **4.50$** | **4.15$** |

On holidays the prices of all flowers **increase by 15%**.

The market offers the following **discounts**:
- If you buy **7 or more tulips during the spring** - **5% of the price of the whole bouquet**
- If you buy **10 or more roses during the winter** - **10% of the price of the whole bouquet**
- If you buy **more than 20 flowers in total during ALL seasons - 20% of the price of the whole bouquet**

**The discounts are applied in the specified order above and can be superimposed!**

**All of the discounts should be applied after the increasing of the prices in holidays!**

The price of the bouquet arrangement is **always** 2 dollars. 

Write a program to **calculate** the price of a bouquet.

## Input
The input is read from the **console** and is exactly **5 lines**:
- Count of the bought **lilias** - integer in range \[0 ... 200\]
- Count of the bought **roses** - integer in range \[0 ... 200\]
- Count of the bought **tulips** - integer in range \[0 ... 200\]
- **Season** - \[Spring, Summer, Аutumn, Winter\]
- If the day is **holiday** - \[Y - yes / N - no\]

## Output
Print on the console a **single number** - the price of the flowers, **formatted to the second decimal point**.

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 46.14 |
| 4 | |
| 8 | |
| Spring | |
| Y | |

### Comments
- **Price: 2\*2.00 + 4\*4.10 + 8\*2.50 = 40.40 $** 
- **Holiday** 40.40 + **15%** = 46.46 $
- **5% discount for more than 7 tulips during the spring** - 44.14
- In total the flowers are 20 or less - there **isn't a discount**
- **44.14 + 2 for arrangement = 46.14 $** 

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









[slide]
# Homework Results

[tasks-results/]

[/slide]