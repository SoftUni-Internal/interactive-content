// sectionId: "Javascript-Programming-Basics-Nested-Loops-Nested-While-Loops"

[slide hideTitle]
# Bucle imbricate

[vimeo-video]
[stream language="EN" videoId="488090609/3d873b4b3b" default /]
[stream language="RO" videoId="488090609/3d873b4b3b"  /]
[/video-vimeo]

Folosirea buclelor imbricate `while` este foarte asemănătiare cu folosirea lui `for`.

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
# Problemă cu soluția: Triangle With Stars Stelelor With While
[code-task title="Triangle of Stars with While" taskId="pb-js-nested-loops-Triangle-of-Stars-with-While" executionType="tests-execution" executionStrategy="javascript-code" requiresInput] 
[code-editor language=javascript]
```
function triangleOfStars(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește **înălțimea** unui triunghi din consolă 
* Imprimă un **un triunghi de stele**
# Exemplu
| **Input** | **Output**| 
| --- | --- |
| 5 | \* |
| | \*\* |
| | \*\*\* |
|  | \*\*\*\* |
| | \*\*\*\*\* |

[/task-description]
[code-io /]
[tests]
[test]
[input]
5
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
6
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
8
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
# Problemă cu soluția: Sum of Digits Calculator

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
[task-description]
# Descriere
Citiți continuu numerele, până când este introdus `End`:

* Imprimați suma cifrelor pentru fiecare număr 

* La final, imprimați `Goodbye`

# Exemplu
| **Input** | **Output** |
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
124
33
2
563
End
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
24
312
3
543
End
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
1234
212
4
343
End
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
123
23
234
566
End
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
789
567
567
345
End
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

