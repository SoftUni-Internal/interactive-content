// sectionId: "Javascript::Programming-Basics::Conditional-Statements::If-Else"

[slide hideTitle]
# If-Else Conditions

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-17-if-else-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `if` construction may also contain an `else` clause to give a specific action in case the Boolean expression (which is set at the beginning `if (bool expression)` ) returns a negative result (`false`). 

Built this way, **the conditional statement** is called `if-else` and its behavior is as follows: 
* If the result of the condition is positive (`true`) – we perform some actions
* When it is negative (`false`) – other. 
[image assetsSrc="02-usecase-if-else-statement.png" /]

The format of the construction is:
```js
if (condition) {
  // condition body;
} else {
  // else construction body;
}
```

The condition represents an expression that is considered to be either `truthy` or `falsy`.

Because a condition can’t be simultaneously `true` and `false`, the `if`-statement and the `else`-statement of an `if-else` statement can **never both run**. 

If the condition in the `if`-statement returns `true`, we enter the condition body of the `if`-statement.

If the condition in the `if`-statement returns `false`, we will enter the construction body of the `else`-statement and the code inside it, executes.

Both the `if`-statement and the `else`-statement can consist of a single statement or multiple statements that are enclosed in braces `{ }`. 

For a single statement, the braces are optional but recommended.

The statement or statements in the `if`-statement and the `else`-statement can be of any kind, including another `if`-statement nested inside the original `if`- statement.

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

[slide hideTitle]
# Block of Code

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-18-19-Blocks-of-code-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we have **only one command** in the body of the **if construction**, we can **skip the curly brackets**, indicating the conditional operator body. 

When we want to execute **block of code** (a group of commands), curly brackets are **required**. 

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

[slide hideTitle]
# Problem with Solution: Even or Odd

[video src="https://videos.softuni.org/hls/javascript-basics/02.Conditions/EN/02-conditional-statements-js-20-Problem-Solution-Even-or-Odd-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Even or Odd" taskId="pb-js-conditional-statements-Even-or-Odd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenOrOdd(input) {
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Create a program, which checks if a number is **even** or **odd**

  * If it is even, print "**even**"
  * If it is odd, print "**odd**"

# Example

| **Input** | **Output** |
| --- | --- |
| evenOrOdd(4) | even |
| evenOrOdd(7) | odd |


[/task-description]
[tests]
[test open]
[input]
evenOrOdd(4)
[/input]
[output]
even
[/output]
[/test]
[test open]
[input]
evenOrOdd(7)
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

