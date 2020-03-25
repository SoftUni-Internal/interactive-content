[slide]
# Iterating over Characters
It is good to know that the **for loops** don't only work with numbers. 

We can also use **for loops** to iterate over **characters**.

Here is an example of how a loop can pass sequentially through some **letters** in the English alphabet:
```js live
function latinLetters(startChar, endChar) {
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);
  let result = '';
  for (let i = startValue; i <= endValue; i++) {
    result += String.fromCharCode(i) + ' ';
  }
  console.log(result);
}
```

# ASCII Table
**ASCII** stands for American Standard Code for Information Interchange. 
 
Computers can only understand numbers, so an **ASCII** code is the numerical representation of a character such as 'a' or '@' or an action of some sort. 

This is an example part of the table:

[image src="https://github.com/AtanasovAtanas/pb-interactive-csharp/blob/master/assets/04-for-loop-ascii.png"/]

And here you can check the whole **ASCII Table**: **http://www.asciitable.com**

The columns that you would most probably use for the purposes of this course are the **decimal** and **character** ones.

For example, the decimal value of the character **'a'** is **97** and the one corresponding to **'@'** is **64**.

# Character Conversions
Convert an ASCII / Unicode number into a character:
```js
let letter = String.fromCharCode(65);
console.log(letter); // A
```

Convert a character to its ASCII / Unicode code:
```js
let letter = 'A';
let asciiValue = letter.charCodeAt(0);
console.log(asciiValue); // 65
```
[/slide]

[slide]
# Problem: Latin Letters

[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function latinLetters(input) {
    // Write your code here...
}

```
[/code-editor]
[task-description]
Write a program, which:

* Reads 2 letters
* Prints all letters in the given range inclusive
[/task-description]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Latin Letters
[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function latinLetters(input) {
  let startChar = input.shift();
  let endChar = input.shift();
  
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);
  let result = '';
  for (let i = startValue; i <= endValue; i++) {
    result += String.fromCharCode(i) + ' ';
  }
  console.log(result);
}

```
[/code-editor]
[task-description]
Write a program, which:

* Reads 2 letters
* Prints all letters in the given range inclusive
[/task-description]
[code-io /]
[/code-task]

[/slide]

[slide]
# Video
[vimeo-video videoId="342192726" startTimeInSeconds="3601" endTimeInSeconds="4472" /]

[/slide]