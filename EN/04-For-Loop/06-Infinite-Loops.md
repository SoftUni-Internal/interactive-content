[slide]
# Infinite Loops

[vimeo-video]
[stream language="EN" videoId="487119696/795eeac3a1" default /]
[stream language="RO" videoId="487119696/795eeac3a1"  /]
[/video-vimeo]

Infinite loops can **repeat a block of code an unlimited number of times.** 

Usage in Programming:

* They are widely used in game development for drawing the game environment.

* For drawing animations. 

* In web servers, as they run permanently.

```js
for ( ; ; ) {
  console.log("Hello World");
}
// You can skip the initialization, condition and the increment
```
[/slide]


[slide]
# Problem: Sum Numbers Until 0

[vimeo-video]
[stream language="EN" videoId="487119738/e0db9467e8" default /]
[stream language="RO" videoId="487119738/e0db9467e8"  /]
[/video-vimeo]

[code-task title="Sum Numbers Until 0" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumNumbers (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to process numbers from the input parameters and print their sum until 0 is reached.


# Example
| **Input** | **Output** |
| --- | --- |
|`['5', '3', '2', '0']`| Sum = 5 |
||Sum = 8 |
||Sum = 10 |
||Good bye |

[/task-description]
[tests]
[test]
[input]
5
3
2
0
[/input]
[output]
Sum \= 5
Sum \= 8
Sum \= 10
Good bye
[/output]
[/test]
[test]
[input]
6
4
3
0
[/input]
[output]
Sum \= 6
Sum \= 10
Sum \= 13
Goodbye
[/output]
[/test]
[test]
[input]
9
7
5
0
[/input]
[output]
Sum \= 9
Sum \= 16
Sum \= 21
Goodbye
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]


[slide]
# Solution: Sum Numbers Until 0

[vimeo-video]
[stream language="EN" videoId="487119772/ad088bc30e" default /]
[stream language="RO" videoId="487119772/ad088bc30e"  /]
[/video-vimeo]

[code-task title="Sum Numbers Until 0" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumNumbers (input) {
  let sum = 0;
  for (;;) {
    let num = nums.shift();
    if (num == 0) break;
    sum += num;
    console.log(`Sum = ${sum}`);
  }
  console.log('Goodbye');
}

```
[/code-editor]
[task-description]
# Description
Write a function to process numbers from the input parameters and print their sum until 0 is reached.

# Example
| **Input** | **Output** |
| --- | --- |
|`['5', '3', '2', '0']`| Sum = 5 |
||Sum = 8 |
||Sum = 10 |
||Good bye |

[/task-description]
[tests]
[test]
[input]
5
3
2
0
[/input]
[output]
Sum \= 5
Sum \= 8
Sum \= 10
Good bye
[/output]
[/test]
[test]
[input]
6
4
3
0
[/input]
[output]
Sum \= 6
Sum \= 10
Sum \= 13
Goodbye
[/output]
[/test]
[test]
[input]
9
7
5
0
[/input]
[output]
Sum \= 9
Sum \= 16
Sum \= 21
Goodbye
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
