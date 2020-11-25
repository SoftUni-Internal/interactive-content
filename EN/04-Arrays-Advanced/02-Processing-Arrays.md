# Processing Arrays

[slide]

# Transform Elements

Starting from ES5, JavaScript Array type provides the `map()` method that allows you to transform the array elements in a cleaner way.

`map()` creates **new array** by applying a **function** to every element.

In this example we create a new array using `map()` and there we store the length of each string. 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);

console.log(lengths);
```

In this example we have a string array and using `map()` we convert each element into a number.

Using `map()` we increment each number in the array

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

`filter()` creates new array from elements matching predicate.

Predicate is a function returning a Boolean value (true or false).

In this example, we filter the collection into a new array, where the length of each element is bigger than three.

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

Write a function that prints the elements at **odd positions** from the array, doubled and in reverse order.

The input comes as **array of number elements.**

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

Write a function that prints the elements at **odd positions** from the array, doubled and in reverse order.

The input comes as **array of number elements.**

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

[slide]
# Sorting Arrays

The `sort()` method sorts the items of an array.

Depending on the provided compare function, sorting can be **alphabetic** or **numeric**, and either **ascending (up)** or **descending (down).**

By default, the `sort()` method sorts the values as **strings in alphabetical and ascending order.**

If you want to sort numbers or other values, you need to provide the correct compare function.

We have an array of names, calling sort directly on that array without passing in a compare function will, in this case, work correctly and sort the names in ascending alphabetic order

``` js live
let names = ['Peter','George','Mary'];
names.sort(); 

console.log(names); 
```

When the array contains numbers and not strings, the result is unexpected 

The `sort()` method, without a passed in compare function will treat the array as an array of strings and not numbers. 

So it will sort them as string values. 

``` js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```

[/slide]

[slide]
# Compare Functions

The `sort()` method, fortunately, can sort **negative**, **zero**, and **positive** values in the correct order.

When the `sort()` method compares two values, it sends the values to our compare function and sorts the values according to the returned value.

- If the result is negative, `a` is sorted before `b`.
- If the result is positive, `b` is sorted before `a`.
- If the result is 0, nothing changes.

``` js live
let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a-b);

console.log(nums.join('|'));
```

# Sorting String Arrays
The `localeCompare()` method is used to compare any two characters without regard for the case used.

It's a string method so it can't be used directly on an array.

Pass `localeCompare()` as the comparison function:

``` js live
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));

console.log(words);
```
[/slide]