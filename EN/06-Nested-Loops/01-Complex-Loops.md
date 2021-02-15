// sectionId: "Javascript-Programming-Basics-Conditional-Nested-Loops-Complex-Loops

[slide hideTitle]
# Complex Loops

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-3-4-complex-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
   console.log(d);
}
```

[/slide]

[slide hideTitle]
# Problem: Numbers from N down to 1
[code-task title="Numbers from N down to 1" taskId="pb-js-nested-loops-lab-Numbers-from-N-down-to-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
|5| 5, 4, 3, 2, 1 |


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

[slide hideTitle]
# Solution: Numbers from N down to 1

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-5-6-solution-numbers-from-n-down-to-one-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
|5| 5, 4, 3, 2, 1 |


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

[slide hideTitle]
# Problem: Numbers from 1 to N with Step 3
[code-task title="Numbers from 1 to N with Step 3" taskId="pb-js-nested-loops-lab-Numbers-from-1-to-N-with-Step-3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFrom1ton(n) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to print the numbers from 1 to `n` with step 3:

* Receives a number `n`

* Prints the numbers from 1 to `n` with step 3


# Example
| **Input** | **Output** |
| --- | --- |
|7| 1, 4, 7 |
|10| 1, 4, 7, 10 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1, 4, 7, 10
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1, 4, 7, 10, 13
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1, 4, 7, 10, 13, 16, 19
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25, 28
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Numbers from 1 to N with Step 3

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-7-8-numbers-from-one-to-n-with-step-three-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Numbers from 1 to N with Step 3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFrom1ton(n) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to print the numbers from 1 to `n` with step 3:

* Receives a number `n`

* Prints the numbers from 1 to `n` with step 3


# Example
| **Input** | **Output** |
| --- | --- |
|7| 1, 4, 7 |
|10| 1, 4, 7, 10 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1, 4, 7, 10
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1, 4, 7, 10, 13
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1, 4, 7, 10, 13, 16, 19
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1, 4, 7, 10, 13, 16, 19, 22, 25, 28
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Even Powers of 2
[code-task title="Even Powers of 2" taskId="pb-js-nested-loops-lab-Even-Powers-of-2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenPowersOfTwo(n) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to print the even powers of 2:

* Receives a number `n`

* Prints the even powers of 2 up to `2n`:

# Example
| **Input** | **Output** |
| --- | --- |
|5| 1, 4, 16 |
|10| 1, 4, 16, 64, 256, 1024 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1, 4, 16, 64, 256, 1024
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Even Powers of 2

[video src="https://videos.softuni.org/hls/javascript-basics/06.Nested-Loops/EN/JS-basics-nested-loops-9-10-even-powers-of-two-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even Powers of 2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenPowersOfTwo(n) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function to print the even powers of 2:

* Receives a number `n`

* Prints the even powers of 2 up to `2n`:

# Example
| **Input** | **Output** |
| --- | --- |
|5| 1, 4, 16 |
|10| 1, 4, 16, 64, 256, 1024 |

[/task-description]
[tests]
[test]
[input]
10
[/input]
[output]
1, 4, 16, 64, 256, 1024
[/output]
[/test]
[test]
[input]
15
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576
[/output]
[/test]
[test]
[input]
25
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216
[/output]
[/test]
[test]
[input]
30
[/input]
[output]
1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
