[slide]
# If-Else Conditions

[vimeo-video]
[stream language="EN" videoId="486879057/c8e3a2cdaa" default /]
[stream language="RO" videoId="486879057/c8e3a2cdaa"  /]
[/video-vimeo]

The `if` construction may also contain an `else` clause to give a specific action in case the Boolean expression (which is set at the beginning `if (bool expression)` ) returns a negative result (`false`). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* if the result of the condition is positive (`true`) – we perform some actions
* when it is negative (`false`) – others. 
[image assetsSrc="02-usecase-if-else-statement.png" /]

The format of the construction is:
```js
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

If the condition is `false`, the else-statement runs.

Because a condition can’t be simultaneously `true` and `false`, the then-statement and the else-statement of an `if-else` statement can **never both run**. 

After the then-statement or the `else`-statement runs, control is transferred to the next statement after the `if` statement.

In an `if` statement that doesn’t include an else statement, if condition is `true`, the then-statement runs. 

If condition is `false`, control is transferred to the next statement after the if statement.

Both the then-statement and the else-statement can consist of a single statement or multiple statements that are enclosed in braces `{ }`. 

For a single statement, the braces are optional but recommended.

The statement or statements in the then-statement and the else-statement can be of any kind, including another if statement nested inside the original if statement.

## Example: Weather
This is an extended version of the example from the previous slide.

As you can see now we have another case, which will be executed when the condition in the `if` turns out to be **false.**
```js
function example(input) {
  if (weather == "rainy") {
    console.log("Take an umbrella!");
  } else {
    console.log("Leave your umbrella at home!")
  }
}
```
[/slide]

[slide]
# Block of Code

[vimeo-video]
[stream language="EN" videoId="486879069/fa69d41600" default /]
[stream language="RO" videoId="486879069/fa69d41600"  /]
[/video-vimeo]

When we have **only one command** in the body of the **if construction**, we can **skip the curly brackets**, indicating the conditional operator body. 

When we want to execute **block of code** (group of commands), curly brackets are **required**. 

In case we drop them, **only the first line** after the **if clause** will be executed.

Here is an example where **skipping** the curly brackets leads to **confusion:**
```js live
let color = "red";
if (color == "red") 
  console.log("tomato");
else
  console.log("banana");
console.log("lemon"); 
```

With curly braces:
```js live
let color = "red";
if (color == "red") {
  console.log("tomato");
  console.log("strawberry"); 
} else {
  console.log("banana");
  console.log("lemon");
}
```
[/slide]

[slide]
# Problem: Even or Odd

[vimeo-video]
[stream language="EN" videoId="486879240/35e90b72ee" default /]
[stream language="RO" videoId="486879240/35e90b72ee"  /]
[/video-vimeo]

[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function evenOrOdd(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print `even`
  * If it's odd, print `odd`

# Example

| **Input** | **Output** |
| --- | --- |
| 4 | even |
| 7 | odd |


[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Even or Odd
[code-task title="Even or Odd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function evenOrOdd(input) {
  let num = Number(input.shift());
   if (num % 2 === 0) {
      console.log("even");
   } else {
      console.log("odd");
   }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which checks if a number is **even** or **odd**

  * If it's even, print `even`
  * If it's odd, print `odd`

# Example

| **Input** | **Output** |
| --- | --- |
| 4 | even |
| 7 | odd |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
even
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
odd
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
even
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

