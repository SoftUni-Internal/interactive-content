// sectionId: "Javascript::Programming-Basics::Nested-Loops::Nested-While-Loops"

[slide hideTitle]
# Bucle imbricate

[vimeo-video]
[stream language="EN" videoId="488090609/3d873b4b3b" default /]
[stream language="RO" videoId="488090609/3d873b4b3b"  /]
[/video-vimeo]

Folosirea buclelor imbricate "**while**" este foarte asemănătiare cu folosirea lui "**for**".

Iată cum arată sintaxa in JS:

```js
while (condition) {
  // Outer Loop 
  while (condition) {
    // Inner Loop
    
    // Statements
  }
}
```
[/slide]

[slide hideTitle]
# Exemplu

[vimeo-video]
[stream language="EN" videoId="488090625/81b4dc254e" default /]
[stream language="RO" videoId="488090625/81b4dc254e"  /]
[/video-vimeo]

```js live
let row = 1;
while (row <= 2) {
  console.log(`Row: ${row}`);
  let col = 1;
  while (col <= 3)
  {
    console.log(`  Column: ${col}`);
    col++;
  }
  row++;
}
```
[/slide]

[slide hideTitle]
# Problemă cu soluție: Triangle With Stars Stelelor With While
[code-task title="Triangle of Stars with While" taskId="pb-js-nested-loops-Triangle-of-Stars-with-While" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
[code-editor language=javascript]
```
function triangleOfStars(input) {
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
# Descriere
Creați un program care imprimă un triunghi de stele cu o anumită dimensiune

* Primiți **înălțimea** unui triunghi de pe consolă 
* Imprimați un **un triunghi de stele** pe consolă
# Exemplu
| **Intrare** | **Ieșire**| 
| --- | --- |
| triangleOfStars(5) | \* |
| | \*\* |
| | \*\*\* |
|  | \*\*\*\* |
| | \*\*\*\*\* |

[/task-description]
[code-io /]
[tests]
[test]
[input]
triangleOfStars(6)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
triangleOfStars(7)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
\*\*\*\*\*\*\*
[/output]
[/test]
[test]
[input]
triangleOfStars(9)
[/input]
[output]
\*
\*\*
\*\*\*
\*\*\*\*
\*\*\*\*\*
\*\*\*\*\*\*
\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*
\*\*\*\*\*\*\*\*\*
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problemă cu soluție: Sum of Digits Calculator

[vimeo-video]
[stream language="EN" videoId="488090779/48452cdf0b" default /]
[stream language="RO" videoId="488090779/48452cdf0b"  /]
[/video-vimeo]

[code-task title="Sum of Digits Calculator" taskId="pb-js-nested-loops-Sum-of-Digits-Calculator"  executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
[code-editor language=javascript]
```
function sumOfDigits(inputLines) {
  // Scrieți codul dvs. aici
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
# Descriere
Creați un program care procesează o secvență de numere și imprimă suma cifrelor acestoa 
Citiți continuu numerele, până când este introdus **End**:

*Primiți ca intrare o matrice de numere
*Imprimați suma cifrelor pentru fiecare număr:"**Sum of digits =** \{**sum**\}"
*Atunci când ajungeți la comanda **END**, imprimați  **Goodbye**


# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|`['157', 99', 5', '438', 'End']`|Sum of digits = 13 |
||Sum of digits = 13|
||Sum of digits = 18|
||Sum of digits = 5|
||Sum of digits = 15|
||Goodbye|


[/task-description]
[tests]
[test]
[input]
sumOfDigits(['124', '33', '2', '563', 'End'])
[/input]
[output]
Sum of digits: 7
Sum of digits: 6
Sum of digits: 2
Sum of digits: 14
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['24', '312', '3', '543', 'End'])
[/input]
[output]
Sum of digits: 6
Sum of digits: 6
Sum of digits: 3
Sum of digits: 12
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['1234', '212', '4', '343', 'End'])
[/input]
[output]
Sum of digits: 10
Sum of digits: 5
Sum of digits: 4
Sum of digits: 10
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['123', '23', '234', '566', 'End'])
[/input]
[output]
Sum of digits: 6
Sum of digits: 5
Sum of digits: 9
Sum of digits: 17
Goodbye
[/output]
[/test]
[test]
[input]
sumOfDigits(['789', '567', '567', '345', 'End'])
[/input]
[output]
Sum of digits: 24
Sum of digits: 18
Sum of digits: 18
Sum of digits: 12
Goodbye
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

