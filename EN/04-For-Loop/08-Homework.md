# Homework

[slide hideTitle]
# Problem with Solution: Greatest Number

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-35-problem-and-solution-greatest-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Biggest Number" taskId="pb-java-for-loop-biggest-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that:

* Reads **n** - number of integers to be processed by the program
* Reads **an n number of integers**
* Finds and prints out the **greatest integer from the input**

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 90 |
| 40 | |
| 90 | |
| 50 | |
[/task-description]
[tests]
[test open]
[input]
3
40
90
50
[/input]
[output]
90
[/output]
[/test]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
-30
-80
-40
[/input]
[output]
-30
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Max and Min Numbers
[code-task title="Max and Min Numbers" taskId="pb-java-for-loop-max-and-min" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that:

* Reads **n** representing the number of integers that the following input lines will contain
* Finds the **max** and the **min integers**
* Prints them to the console in the following format:
   - "**Max number:** \{**max number**\}"
   - "**Min number:** \{**min number**\}"

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | Max number: 304 |
| 10 | Min number: 0 |
| 304 | |
| 0 | |
| 0 | |
| 50 | |
[/task-description]
[tests]
[test open]
[input]
5
10
304
0
0
50
[/input]
[output]
Max number: 304
Min number: 0
[/output]
[/test]
[test]
[input]
4
100
200
0
300
[/input]
[output]
Max number: 300
Min number: 0
[/output]
[/test]
[test]
[input]
1
100
[/input]
[output]
Max number: 100
Min number: 100
[/output]
[/test]
[test]
[input]
3
-1
-2
0
[/input]
[output]
Max number: 0
Min number: -2
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Power of Number
[code-task title="Power of Number" taskId="pb-java-for-loop-power-of-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that raises a given number to the power of another number:

* Reads **p - the exponent** and **n - the base number**
* Prints the result of n to the power of p
* Do not use the `Math.pow()` method

## Example
| **Input** | **Output** 
| --- | --- |
| 5 | 32 |
| 2 | |
[/task-description]
[tests]
[test open]
[input]
5
2
[/input]
[output]
32
[/output]
[/test]
[test]
[input]
6
2
[/input]
[output]
64
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Equal Pairs
[code-task title="Equal Pairs" taskId="pb-java-for-loop-equal-pairs" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that:

* Reads number **n** and **n pairs** of numbers (Sum up each pair and compare all sums with each other)
* Prints "**Yes, value=**\{**sum**\}", if the **sum of all** pairs is **equal**
* **Otherwise**, prints "**No, maxdiff=**\{**diff**\}"
* diff is the **max difference** in the sum between two pairs

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | Yes, value=-1 |
| -1 | |
| 0 | |
| 0 | |
| -1 | |
[/task-description]
[tests]
[test open]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test open]
[input]
2
1
2
2
2
[/input]
[output]
No, maxdiff=1
[/output]
[/test]
[test]
[input]
3
1
2
0
3
4
-1
[/input]
[output]
Yes, value=3
[/output]
[/test]
[test]
[input]
4
1
1
3
1
2
2
0
0
[/input]
[output]
No, maxdiff=4
[/output]
[/test]
[test]
[input]
1
5
5
[/input]
[output]
Yes, value=10
[/output]
[/test]
[test]
[input]
2
-1
0
0
-1
[/input]
[output]
Yes, value=-1
[/output]
[/test]
[test]
[input]
2
-1
2
0
-1
[/input]
[output]
No, maxdiff=2
[/output]
[/test]
[test]
[input]
8
5
5
70
-60
3
7
2
8
20
-10
15
-5
0
10
10
0
[/input]
[output]
Yes, value=10
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Zig Zag Sum

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-35-problem-and-solution-zig-zag-sum-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Zig Zag Sum" taskId="pb-java-for-loop-zig-zag-sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which:

* Reads **n** - number representing the amount of following input numbers
* Reads **n integers** 
   * if the number is on an **even** input line, it **adds** the number to the final result
   * for every entry on an **odd** input line, it **subtracts** the number from the final result
   * the counting starts from 1.
* **Prints out** the result

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 10 |
| 10 | |
| 20 | |
[/task-description]
[tests]
[test open]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
4
20
20
20
20
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
10
20
[/input]
[output]
10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Divide Without Remainder
[code-task title="Divide Without Remainder" taskId="pb-java-for-loop-Divide-without-reminder" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, which:

* Reads **n** and afterward **n numbers**
* Finds a **percentage** of how many of them can be **divided without a remainder** using **2**, **3** and **4** as divisors
* Prints out the percentages for each divisor, **formatted** to the second digit

## Example
| **Input** | **Output** 
| --- | --- |
| 3 |  |
| 3 | 33.33% |
| 6 | 100.00% |
| 9 | 0.00% |
[/task-description]
[tests]
[test open]
[input]
3
3
6
9
[/input]
[output]
33.33%
100.00%
0.00%
[/output]
[/test]
[test]
[input]
3
12
27
6
[/input]
[output]
66.67%
100.00%
33.33%
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Vowel Sum
[code-task title="Vowel Sum" taskId="pb-java-for-loop-vowel-sum" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that:

* Reads a number **n** - representing the number of characters which will follow in the input:
* If the character is a **vowel** it adds its value to the final result, use the table:

|character|a|e|i|o|u|
|---------|-|-|-|-|-|
|value|1|2|3|4|5|

* Prints out the final sum

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 1 |
| a | |
| g | |
[/task-description]
[tests]
[test open]
[input]
2
a
g
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
i
u
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
5
a
u
n
m
s
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
1
a
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
8
a
e
i
o
u
a
a
s
[/input]
[output]
17
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Rollercoaster
[code-task title="Rollercoaster" taskId="pb-java-for-loop-rollearcoaster" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that calculates if there are enough passengers to fill all seats on a rollercoaster train.

* The input will consist of **available places**, **minimum age for the passengers**, **number of people on the queue**

**The age of each passenger** will be specified as a separate number. 

* If all places are taken print out: **"The rollercoaster departures"**

* In all other cases print out: **"Waiting..."**

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | The rollercoaster departures |
| 10 | |
| 2 | |
| 15 | |
| 24 | |

| Input | Output |
| --- | --- |
| 2 | Waiting... |
| 25 | |
| 5 | |
| 10 | |
| 15 | |
| 18 | |
| 5 | |
| 30 | |

[/task-description]
[tests]
[test open]
[input]
2
10
2
15
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test open]
[input]
2
25
5
10
15
18
5
30
[/input]
[output]
Waiting...
[/output]
[/test]
[test]
[input]
4
18
10
15
57
14
35
68
45
23
14
24
26
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[test]
[input]
3
21
5
25
45
34
12
24
[/input]
[output]
The rollercoaster departures
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Multiply

[code-task title="Multiply" taskId="pb-java-for-loop-multiply" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program, that: 

* Reads a number 
* Prints that number multiplied by `i` "\{n\} x \{i\} = \{result\}"
* Where `i` is all numbers from **1 to 10** (**inclusive**)

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | 2 x 1 = 2 |
| | 2 x 2 = 4 |
| | 2 x 3 = 6 |
| | 2 x 4 = 8 |
| | 2 x 5 = 10 |
| | 2 x 6 = 12 |
| | 2 x 7 = 14 |
| | 2 x 8 = 16 |
| | 2 x 9 = 18 |
| | 2 x 10 = 20 |
[/task-description]
[tests]
[test open]
[input]
2
[/input]
[output]
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Back to the Past
[code-task title="Back to the Past" taskId="pb-java-for-loop-back-to-the-past" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Josh is currently 18 years old. 

He inherits an X amount of money (read from the console) and a time machine. 

He decides to return to the year 1800 and rely only on the money he inherited, without having to work for a living.

Create a program that calculates whether Josh will be able to do that, starting from year 1800 and continuing up to a year that will be specified in the console input.

- Each even year (1800, 1802, etc.) he will spend 12 000 dollars

- Each odd year (1801, 1803, etc.) he will spend 12 000 + 50 \* \[his age during that year\]


## Input
The input consists of 2 lines:
- Amount of inherited money - a real number in range \[1.00... 1,000,000.00\] 
- Year to calculate the costs up to - an integer in range \[1801... 1900\]

## Output
Print out a single line. 
(all numbers should be formatted up to the second decimal place)
- If he has enough money:
    - "**Yes! He will live a carefree life and will have** \{**N**\} **dollars left.**" - where N is the remainder of his inheritance
- If not:
    - "**He will need** \{**М**\} **dollars to survive.**" - where M is the insufficient amount of money

## Example

| Input | Output |
| --- | --- |
| 50000 | Yes! He will live a carefree life and will have 13050.00 dollars left. |
| 1802 | |

[hints]
[hint]
Determine how much money Josh will spend each year and then subtract the total money needed from his legacy money.
Then, print the correct output
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
50000
1802
[/input]
[output]
Yes! He will live a carefree life and will have 13050.00 dollars left.
[/output]
[/test]
[test]
[input]
100000.15
1808
[/input]
[output]
He will need 12399.85 dollars to survive.
[/output]
[/test]
[test]
[input]
1000000
1860
[/input]
[output]
Yes! He will live a carefree life and will have 196000.00 dollars left.
[/output]
[/test]
[test]
[input]
1000000.42
1874
[/input]
[output]
He will need 1749.58 dollars to survive.
[/output]
[/test]
[test]
[input]
1.6
1800
[/input]
[output]
He will need 11998.40 dollars to survive.
[/output]
[/test]
[test]
[input]
12000
1800
[/input]
[output]
Yes! He will live a carefree life and will have 0.00 dollars left.
[/output]
[/test]
[test]
[input]
234657.89
1816
[/input]
[output]
Yes! He will live a carefree life and will have 20257.89 dollars left.
[/output]
[/test]
[test]
[input]
50000.99
1803
[/input]
[output]
Yes! He will live a carefree life and will have 0.99 dollars left.
[/output]
[/test]
[test]
[input]
60043.5
1900
[/input]
[output]
He will need 1321956.50 dollars to survive.
[/output]
[/test]
[test]
[input]
234789.5
1970
[/input]
[output]
He will need 2254960.50 dollars to survive.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Bills
[code-task title="Bills" taskId="pb-java-for-loop-bills" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program to calculate the living cost for a family over a period of time. 

Their monthly expenses are as follows:

- Electricity - every month the bill is different and will be read from the console
- Water - $20
- Internet - $15
- Other expenses - calculated by summing the bills for electricity, water and internet and adding 20% to the final result

# Input

The input is read from the console: 

- The period /number of months/ – integer in range \[1... 100\] 
- For each month – the electricity cost – a real number in range \[1.00... 1000.00\]

# Output
The output should consist of 5 lines: 
- "**Electricity:** **$**\{**total cost for the entire period**\}" 
- "**Water:** **$**\{**total cost for the entire period**\}" 
- "**Internet:** **$**\{**total cost for the entire period**\}" 
- "**Other:** **$**\{**total cost for the entire period**\}" 
- "**Average:** **$**\{**total cost for the entire period**\}"

All bills should be formatted to the 2nd digit after the decimal point.

## Example

| **Input** | **Output** |
| --- | --- |
| 5 | Electricity: $447.16 |
| 68.63 | Water: $100.00 |
| 89.25 | Internet: $75.00 |
| 132.53 | Other: $746.59 |
| 93.53 | Average: $273.75 |
| 63.22 | |

[hints]
[hint]
For 5 months:
- Electricity -> 68.63 \+ 89.25 \+ 132.53 \+ 93.53 \+ 63.22 = $447.16
- Water -> 5 months \* $20 = $100
- Internet -> 5 months \* $15 = $75
- Others:
    - 68.63+20+15) + 20% = 124.356  
    - (89.25+20+15) + 20% = 149.1
    - (132.53+20+15) + 20% = 201.036
    - (93.53+20+15) + 20% = 154.236
    - (63.22+20+15) + 20% = 117.864
[/hint]
[hint]
Total = $746.592
Average bills per month = (447.16+100+75+746.592)/5 = $273.7504
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
5
68.63
89.25
132.53
93.53
63.22
[/input]
[output]
Electricity: $447.16
Water: $100.00
Internet: $75.00
Other: $746.59
Average: $273.75
[/output]
[/test]
[test]
[input]
8
123.54
231.54
140.23
100
122.4
430
178.52
64.2
[/input]
[output]
Electricity: $1390.43
Water: $160.00
Internet: $120.00
Other: $2004.52
Average: $459.37
[/output]
[/test]
[test]
[input]
10
123
321
123
321
123
321
123
321
123
321
[/input]
[output]
Electricity: $2220.00
Water: $200.00
Internet: $150.00
Other: $3084.00
Average: $565.40
[/output]
[/test]
[test]
[input]
50
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
[/input]
[output]
Electricity: $1275.00
Water: $1000.00
Internet: $750.00
Other: $3630.00
Average: $133.10
[/output]
[/test]
[test]
[input]
23
123.34
432.23
213.12
231.3
266.1
677
1000
23
54
765
23
54
23
54
87
236
353
847
357
346
335
643
523
[/input]
[output]
Electricity: $7666.09
Water: $460.00
Internet: $345.00
Other: $10165.31
Average: $810.28
[/output]
[/test]
[test]
[input]
1
123.34
[/input]
[output]
Electricity: $123.34
Water: $20.00
Internet: $15.00
Other: $190.01
Average: $348.35
[/output]
[/test]
[test]
[input]
10
1
2
3
4
5
6
7
8
9
10
[/input]
[output]
Electricity: $55.00
Water: $200.00
Internet: $150.00
Other: $486.00
Average: $89.10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Hospital

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/04-for-loops/EN/interactive-programming-basics-with-java-for-loops-35-problem-sand-solution-hospital-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hospital" taskId="pb-java-for-loop-Hospital" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

A hospital has 7 doctors available. 

Each doctor can only see a single patient per day, but sometimes there is a shortage of doctors, so waiting patients are sent to other hospitals. 

Every third day the hospital makes calculations and if the number of unserviced patients is greater than the number of the accepted ones, one more doctor is appointed to the hospital. 

The appointment of a new doctor occurs before the intake of patients for that day. 

Create a program that calculates and outputs the number of patients that received service as well as the number of the ones that could not be seen by a doctor in this hospital.

## Input
The input contains: 

- The number of days for which we need to perform calculations - an integer in range \[1 ... 1000\] 
- On the following lines (equal to the number of days) – the number of patients arriving at the hospital that day - an integer in range \[0 ... 10 000\]

Print out 2 lines:
- "**Treated patients:** \{**Number of received patients**\}." 
- "**Untreated patients:** \{**Number of patients who could not be seen by a doctor**\}."

## Example

| **Input** | **Output** |
| --- | --- |
| 4 | Treated patients: 23. |
| 7 | Untreated patients: 21. |
| 27 | |
| 9 | |
| 1 | |

[/task-description]
[tests]
[test open]
[input]
4
7
27
9
1
[/input]
[output]
Treated patients: 23.
Untreated patients: 21.
[/output]
[/test]
[test]
[input]
6
25
25
25
25
25
2
[/input]
[output]
Treated patients: 40.
Untreated patients: 87.
[/output]
[/test]
[test]
[input]
3
7
7
7
[/input]
[output]
Treated patients: 21.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
9
25
25
25
25
25
25
25
25
25
[/input]
[output]
Treated patients: 75.
Untreated patients: 150.
[/output]
[/test]
[test]
[input]
3
7
7
8
[/input]
[output]
Treated patients: 21.
Untreated patients: 1.
[/output]
[/test]
[test]
[input]
1
200
[/input]
[output]
Treated patients: 7.
Untreated patients: 193.
[/output]
[/test]
[test]
[input]
2
9
9
[/input]
[output]
Treated patients: 14.
Untreated patients: 4.
[/output]
[/test]
[test]
[input]
10
0
0
0
0
0
0
0
0
0
0
[/input]
[output]
Treated patients: 0.
Untreated patients: 0.
[/output]
[/test]
[test]
[input]
3
10000
10000
10000
[/input]
[output]
Treated patients: 22.
Untreated patients: 29978.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Numbers Ending in 7
[code-task title="Numbers Ending in 7" taskId="pb-java-for-loop-Numbers-ending-in-7" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

Create a program that prints out all numbers in range \[1...1000\] which end in 7. 

Print the numbers on a single line, separated by a single space.

## Example

| **Input** | **Output** |
| --- | --- | 
| (no input) | 7 17 27 ... 997 |

[/task-description]
[tests]
[test open]
[input]
[/input]
[output]
7 17 27 37 47 57 67 77 87 97 107 117 127 137 147 157 167 177 187 197 207 217 227 237 247 257 267 277 287 297 307 317 327 337 347 357 367 377 387 397 407 417 427 437 447 457 467 477 487 497 507 517 527 537 547 557 567 577 587 597 607 617 627 637 647 657 667 677 687 697 707 717 727 737 747 757 767 777 787 797 807 817 827 837 847 857 867 877 887 897 907 917 927 937 947 957 967 977 987 997
[/output]
[/test]
[test]
[input]
[/input]
[output]
7 17 27 37 47 57 67 77 87 97 107 117 127 137 147 157 167 177 187 197 207 217 227 237 247 257 267 277 287 297 307 317 327 337 347 357 367 377 387 397 407 417 427 437 447 457 467 477 487 497 507 517 527 537 547 557 567 577 587 597 607 617 627 637 647 657 667 677 687 697 707 717 727 737 747 757 767 777 787 797 807 817 827 837 847 857 867 877 887 897 907 917 927 937 947 957 967 977 987 997
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Odd / Even Position
[code-task title="Odd / Even Position" taskId="pb-java-for-loop-odd-even-position" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads an integer representing the amount of numbers that will be contained in the following input and calculates which the minimum and maximum values of the numbers found at odd and even positions (counting from 1) is. 

If no minimal/maximal element can be identified print out "No".

## Input
- N numbers to be read - an integer \[0...100\]
- On each next line - a floating-point number \[-100...100\]

## Output
The output should come in the following form:

- "OddSum=" + \{sum of the numbers at odd positions\},
- "OddMin=" + \{minimum value of the numbers at odd positions\} / \{"No"\},
- "OddMax=" + \{maximum value of the numbers at odd positions\} / \{"No"\},
- "EvenSum=" + \{sum of the numbers at even positions\},
- "EvenMin=" + \{minimum value of the numbers at even positions\} / \{"No"\},
- "EvenMax=" + \{maximum value of the numbers at even positions\} / \{"No"\}
- Each number should be formatted to the second decimal point.

## Example

| **Input** | **Output** |
| --- | --- |
| 5 | OddSum=8.00, |
| 3 | OddMin=-3.00, |
| -2 | OddMax=8.00, |
| 8 | EvenSum=9.00, |
| 11 | EvenMin=-2.00, |
| -3 | EvenMax=11.00 |

| **Input** | **Output** |
| --- | --- |
| 0 | OddSum=0.00, |
| | OddMin=No, |
| | OddMax=No, |
| | EvenSum=0.00, |
| | EvenMin=No, |
| | EvenMax=No |
[/task-description]
[tests]
[test open]
[input]
5
3
-2
8
11
-3
[/input]
[output]
OddSum=8.00,
OddMin=-3.00,
OddMax=8.00,
EvenSum=9.00,
EvenMin=-2.00,
EvenMax=11.00
[/output]
[/test]
[test]
[input]
6
2
3
5
4
2
1
[/input]
[output]
OddSum=9.00,
OddMin=2.00,
OddMax=5.00,
EvenSum=8.00,
EvenMin=1.00,
EvenMax=4.00
[/output]
[/test]
[test]
[input]
2
1.5
-2.5
[/input]
[output]
OddSum=1.50,
OddMin=1.50,
OddMax=1.50,
EvenSum=-2.50,
EvenMin=-2.50,
EvenMax=-2.50
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
OddSum=1.00,
OddMin=1.00,
OddMax=1.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test open]
[input]
0
[/input]
[output]
OddSum=0.00,
OddMin=No,
OddMax=No,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
4
1.5
1.75
1.5
1.75
[/input]
[output]
OddSum=3.00,
OddMin=1.50,
OddMax=1.50,
EvenSum=3.50,
EvenMin=1.75,
EvenMax=1.75
[/output]
[/test]
[test]
[input]
1
-5
[/input]
[output]
OddSum=-5.00,
OddMin=-5.00,
OddMax=-5.00,
EvenSum=0.00,
EvenMin=No,
EvenMax=No
[/output]
[/test]
[test]
[input]
3
-1
-2
-3
[/input]
[output]
OddSum=-4.00,
OddMin=-3.00,
OddMax=-1.00,
EvenSum=-2.00,
EvenMin=-2.00,
EvenMax=-2.00
[/output]
[/test]
[test]
[input]
5
1.5
-4.5
7
-8.5
9
[/input]
[output]
OddSum=17.50,
OddMin=1.50,
OddMax=9.00,
EvenSum=-13.00,
EvenMin=-8.50,
EvenMax=-4.50
[/output]
[/test]
[test]
[input]
10
-4.5
3433.5
-180.33
323.2
-55.55
28.28
-30.30
44.44
-77.77
88.88
[/input]
[output]
OddSum=-348.45,
OddMin=-180.33,
OddMax=-4.50,
EvenSum=3918.30,
EvenMin=28.28,
EvenMax=3433.50
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Grades
[code-task title="Grades" taskId="pb-java-for-loop-grades" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program to calculate statistics according to exam grades. 

The program receives the number of students that attended the exam and the grade of each one. 

The program should print out the percentage of students holding a grade between:
- 2.00 and 2.99
- 3.00 and 3.99
- 4.00 and 4.99
- 5.00 or greater
- The average grade for all participants

## Input
- The first input line contains the number of students - an integer in range \[1 ... 1000\]
- On each next line - each student's grade - a real number in range \[2.00 ... 6.00\]

## Output
Print 5 lines of output with the following information:
- "Top students: \{percentage of students with grades 5.00 or grater\}%"
- "Between 4.00 and 4.99: \{percentage of students with grades between 4.00 and 4.99 inclusive\}%"
- "Between 3.00 and 3.99: \{percentage of students with grades between 3.00 and 3.99 inclusive\}%"
- "Fail: \{percentage of students with grades less than 3.00\}%"
- "Average: \{average grade\}"

All numbers must be formatted to the second decimal place.

## Example
| **Input** | **Output** |
| --- | --- |
| 10 | Top students: 30.00% |
| 3.00 | Between 4.00 and 4.99: 30.00% |
| 2.99| Between 3.00 and 3.99: 20.00% |
| 5.68| Fail: 20.00% |
| 3.01| Average: 4.06 |
| 4| |
| 4| | 
| 6.00| |
| 4.50| |
| 2.44| |
| 5| |

[hints]
[hint]
Get the total amount of students, then using a for loop, determine how many students have grades between:
- 5 and more
 
- 4 and 4.99

- 3 and 3.99

- Less than 3
[/hint]
[hint]
Finally, calculate the average grade and print the correct output.
[/hint]
[/hints]

[/task-description]
[tests]
[test open]
[input]
10
3
2.99
5.68
3.01
4
4
6
4.5
2.44
5
[/input]
[output]
Top students: 30.00%
Between 4.00 and 4.99: 30.00%
Between 3.00 and 3.99: 20.00%
Fail: 20.00%
Average: 4.06
[/output]
[/test]
[test]
[input]
6
2
3
4
5
6
2.2
[/input]
[output]
Top students: 33.33%
Between 4.00 and 4.99: 16.67%
Between 3.00 and 3.99: 16.67%
Fail: 33.33%
Average: 3.70
[/output]
[/test]
[test]
[input]
100
6
6
5
5
4
4
3
3
2
2
2.1
2.2
2.3
2.4
2.5
2.6
2.7
2.8
2.9
3
3.1
3.2
3.3
3.4
3.5
3.6
3.7
3.8
3.9
4
4.1
4.2
4.3
4.4
4.5
4.6
4.7
4.8
4.9
5
5.1
5.2
5.3
5.4
5.5
5.6
5.7
5.8
5.9
2.02
2.12
2.22
2.32
2.42
2.52
2.62
2.72
2.82
2.92
2.02
3.09
3.19
3.29
3.39
3.49
3.59
3.69
3.79
3.89
3.99
4.09
4.19
4.29
4.39
4.49
4.59
4.69
4.79
4.89
4.99
5.09
5.19
5.29
5.39
5.49
5.59
5.69
5.79
5.89
5.99
3
4.1
5.2
6.0
5.4
4.5
3.6
2.7
2.8
5.9
[/input]
[output]
Top students: 28.00%
Between 4.00 and 4.99: 24.00%
Between 3.00 and 3.99: 24.00%
Fail: 24.00%
Average: 4.02
[/output]
[/test]
[test]
[input]
263
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.9
6
6
5.7
5.8
5.5
5.4
6
5.88
5.88
5.88
5.88
5.88
5.3
5.3
5.3
5.75
5.85
5.63
5.63
5.63
5.63
5.63
5.63
5.06
5.96
5.5
5.5
5.5
5.5
5.5
5.5
5.5
5
5
5
4.7
5.41
5
4.6
5.31
4.51
4.88
4.5
4.63
4.3
4.95
4.5
4.75
4.75
4.27
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4.25
4
4
4
4
4
4
4
4
4
4.13
4.13
3.88
4.15
3.36
3.33
3.13
3.13
3.75
3.75
3.75
3.03
3.02
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 50.57%
Between 4.00 and 4.99: 12.55%
Between 3.00 and 3.99: 29.28%
Fail: 7.60%
Average: 4.56
[/output]
[/test]
[test]
[input]
20
3
6
6
6
5.7
5.4
5.63
3
2
2
3
5.3
4
4.7
3
2
2
6
3
6
[/input]
[output]
Top students: 45.00%
Between 4.00 and 4.99: 10.00%
Between 3.00 and 3.99: 25.00%
Fail: 20.00%
Average: 4.19
[/output]
[/test]
[test]
[input]
15
3
3
2
2
3
2
5.7
6
6
5.4
5.3
4
3
2
6
[/input]
[output]
Top students: 40.00%
Between 4.00 and 4.99: 6.67%
Between 3.00 and 3.99: 26.67%
Fail: 26.67%
Average: 3.89
[/output]
[/test]
[test]
[input]
10
6
6
6
6
6
6
6
6
6
6
[/input]
[output]
Top students: 100.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 0.00%
Fail: 0.00%
Average: 6.00
[/output]
[/test]
[test]
[input]
10
6
3
6
6
6
6
6
6
6
5.3
[/input]
[output]
Top students: 90.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 10.00%
Fail: 0.00%
Average: 5.63
[/output]
[/test]
[test]
[input]
38
3
6
5.3
2
6
3
6
6
6
3
3.9
4.75
6
5.05
6
3
5.3
3.75
6
4.5
3
3
6
5
3
6
5.75
6
5.5
3
4
6
6
5
3
4
2
6
[/input]
[output]
Top students: 55.26%
Between 4.00 and 4.99: 10.53%
Between 3.00 and 3.99: 28.95%
Fail: 5.26%
Average: 4.65
[/output]
[/test]
[test]
[input]
22
2
2.90
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 0.00%
Between 4.00 and 4.99: 0.00%
Between 3.00 and 3.99: 0.00%
Fail: 100.00%
Average: 2.04
[/output]
[/test]
[test]
[input]
188
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.84
5.73
5.7
5.62
5.6
5.51
5.51
5.29
5.29
5.29
5.29
5.17
5.15
5.07
5.07
4.98
4.95
4.95
4.91
4.87
4.85
4.76
4.7
4.68
4.66
4.58
4.58
4.56
4.56
4.56
4.55
4.51
4.48
4.44
4.44
4.43
4.39
4.31
4.27
4.24
4.24
4.24
4.22
4.18
4.13
4.09
4.04
4.04
4.04
3.98
3.98
3.98
3.98
3.98
3.94
3.9
3.87
3.83
3.76
3.74
3.71
3.71
3.67
3.59
3.56
3.55
3.52
3.49
3.45
3.44
3.44
3.44
3.44
3.4
3.37
3.34
3.22
3.11
3.07
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 25.00%
Between 4.00 and 4.99: 18.09%
Between 3.00 and 3.99: 28.19%
Fail: 28.72%
Average: 3.78
[/output]
[/test]
[test]
[input]
267
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
6
5.97
5.97
5.95
5.89
5.73
5.73
5.73
5.62
5.56
5.54
5.45
5.35
5.35
5.23
5.22
5.19
5.18
5.18
5.16
5.15
5.12
5.09
5.08
5.07
5.07
5.07
5.07
5.07
5.07
5.03
5
4.99
4.95
4.9
4.87
4.81
4.81
4.77
4.77
4.77
4.75
4.74
4.73
4.73
4.7
4.67
4.66
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.64
4.59
4.59
4.55
4.54
4.54
4.54
4.53
4.53
4.53
4.53
4.53
4.53
4.53
4.52
4.51
4.5
4.49
4.45
4.43
4.42
4.42
4.37
4.36
4.32
4.31
4.29
4.29
4.26
4.24
4.24
4.21
4.2
4.19
4.17
4.15
4.14
4.14
4.09
4.09
4.09
4.09
4.08
4.08
4.06
4.04
4.03
4.03
4.01
3.98
3.98
3.98
3.95
3.93
3.91
3.91
3.89
3.87
3.87
3.87
3.87
3.86
3.85
3.76
3.75
3.74
3.7
3.68
3.67
3.65
3.65
3.65
3.65
3.62
3.6
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.55
3.52
3.47
3.46
3.46
3.45
3.44
3.44
3.44
3.44
3.44
3.44
3.44
3.39
3.37
3.35
3.34
3.33
3.33
3.32
3.31
3.29
3.22
3.22
3.21
3.2
3.14
3.07
3.04
3.03
3.03
3.02
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
3
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
[/input]
[output]
Top students: 24.72%
Between 4.00 and 4.99: 27.34%
Between 3.00 and 3.99: 32.96%
Fail: 14.98%
Average: 4.05
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

