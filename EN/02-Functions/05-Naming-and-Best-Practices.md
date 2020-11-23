# Naming and Best Practices

[slide]
# Naming Functions

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

 - Preferred form: `[Noun]` or `[Adjective] + [Noun]`
 - Should **not** have **capital** letters
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

[slide]

# Best Function Practices

 - Each function should perform a **single**, well-defined task.
 - **Avoid long functions**, **split** them into **several shorter ones**.

 ```js
 function printReceipt(){
    printHeader();
    printBody();
    printFooter();
}
 ```

 Following the practices, the function defined in the example above is **self-documenting** and **easy to test**.

## Code Structure and Code Formatting

Make sure to use correct indentation
- Leave a blank line between functions and after blocks
- Always use curly brackets for conditional and loop bodies
- Avoid long lines and complex expressions

- Example of **well-structured function:**

```js
function sum() {
    // some code…
    // some more code…
}
```

- Example of **badly structured function:**

```js
function sum()
      {
          // some code…
// some more code…
}
```

[/slide]

[slide]
# Problem: Simple Calculator
[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function simpleCalculator(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that receives an array of three elements. 

Write an arrow function that calculate result depending of operator. 

Operator can be: `multiply`, `divide`, `add`, `subtract`.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['5', '5', 'multiply']` | 25 |
|`['40', '8', 'divide']` | 5 |
|`['12', '19', 'add']` | 31 |

[/task-description]
[tests]
[test]
[input]
1
15
multiply
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
61
2
divide
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
2
18
add
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
186
121
subtract
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
2
35
multiply
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
12
2
divide
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
115
338
add
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
46
521
subtract
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Simple Calculator
[code-task title="Math Power" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function simpleCalculator(input){
  let a = Number(input[0]);
  let b = Number(input[1]);  
  let operator = input[2];
  
  switch (operator) {
    case 'multiply':
      let multiply = (a, b) => a * b;
      console.log(multiply(a, b));
      break;
    case 'divide':
      let divide = (a, b) => a / b;
      console.log(divide(a, b));
      break;
    case 'add':
      let add = (a, b) => a + b;
      console.log(add(a, b));
      break;
    case 'subtract':
      let subtract = (a, b) => a - b;
      console.log(subtract(a, b));
      break;
  }
}
```
[/code-editor]
[task-description]
Write a function that receives an array of three elements. 

Write an arrow function that calculate result depending of operator. 

Operator can be: `multiply`, `divide`, `add`, `subtract`.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['5', '5', 'multiply']` | 25 |
|`['40', '8', 'divide']` | 5 |
|`['12', '19', 'add']` | 31 |

[/task-description]
[tests]
[test]
[input]
1
15
multiply
[/input]
[output]
15
[/output]
[/test]
[test]
[input]
61
2
divide
[/input]
[output]
30.5
[/output]
[/test]
[test]
[input]
2
18
add
[/input]
[output]
20
[/output]
[/test]
[test]
[input]
186
121
subtract
[/input]
[output]
65
[/output]
[/test]
[test]
[input]
2
35
multiply
[/input]
[output]
70
[/output]
[/test]
[test]
[input]
12
2
divide
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
115
338
add
[/input]
[output]
453
[/output]
[/test]
[test]
[input]
46
521
subtract
[/input]
[output]
\-475
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]