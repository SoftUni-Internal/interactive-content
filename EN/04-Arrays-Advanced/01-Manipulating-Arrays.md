# Manipulating Arrays

[slide]
# Slicing Arrays

The `array.slice()` method returns the selected elements in an array, as a new array object.

It selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. 

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
Write a function that prints the first `k` and the last `k` elements of an array of numbers. 

The input comes as an array of `string` elements, holding numbers. 

The first element represents the number `k`. 

All the other elements form the array that needs to be processed. 

On the first line, print the **first k** elements, separated by space. 

On the second line, print the **last k** elements, separated by space. 


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
Write a function that prints the first `k` and the last `k` elements of an array of numbers. 

The input comes as an array of `string` elements, holding numbers. 

The first element represents the number `k`. 

All the other elements form the array that needs to be processed. 

On the first line, print the **first k** elements, separated by space. 

On the second line, print the **last k** elements, separated by space. 


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
# Problem: Last K Numbers Sequence
[code-task title="Last K Numbers Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  // Write your code here
}
```
[/code-editor]
[task-description]
You are given two integers: n and k. Write a function that generates and prints the following sequence: 

- The first element is `1`.
- Every following element is equals to the sum of the previous `k` elements. 
- The length of the sequence is `n` elements.
	
The input comes as an array of two `string` elements, holding numbers. 

The first element represents the number `n`, and the second – the number `k`.

The output is printed on the console on a single line, separated by space.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['6', '3']` | 1 1 2 4 7 13 |
|`['8', '2']` | 1 1 2 3 5 8 13 21 |


# Hints

The **second element (1)** is equals to the sum of the 3 elements before it, but there is only one element, so we take that. 

The third element is equals to the sum of the first two elements (1 and 1) . 

The fourth element is equals to the sum of 1, 1 and 2. 

The fifth element is equals to the sum of the 2nd, 3rd and 4th (1, 2 and 4) and so on


[/task-description]
[tests]
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

[slide]
# Solution: Last K Numbers Sequence
[code-task title="Last K Numbers Sequence" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbers(arr){
  let n = Number(arr[0]);
  let k = Number(arr[1]);

  let sequence = [1];

    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let lastThreeEl = sequence.slice(start);

        let sum = 0;
        for (let number of lastThreeEl) {
            sum += number;
        }
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}
```
[/code-editor]
[task-description]
You are given two integers: n and k. Write a function that generates and prints the following sequence: 

- The first element is `1`.
- Every following element is equals to the sum of the previous `k` elements. 
- The length of the sequence is `n` elements.
	
The input comes as an array of two `string` elements, holding numbers. 

The first element represents the number `n`, and the second – the number `k`.

The output is printed on the console on a single line, separated by space.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['6', '3']` | 1 1 2 4 7 13 |
|`['8', '2']` | 1 1 2 3 5 8 13 21 |


# Hints

The **second element (1)** is equals to the sum of the 3 elements before it, but there is only one element, so we take that. 

The third element is equals to the sum of the first two elements (1 and 1) . 

The fourth element is equals to the sum of 1, 1 and 2. 

The fifth element is equals to the sum of the 2nd, 3rd and 4th (1, 2 and 4) and so on


[/task-description]
[tests]
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
