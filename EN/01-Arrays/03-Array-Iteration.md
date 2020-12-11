# Array Iteration

[slide]
# Printing Arrays On the Console

[vimeo-video]
[stream language="EN" videoId="489372567/b8ba0e753f" default /]
[stream language="RO" videoId="489372567/b8ba0e753f"  /]
[/video-vimeo]

To print all array elements, a for-loop can be used

``` js live
let capitals = ['Bucuresti', 'Washington', 'London'];

  for (let i = 0; i < capitals.length; i++){
 console.log(capitals[i]);
  }
```

Another way to print all array elements is using `toString()`

``` js live
let capitals = ['Bucuresti', 'Washington', 'London'];

console.log(capitals.toString())
```
[/slide]

[slide]
# For-of Loop

[vimeo-video]
[stream language="EN" videoId="489453701/2693aea66c" default /]
[stream language="RO" videoId="489453701/2693aea66c"  /]
[/video-vimeo]

The `for..of` loop is used to iterate over any inerrable object but cannot be used to  access the their indexes. 

[/slide]

[slide]
# Print an Array with For-of

[vimeo-video]
[stream language="EN" videoId="489372688/6c7e446d04" default /]
[stream language="RO" videoId="489372688/6c7e446d04"  /]
[/video-vimeo]

``` js live
let arr = [1,2,3,4,5,6];

for(let num of arr){
   console.log(num);
}
```
[/slide]

[slide]
# Problem: Reverse an Array of Numbers

[vimeo-video]
[stream language="EN" videoId="489372548/0e9743357b" default /]
[stream language="RO" videoId="489372548/0e9743357b"  /]
[/video-vimeo]

[code-task title="Reverse an Array of Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reverce(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
Write a program which receives an array of elements.

Your task is to create a new array with `n` numbers, reverse it and print its elements on a single line, space separated.

Where `n` is the  first element of the array.


## Examples
| **Input** | **Output** |
| --- | --- |
|`[3, 10, 20, 30, 40, 50]` | 30 20 10 |
|`[4, -1, 20, 99, 5]` | 5 99 20 -1 |
|`[2, 66, 43, 75, 89, 47]` | 43 66 |

[/task-description]
[tests]
[test]
[input]
3
110
520
330
87
[/input]
[output]
330 520 110
[/output]
[/test]
[test]
[input]
3
-41
520
99
5
[/input]
[output]
99 520 -41
[/output]
[/test]
[test]
[input]
4
-31
320
199
5
[/input]
[output]
5 199 320 -31
[/output]
[/test]
[test]
[input]
1
-16
20
9159
5
[/input]
[output]
-16
[/output]
[/test]
[test]
[input]
2
6342
74
1
139
417
[/input]
[output]
74 6342
[/output]
[/test]
[test]
[input]
3
616
43
75
89
47
[/input]
[output]
75 43 616
[/output]
[/test]
[test]
[input]
2
41
423
475
89
47
[/input]
[output]
423 41
[/output]
[/test]
[test]
[input]
5
664
43
715
8899
747
44
78
[/input]
[output]
747 8899 715 43 664
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide]
# Solution: Reverse an Array of Numbers

[vimeo-video]
[stream language="EN" videoId="489372607/8699baf857" default /]
[stream language="RO" videoId="489372607/8699baf857"  /]
[/video-vimeo]

[code-task title="Reverse an Array of Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(arr){
    let num = arr.shift();
    arr.length = num;
    console.log(arr.reverse().join(' '));
}
```
[/code-editor]
[task-description]
Write a program which receives an array of elements.

Your task is to create a new array with `n` numbers, reverse it and print its elements on a single line, space separated.

Where `n` is the  first element of the array.

## Examples
| **Input** | **Output** |
| --- | --- |
|`[3, 10, 20, 30, 40, 50]` | 30 20 10 |
|`[4, -1, 20, 99, 5]` | 5 99 20 -1 |
|`[2, 66, 43, 75, 89, 47]` | 43 66 |

[/task-description]
[tests]
[test]
[input]
3
110
520
330
87
[/input]
[output]
330 520 110
[/output]
[/test]
[test]
[input]
3
-41
520
99
5
[/input]
[output]
99 520 -41
[/output]
[/test]
[test]
[input]
4
-31
320
199
5
[/input]
[output]
5 199 320 -31
[/output]
[/test]
[test]
[input]
1
-16
20
9159
5
[/input]
[output]
-16
[/output]
[/test]
[test]
[input]
2
6342
74
1
139
417
[/input]
[output]
74 6342
[/output]
[/test]
[test]
[input]
3
616
43
75
89
47
[/input]
[output]
75 43 616
[/output]
[/test]
[test]
[input]
2
41
423
475
89
47
[/input]
[output]
423 41
[/output]
[/test]
[test]
[input]
5
664
43
715
8899
747
44
78
[/input]
[output]
747 8899 715 43 664
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Reverse an Array of Strings

[vimeo-video]
[stream language="EN" videoId="489372618/881c97fdd1" default /]
[stream language="RO" videoId="489372618/881c97fdd1"  /]
[/video-vimeo]

[code-task title="Reverse an Array of Strings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reverce(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

Write a program which receives an array of strings (space separated values).

Your task is to reverse it and print its elements.**Swap elements.**

## Examples
| **Input** | **Output** |
| --- | --- |
|`['a', 'b', 'c', 'd', 'e']` | e d c b a  |
|`['abc', 'def', 'hig', 'klm', 'nop']` | nop klm hig def abc |
|`['33', '123', '0', 'dd']` | dd 0 123 33 |

# Comments
The first element should be last, and the last element should be first.

[/task-description]
[tests]
[test]
[input]
3ghj3
123
0
dkl;d
dasjkjd
dage
[/input]
[output]
dage dasjkjd dkl;d 0 123 3ghj3
[/output]
[/test]
[test]
[input]
3gjhgjh3
123bnmb
nmbmn0
dd
dasd
dage
[/input]
[output]
dage dasd dd nmbmn0 123bnmb 3gjhgjh3
[/output]
[/test]
[test]
[input]
3bmn3
12bnmbn3
0
dd
dasd
dage
[/input]
[output]
dage dasd dd 0 12bnmbn3 3bmn3
[/output]
[/test]
[test]
[input]
3hjkh3
1hjkh23
0ghjgj
45dd
djklasd
dage
[/input]
[output]
dage djklasd 45dd 0ghjgj 1hjkh23 3hjkh3
[/output]
[/test]
[test]
[input]
3jkj3
124543
0
dd
dsadaffa
[/input]
[output]
dsadaffa dd 0 124543 3jkj3
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Reverse an Array of Strings

[vimeo-video]
[stream language="EN" videoId="489767886/43c8c03f0e" default /]
[stream language="RO" videoId="489767886/43c8c03f0e"  /]
[/video-vimeo]

[code-task title="Reverse an Array of Strings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reverce(input){
  let reversed = input.reverse();

  console.log(reversed.join(' '));
}
```
[/code-editor]
[task-description]

Write a program which receives an **array of strings** (space separated values).

Your task is to reverse it and print its elements. **Swap** elements.

## Examples
| **Input** | **Output** |
| --- | --- |
|`['a', 'b', 'c', 'd', 'e']` | e d c b a  |
|`['abc', 'def', 'hig', 'klm', 'nop']` | nop klm hig def abc |
|`['33', '123', '0', 'dd']` | dd 0 123 33 |

# Comments
The first element should be last, and the last element should be first.

[/task-description]
[tests]
[test]
[input]
3ghj3
123
0
dkl;d
dasjkjd
dage
[/input]
[output]
dage dasjkjd dkl;d 0 123 3ghj3
[/output]
[/test]
[test]
[input]
3gjhgjh3
123bnmb
nmbmn0
dd
dasd
dage
[/input]
[output]
dage dasd dd nmbmn0 123bnmb 3gjhgjh3
[/output]
[/test]
[test]
[input]
3bmn3
12bnmbn3
0
dd
dasd
dage
[/input]
[output]
dage dasd dd 0 12bnmbn3 3bmn3
[/output]
[/test]
[test]
[input]
3hjkh3
1hjkh23
0ghjgj
45dd
djklasd
dage
[/input]
[output]
dage djklasd 45dd 0ghjgj 1hjkh23 3hjkh3
[/output]
[/test]
[test]
[input]
3jkj3
124543
0
dd
dsadaffa
[/input]
[output]
dsadaffa dd 0 124543 3jkj3
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]