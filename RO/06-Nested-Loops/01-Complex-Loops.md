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
|`5`| 5, 4, 3, 2, 1 |


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
  let n = Number(input);
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
|`5`| 5, 4, 3, 2, 1 |


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
# Problem: Numbers from 1 to N with Step 3
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
|`7`| 1, 4, 7 |
|`10`| 1, 4, 7, 10 |

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

[slide]
# Solution: Numbers from 1 to N with Step 3

[vimeo-video]
[stream language="EN" videoId="488090074/f832efa21d" default /]
[stream language="RO" videoId="488090074/f832efa21d"  /]
[/video-vimeo]

[code-task title="Numbers from 1 to N with Step 3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersFrom1ton(n) {
    let result = '';
  for (let i = 1; i <= n; i += 3) {
    if (i > 1)
      result += ", ";
    result += i;
  }
  console.log(result);
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
|`7`| 1, 4, 7 |
|`10`| 1, 4, 7, 10 |

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

[slide]
# Problem: Even Powers of 2
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
|`5`| 1, 4, 16 |
|`10`| 1, 4, 16, 64, 256, 1024 |

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

[slide]
# Solution: Even Powers of 2

[vimeo-video]
[stream language="EN" videoId="488090120/198b6ba65a" default /]
[stream language="RO" videoId="488090120/198b6ba65a"  /]
[/video-vimeo]

[code-task title="Even Powers of 2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function evenPowersOfTwo(n) {
  let num = 1;
  let result = '';
  for (let i = 0; i <= n; i += 2) {
    if (i > 0)
      result += ", ";
    result += num;
    num = num * 2 * 2;
  }
  console.log(result);
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
|`5`| 1, 4, 16 |
|`10`| 1, 4, 16, 64, 256, 1024 |

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