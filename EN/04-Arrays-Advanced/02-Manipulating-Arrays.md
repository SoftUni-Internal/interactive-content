# Manipulating Arrays

[slide hideTitle]
# Slicing Arrays

[vimeo-video]
[stream language="EN" videoId="489374953/4d8a0f208e" default /]
[stream language="RO" videoId="489374953/4d8a0f208e"  /]
[/video-vimeo]

The `array.slice()` method **returns** the **selected elements** in an array, as a **new array object**.

It selects the elements starting at the given **start index** and ends at, but does not include, an optional **end index**. 

``` js live
let myArray = ['one', 'two', 'three', 'four', 'five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```
[/slide]

[slide hideTitle]
# Splice: Cut and Insert Array Elements

[vimeo-video]
[stream language="EN" videoId="489374185/fc61ac9758" default /]
[stream language="RO" videoId="489374185/fc61ac9758"  /]
[/video-vimeo]

The `array.splice()` method **adds** or **removes** items to\/from an array, and **returns** the removed item(s).

This method **changes the original array.**

``` js live
let nums = [5, 10, 15, 20, 25, 30];

let mid = nums.splice(2, 3);

console.log(mid.join('|'));
console.log(nums.join('|'));

nums.splice(3, 2, 'twenty', 'twenty-five');
console.log(nums.join('|'));
```

[/slide]

[slide hideTitle]
# Problem: First and Last K Numbers

[vimeo-video]
[stream language="EN" videoId="489374198/6c535a4be1" default /]
[stream language="RO" videoId="489374198/6c535a4be1"  /]
[/video-vimeo]

[code-task title="First and Last K Numbers" taskId="fundamentals-js-arrays-advanced-lab-First-and-Last-K-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {return code(input.map(Number))}
```
[/code-adapter]
[task-description]
Write a function that **prints** the **first** `k` and the **last** `k` elements of an **array of numbers**. 

The **input** comes as an **array** of integers. 

The **first element** represents the number `k`. 

All the **other elements** form the **array that needs to be processed**. 

On the **first line**, print the **first k** elements, separated by **space**. 

On the **second line**, print the **last k** elements, separated by **space**. 



# Examples

## Example
| **Input** | **Output** |
| --- | --- |
|`[2, 7, 8, 9]` | 7 8 |
| | 8 9 |

## Example
| **Input** | **Output** |
| --- | --- |
|`[3, 6, 7, 8, 9]` | 6 7 8 |
| | 7 8 9 |

# Hints

- Use `slice()` to **split** the array into **two parts**


[/task-description]
[tests]
[test]
[input]
2
7
8
9
[/input]
[output]
7 8
8 9
[/output]
[/test]
[test]
[input]
3
6
7
8
9
[/input]
[output]
6 7 8
7 8 9
[/output]
[/test]
[test]
[input]
4
1
2
3
4
5
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
1
5
6
7
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
2
5
6
7
8
1
2
3
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
7
1
2
3
4
5
6
7
8
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
5
11
12
13
14
15
16
17
18
[/input]
[output]
11 12 13 14 15
14 15 16 17 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: First and Last K Numbers

[vimeo-video]
[stream language="EN" videoId="489374505/9ba74796f9" default /]
[stream language="RO" videoId="489374505/9ba74796f9"  /]
[/video-vimeo]

[code-task title="First and Last K Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {return code(input.map(Number))}
```
[/code-adapter]
[task-description]
Write a function that **prints** the **first** `k` and the **last** `k` elements of an **array of numbers**. 

The **input** comes as an **array** of integers. 

The **first element** represents the number `k`. 

All the **other elements** form the **array that needs to be processed**. 

On the **first line**, print the **first k** elements, separated by **space**. 

On the **second line**, print the **last k** elements, separated by **space**. 



# Examples

## Example
| **Input** | **Output** |
| --- | --- |
|`[2, 7, 8, 9]` | 7 8 |
| | 8 9 |

## Example
| **Input** | **Output** |
| --- | --- |
|`[3, 6, 7, 8, 9]` | 6 7 8 |
| | 7 8 9 |

# Hints

- Use `slice()` to **split** the array into **two parts**


[/task-description]
[tests]
[test]
[input]
2
7
8
9
[/input]
[output]
7 8
8 9
[/output]
[/test]
[test]
[input]
3
6
7
8
9
[/input]
[output]
6 7 8
7 8 9
[/output]
[/test]
[test]
[input]
4
1
2
3
4
5
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
1
5
6
7
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
2
5
6
7
8
1
2
3
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
7
1
2
3
4
5
6
7
8
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
5
11
12
13
14
15
16
17
18
[/input]
[output]
11 12 13 14 15
14 15 16 17 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Last K Numbers Sequence

[vimeo-video]
[stream language="EN" videoId="489374248/da5b2345e6" default /]
[stream language="RO" videoId="489374248/da5b2345e6"  /]
[/video-vimeo]

[code-task title="Last K Numbers Sequence" taskId="fundamentals-js-arrays-advanced-lab-Last-K-Numbers-Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(n, k){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {
  return code (Number(input[0]), Number(input[1]));
}
```
[/code-adapter]
[task-description]
You are given **two integers**: `n` and `k`. 

Write a **function** that **generates and prints** the following sequence: 

- The **first element** is `1`.
- Every **following element** is **equal to the sum** of the previous `k` elements. 
- The **length** of the **sequence** is `n` elements.
	
The **input** comes as two **numbers**.

The **first element** represents the number `n`, and the second – the number `k`.

The output is **printed** to the console on a **single line**, separated by **space**.

## Examples
| **Input** | **Output** |
| --- | --- |
|6, 3| 1 1 2 4 7 13 |
|8, 2 | 1 1 2 3 5 8 13 21 |


# Hints

The **second element (1)** is **equal to the sum** of the **3 elements before it**, but there is only **one** element, so we take that. 

The **third element** is equal to the sum of the **first two elements (1 and 1)**. 

The **fourth element** is equal to the sum of **1**, **1** and **2**. 

The **fifth element** is equal to the sum of the **second, third and fourth (1, 2 and 4)** and so on.

[/task-description]
[tests]
[test open]
[input]
6
3
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
3
5
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
8
4
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
10
3
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Solution: Last K Numbers Sequence

[vimeo-video]
[stream language="EN" videoId="489374563/74c0604242" default /]
[stream language="RO" videoId="489374563/74c0604242"  /]
[/video-vimeo]

[code-task title="Last K Numbers Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(n, k){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {
  return code (Number(input[0]), Number(input[1]));
}
```
[/code-adapter]
[task-description]
You are given **two integers**: `n` and `k`. 

Write a **function** that **generates and prints** the following sequence: 

- The **first element** is `1`.
- Every **following element** is **equal to the sum** of the previous `k` elements. 
- The **length** of the **sequence** is `n` elements.

The **input** comes as two **numbers**.

The **first element** represents the number `n`, and the second – the number `k`.

The output is **printed** to the console on a **single line**, separated by **space**.

## Examples
| **Input** | **Output** |
| --- | --- |
|6, 3| 1 1 2 4 7 13 |
|8, 2 | 1 1 2 3 5 8 13 21 |


# Hints

The **second element (1)** is **equal to the sum** of the **3 elements before it**, but there is only **one** element, so we take that. 

The **third element** is equal to the sum of the **first two elements (1 and 1)**. 

The **fourth element** is equal to the sum of **1**, **1** and **2**. 

The **fifth element** is equal to the sum of the **second, third and fourth (1, 2 and 4)** and so on.

[/task-description]
[tests]
[test open]
[input]
6
3
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
3
5
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
4
2
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
8
4
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
10
3
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]