[slide]
# Complex Loops

[vimeo-video]
[stream language="EN" videoId="488089818/dbec289e55" default /]
[stream language="RO" videoId="488089818/dbec289e55"  /]
[/video-vimeo]

# For-loops may have different steps

* Reverse for loop: 

``` js live
for (let i = 5; i >= 0; i--){
 console.log(i);
}
```

* For loop with a step of 2

``` js live
for (let j = 1; j <= 10; j += 2) {
   console.log(j);
}
```

* For loop which multiplies itself by 2 with each step

``` js live
for (let k = 1; k <= 6; k *= 2) {
   console.log(k);
}
```

* For loop which uses a step which divides the variable by 2

``` js live
for (let d = 40; d > 0; d /= 2) {
   console.log(i);
}
```

[/slide]

[slide]
# Problem: Numbers from N down to 1
[code-task title="Numbers from N down to 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFromNto1(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to print the numbers from N down to 1.

The function receives a number `n` and prints the numbers from `n` down to 1. 

# Example
| **Input** | **Output** |
| --- | --- |
|`['5']`| 5, 4, 3, 2, 1 |


[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5, 4, 3, 2, 1
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4, 3, 2, 1
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3, 2, 1
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2, 1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Solution: Numbers from N down to 1

[vimeo-video]
[stream language="EN" videoId="488089892/222dacd55c" default /]
[stream language="RO" videoId="488089892/222dacd55c"  /]
[/video-vimeo]

[code-task title="Numbers from N down to 1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFromNto1(input) {
  let result = '';
  for (let i = n; i >= 1; i--) {
    if (i < n)
      result += ", ";
    result += i;
  }
  console.log(result);
}

```
[/code-editor]
[task-description]
# Description
Write a function to print the numbers from N down to 1.

The function receives a number `n` and prints the numbers from `n` down to 1. 

# Example
| **Input** | **Output** |
| --- | --- |
|`['5']`| 5, 4, 3, 2, 1 |


[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
5, 4, 3, 2, 1
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4, 3, 2, 1
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
3, 2, 1
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2, 1
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]