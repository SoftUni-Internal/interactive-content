# String

[slide]
# What is String

[vimeo-video]
[stream language="EN" videoId="489817383/8da2994345" default /]
[stream language="RO" videoId="489817383/8da2994345"  /]
[/video-vimeo]

The **strings** are a series of **characters**. They are used for storing text.
**String**'s most used operation is to check their **length**, which can be done by the `length()` property.

the text is wrapped in three types of quotes. They are:

-  **Double quotes**

```js
let myString = "Hello !";
```

-  **Single quotes**

```js
let myString = 'Hello !';
```

-  **back-ticks**

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


The **Strings** read-only chain of characters, so this means that we can't change them.

We **access** them by their index. And we have two ways we can do this.

-  The first one is by using indexing operator `[]`

```js live
let hi = 'Hi, JS';

console.log(hi[4]);
```

This example will return `J` because it is the fourth index.

-  We can access a **string** also with the method `charAt()`. And it will look like that:

```js live
let hi = 'Hi, JS';

console.log(hi.charAt(4));
```

That will also return `J` because the two ways are identical at the end.

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
# Description
Write a function that receives a string and prints all the characters on separate lines.

# Example
  | **Input** | **Output** |
| --- | --- |
|`AWord`| A |
||W|
||o|
||r|
||d|

[/task-description]
[code-io /]
[tests]
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

[vimeo-video]
[stream language="EN" videoId="489817402/1b82ef9f2e" default /]
[stream language="RO" videoId="489817402/1b82ef9f2e"  /]
[/video-vimeo]

[code-task title="Print Characters" taskId="text-processing-lab-solution-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printCharacters(input){

   for(let i = 0; i > input.length; i++){
       console.log(input[i]);
   }
}
```
[/code-editor]
[task-description]
# Description
Write a function that receives a string and prints all the characters on separate lines.

# Example
  | **Input** | **Output** |
| --- | --- |
|`AWord`| A |
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