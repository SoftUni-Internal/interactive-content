# Strings

[slide hideTitle]
# What is a String?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-3-4-5-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Strings** are series of **characters.**

They are used for storing text.

**One of their most used properties is** their length, which can be acquired using `.length()` on any string.

The text should be wrapped in quotes, there are three types which can be used: 

-  **Double quotes**

```js
let myString = "Hello!";
```

-  **Single quotes**

```js
let myString = 'Hello!';
```

-  **Backticks**

```js
let myString = `Hello!`;
```

We can **concatenate strings** with the plus (`+`) operator.

```js live
let hello = 'Hello';
let world = 'World';

let concatenated = hello + ' ' + world;

console.log(`${concatenated}`);
```

## Accessing Strings


**Strings** are read-only chains of characters, this means that we cannot change them. 

We **access** them by their index. 

There are two ways of doing this:

- The first one is by using indexing operator `[]`

```js live
let hi = 'Hi, JS';

console.log(hi[4]);
```

This example will return `J`.

-  We can access a **string** also with the method `charAt()`

And it will look like that:

```js live
let hi = 'Hi, JS';

console.log(hi.charAt(4));
```

That will also return `J` because the two ways of accessing indexes are identical.

[/slide]

[slide hideTitle]
# Iterate Through a String: Demo

Iterate through a string using a `for-of` loop:

```js live
let text = 'Hello, there!'

for(let el of text){
  console.log(el);
}
```

In this example, every character in `text` will be printed to the console.

[/slide]

[slide hideTitle]
# Problem with Solution: Print Characters

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-6-solution-print-characters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Characters" taskId="js-fund-part-2-text-processing-lab-Print-Characters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printCharacters(input){
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
Write a function that receives a **string** and prints its characters on separate lines. 

# Example
  | **Input** | **Output** |
| --- | --- |
| printCharacters('AWord') | A |
||W|
||o|
||r|
||d|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
printCharacters('AWord')
[/input]
[output]
A
W
o
r
d
[/output]
[/test]
[test]
[input]
printCharacters('AWord1')
[/input]
[output]
A
W
o
r
d
1
[/output]
[/test]
[test]
[input]
printCharacters('A')
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
printCharacters('AB')
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
printCharacters('Pesho')
[/input]
[output]
P
e
s
h
o
[/output]
[/test]
[test]
[input]
printCharacters('GOSHOpesho')
[/input]
[output]
G
O
S
H
O
p
e
s
h
o
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

