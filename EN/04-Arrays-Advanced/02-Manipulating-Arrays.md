# Manipulating Arrays

[slide hideTitle]
# Slicing Arrays

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-15-16-slicing-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-17-cutting-and-inserting-elements-with-splice-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `array.splice()` method **adds** or **removes** items to/from an array, and **returns** the removed item(s).

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
# Problem with Solution: First and Last K Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-problem-03-solution-first-and-last-k-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

Write a function that **prints** the **first** **k** and the **last** **k** elements of an **array of numbers**. 

The **input** comes as an **array** of integers. 

The **first element** represents the number **k**. 

All the **other elements** form the **array that needs to be processed**. 

On the **first line**, print the **first k** elements, separated by **space**. 

On the **second line**, print the **last k** elements, separated by **space**. 

## Example One

| **Input** | **Output** |
| --- | --- |
|numbers([2, 7, 8, 9]) | 7 8 |
| | 8 9 |
## Example Two
| **Input** | **Output** |
| --- | --- |
|numbers([3, 6, 7, 8, 9]) | 6 7 8 |
| | 7 8 9 |

[hints]
[hint]
Use `slice()` to **split** the array into **two parts**.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
numbers([2, 7, 8, 9])
[/input]
[output]
7 8
8 9
[/output]
[/test]
[test open]
[input]
numbers([3, 6, 7, 8, 9]) 
[/input]
[output]
6 7 8
7 8 9
[/output]
[/test]
[test]
[input]
numbers([4, 1, 2, 3, 4, 5])
[/input]
[output]
1 2 3 4
2 3 4 5
[/output]
[/test]
[test]
[input]
numbers([1, 5, 6, 7])
[/input]
[output]
5
7
[/output]
[/test]
[test]
[input]
numbers([2, 5, 6, 7, 8, 1, 2, 3])
[/input]
[output]
5 6
2 3
[/output]
[/test]
[test]
[input]
numbers([7, 1, 2, 3, 4, 5, 6, 7, 8])
[/input]
[output]
1 2 3 4 5 6 7
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
numbers([5, 11, 12, 13, 14, 15, 16, 17, 18])
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
# Problem with Solution: Last K Numbers Sequence

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-problem-04-solution-sum-last-k-numbers-sequence-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

You are given **two integers**: **n** and **k**. 

Write a function that **generates and prints** the following sequence: 

- The **first element** is 1

- Every **following element** is **equal to the sum** of the previous **k** elements

- The **length** of the **sequence** is **n** elements

The **input** comes as two **numbers**.

The **first element** represents the number **n**, and the second – the number **k**.

The output is **printed** to the console on a **single line**, separated by **space**.

## Examples
| **Input** | **Output** |
| --- | --- |
|numbers(6, 3)| 1 1 2 4 7 13 |
|numbers(8, 2) | 1 1 2 3 5 8 13 21 |


[hints]
[hint]
`numbers(6, 3)` -\> "**1 1 2 4 7 13**"

The **second element (1)** is **equal to the sum** of the **3 elements before it**, but there is only **one** element, so we take that. 
[/hint] 
[hint]
The **third element** is equal to the sum of the **first two elements (1 and 1)**. 
[/hint] 
[hint]
The **fourth element** is equal to the sum of **1**, **1** and **2**. 
[/hint]
[hint]
The **fifth element** is equal to the sum of the **second, third and fourth (1, 2, and 4)** and so on.
[/hint]  
[/hints] 

[/task-description]
[tests]
[test open]
[input]
numbers(6, 3)
[/input]
[output]
1 1 2 4 7 13
[/output]
[/test]
[test open]
[input]
numbers(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
numbers(3, 5)
[/input]
[output]
1 1 2
[/output]
[/test]
[test]
[input]
numbers(4, 2)
[/input]
[output]
1 1 2 3
[/output]
[/test]
[test]
[input]
numbers(8, 2)
[/input]
[output]
1 1 2 3 5 8 13 21
[/output]
[/test]
[test]
[input]
numbers(8, 4)
[/input]
[output]
1 1 2 4 8 15 29 56
[/output]
[/test]
[test]
[input]
numbers(10, 3)
[/input]
[output]
1 1 2 4 7 13 24 44 81 149
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
