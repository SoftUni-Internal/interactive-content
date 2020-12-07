[slide]
# Iterating over Characters

[vimeo-video]
[stream language="EN" videoId="487119574/ea95aca57d" default /]
[stream language="RO" videoId="487119574/ea95aca57d"  /]
[/video-vimeo]

It is good to know that **for loops** do not only work with numbers. 

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
 
Computers can only understand numbers, so an **ASCII** code is the numerical representation of a character such as `a` or `@` or an action of some sort. 

This is an example part of the table:
[image assetsSrc="04-for-loop-ascii.png" /]

And here you can check the whole [ASCII Table](http://www.asciitable.com)

The columns that you would most probably use for the purposes of this course are the **decimal** and **character** ones.

For example, the decimal value of the character **'a'** is **97** and the one corresponding to `@` is `64`.

# Character Conversions
Convert an ASCII / Unicode number into a character:

```js live
let letter = String.fromCharCode(65);
console.log(letter);
```

Convert a character to its ASCII / Unicode code:

```js live
let letter = 'A';
let asciiValue = letter.charCodeAt(0);
console.log(asciiValue);
```
[/slide]

[slide]
# Problem: Latin Letters


[vimeo-video]
[stream language="EN" videoId="487119629/a9b273defe" default /]
[stream language="RO" videoId="487119629/a9b273defe"  /]
[/video-vimeo]

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

[vimeo-video]
[stream language="EN" videoId="487119646/6501686e7f" default /]
[stream language="RO" videoId="487119646/6501686e7f"  /]
[/video-vimeo]

[code-task title="Latin Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function latinLetters(input) {
  let startChar = input[0];
  let endChar = input[1];
  
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
