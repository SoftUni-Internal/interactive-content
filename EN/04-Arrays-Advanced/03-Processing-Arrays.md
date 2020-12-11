# Processing Arrays

[slide]
# Transform Elements

[vimeo-video]
[stream language="EN" videoId="489374289/c0b4d9c5f7" default /]
[stream language="RO" videoId="489374289/c0b4d9c5f7"  /]
[/video-vimeo]

Starting from ES5, JavaScript `Array` type provides the `map()` method that allows us to transform the elements of an array in a cleaner way. 

The `map()` method creates a new array with the results of calling a function for every element of the array. 

In this example, we create a new array using the `map()` method, and we store the length of each string. 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);

console.log(lengths);
```

In this example, we have a `string` array, and by using `map()`, we convert each element into a `number`. 

Also, by using `map()`, we increment each number in the array. 

``` js live
let numsAsStrings = ['5','3','14','-2','8'];
let nums = numsAsStrings.map(Number);

console.log(nums);

let incremented = nums.map(x => x+1);
console.log(incremented);
```

You can read more about [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[/slide]

[slide]
# Filter Elements

[vimeo-video]
[stream language="EN" videoId="489374290/1e675608b7" default /]
[stream language="RO" videoId="489374290/1e675608b7"  /]
[/video-vimeo]

The `filter()` method creates a new array, filled with all array elements that pass a given test (provided as a function).

ShapeIn this example, we use the `filter()` method to create a new array, where the length of each element is greater than three.

In this example, we create a new array, which contains only positive numbers. 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);

console.log(longWords);
```

In this example, we make a new array with positive numbers only. 

``` js live
let nums = [5, -11, 3, -2, 8];
let positiveNums = nums.filter(x => x > 0);
console.log(positiveNums);
```

[/slide]

[slide]
# Problem: Process Odd Numbers

[vimeo-video]
[stream language="EN" videoId="489374571/1014b0026b" default /]
[stream language="RO" videoId="489374571/1014b0026b"  /]
[/video-vimeo]

[code-task title="Process Odd Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]

You are given an array of numbers.

Write a function that prints all the elements at odd positions, doubled, and in reversed order. 

The input comes as an array of `string` elements, holding numbers. 

The output is printed on the c**onsole on a single line**, **separated by space.**


## Examples
| **Input** | **Output** |
| --- | --- |
|`[10, 15, 20, 25]` | 50 30 |
|`[3, 0, 10, 4, 7, 3]` | 6 8 0 |

# Hints

- Counting in arrays starts from `0`
- For example: we receive `10, 15, 20, 25`
- The elements at odd positions are `15 (index 1) and 25 (index 3)`
- We need to take these two elements and `multiply them * 2`
- Finally, we print them on the console in **reversed order**

[/task-description]
[tests]
[test]
[input]
34
12
34
2
56
6
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
4
22
30
12
6
16
25
10
[/input]
[output]
20 32 24 44
[/output]
[/test]
[test]
[input]
6
5
56
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
34
62
3
9
56
[/input]
[output]
18 124
[/output]
[/test]
[test]
[input]
4
12
34
2
8
6
1
31
[/input]
[output]
62 12 4 24
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Process Odd Numbers

[vimeo-video]
[stream language="EN" videoId="489374571/1014b0026b" default /]
[stream language="RO" videoId="489374571/1014b0026b"  /]
[/video-vimeo]

[code-task title="Process Odd Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumbers(arr){
  let resultArray = [];

    let i = 0;
    arr.forEach((num, index) => {
        if(index % 2 !== 0){
            resultArray[i++] = arr[index] * 2;
        }
    });

    resultArray.reverse();
    console.log(resultArray.join(" "));
}
```
[/code-editor]
[task-description]

You are given an array of numbers.

Write a function that prints all the elements at odd positions, doubled, and in reversed order.

The input comes as an array of `string` elements, holding numbers.

The output is printed on the c**onsole on a single line**, **separated by space.**


## Examples
| **Input** | **Output** |
| --- | --- |
|`[10, 15, 20, 25]` | 50 30 |
|`[3, 0, 10, 4, 7, 3]` | 6 8 0 |

# Hints

- Counting in arrays starts from `0`
- For example: we receive `10, 15, 20, 25`
- The elements at odd positions are `15 (index 1) and 25 (index 3)`
- We need to take these two elements and `multiply them * 2`
- Finally, we print them on the console in **reversed order**

[/task-description]
[tests]
[test]
[input]
34
12
34
2
56
6
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
4
22
30
12
6
16
25
10
[/input]
[output]
20 32 24 44
[/output]
[/test]
[test]
[input]
6
5
56
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
34
62
3
9
56
[/input]
[output]
18 124
[/output]
[/test]
[test]
[input]
4
12
34
2
8
6
1
31
[/input]
[output]
62 12 4 24
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Sorting Arrays

[vimeo-video]
[stream language="EN" videoId="489374405/c099f73018" default /]
[stream language="RO" videoId="489374405/c099f73018"  /]
[/video-vimeo]

The `sort()` method sorts the items of an array.

Depending on the provided **compare function**, the sort order can either **be alphabetic or numeric**, and either ascending (up) or descending (down). 

By default, the `sort()` method sorts the values as **strings in alphabetical and ascending order.**

If we want to sort numbers or other values, we need to provide a correct **compare function.** 

In this example, we have an array of `names`. 

If we call the `sort()` method directly, without passing a **compare function**, the method will work correctly – it will sort the names in ascending alphabetic order.

``` js live
let names = ['Peter','George','Mary'];
names.sort(); 

console.log(names); 
```

However, if we have an array, which contains `numbers`, not `strings`, the result will be unexpected and incorrect. 

Without a passed `compare function`, the `sort()` method will treat the array as an array of `strings`, not as an array of `numbers`.

So, it will sort them as `string` values. 

``` js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```

[/slide]

[slide]
# Compare Functions

[vimeo-video]
[stream language="EN" videoId="489374404/c8ee191474" default /]
[stream language="RO" videoId="489374404/c8ee191474"  /]
[/video-vimeo]

The `sort()` method, fortunately, can sort negative, zero, and positive values in the correct order.

When the `sort()` method compares two values, it sends the values to the **compare function**, and sorts the values according to the returned value.  

The result could be: **negative, zero, or positive.** 

- If the result is negative, `a` is sorted before `b`.
- If the result is positive, `b` is sorted before `a`.
- If the result is 0, nothing changes.

``` js live
let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a-b);

console.log(nums.join('|'));
```

# Sorting String Arrays
The `localeCompare()` method compares two strings in the current locale. 

It is a string method, so it cannot be applied directly on an array. 

In this example, we pass the `localeCompare()` method as a **comparison function**. 

``` js live
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));

console.log(words);
```
[/slide]

[slide]

[vimeo-video]
[stream language="EN" videoId="489374451/5801e23a89" default /]
[stream language="RO" videoId="489374451/5801e23a89"  /]
[/video-vimeo]

# Problem: Smallest two Numbers
[code-task title="Smallest two Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestTwoNumbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]

Write a function that sorts an array in ascending order and prints the first two numbers. 

The input comes as an array of `string` elements, holding numbers. 

## Examples
| **Input** | **Output** |
| --- | --- |
|`[30, 15, 50, 5]` | 50 30 |
|`[3, 0, 10, 4, 7, 3]` | 0 3 |

# Hints

# Hints
- We can use the following function to sort the elements of the array: 

 ```js
let sortedInAscending = arr.sort((a, b) =>{
  return a - b
});
 ```

- Afterwards, the first two elements in the array are the smallest ones. 

- We can use `slice()` method to take the first two elements


[/task-description]
[tests]
[test]
[input]
\-5
3
2
1
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
\-53
31
\-42
21
13
2
31
[/input]
[output]
\-53 \-42
[/output]
[/test]
[test]
[input]
31
42
\-25
3
2
1
[/input]
[output]
\-25 1
[/output]
[/test]
[test]
[input]
-5
13
2
1
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
-5
11
[/input]
[output]
\-5 11
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide]
# Solution: Smallest two Numbers

[vimeo-video]
[stream language="EN" videoId="489374613/1127440400" default /]
[stream language="RO" videoId="489374613/1127440400"  /]
[/video-vimeo]

[code-task title="Smallest two Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestTwoNumbers(arr){
    let smallestTwoNumbers = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < 2; i++) {
        smallestTwoNumbers[i] = arr[i];
    }

    console.log(smallestTwoNumbers.join(" "));
}
```
[/code-editor]
[task-description]

Write a function that sorts an array in ascending order and prints the first two numbers. 

The input comes as an array of `string` elements, holding numbers. 

## Examples
| **Input** | **Output** |
| --- | --- |
|`[30, 15, 50, 5]` | 50 30 |
|`[3, 0, 10, 4, 7, 3]` | 0 3 |

# Hints

# Hints
- We can use the following function to sort the elements of the array: 

 ```js
let sortedInAscending = arr.sort((a, b) =>{
  return a - b
});
 ```

- Afterwards, the first two elements in the array are the smallest ones. 

- We can use `slice()` method to take the first two elements


[/task-description]
[tests]
[test]
[input]
\-5
3
2
1
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
\-53
31
\-42
21
13
2
31
[/input]
[output]
\-53 \-42
[/output]
[/test]
[test]
[input]
31
42
\-25
3
2
1
[/input]
[output]
\-25 1
[/output]
[/test]
[test]
[input]
-5
13
2
1
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
-5
11
[/input]
[output]
\-5 11
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]