# Strings

[slide hideTitle]
# What is a String?

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-12-13-what-is-a-string-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


A string is a type of data that is used to present **text** and is a **sequence** of characters.

Each symbol has a **position** in the string and when we connect them, **text is obtained.**

We can take the individual **symbols** from the string.

Here, we take the first element of the string and its length.

``` js live
let myString = 'Hello JavaScript!';

console.log(myString[0]);
console.log(myString.length);
```

[/slide]

[slide hideTitle]


# Strings are Immutable

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-14-strings-are-immutable-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Keep in mind that we can only take the individual elements of the string, but we cannot change the elements inside the string.

Strings are immutable. 

In this example we try to change the fourth symbol which is `o`:

``` js live
let myString = 'Hello JavaScript!';
console.log(myString);

myString[4] = 'Change the symbol on the fourth index!';
console.log(myString);  
```

We know we can change the **data held by a variable**, but we cannot change symbols in the string.


[/slide]

[slide hideTitle]

# String Interpolation

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-15-sting-interpolation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Replacing **placeholders** with values inside of a string literal is called string **interpolation**. 

In JavaScript, the template literals (strings wrapped in backticks) and `${expression}` as а placeholder perform the string interpolation.

``` js live
let name = 'Rick';
let age = 18;
console.log(`Мy name is ${name}, I am ${age} years old.`);
```
[/slide]


[slide hideTitle]
# Problem with Solution: Concantenate Names

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-16-solution-concatenate-names-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Concantenate Names" taskId="fund-js-data-types-and-variables-lab-concatenate-names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function interpolation(firstName, lastName, delimeter){
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

Create a program, which receives three parameters:

- **firstName** - a string

- **lastName** - a string

- **delimiter** - a string

Your task is to print the first name and the last name, joined by the delimiter.

# Example
| **Input** | **Output** |
| --- | --- |
| interpolation('John', 'Smith', '\-\>') | John\-\>Smith |
| interpolation('Jan', 'White', '\<\-\>') | Jan\<\-\>White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
interpolation('John', 'Smith', '\-\>')
[/input]
[output]
John\-\>Smith
[/output]
[/test]
[test open]
[input]
interpolation('Jan', 'White', '\<\-\>')
[/input]
[output]
Jan\<\-\>White
[/output]
[/test]
[test]
[input]
interpolation('John', 'Smith', 'm')
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
interpolation('Jan', 'White', 'k')
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
interpolation('Jan', 'White', '\-')
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
interpolation('Jan', 'White', '\=')
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
interpolation('Jan', 'White', '\,')
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
interpolation('Jan', 'White', 'p')
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem with Solution: Right Place

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/01.JS-Fundamentals-Data-types-and-variables/EN/01.JS-Fundamentals-Data-types-and-variables-17-solution-last-name-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Right Place" taskId="fund-js-data-types-and-variables-lab-right-place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(string, sym, result){
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

You will receive 3 parameters: **string**, **character**, **string**.

The first string will be a word with a **missing character** replaced with an underscore "**_**".

Your task is to **replace** the underscore ("**_**") with the given **character** and **compare** the result to the second string.

If the strings are equal, you should print "**Matched**", otherwise print "**Not Matched**".


## Example
  | **Input** | **Output** |
| --- | --- |
| rightPlace('Str_ng', 'I', 'Strong') | Not Matched |
| rightPlace('Str_ng', 'i', 'String') | Matched |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
rightPlace('Str_ng', 'I', 'Strong')
[/input]
[output]
Not Matched
[/output]
[/test]
[test open]
[input]
rightPlace('Str_ng', 'i', 'String')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('aa_av', 'n', 'aanav')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('fd_sa', 'l', 'fdlsa')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('ww_', 'w', 'www')
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
rightPlace('_ngsd', 'n', 'jkljkl')
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
rightPlace('gds_aaasng', 'm', 'Sjkl')
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
rightPlace('a_ff', 'i', 'jkll')
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
