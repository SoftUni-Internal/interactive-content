[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/homeowrk.png"/]
[/slide]

[slide]
# Problem: Calculate Speed
[code-task title="Calculate Speed" taskId="p-01" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to calculate the speed by time and distance:
  * Read 2 floating-point numbers: **distance** and **time**
  * Calculate the **speed** needed to travel a given distance for given time
  * Print the calculated result
# Example
## Input
- 15
- 2
## Output
- 7.5
[/task-description]
[tests]
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
[code-task title="Currency Converter" taskId="p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to convert from USD to EUR:
  * Read a **floating-point number**: the **dollars** to be converted 
  * Convert dollars to euro (use fixed rate of dollars to euro: **0.88**)
  * Print the converted value in **euro**

# Example
## Input
- 17
## Output
- 14.96
## Input
- 87
## Output
- 76.56
[/task-description]
[tests]
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
[code-task title="Area of Triangle" taskId="p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to calculate a triangle area:

  * Read from input a side **a** and height for that side **ha**
  * Calculate the area of a triangle by the side and height
  * Print the **area**, formatted to the **2nd digit** after decimal point
# Example
## Input
- 5
- 10
## Output
- 25.00
[/task-description]
[tests]
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
13.12
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
[code-task title="Four Operations" taskId="p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:
  * **Reads** 2 real numbers from the **console**
  * Performs **4 arithmetic operations** on the obtained 2 numbers, in the following order: `+`, `-`, `*`, `/`
  * **Formats** and **prints** the results like this example:
# Example
## Input
- 5.00
- 10.00
## Output
- 5.00 + 10.00 = 15.00
- 5.00 - 10.00 = -5.00
- 5.00 * 10.00 = 50.00
- 5.00 / 10.00 = 0.50
[/task-description]
[tests]
[test]
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
[code-task title="Days to Minutes" taskId="p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program to convert from days to minutes:
  * Read a single **integer** (the **days** to be converted)
  * Convert the days to minutes (use calculations)
  * Print the **minutes**
# Example
## Input
- 2
## Output
- 2880
## Input
- 5
## Output
- 7200
[/task-description]
[tests]
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
# Problem: Person Info
[code-task title="Person Info" taskId="p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:
  * Reads 4 lines of **strings**: **first name**, **last name**, **country** and **town** 
  * Prints information about a person in the following format: `"{firstName} {lastName} from {country} - {town}!"`
# Example
## Input
- Kelly
- Smith
- Ireland
- Cork
## Output
- Kelly Smith from Ireland - Cork!
[/task-description]
[tests]
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
[code-task title="Town Info" taskId="p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
# Description
Write a program, which:
  * Reads **3 lines** of input: **name** (string), **population** and **area** (integers)
  * Prints information about a town in the following format: `"Town {name} has population of {population} and area {area} square km."`
# Example
## Input
- Berlin
- 3675000
- 984
## Output
- Town Berlin has population of 3675000 and area 984 square km.
[/task-description]
[tests]
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
# Video

[vimeo-video videoId="341528681" startTimeInSeconds="5359" endTimeInSeconds="9641" /]

[/slide]

