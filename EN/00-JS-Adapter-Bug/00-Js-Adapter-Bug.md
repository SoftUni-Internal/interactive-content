# Js Adapter Bug

[slide]
# Problem: Concantenate Names

[vimeo-video]
[stream language="EN" videoId="489371465/3ddd050862" default /]
[stream language="RO" videoId="489371465/3ddd050862"  /]
[/video-vimeo]

[code-task title="Concantenate names" taskId="pb-js-concatenating-names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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

# Solution: Concantenate Names

[vimeo-video]
[stream language="EN" videoId="489371497/73837bd2a6" default /]
[stream language="RO" videoId="489371497/73837bd2a6"  /]
[/video-vimeo]

[code-task title="Concantenate names" taskId="pb-js-concatenating-names-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]
# Description
Write a program, which: 
- Receives two names as string parameters and a delimiter
- Prints the names joined by the delimiter

## Use this solution:

```
function interpolation (firstName,lastName,delimeter) {
    console.log(`${firstName}${delimeter}${lastName}`);

}
interpolation('John','Smith','->')
```

# Example
  | **Input** | **Output** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[tests]
[test open]
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

