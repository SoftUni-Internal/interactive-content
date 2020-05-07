# Homework

[slide]
# Video

[vimeo-video startTimeInSeconds="7335" endTimeInSeconds="9030"]
[stream language="EN" videoId="341553633"  /]
[stream language="RO" videoId="387288483" default /]
[/vimeo-video]

[/slide]

[slide]
# Homework
Welcome to the homework. 

Now we are going to write a couple of console applications, by which we are going to make a few more steps into programming. 

We have prepared some problems for you to solve.

Let's solve a few problems to confirm what we have learned.

[image assetsSrc="homeowrk.png" /]
[/slide]

[slide]
# Problem: Guess the Password
[code-task title="Guess the Password" taskId="28-02-p-01" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to check a password:

  * Read a string: the password **guess**
  * Print **"Welcome"** if the password guess is **"s3cr3t!"**
  * Print **"Wrong password!"** in all other cases 
  
## Example
| **Input** | **Output** |
| --- | --- |
| s3cr3t! | Welcome |

## Example
| **Input** | **Output** |
| --- | --- |
| qwerty! | Wrong password! |

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
qwerty!
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
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Boiling Water
[code-task title="Boiling Water" taskId="28-02-p-02" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program, which checks for hot water: 

  * Read a floating-point number: the water **temperature** (in °C)
  * Print **"The water is boiling"** if the number **> 100**
  * Prints **"The water is not hot enough"** in all other cases
  
## Example
| **Input** | **Output** |
| --- | --- |
| 104.8 | The water is boiling |

## Example
| **Input** | **Output** |
| --- | --- |
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
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Speed Info
[code-task title="Speed Info" taskId="28-02-p-03" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to check for fast / slow speed: 

  * Read the **speed** (a floating-point number)
  * Print **"Slow"** if the speed **<= 30**
  * Print **"Fast"** if the speed **> 30**
  
## Example
| **Input** | **Output** |
| --- | --- |
| 30 | Slow |

## Example
| **Input** | **Output** |
| --- | --- |
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
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Area of Figures
[code-task title="Area of Figures" taskId="28-02-p-04" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
import math

# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to calculate the area of different figures:
  * Reads a string: the figure **type**
  * Checks if the entered figure is **square**, **rectangle** or **circle**
  * Reads a number for square and circle or two numbers for rectangle
    * Numbers will be floating-point
  * Prints the calculated area **formatted** to the second digit after the decimal point
  * For unknown figure print **"Unknown figure"**

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
circle
2.5
[/input]
[output]
19.63
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
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Tickets
[code-task title="Tickets" taskId="28-02-p-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to calculate a ticket price:

  * Read a ticket type: either **student** or **regular**
  * Print the **price** in the following format "$\{price\}":
    * The price should be **formatted** to 2nd digit after the decimal point
  * Student ticket price: **1.00**
  * Regular ticket price: **1.60**
  * For invalid type print **"Invalid ticket type!"**

  
## Example
| **Input** | **Output** |
| --- | --- |
| student | $1.00 |

## Example
| **Input** | **Output** |
| --- | --- |
| regular | $1.60 |
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
vip
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
[code-io /]
[/code-task]
[/slide]

[slide]
# Problem: Coffee Shop
[code-task title="Coffee Shop" taskId="28-02-p-06" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to calculate the drink price in a coffee shop:

  * Read a drink: either **"coffee"** or **"tea"**
  * Read an extra: either **"sugar"** or **"no"**
  * Print the price in format `"Final price: ${price}"`
    * The price should be **formatted** to 2nd digit after the decimal point
  
Prices:
  * Coffee price: **1.00**
  * Tea price: **0.60**
  * Sugar price: **0.40**

## Example
| **Input** | **Output** |
| --- | --- |
| coffee | Final price: $1.40 |
| sugar | |

## Example
| **Input** | **Output** |
| --- | --- |
| tea | Final price: $0.60 |
| no | |

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
[test]
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
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Valid Triangle
[code-task title="Valid Triangle" taskId="28-02-p-07" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
Write a program to check if a triangle is valid by its sizes:

  * Read 3 integers: the **sides of a triangle**
  * Checks if each side is less than the sum of the others 2
    * Prints **"Valid Triangle"** if the above condition is met
    * Prints **"Invalid Triangle"** otherwise 

## Example
| **Input** | **Output** |
| --- | --- |
| 3 | Valid Triangle |
| 4 | |
| 5 | |

## Example
| **Input** | **Output** |
| --- | --- |
| 5 | Invalid Triangle |
| 8 | |
| 3 | |

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
5
8
3
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
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Sum of Numbers
[code-task title="Sum of Numbers" taskId="28-02-p-08" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
Write a program, which:

* Receives **3 numbers**
* Prints ***"True"*** if the **sum** of **2** of them is **equal** to the **third one**
* Prints ***"False"*** if the condition above is **NOT met**

## Example
| **Input** | **Output** |
| --- | --- |
| 2 | True |
| 6 | |
| 4 | |

## Example
| **Input** | **Output** |
| --- | --- |
| 1 | False |
| 1 | |
| 1 | |
[/task-description]
[tests]
[test open]
[input]
2
6
4
[/input]
[output]
True
[/output]
[/test]
[test open]
[input]
1
1
1
[/input]
[output]
False
[/output]
[/test]
[test]
[input]
3
4
5
[/input]
[output]
False
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
True
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Homework Results

[tasks-results /]

[/slide]