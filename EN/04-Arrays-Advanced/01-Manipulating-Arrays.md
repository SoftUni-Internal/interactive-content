# Manipulating Arrays

[slide]
# Slicing Arrays

The `array.slice()` method creates new array from part of another.

Gets a range of elements from selected **start** to **end** (exclusive).

Note that the original array will **not be modified.**

``` js live
let myArray = ['one','two','three','four','five'];
let sliced = myArray.slice(2);

console.log(myArray);
console.log(sliced);

console.log(myArray.slice(2,4));
```

# Splice: Cut and Insert Array Elements

The `array.splice()` adds or removes items to\/from an array, and returns the removed item(s).

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

[slide]
# Problem: First and Last K Numbers
[code-task title="First and Last K Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a function that prints the first `k` and the last `k` elements from an **array of numbers.**

The **input** comes as **array of number** elements. 

The first element represents the number `k`, all other elements are from the array that needs to be processed.

The **output** is printed on the console on two lines. 

On the first line print the **first k** elements, separated by space. 

On the second line print the **last k** elements, separated by space.


## Examples
| **Input** | **Output** |
| --- | --- |
|`['2', '7', '8', '9']` | 7 8 |
| | 8 9 |

## Examples
| **Input** | **Output** |
| --- | --- |
|`['3', '6', '7', '8', '9']` | 6 7 8 |
| | 7 8 9 |

# Hints

- Use `slice()` to split the array into two parts


[/task-description]
[tests]
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

[slide]
# Solution: First and Last K Numbers
[code-task title="First and Last K Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  let n = arr[0];
    let firstKElements = [];
    let lastKElements = [];

    for (let i = 1; i <= n; i++) {
        firstKElements[i - 1] = arr[i];
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
        lastKElements[index++] = arr[arr.length - 1 - i];
    }
    lastKElements.sort((a, b) => a - b);

    console.log(firstKElements.join(" "));
    console.log(lastKElements.join(" "));
}
```
[/code-editor]
[task-description]
Write a function that prints the first `k` and the last `k` elements from an **array of numbers.**

The **input** comes as **array of number** elements. 

The first element represents the number `k`, all other elements are from the array that needs to be processed.

The **output** is printed on the console on two lines. 

On the first line print the **first k** elements, separated by space. 

On the second line print the **last k** elements, separated by space.


## Examples
| **Input** | **Output** |
| --- | --- |
|`['2', '7', '8', '9']` | 7 8 |
| | 8 9 |

## Examples
| **Input** | **Output** |
| --- | --- |
|`['3', '6', '7', '8', '9']` | 6 7 8 |
| | 7 8 9 |

# Hints

- Use `slice()` to split the array into two parts


[/task-description]
[tests]
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