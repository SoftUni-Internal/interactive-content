[slide]
# NOT WORKING TEST PROBLEM:  Numbers, Divisible by 9

[code-task title="Divisible by 9" taskId="pb-js-for-loop-Numbers-Divisible-by-9" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let numByNine = '0';
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
            sum += index;
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
          console.log(index + " ");  
            
        }
    }
    
}
```
[/code-editor]
[task-description]
# Description

`Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващия отговарящите на условието числа с интервал между тях.`

# Example
| **Input** | **Output** |
| --- | --- |
|100| The sum: 1683 |
|200|108 117 126 135 144 153 162 171 180 189 198|

[/task-description]
[tests]
[test]
[input]
100
200
[/input]
[output]
The sum: 1683
108
117
126
135
144
153
162
171
180
189
198
[/output]
[/test]
[test]
[input]
0
100
[/input]
[output]
The sum: 594
0
9
18
27
36
45
54
63
72
81
90
99
[/output]
[/test]
[test]
[input]
1
50
[/input]
[output]
The sum: 135
9
18
27
36
45
[/output]
[/test]
[test]
[input]
9000
9008
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# WORKING TEST PROBLEM:  Numbers, Divisible by 9

[code-task title="Divisible by 9" taskId="pb-js-for-loop-Divisible-by-9" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
  let  num1 = Number(input.shift());
  let  num2 = Number(input.shift());
  
    let sum = 0;
    let numByNine = '0';
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
            sum += index;
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let index = num1; index <= num2; index++) {
        if (index % 9 == 0) {
          console.log(index + " ");  
            
        }
    }
    
}
```
[/code-editor]
[task-description]
# Description

`Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващия отговарящите на условието числа с интервал между тях.`

# Example
| **Input** | **Output** |
| --- | --- |
|100| The sum: 1683 |
|200|108 117 126 135 144 153 162 171 180 189 198|

[/task-description]
[tests]
[test]
[input]
100
200
[/input]
[output]
The sum: 1683
108
117
126
135
144
153
162
171
180
189
198
[/output]
[/test]
[test]
[input]
0
100
[/input]
[output]
The sum: 594
0
9
18
27
36
45
54
63
72
81
90
99
[/output]
[/test]
[test]
[input]
1
50
[/input]
[output]
The sum: 135
9
18
27
36
45
[/output]
[/test]
[test]
[input]
9000
9008
[/input]
[output]
The sum: 9000
9000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

