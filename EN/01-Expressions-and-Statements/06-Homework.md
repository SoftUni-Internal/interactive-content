# Homework

[slide]
# Problem: Calculate Speed
[code-task title="Calculate Speed" taskId="pb-java-statements-calculate-speed" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to calculate the speed by time and distance:
  * Read 2 floating-point numbers: distance and time.
  * Calculate the speed needed to travel a given distance for given time.
  * Print the calculated result.
  * Use the formula: **speed = distance / time**.
  
## Example
| **Input** | **Output** |
| --- | --- |
| 15 | 7.5 |
| 2|  |

[/task-description]
[tests]
[test open]
[input]
15
2
[/input]
[output]
7.5
[/output]
[/test]
[test]
[input]
10.0
2.0
[/input]
[output]
5.0
[/output]
[/test]
[test]
[input]
2.0
10.0
[/input]
[output]
0.2
[/output]
[/test]
[test]
[input]
4.0
5.0
[/input]
[output]
0.8
[/output]
[/test]
[test]
[input]
4.5
10.0
[/input]
[output]
0.45
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Currency Converter
[code-task title="Currency Converter" taskId="pb-java-statements-currency-converter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to convert from USD to EUR:
  * Read a **floating-point number**: the dollars to be converted .
  * Convert **dollars to euro** (use **fixed rate** of dollars to euro: 0.88).
  * Print the converted value in euro.

## Example
| **Input** | **Output** |
| --- | --- |
| 17 | 14.96 |


| **Input** | **Output** |
| --- | --- |
| 87 | 76.56 |
[/task-description]
[tests]
[test open]
[input]
17
[/input]
[output]
14.96
[/output]
[/test]
[test open]
[input]
87
[/input]
[output]
76.56
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
8.8
[/output]
[/test]
[test]
[input]
5.0
[/input]
[output]
4.4
[/output]
[/test]
[test]
[input]
25.5
[/input]
[output]
22.44
[/output]
[/test]
[test]
[input]
12.0
[/input]
[output]
10.56
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Area of Triangle
[code-task title="Area of Triangle" taskId="pb-java-statements-Area-of-Triangle" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to calculate a triangle area:

  * Read from input a `side a` and `height` - **floating-point numbers**.
  * Calculate the area of the triangle.
  * Print the area, formatted to the 2nd digit after decimal point.

  
## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 25.00 |
| 10 |  |

[/task-description]
[tests]
[test open]
[input]
5
10
[/input]
[output]
25.00
[/output]
[/test]
[test]
[input]
12.0
2.0
[/input]
[output]
12.00
[/output]
[/test]
[test]
[input]
5.0
4.0
[/input]
[output]
10.00
[/output]
[/test]
[test]
[input]
10.5
2.5
[/input]
[output]
13.13
[/output]
[/test]
[test]
[input]
1.6
2.8
[/input]
[output]
2.24
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Four Operations
[code-task title="Four Operations" taskId="pb-java-statements-Four-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
  * Reads 2 **real numbers** from the console.
  * Performs 4 **arithmetic operations** on the obtained 2 numbers, in the following order: ``+``, ``-``, ``*``, ``/``.
  * Formats and prints the results like this example:

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 5.00 + 10.00 = 15.00 |
| 10 | 5.00 - 10.00 = -5.00 |
|  | 5.00 * 10.00 = 50.00 |
|  | 5.00 / 10.00 = 0.50 |

[/task-description]
[tests]
[test open]
[input]
10.0
5.0
[/input]
[output]
10.00 + 5.00 = 15.00
10.00 - 5.00 = 5.00
10.00 * 5.00 = 50.00
10.00 / 5.00 = 2.00
[/output]
[/test]
[test]
[input]
2.5
6.5
[/input]
[output]
2.50 + 6.50 = 9.00
2.50 - 6.50 = -4.00
2.50 * 6.50 = 16.25
2.50 / 6.50 = 0.38
[/output]
[/test]
[test]
[input]
10.5
2.5
[/input]
[output]
10.50 + 2.50 = 13.00
10.50 - 2.50 = 8.00
10.50 * 2.50 = 26.25
10.50 / 2.50 = 4.20
[/output]
[/test]
[test]
[input]
1.6
2.8
[/input]
[output]
1.60 + 2.80 = 4.40
1.60 - 2.80 = -1.20
1.60 * 2.80 = 4.48
1.60 / 2.80 = 0.57
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Days to Minutes
[code-task title="Days to Minutes" taskId="pb-java-statements-Days-to-Minutes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to convert from **days** to **minutes**:
  * Read a **single integer** (the days to be converted).
  * Convert the days to minutes (use calculations).
  * **Print** the minutes.

## Example
| **Input** | **Output** |
| --- | --- |
| 2 | 2880 |

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | 7200 |

[/task-description]
[tests]
[test open]
[input]
2
[/input]
[output]
2880
[/output]
[/test]
[test open]
[input]
5
[/input]
[output]
7200
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
8640
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
14400
[/output]
[/test]
[test]
[input]
32
[/input]
[output]
46080
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
12960
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Circle Area and Perimeter
[code-task title="Circle Area and Perimeter" taskId="pb-java-statements-Circle-Area-and-Perimeter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to calculate a circle area and perimeter:
  * Read a **floating-point number**: the radius of a circle.
  * Calculate the **area and perimeter** of a circle.
  * Print the calculated values.
    * Use the **default formatting** for floating-point numbers in Java in the output (like in the example below).

## Example
| **Input** | **Output** |
| --- | --- |
| 7 | Area = 153.938040 |
|  | Perimeter = 43.982297 |
[/task-description]
[tests]
[test open]
[input]
7
[/input]
[output]
Area = 153.938040
Perimeter = 43.982297
[/output]
[/test]
[test]
[input]
12.0
[/input]
[output]
Area = 452.389342
Perimeter = 75.398224
[/output]
[/test]
[test]
[input]
10.0
[/input]
[output]
Area = 314.159265
Perimeter = 62.831853
[/output]
[/test]
[test]
[input]
5.5
[/input]
[output]
Area = 95.033178
Perimeter = 34.557519
[/output]
[/test]
[test]
[input]
9.4
[/input]
[output]
Area = 277.591127
Perimeter = 59.061942
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Person Info
[code-task title="Person Info" taskId="pb-java-statements-Person-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
  * Reads **4 lines** of strings: first name, last name, country and town.
  * Prints information about a person in the following format: `"{firstName} {lastName} from {country} - {town}!"`.

## Example
| **Input** | **Output** |
| --- | --- |
| Kelly | Kelly Smith from Ireland - Cork! |
| Smith |  |
| Ireland |  |
| Cork |  |

[/task-description]
[tests]
[test open]
[input]
Kelly
Smith
Ireland
Cork
[/input]
[output]
Kelly Smith from Ireland - Cork!
[/output]
[/test]
[test]
[input]
John
Smith
USA
LA
[/input]
[output]
John Smith from USA - LA!
[/output]
[/test]
[test]
[input]
Ann
Green
France
Paris
[/input]
[output]
Ann Green from France - Paris!
[/output]
[/test]
[test]
[input]
Pesho
Peshov
Bulgaria
Sofia
[/input]
[output]
Pesho Peshov from Bulgaria - Sofia!
[/output]
[/test]
[test]
[input]
A
B
C
D
[/input]
[output]
A B from C - D!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Town Info
[code-task title="Town Info" taskId="pb-java-statements-Town-Info" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
  * Reads **3 lines** of input: name (**string**), population and area (**integers**).
  * Prints information about a town in the following format: "Town \{name\} has population of \{population\} and area \{area\} square km."

## Example
| **Input** | **Output** |
| --- | --- |
| Berlin | Town Berlin has population of 3675000 and area 984 square km. |
| 3675000 |  |
| 984 |  |
[/task-description]
[tests]
[test open]
[input]
Berlin
3675000
984
[/input]
[output]
Town Berlin has population of 3675000 and area 984 square km.
[/output]
[/test]
[test]
[input]
Sofia
100000
13000
[/input]
[output]
Town Sofia has population of 100000 and area 13000 square km.
[/output]
[/test]
[test]
[input]
Paris
20065
1200
[/input]
[output]
Town Paris has population of 20065 and area 1200 square km.
[/output]
[/test]
[test]
[input]
London
350000
1000
[/input]
[output]
Town London has population of 350000 and area 1000 square km.
[/output]
[/test]
[test]
[input]
A
123456
789
[/input]
[output]
Town A has population of 123456 and area 789 square km.
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]


[slide]
# Problem: Square Area
[code-task title="Square Area" taskId="pb-java-statements-Square-Areaa" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a console program that reads an **integer** \'a\' and calculates the area of a square with size \'a\'.

## Input

Read from the console:
- size of the square - **integer** in range \[1...1000\]

## Output

Print on the console the calculated area.

## Examples

| Input | Output |
| --- | --- |
| 5 | 25 |

| Input | Output |
| --- | --- |
| 6 | 36 |
[/task-description]
[tests]
[test open]
[input]
5
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
9
[/output]
[/test]
[test]
[input]
100
[/input]
[output]
10000
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide]
# Problem: Projects Creation
[code-task title="Project Creation" taskId="pb-java-statements-Projects-Creation" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that calculates how many hours will be necessary to an architect to create projects of some construction objects. 

Creating one project takes approximately 3 hours.

## Input
Read **two lines** from the console:
- Name of the architect - **String**
- Number of projects - **integer** in range \[0… 100\]

## Output

Print on the console: 

-  "The architect \{name of the architect\} will need \{necessary hours\} hours to complete \{number of projects\} project/s."

## Examples

| Input | Output | 
| --- | --- |
| George | The architect George will need 12 hours to complete 4 project/s. |
| 4 | |

| Input | Output |  
| --- | --- |
| Peter | The architect Peter will need 27 hours to complete 9 project/s. |
| 9 | |
[/task-description]
[tests]
[test open]
[input]
George
4
[/input]
[output]
The architect George will need 12 hours to complete 4 project/s.
[/output]
[/test]
[test open]
[input]
Peter
9
[/input]
[output]
The architect Peter will need 27 hours to complete 9 project/s.
[/output]
[/test]
[test]
[input]
Maria
20
[/input]
[output]
The architect Maria will need 60 hours to complete 20 project/s.
[/output]
[/test]
[test]
[input]
Ivan
11
[/input]
[output]
The architect Ivan will need 33 hours to complete 11 project/s.
[/output]
[/test]
[test]
[input]
Dimitar
2
[/input]
[output]
The architect Dimitar will need 6 hours to complete 2 project/s.
[/output]
[/test]
[test]
[input]
Yana
14
[/input]
[output]
The architect Yana will need 42 hours to complete 14 project/s.
[/output]
[/test]
[test]
[input]
Radi
24
[/input]
[output]
The architect Radi will need 72 hours to complete 24 project/s.
[/output]
[/test]
[test]
[input]
Jivko
21
[/input]
[output]
The architect Jivko will need 63 hours to complete 21 project/s.
[/output]
[/test]
[test]
[input]
Preslava
40
[/input]
[output]
The architect Preslava will need 120 hours to complete 40 project/s.
[/output]
[/test]
[test]
[input]
Alisiya
37
[/input]
[output]
The architect Alisiya will need 111 hours to complete 37 project/s.
[/output]
[/test]
[test]
[input]
Galin
50
[/input]
[output]
The architect Galin will need 150 hours to complete 50 project/s.
[/output]
[/test]
[test]
[input]
Gergana
22
[/input]
[output]
The architect Gergana will need 66 hours to complete 22 project/s.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide]
# Problem: Trapezoid Area
[code-task title="Trapezoid Areq" taskId="pb-java-statements-Trapezoid-Areq" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **calculates** the area of trapezoid with bases **b1** and **b2** and height **h**. 

The formula for calculating area of a trapezoid is ((b1 + b2) / 2) * h.

## Input

Read three numbers from the console:
- bases - b1 and b2 - real numbers in range \[1...1000\]
- height - h - real number in range \[1...1000\]

## Output
Print on the console a single number - the area of the trapezoid, formatted to the **second decimal point.**

## Example
| **Input** | **Output** |
| --- | --- |
| 8 | 73.50 |
| 13 | |
| 7 | |
[/task-description]
[tests]
[test open]
[input]
8
13
7
[/input]
[output]
73.50
[/output]
[/test]
[test]
[input]
4
6
8
[/input]
[output]
40.00
[/output]
[/test]
[test]
[input]
100
200
300
[/input]
[output]
45000.00
[/output]
[/test]
[test]
[input]
3
4
5
[/input]
[output]
17.50
[/output]
[/test]
[test]
[input]
8
13
7
[/input]
[output]
73.50
[/output]
[/test]
[test]
[input]
1.2
2.5
3.7
[/input]
[output]
6.85
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]





[slide]
# Problem: Vegetable Market
[code-task title="Vegetable Market" taskId="pb-java-statements-Vegetable-Market" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Gardener is selling his harvest at the vegetable market. 

He sells vegetables for **N dollars** per kilogram and fruits for **M dollars** per kilogram. 

Write a program that calculates the income from the harvest in euros (**1 USD = 0.89 EUR**).

## Input
The input will be **4 numbers**, each on a **single** line:
- The price of kilogram vegetables - **floating-point number** [0.00… 1000.00]
- The price of kilogram fruits - **floating-point number** [0.00… 1000.00]
- The total kilograms of vegetables - **integer** [0… 1000]
- The total kilograms of fruits - **integer** [0… 1000]

## Output
Print on the console a **single number**: the income from all of the fruits and vegetables in euro.

The result should be formatted to the **second decimal point.**

## Examples

| Input | Output | Comments |
| --- | --- | --- |
| 0.194 | 174.39 | The vegetables cost - 0.194$ \* 10kg = 1.94$ |
| 19.4 | | The fruits cost - 19.4$ \* 10kg  = 194$ |
| 10 | | Total - 195.94$ = 174.39€ |
| 10 | | |

| Input | Output |
| --- | --- |
| 1.5 | 35.60 |
| 2.5 | |
| 10 | | 
| 10 | | 


[/task-description]
[tests]
[test open]
[input]
0.194
19.4
10
10
[/input]
[output]
174.39
[/output]
[/test]
[test open]
[input]
1.5
2.5
10
10
[/input]
[output]
35.60
[/output]
[/test]
[test]
[input]
12.23
10
153
12
[/input]
[output]
1772.16
[/output]
[/test]
[test]
[input]
0
0
0
0
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
1.78
[/output]
[/test]
[test]
[input]
19.4
0.0194
200
102
[/input]
[output]
3454.96
[/output]
[/test]
[test]
[input]
1000
1000
1000
1000
[/input]
[output]
1780000.00
[/output]
[/test]
[test]
[input]
999.999
1929212
75
23
[/input]
[output]
39557719.57
[/output]
[/test]
[test]
[input]
0.018
0.217
546
897
[/input]
[output]
181.98
[/output]
[/test]
[test]
[input]
14.85
13
932
123
[/input]
[output]
13740.89
[/output]
[/test]
[test]
[input]
232.21
329.99
10
10
[/input]
[output]
5003.58
[/output]
[/test]
[test]
[input]
42
42
42
42
[/input]
[output]
3139.92
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Pet Shop
[code-task title="Pet Shop" taskId="pb-java-statements-Pet-Shop" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that calculates the expenses for buying food for dogs and other animals. 

Each package of food for dogs costs 2.5 dollars, and every other that\'s NOT for them - 4 dollars.

## Input

The input will be two lines from the console:
- Number of dogs - integer in range \[0… 100\]
- Number of the others animals - integer in range \[0… 100\]

## Output
Print on the console: "\{total sum\} dollars". The result should be formatted to the second decimal point.

## Examples

| Input | Output |
| --- | --- |
| 5 | 28.50 dollars |
| 4 | |


| Input | Output |
| --- | --- |
| 13 | 68.50 dollars |
| 9 | |
[/task-description]
[tests]
[test open]
[input]
5
4
[/input]
[output]
28.50 dollars
[/output]
[/test]
[test open]
[input]
13
9
[/input]
[output]
68.50 dollars
[/output]
[/test]
[test]
[input]
11
3
[/input]
[output]
39.50 dollars
[/output]
[/test]
[test]
[input]
15
2
[/input]
[output]
45.50 dollars
[/output]
[/test]
[test]
[input]
14
12
[/input]
[output]
83.00 dollars
[/output]
[/test]
[test]
[input]
11
17
[/input]
[output]
95.50 dollars
[/output]
[/test]
[test]
[input]
19
0
[/input]
[output]
47.50 dollars
[/output]
[/test]
[test]
[input]
20
4
[/input]
[output]
66.00 dollars
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]
0.00 dollars
[/output]
[/test]
[test]
[input]
6
15
[/input]
[output]
75.00 dollars
[/output]
[/test]
[test]
[input]
24
88
[/input]
[output]
412.00 dollars
[/output]
[/test]
[test]
[input]
30
20
[/input]
[output]
155.00 dollars
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]




[slide]
# Problem: Fishland
[code-task title="Fishland" taskId="pb-java-statements-Fishland" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
George decides to buy tuna, scads and mussels. 

Read from the console **prices** of mackerel and sprats, the quantity of tuna, scads and mussels in **kilograms** 

**Calculate** how much money will he need to pay his bill, if the prices at the Fishland are:
- Tuna - **60% more expensive than the mackerel**
- Scads - **80% more expensive than the sprats**
- Mussels - **7.50 dollars per kilogram**

## Input
You have to read **5 numbers** from the console:
- the price of the mackerel per kilogram - **floating-point** number in range [0.00…40.00]
- the price of the sprats per kilogram - **floating-point** number in range [0.00…30.00]
- kilograms of tuna - **floating-point** number in range [0.00…50.00]
- kilograms of scads - **floating-point** number in range [0.00…70.00]
- kilograms of mussels - **integer number** in range [0...100]

## Output
Print on the console a single number with floating point: the money George will need to pay the bill, formatted to the **second decimal point**

## Example
| Input | Output |
| --- | --- |
| 6.90 | 42.96 |
| 4.20 | |
| 1.50 | |
| 2.50 | |
| 1 | |

### Hints
- The price of the tuna = 6.90 + 6.90 \* 0.60 = 11.04 $/kg
- Total sum of tuna = 1.5 \* 11.04 = 16.56
- The price of the scads = 4.20 + 4.20 \* 0.80 =  7.56$/kg
- Total sum of scads = 2.5 \* 7.56 = 18.90
- The total sum of mussels = 1 \* 7.50 = 7.50
- Bill = 16.56 + 18.90 + 7.50 = 42.96

[/task-description]
[tests]
[test open]
[input]
6.90
4.20
1.5
2.5
1
[/input]
[output]
42.96
[/output]
[/test]
[test]
[input]
5.55
3.57
4.3
3.6
7
[/input]
[output]
113.82
[/output]
[/test]
[test]
[input]
7.79
5.35
9.3
0
0
[/input]
[output]
115.92
[/output]
[/test]
[test]
[input]
2.22
2.52
3
4
5
[/input]
[output]
66.30
[/output]
[/test]
[test]
[input]
7.5432
9.432
0.4
0.2
9
[/input]
[output]
75.72
[/output]
[/test]
[test]
[input]
10.50
9.25
12.2
13.2
5
[/input]
[output]
462.24
[/output]
[/test]
[test]
[input]
16.121
26.27
25
52
26
[/input]
[output]
3298.71
[/output]
[/test]
[test]
[input]
19.99
12.24
23
29
2
[/input]
[output]
1389.56
[/output]
[/test]
[test]
[input]
27
22
10
10
10
[/input]
[output]
903.00
[/output]
[/test]
[test]
[input]
31
12
22.22
11.11
43
[/input]
[output]
1664.59
[/output]
[/test]
[test]
[input]
29.99
29.99
29.99
29.99
29
[/input]
[output]
3275.46
[/output]
[/test]
[test]
[input]
39.99
29.99
39.98
58.85
69
[/input]
[output]
6252.42
[/output]
[/test]
[test]
[input]
39.99
29.99
49.99
69.99
99
[/input]
[output]
7719.26
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide]
# Problem: Yard Greening
[code-task title="Yard Greening" taskId="pb-java-statements-Yard-Greening" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Write a program that calculates the expenses for yard greening. 

The price for **one square meter** is 7.61 dollars with VAT. 

The company offers 18% **discount** from the total price.

## Input

Single line from the console:

- Square meters which will be greening - **float-pointing number** in range [0.00… 10000.00]

## Output

Print on the console two lines:   
- "The final price is: \{total price\} dollars"
- "The discount is: \{discount\} dollars"

Prices should be formatted to the **second decimal point.**

## Example
| Input |  Output |
| --- | --- |
| 540 | The final price is: 3369.71 dollars |
|  | The discount is: 739.69 dollars |

### Comments
- Calculate the price for greening the whole yard: 540 \* 7.61 = 4109.40 $
- Calculate the discount: 0.18 \* 4109.40 = 739.69 $
- Calculate the final price: 4109.40 – 739.69 = 3369.71 $

[/task-description]
[tests]
[test open]
[input]
540
[/input]
[output]
The final price is: 3369.71 dollars
The discount is: 739.69 dollars
[/output]
[/test]
[test]
[input]
135
[/input]
[output]
The final price is: 842.43 dollars
The discount is: 184.92 dollars
[/output]
[/test]
[test]
[input]
335
[/input]
[output]
The final price is: 2090.47 dollars
The discount is: 458.88 dollars
[/output]
[/test]
[test]
[input]
412
[/input]
[output]
The final price is: 2570.96 dollars
The discount is: 564.36 dollars
[/output]
[/test]
[test]
[input]
500
[/input]
[output]
The final price is: 3120.10 dollars
The discount is: 684.90 dollars
[/output]
[/test]
[test]
[input]
650
[/input]
[output]
The final price is: 4056.13 dollars
The discount is: 890.37 dollars
[/output]
[/test]
[test]
[input]
123
[/input]
[output]
The final price is: 767.54 dollars
The discount is: 168.49 dollars
[/output]
[/test]
[test]
[input]
811
[/input]
[output]
The final price is: 5060.80 dollars
The discount is: 1110.91 dollars
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
The final price is: 1560.05 dollars
The discount is: 342.45 dollars
[/output]
[/test]
[test]
[input]
211.05
[/input]
[output]
The final price is: 1316.99 dollars
The discount is: 289.10 dollars
[/output]
[/test]
[test]
[input]
348.49
[/input]
[output]
The final price is: 2174.65 dollars
The discount is: 477.36 dollars
[/output]
[/test]
[test]
[input]
74.44
[/input]
[output]
The final price is: 464.52 dollars
The discount is: 101.97 dollars
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