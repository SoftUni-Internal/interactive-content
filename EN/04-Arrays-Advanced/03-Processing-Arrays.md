# Processing Arrays

[slide hideTitle]
# Transform Elements

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05.JS-Fundamentals-Arrays-Advanced-22-23-processing-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Starting from EcmaScript 5, the JavaScript **Array** type provides a `map()` method that allows us to **transform the elements of an array** in a cleaner way. 

The `map()` method creates a **new array** with the results of calling a **function** for **every element** of the array. 

In this example, we create a new array using the `map()` method, and we store the **length of each string**: 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);

console.log(lengths);
```

In this example, we have a **string** array, and by using `map()`, we convert each element into a **number**. 

Also, by using `map()`, we **increment** each number in the array:

``` js live
let numsAsStrings = ['5', '3', '14', '-2', '8'];
let nums = numsAsStrings.map(Number);

console.log(nums);

let incremented = nums.map(x => x + 1);
console.log(incremented);
```

You can read more about `map()` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
[/slide]

[slide hideTitle]
# Filter Elements

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-24-filter-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `filter()` method creates a **new array**, filled with all array elements that **pass a given test** (provided as a function).

In this example, we use the `filter()` method to create a new array, where the **length** of each element is **greater than three**.

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);

console.log(longWords);
```

In this example, we make a new array with **positive numbers** only:

``` js live
let nums = [5, -11, 3, -2, 8];
let positiveNums = nums.filter(x => x > 0);
console.log(positiveNums);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Process Odd Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-problem-05-solution-process-odd-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Process Odd Numbers" taskId="fundamentals-js-arrays-advanced-lab-Process-Odd-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumbers(arr){
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

You are given an **array of numbers**.

Write a function that **prints** all the elements at **odd positions, doubled, and in reversed order**. 

The **input** comes as an **array** of **numbers**.

The **output** is **printed to the console** on a **single line**, **separated by space.**


## Examples
| **Input** | **Output** |
| --- | --- |
|oddNumbers([10, 15, 20, 25]) | 50 30 |
|oddNumbers([3, 0, 10, 4, 7, 3]) | 6 8 0 |

[hints]
[hint]
Counting in arrays starts from **0**.
For example, we receive: `10, 15, 20, 25`
The elements at odd positions are: **15** (index **1**) and **25** (index **3**).
[/hint] 
[hint]
We need to take these two elements and **multiply** them \* **2**.
[/hint] 
[hint]
Finally, we print them on the console in **reversed order**.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
oddNumbers([10, 15, 20, 25])
[/input]
[output]
50 30
[/output]
[/test]
[test open]
[input]
oddNumbers([3, 0, 10, 4, 7, 3])
[/input]
[output]
6 8 0
[/output]
[/test]
[test]
[input]
oddNumbers([34, 12, 34, 2, 56, 6])
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
oddNumbers([34, 12, 34, 2, 56, 6])
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
oddNumbers([4, 22, 30, 12, 6, 16, 25, 10])
[/input]
[output]
20 32 24 44
[/output]
[/test]
[test]
[input]
oddNumbers([6, 5, 56])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
oddNumbers([34, 62, 3, 9, 56])
[/input]
[output]
18 124
[/output]
[/test]
[test]
[input]
oddNumbers([4, 12, 34, 2, 8, 6, 1, 31])
[/input]
[output]
62 12 4 24
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Sorting Arrays

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-27-28-sorting-arrays-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `sort()` method **sorts the items** of an array.

Depending on the provided **compare function**, the sort order can either be **alphabetic** or **numeric**, and either **ascending** (up) or **descending** (down). 

By default, the `sort()` method sorts the values as **strings in alphabetical and ascending order.**

If we want to sort numbers or other values, we need to provide a correct **compare function.** 

In this example, we have an array of names. 

If we call the `sort()` method directly, without passing a **compare function**, the method will work correctly - it will sort the names in ascending alphabetic order.

``` js live
let names = ['Peter', 'George', 'Mary'];
names.sort(); 

console.log(names); 
```

However, if we have an array which contains numbers, not strings, the result will be **unexpected and incorrect**. 

Without a passed **compare function**, the `sort()` method will treat the array as an array of strings, not as an array of numbers.

So, it will sort them as string values:

``` js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```

[/slide]

[slide hideTitle]
# Compare Functions

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-29-compare-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `sort()` method, fortunately, can sort **negative, zero, and positive values** in the **correct order**.

When the `sort()` method compares two values, it sends the values to the **compare function**, and sorts the values according to the returned value.  

The result could be: **negative, zero, or positive.** 

- If the result is negative, **a** is sorted before **b**
- If the result is positive, **b** is sorted before **a**
- If the result is 0, nothing changes

``` js live
let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a - b);

console.log(nums.join('|'));
```
[/slide]

[slide hideTitle]
# Sorting String Arrays

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-30-sorting-string-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `localeCompare()` method compares **two strings** in the current locale. 

It is a **string method**, so it **cannot** be applied directly on an array. 

In this example, we pass the `localeCompare()` method as a **comparison function**.

``` js live
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));

console.log(words);
```
[/slide]

[slide hideTitle]
# Problem with Solution: Smallest two Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/04.JS-Fundamentals-Arrays-Advanced/EN/05. JS-Fundamentals-Arrays-Advanced-problem-06-solution-smallest-two-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Smallest two Numbers" taskId="fundamentals-js-arrays-advanced-lab-Smallest-two-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestTwoNumbers(arr){
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

Write a function that **sorts** an array in **ascending order** and **prints** the first **two** numbers. 

The **input** comes as an **array** of **numbers**. 

## Examples
| **Input** | **Output** |
| --- | --- |
|smallestTwoNumbers([30, 15, 50, 5]) | 5 15 |
|smallestTwoNumbers([3, 0, 10, 4, 7, 3]) | 0 3 |


[hints]
[hint]
We can use the following function to sort the elements of the array: 

```js
let sortedInAscending = arr.sort((a, b) =>{
    return a - b
});
```
[/hint] 
[hint]
Afterwards, the first two elements in the array are the **smallest** ones.
[/hint] 
[hint]
We can use the `slice()` method to take the first two elements.
[/hint] 
[/hints] 


[/task-description]
[tests]
[test open]
[input]
smallestTwoNumbers([30, 15, 50, 5])
[/input]
[output]
5 15
[/output]
[/test]
[test open]
[input]
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
[/input]
[output]
0 3
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 3, 2, 1])
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-53, 31, \-42, 21, 13, 2, 31])
[/input]
[output]
\-53 \-42
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([31, 42, \-25, 3, 2, 1])
[/input]
[output]
\-25 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 13, 2, 1])
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 11])
[/input]
[output]
\-5 11
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
