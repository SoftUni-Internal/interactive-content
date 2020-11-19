# Array Iteration

[slide]
# Printing Arrays On the Console

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
}
```
[/slide]

[slide]
# Problem: Reverse an Array of Numbers
[code-task title="Reverse an Array of Numbers. Concantenate names" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript]
```
function reverse(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description

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
[code-io /]
[tests]
[test open]
[input]
3
10
20
30
40
50
[/input]
[output]
30 20 10
[/output]
[/test]
[test open]
[input]
4
-1
20
99
5
[/input]
[output]
5 99 20 -1
[/output]
[/test]
[test open]
[input]
2
66
43
75
89
47
[/input]
[output]
43 66
[/output]
[/test]
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
[/code-task]
[/slide]