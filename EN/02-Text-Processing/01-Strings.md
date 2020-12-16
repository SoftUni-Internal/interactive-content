# String

[slide]
# What is a String

[vimeo-video]
[stream language="EN" videoId="489817383/8da2994345" default /]
[stream language="RO" videoId="489817383/8da2994345"  /]
[/video-vimeo]

**Strings** are series of **characters.**

They are used for storing text.

**One of their most used properties is** their length, which can be acquired using `.length()` on any string.

The text should be wrapped in quotes, there are three types which can be used: 

-  **Double quotes**

```js
let myString = "Hello !";
```

-  **Single quotes**

```js
let myString = 'Hello !';
```

-  **Backticks**

```js
let myString = `Hello !`;
```

We can **concatenate strings** with the plus (`+`) operator.

```js live
let hello = 'Hello';
let world = 'World';

let concatenated = hello + ' ' + world;

console.log(`${concatenated}`);
```

# Accessing Strings


**Strings** are read-only chains of characters; this means that we cannot change them. 

We **access** them by their index. There are two ways of doing this .

-  The first one is by using indexing operator `[]`

```js live
let hi = 'Hi, JS';

console.log(hi[4]);
```

This one will also return `J` because the two ways of accessing indexes are identical.  

-  We can access a **string** also with the method `charAt()`. And it will look like that:

```js live
let hi = 'Hi, JS';

console.log(hi.charAt(4));
```

That will also return `J` because the two ways are identical at the end.

[/slide]

[slide]
# Iterate Through a String: Demo

[vimeo-video]
[stream language="EN" videoId="489817402/1b82ef9f2e" default /]
[stream language="RO" videoId="489817402/1b82ef9f2e"  /]
[/video-vimeo]

Iterate Through a String using `for-of` loop:

```js live
let text = 'Hello, there!'

for(let el of text){
  console.log(el);
}
```

[/slide]

[slide]
# Problem: Print Characters

[vimeo-video]
[stream language="EN" videoId="489817393/3dc5fc66ce" default /]
[stream language="RO" videoId="489817393/3dc5fc66ce"  /]
[/video-vimeo]

[code-task title="Print Characters" taskId="text-processing-lab-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printCharacters(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Description
Write a function that receives a string and prints its characters on separate lines. 

# Example
  | **Input** | **Output** |
| --- | --- |
|`['AWord']`| A |
||W|
||o|
||r|
||d|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
AWord
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
AWord
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
A
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
AB
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
Pesho
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
GOSHOpesho
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

[slide]
# Solution: Print Characters

## Missing Video

[code-task title="Print Characters" taskId="text-processing-lab-solution-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  let word = input[0];

  for (let i =0; i < word.length; i++){
    console.log(word[i])
 }
}
```

[/code-editor]
[task-description]
## Description
Write a function that receives a string and prints its characters on separate lines. 

# Example
  | **Input** | **Output** |
| --- | --- |
|`['AWord']`| A |
||W|
||o|
||r|
||d|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
AWord
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
AWord
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
A
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
AB
[/input]
[output]
A
B
[/output]
[/test]
[test]
[input]
Pesho
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
GOSHOpesho
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