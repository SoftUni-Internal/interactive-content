[slide]

[vimeo-video]
[stream language="EN" videoId="489371415/8a09c2cbb3" default /]
[stream language="RO" videoId="489371415/8a09c2cbb3"  /]
[/video-vimeo]


# What is a String?


A string is a type of data that is used to present **text** and is a **sequence** of characters.

Each symbol has a **position** in the string and when we connect them, **a text is obtained.**

We can take the individual **symbols** from the string.

Here, we take the first element of the string and its length.

``` js live
let myString = "Hello JavaScript!";

console.log(myString[0]);
console.log(myString.length);
```

[slide]

[vimeo-video]
[stream language="EN" videoId="489371418/250eaf629b" default /]
[stream language="RO" videoId="489371418/250eaf629b"  /]
[/video-vimeo]



# Strings Are Immutable

Keep in mind that we can only take the individual elements of the string, but we can not change the elements inside the string.

Strings are immutable. 

In this example we try to change the fourth symbol which is `o`:

``` js live
let myString = "Hello JavaScript!";
console.log(myString);

myString[4] = 'Change fourth symbol!';
console.log(myString);  
```

We know we can change the **data held by a variable**, but we can't change symbols in the string.


[/slide]

[slide]

[vimeo-video]
[stream language="EN" videoId="489371467/900551de56" default /]
[stream language="RO" videoId="489371467/900551de56"  /]
[/video-vimeo]

# String Interpolation

Replacing **placeholders** with values inside of a string literal is named string **interpolation**. 

In JavaScript, the template literals (strings wrapped in backticks) and `${expression}` as placeholder perform the string interpolation.

``` js live
let name = "Rick";
let age = 18;
console.log(`Hello, my name is ${name}, I am ${age} years old.`);
```
[/slide]


[slide]


[vimeo-video]
[stream language="EN" videoId="489371465/3ddd050862" default /]
[stream language="RO" videoId="489371465/3ddd050862"  /]
[/video-vimeo]
# Problem: Concantenate Names
[code-task title="Concantenate names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function concatNames(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 
- Receives two names as string parameters and a delimiter
- Prints the names joined by the delimiter

# Example
  | **Input** | **Output** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[tests]
[test]
[input]
John
Smith
m
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
Jan
White
k
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
Jan
White
\-
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
Jan
White
\=
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
Jan
White
\,
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
Jan
White
p
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

[vimeo-video]
[stream language="EN" videoId="489371497/73837bd2a6" default /]
[stream language="RO" videoId="489371497/73837bd2a6"  /]
[/video-vimeo]

# Solution: Concantenate Names
[code-task title="Concantenate names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function concatNames(input){
let firstName = input[0];
let lastName = input[1];
let delimiter = input[2];

console.log(`${firstName}${delimiter}${lastName}`);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which: 
- Receives two names as string parameters and a delimiter
- Prints the names joined by the delimiter

# Example
  | **Input** | **Output** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[tests]
[test]
[input]
John
Smith
m
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
Jan
White
k
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
Jan
White
\-
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
Jan
White
\=
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
Jan
White
\,
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
Jan
White
p
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]


[vimeo-video]
[stream language="EN" videoId="489371500/1d3c01f1f7" default /]
[stream language="RO" videoId="489371500/1d3c01f1f7"  /]
[/video-vimeo]
# Problem: Right Place
[code-task title="Right Place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You will receive 3 parameters: **string**, **char**, **string**.

First string will be a word with a **missing char** replaced with a underscore `_`.

You have to **replace** the character with the missing part (underscore) from the first string and **compare** the result with the second string.

If they are equals you should print `Matched`, otherwise print `Not Matched`.


# Example
  | **Input** | **Output** |
| --- | --- |
|\['Str_ng', 'I', 'Strong'\] | Not Matched |
|\['Str_ng', 'i', 'String'\] |Matched|

[/task-description]
[tests]
[test]
[input]
aa_av
n
aanav
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
fd_sa
l
fdlsa
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
ww_
w
www
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
_ngsd
n
jkljkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
gds_aaasng
m
Sjkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
a_ff
i
jkll
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]

[vimeo-video]
[stream language="EN" videoId="489371554/f8c9ad29ff" default /]
[stream language="RO" videoId="489371554/f8c9ad29ff"  /]
[/video-vimeo]


# Solution: Right Place
[code-task title="Right Place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(input){
  let underScopedString = input[0];
  let char = input[1];
  let string = input[2];
  
  let newString = underScopedString.replace('_', char);

  if (newString === string) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}
```
[/code-editor]
[task-description]
# Description
You will receive 3 parameters: **string**, **char**, **string**.

First string will be a word with a **missing char** replaced with a underscore `_`.

You have to **replace** the character with the missing part (underscore) from the first string and **compare** the result with the second string.

If they are equals you should print `Matched`, otherwise print `Not Matched`.


# Example
  | **Input** | **Output** |
| --- | --- |
|\['Str_ng', 'I', 'Strong'\]| Not Matched |
|\['Str_ng', 'i', 'String'\]|Matched|

[/task-description]
[tests]
[test]
[input]
aa_av
n
aanav
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
fd_sa
l
fdlsa
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
ww_
w
www
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
_ngsd
n
jkljkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
gds_aaasng
m
Sjkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
a_ff
i
jkll
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]