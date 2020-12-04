# Homework
[slide]

# Problem: Guess the Password
[code-task title="Guess the Password" taskId="pb-js-02-p-01" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function guessThePassword(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to check a password:

  * Read a string: the password **guess**
  * Print `Welcome` if the password guess is `s3cr3t!`
  * Print `Wrong password!` in all other cases 

# Example

| **Input** | **Output** |
| --- | --- |
| s3cr3t! | Welcome |
| qwerty | Wrong password! |

[/task-description]
[tests]
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
[code-task title="Boiling Water" taskId="pb-js-02-p-02" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function boilingWater(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which checks for hot water: 

  * Read a floating-point number: the water **temperature** (in °C)
  * Print `The water is boiling` if the number `> 100`
  * Prints `The water is not hot enough` in all other cases 

  # Example

| **Input** | **Output** |
| --- | --- |
| 104.8 | The water is boiling |
| 29 | The water is not hot enough |

[/task-description]
[tests]
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
[code-task title="Speed Info" taskId="pb-js-02-p-03" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function speedInfo(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to check for fast / slow speed: 

  * Read the **speed** (a floating-point number)
  * Print `Slow` if the speed `<= 30`
  * Print `Fast` if the speed `> 30`

  # Example

| **Input** | **Output** |
| --- | --- |
| 30 | Slow |
| 60 | Fast |

[/task-description]
[tests]
[test]
[input]
30
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
# Problem: Bonus Score
[code-task title="Bonus Score" taskId="pb-js-02-p-04" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function bonusScore(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
An integer is given which the initial **number** of points. 

**Bonus points** are awarded according to the rules described below. 

Write a function that calculates 

- the **received** bonus points from the number 

- which is the initial **total number of points** - Which is the **number plus the bonus points.**

If the number is up to **100 inclusive**, the bonus points are **5**.
If the number is **greater than 100**, the bonus points are **20 percent of the number**.
If the number is **greater than 1000**, the bonus points are **10 percent of the number**.

Additional bonus points, accrued separately from the previous ones:

- For an even number you add 1 point

-	For a number ending in 5, you add 2 points

# Example

| **Input** | **Output** |
| --- | --- |
| 20| 6 |
|  |26 |

| **Input** | **Output** |
| --- | --- |
| 175| 37 |
|  |212 |

| **Input** | **Output** |
| --- | --- |
| 2703| 270.3 |
|  |2973.3 |

[/task-description]
[tests]
[test]
[input]
20
[/input]
[output]
6
26
[/output]
[/test]
[test]
[input]
140
[/input]
[output]
29
169
[/output]
[/test]
[test]
[input]
175
[/input]
[output]
37
212
[/output]
[/test]
[test]
[input]
35
[/input]
[output]
7
42
[/output]
[/test]
[test]
[input]
17
[/input]
[output]
5
22
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
6
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Tickets
[code-task title="Tickets" taskId="pb-js-02-p-05" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function tickets(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program to calculate a ticket price:

  * Read a ticket type: either **student** or **regular**
  * Print the **price** in the following format `${price}`:
    * The price should be **formatted** to 2nd digit after the decimal point
  * Student ticket price: **1.00**
  * Regular ticket price: **1.60**
  * For invalid type print `Invalid ticket type!`

# Example

| **Input** | **Output** |
| --- | --- |
| student | $1.00 |


[/task-description]
[tests]
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
# Homework Results
[tasks-results/]

[/slide]