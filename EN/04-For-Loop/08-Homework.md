# Homework

[slide hideTitle]
# Problem: Biggest Number
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
Write a program, which:

* Reads **n** - number representing amount of input numbers
* Reads **n integer numbers**
* Finds and prints the **biggest number**

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
Write a program, which:

* Reads **n** representing the count of numbers to read next
* Finds the **max** and the **min numbers**
* Prints them on the console in the following format:
   - Max number: \{max number\}
   - Min number: \{min number\}

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
Write a program, which:

* Reads **p – the power** and **n – the number**
* Prints the result of n powered by p
* Don't use `Math.pow()`

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
Write a program, which:

* Reads number **n** and **n pairs** of numbers
* Prints "Yes, value=\{sum\}", if the **sum of all** pairs is the **same**
* **Otherwise**, prints "No, maxdiff=\{diff\}"
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
# Problem: Zig Zag Sum
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
Write a program, which:

* Reads **n** - number representing amount of input numbers
* Reads **n integers** 
   * For every **even** line **adds** the number to the result
   * For every **odd** line **subtracts** the number from the result
   * The counting starts from 1.
* **Prints** the result

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
Write a program, which:

* Reads **n** and **n numbers**
* Finds in **percentage** how many of them can **divide without remainder** at **2**, **3** and **4**
* Prints percentages p1, p2 and p3, **formatted** to the second digit

## Example
| **Input** | **Output** 
| --- | --- |
| 3 | 33.33% |
| 3 | 100.00% |
| 6 | 0.00% |
| 9 | |
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
Write a program, which:

* Reads **n** - the count of characters:
* If character is **vowel** adds its value to the result

|character|a|e|i|o|u|
|---------|-|-|-|-|-|
|value|1|2|3|4|5|

* Prints the result

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
Write a program, which:

* Reads rollercoaster **places**, **minimum age**, **count of people** on the queue and **age** for each person
* If all places are taken, prints - **"The rollercoaster departures"**
* In other case, prints **"Waiting..."**

## Example
| **Input** | **Output** 
| --- | --- |
| 2 | The rollercoaster departures |
| 10 | |
| 2 | |
| 15 | |
| 24 | |

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
Write a program, which: 

* Reads **n** 
* Prints **n's multiples** in the format "\{n\} x \{i\} = \{result\}"
* Where i are the numbers from **1 to 10** (**inclusive**)

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
Josh is 18 years old and receives a legacy that consists of X amount of money and time machine. 

He decided to return until 1800, but he did not know if the money would suffice to live without working.

Write a program that calculates whether Josh will have enough money to not have to work until a certain year. 
- Assuming that for every even (1800, 1802, etc.) year will spend 12 000 dollars. 
- For each odd (1801, 1803, etc.) will spend 12 000 + 50 \* \[the years age in a given year\].

## Input
The input is read from the console and contains exactly 2 lines:
- Legacy money – real number in range \[1.00... 1,000,000.00\] 
- Year to be lived (inclusive) – integer in range \[1801... 1900\]

## Output
Print on the console a single line. The amount must be formatted to two decimal digits:
- If the money are enough:
    - "Yes! He will live a carefree life and will have \{N\} dollars left." – where N are the money that will remain
- If the money are NOT enough:
    - "He will need \{М\} dollars to survive." - where M are money he needs

## Example

| Input | Output |
| --- | --- |
| 50000 | Yes! He will live a carefree life and will have 13050.00 dollars left. |
| 1802 | |

### Comments
- 1800 -> even year;
    - Josh spends 12000 dollars
    - 50000 – 12000 = 38000 dollars remain
- 1801 -> odd year 
    - he spends 12000 + 19 \* 50 = 12000 + 950 = 12950 dollars
    - 38000 – 12950 = 25050 dollars remain
- 1802 -> even year
    - he spends 12000 dollars
    - 25050 – 12000 = 13050 dollars remain

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

Write a program to calculate the average cost per month for a family over a period of time. For each month the costs are as follows:

- For electricity - every month the bill is different and will be read from the console
- For water - 20$
- For Internet - 15$
- For others - sum the bills for electricity, water and Internet and add 20%

For each bill, you need to calculate how much total is paid for all months.

# Input

The input is read from the console: 

- The months for which the average cost is searched – integer in range \[1... 100\] 
- For each month – the bill for electricity – a real number in range \[1.00... 1000.00\]

# Output
Print to the console 5 rows: 
- "Electricity: \{electricity for all months\} $" 
- "Water: \{water for all months\} $" 
- "Internet: \{Internet for all months\} $" 
- "Other: \{Other for all months\} $" 
- "Average: \{Average all costs per month\} $ "

All bills sohould be formatted to the 2nd digit after the decimal point.

## Example

| Input | Output |
| --- | --- |
| 5 | Electricity: 447.16 $ |
| 68.63 | Water: 100.00 $ |
| 89.25 | Internet: 75.00 $ |
| 132.53 | Other: 746.59 $ |
| 93.53 | Average: 273.75 $ |
| 63.22 | |

### Comments
For 5 months:
- Electricity -> 68.63 \+ 89.25 \+ 132.53 \+ 93.53 \+ 63.22 = 447.16$
- Water -> 5 months \* 20$ = 100$
- Internet -> 5 months \* 15$ = 75$
- Others:
    - 68.63+20+15) + 20% = 124.356  
    - (89.25+20+15) + 20% = 149.1
    - (132.53+20+15) + 20% = 201.036
    - (93.53+20+15) + 20% = 154.236
    - (63.22+20+15) + 20% = 117.864
- Total = 746.592$
- Average bills per month = (447.16+100+75+746.592)/5 = 273.7504$

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
Electricity: 447.16 $
Water: 100.00 $
Internet: 75.00 $
Other: 746.59 $
Average: 273.75 $
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
Electricity: 1390.43 $
Water: 160.00 $
Internet: 120.00 $
Other: 2004.52 $
Average: 459.37 $
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
Electricity: 2220.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 3084.00 $
Average: 565.40 $
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
Electricity: 1275.00 $
Water: 1000.00 $
Internet: 750.00 $
Other: 3630.00 $
Average: 133.10 $
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
Electricity: 7666.09 $
Water: 460.00 $
Internet: 345.00 $
Other: 10165.31 $
Average: 810.28 $
[/output]
[/test]
[test]
[input]
1
123.34
[/input]
[output]
Electricity: 123.34 $
Water: 20.00 $
Internet: 15.00 $
Other: 190.01 $
Average: 348.35 $
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
Electricity: 55.00 $
Water: 200.00 $
Internet: 150.00 $
Other: 486.00 $
Average: 89.10 $
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Hospital
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
For a period of time, patients are arriving every day in the hospital for examination. 

It has initially 7 doctors. 

Each doctor can only review one patient per day, but sometimes there is a shortage of doctors, so other patients are sent to other hospitals. 

Every third day the hospital makes calculations and if the number of unreviewed patients is greater than the number of reviewed, one more doctor is appointed. 

As the appointment of the doctor occurs before the intake of patients for the day. 

Write a program that calculates the number of reviewed and unreviewed patients for the given period.

## Input
The input is read from the console and contains: 

- The period for which you need to perform calculations - integer in range \[1... 1000\] 
- On the following lines (equal to the number of days) – the number of patients arriving for review for the current day - integer in range \[0... 10 000\]

Print on the console 2 lines:
- First line: "Treated patients: \{Number of patients reviewed\}." 
- Second line: "Untreated patients: \{Number of unreviewed patients\}."

## Example

| Input | Output |
| --- | --- |
| 4 | Treated patients: 23. |
| 7 | Untreated patients: 21. |
| 27 | |
| 9 | |
| 1 | |

### Comments
- Day 1: 7 treated and 0 untreated patients for the day 
- Day 2: 7 treated and 20 untreated patients for the day 
- Day 3: Until now, the patients treated were 14 and untreated – 20 – > A new doctor is appointed – > 8 treated and 1 untreated patient for the day 
- Day 4: 1 treated and 0 untreated patient for the day 
- Total: 23 treated and 21 untreated patients

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

Write a program that prints the numbers in the range \[1...1000\], which end in 7. 

Print the numbers on a single line, separated by a single space.

## Example

| Input | | Output |
| --- | --- | --- |
| (no input) | | 7 17 27 ... 997 |
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
Write a program that reads the n - count of numbers entered by the user, and calculates the amount of the minimum and maximum numbers of odd and even positions (counting from 1). 

If there is not minimum/maximum element print "No".

## Input
- On the first input line read count of numbers - N - integer \[0...100\]
- On every next line read a number - floating-point number \[-100...100\]

## Output
The output should be formatted in the following form:

- "OddSum=" + \{sum of the numbers on odd positions\},
- "OddMin=" + \{minimum value of the numbers of odd positions\} / \{"No"\},
- "OddMax=" + \{maximum value of the numbers of odd positions\} / \{"No"\},
- "EvenSum=" + \{sum of the numbers of even positions\},
- "EvenMin=" + \{minimum value of the numbers of even positions\} / \{"No"\},
- "EvenMax=" + \{maximum value of the numbers of even positions\} / \{"No"\}
- Each number should be formatted to the second decimal point.

## Example

| Input | Output |   
| --- | --- |
| 5 | OddSum=8.00, |
| 3 | OddMin=-3.00, |
| -2 | OddMax=8.00, |
| 8 | EvenSum=9.00, |
| 11 | EvenMin=-2.00, |
| -3 | EvenMax=11.00 |

| Input | Output |
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
[test]
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

