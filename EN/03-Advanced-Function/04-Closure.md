# Closure

[slide]
# What is a closure?

A **closure** is JavaScript feature where the **inner function scope** includes that of the **outer (enclosing) function**.

## Scope chain

A **closure** has three scope chains:

- it has access to **its own scope** — variables enclosed by its own function body
  
- it has access to the **outer function**’s variables

- it has access to the **global** variables

Let us take a look at a simple example:

```js
function outerFunc() {
   var numTwo = 3;

   function innerFunc() {
         var numOne = 5; 
         console.log(a + b);
    }
   return innerFunc;
}
```

The above example has two functions:

- `outerFunc()` function which has a variable b, and returns the `innerFunc()` function

- `innerFunc()` function which has a variable called `a`, and accesses an outer variable \- `b` within its function body

When a function **finishes execution**, any variables that were defined **inside** the function scope **no longer exist**

[/slide]


[slide]
# Problem: Command Processor

[code-task title="Problem: Command Processor" taskId="js-advanced-advanced-functions-lab-problem-01" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solution() {
    // Write your code here
}
```
[/code-editor]
[task-description]
## Description

Write a program that keeps a string **inside its context** and can execute different **commands** that modify or print the string on the console.

- `append(string)` - append the given **string** at the end of the internal string

- `removeStart(n)` - **remove** the **first n** characters from the string, **n** is an integer

- `removeEnd(n)` - **remove** the **last n** characters from the string, **n** is an integer

- `print` - **print** the stored string on the **console**

## Input

Check the examples below to see how your code will be executed

## Output

Whenever you receive the command **print**, the output should be the **printed** on the console.

## Examples

| **Sample Input** | **Output** |
| --- | --- |
| `let firstZeroTest = solution();` | loa | 
|  |  |
| `firstZeroTest.append('hello');` | |
| `firstZeroTest.append('again');` | |
| `firstZeroTest.removeStart(3);` | |
| `firstZeroTest.removeEnd(4);` | |

| **Sample Input** | **Output** |
| --- | --- |
| `let secondZeroTest = solution();` | 34 | 
|  |  |
| `firstZeroTest.append('123');` | |
| `firstZeroTest.append('45');` | |
| `firstZeroTest.removeStart(2);` | |
| `firstZeroTest.removeEnd(1);` | |
| `firstZeroTest.print();` | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
// Acquire console
let log = \[\];
let oldcon = console.log;
console.log = (string) =\> log.push(string);

let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();

// Restore the console
console.log = oldcon;

assert.equal(log\[0\], '34', 'Printed wrong value.');
assert.equal(log\[1\], 'loa', 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Solution: Command Processor

[code-task title="Solution: Command Processor" taskId="js-advanced-advanced-functions-lab-solution-01" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```

```
[/code-editor]
[task-description]
## Description

Write a program that keeps a string **inside its context** and can execute different **commands** that modify or print the string on the console.

- `append(string)` - append the given **string** at the end of the internal string

- `removeStart(n)` - **remove** the **first n** characters from the string, **n** is an integer

- `removeEnd(n)` - **remove** the **last n** characters from the string, **n** is an integer

- `print` - **print** the stored string on the **console**

## Input

Check the examples below to see how your code will be executed

## Output

Whenever you receive the command **print**, the output should be the **printed** on the console.

## Examples

| **Sample Input** | **Output** |
| --- | --- |
| `let firstZeroTest = solution();` | loa |
|  |  |
| `firstZeroTest.append('hello');` | |
| `firstZeroTest.append('again');` | |
| `firstZeroTest.removeStart(3);` | |
| `firstZeroTest.removeEnd(4);` | |

| **Sample Input** | **Output** |
| --- | --- |
| `let secondZeroTest = solution();` | 34 | 
|  |  |
| `firstZeroTest.append('123');` | |
| `firstZeroTest.append('45');` | |
| `firstZeroTest.removeStart(2);` | |
| `firstZeroTest.removeEnd(1);` | |
| `firstZeroTest.print();` | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
// Acquire console
let log = \[\];
let oldcon = console.log;
console.log = (string) =\> log.push(string);

let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();

// Restore the console
console.log = oldcon;

assert.equal(log\[0\], '34', 'Printed wrong value.');
assert.equal(log\[1\], 'loa', 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
