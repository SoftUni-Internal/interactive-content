# Closure

[slide hideTitle]

# What is a Closure?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-20-21-closure-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In a **closure**, the **inner function scope** includes that of the **outer (enclosing) function**.

## Scope chain

A **closure** has three scope chains:

- it has access to **its own scope** - variables enclosed by its own function body
  
- it has access to the **outer function's** variables

- it has access to the **global** variables

Let us take a look at a simple example:

```js
function outerFunc() {
    var b = 3;

    function innerFunc() {
        var a = 5;
        console.log(a + b);
    }
    return innerFunc;
}
```

The above example has two functions:

- `outerFunc()` function which has a variable `b`, and returns the `innerFunc()` function

- `innerFunc()` function which has a variable called `a`, and accesses an outer variable - `b` within its function body

When a function **finishes execution**, any variables that were defined **inside** the function scope **no longer exist**

[/slide]


[slide hideTitle]

# Functions Returning Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-22-functions-returning-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A **state** is preserved in the outer function (closure):

```js live
const func = (function() {
    let counter = 0;
    return function() {
        console.log(++counter);
    }
})();

func(); //1
func(); //2
func(); //3
```

Every time we call `func()`, the counter will be output to the console and it will be incremented by one. 


[/slide]

[slide hideTitle]
# Problem with Solution: Command Processor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/EN/js-advanced-advanced-functions-24-solution-command-processor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Command Processor" taskId="js-advanced-advanced-functions-Command-Processor"  executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function commandProcessor() {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that keeps a string **inside its context** and can execute different **commands** that modify or print the string to the console.

- `append(string)` - append the given **string** at the end of the internal string

- `removeStart(n)` - **remove** the **first n** characters from the string, **n** is an integer

- `removeEnd(n)` - **remove** the **last n** characters from the string, **n** is an integer

- `print` - **print** the stored string to the **console**

## Input

Check the examples below to see how your code will be executed.

## Output

Whenever you receive the `print` command, the output should be the **printed** to the console.

## Example 1

| **Input** | **Output** |
| --- | --- |
| `let firstZeroTest = commandProcessor();` | loa | 
|  |  |
| `firstZeroTest.append('hello');` | |
| `firstZeroTest.append('again');` | |
| `firstZeroTest.removeStart(3);` | |
| `firstZeroTest.removeEnd(4);` | |
| `firstZeroTest.print();` | |

## Example 2

| **Input** | **Output** |
| --- | --- |
| `let secondZeroTest = commandProcessor();` | 34 | 
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
```
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
```
[/input]
[output]
```
yes
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
