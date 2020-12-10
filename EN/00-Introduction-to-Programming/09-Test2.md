[slide]
# Problem: Sum Even Numbers
[code-task title="Problem: Sum Even Numbers" taskId="3b9283d0-7e7c-4b1e-973a-105cd674f444" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```

```
[/code-editor]
[task-description]
# Description

Write a program which receives an **array** of strings, **parse** them to numbers and **sum** only the **even** numbers.

## Examples:

| **Input** | **Output** |
| --- | --- |
| ['1','2','3','4','5','6'] | 12 |
| ['3','5','7','9'] | 0 |
| ['2','4','6','8','10'] | 30 |

## Hints:

- Parse each string to number

```
function sumEvenNumbers(arr) {
    for (let = 0; i < arr.length; i++>) {
        arr[i] = Number(arr[i]);
    }
}

```

.... Custom Description 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
2
3
4
5
6
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
3
5
7
9
[/input]
[output]
0
[/output]
[/test]
[test open]
[input]
2
4
6
8
10
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
1
1
34
64
86
[/input]
[output]
184
[/output]
[/test]
[test]
[input]
1
2
3
4
5
6
10
[/input]
[output]
22
[/output]
[/test]
[test]
[input]
13
55
37
19
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
13
55
37
19
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
1
156
7
18
[/input]
[output]
174
[/output]
[/test]
[test]
[input]
3
14
0
8
18
[/input]
[output]
40
[/output]
[/test]
[test]
[input]
15
15
5
18
990
[/input]
[output]
1008
[/output]
[/test]
[test]
[input]
11
10
13
1
10
[/input]
[output]
20
[/output]
[/test]
[/tests]
[/code-task]
[/slide]