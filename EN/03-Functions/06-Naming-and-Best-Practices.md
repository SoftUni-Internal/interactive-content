# Naming and Best Practices

[slide hideTitle]
# Naming Functions

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-30-naming-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- Function names should **describe their task** in a **clear** and **unambigious** way
- Their names should be **meaningful and not very long**
- Should answer the question: "**What does this function do?**"

Examples for **good** names:

```js
findStudent, loadSeport, add
```

Examples for **bad** names:

```js
Method1, DoSomething, handleStuff, DirtyHack
```

If you **cannot** find a **good name** for a function, think about **whether it has a clear intent**.

## Naming Function Parameters

 - Preferred form: Noun or Adjective + Noun
 - Should **not contain** **capital** letters
 - Should be **meaningful**
 - Unit of measure should be obvious

Examples for **good** parameter names:

```js
firstName, report, speedKmH, usersList, fontSizeInPixels, font
```

Examples for **bad** parameter names:

```js
p, p1, p2, populate, LastName, lastName
```
[/slide]

[slide hideTitle]

# Best Function Practices

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-29-naming-and-best-practices-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


- Each function should perform a **single**, well-defined task

- **Avoid long functions**, **split** them into **several shorter ones**

```js
function printReceipt(){
  printHeader();
  printBody();
  printFooter();
}
```

Following the practices, the function defined in the example above is **self-documenting** and **easy to test**.

## Code Structure and Code Formatting

Make sure to use correct indentation.

- Leave a blank line between functions and after blocks

- Always use curly brackets for conditional and loop bodies

- Avoid long lines and complex expressions

This is an example of a **well-structured function:**

```js
function sum() {
    let name = "Jacob";
    console.log(name);
}
```

- Example of a **badly structured function:**

```js
function sum()​
      {​
          let name = "Jacob";
console.log(name);}
}
```

[/slide]

[slide hideTitle]
# Problem with Solution: Simple Calculator

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/03.JS-Fundamentals-Functions/EN/03.JS-Fundamentals-Functions-solution-simple-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Simple Calculator" taskId="fundamentals-js-functions-lab-Simple-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculator(num1, num2, operator){
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

Write an arrow function that receives an **array containing three elements** (two numbers and a string) and calculates the result depending on the specified operator. 

The operator could only be one of the following: "**multiply**", "**divide**", "**add**", and "**subtract**".

## Examples
| **Input** | **Output** |
| --- | --- |
| calculator(5, 5, 'multiply') | 25 |
| calculator(40, 8, 'divide') | 5 |
| calculator(12, 19, 'add') | 31 |

[/task-description]
[tests]
[test open]
[input]
calculator(5, 5, 'multiply')
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
calculator(40, 8, 'divide')
[/input]
[output]
5
[/output]
[/test]
[test open]
[input]
calculator(12, 19, 'add')
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
calculator(1, 15, 'multiply')
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
calculator(61, 2, 'divide')
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
calculator(2, 18, 'add')
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
calculator(186, 121, 'subtract')
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
calculator(2, 35, 'multiply')
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
calculator(12, 2, 'divide')
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
calculator(115, 338, 'add')
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
calculator(46, 521, 'subtract')
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

