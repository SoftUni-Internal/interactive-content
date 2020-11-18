[slide]
# What is a Number?
The numbers in JavaScript do not have a separate type for **integers** and **floating point numbers.**

We have a type that is **numbers.**

The largest number we can store is `2^54 +-1`
`
We have special values ​​that are:

- `+Infinity` and `–Infinity`  we get when we divide by zero

``` js live
console.log(5 / 0);
console.log(-5 / 0);
```

We get Infinity in order not to get a **compile time error.**

- `NaN` (not-a-number):  we can get NaN when we try to parse a string that cannot be parsed or when we try to divide by zero:

``` js live
let nanVar = Number('not a number');
console.log(nanVar);
```

The problem with `NaN` is that when we use it in **mathematical terms**, we always get `NaN`. 

If we have **logic in our program that gives** `NaN`, and then we have some **mathematical operation**, we will always get `NaN`. 

That can break our program logic.

``` js live
let nanVar = Number('not a number');
console.log(5 + nanVar);
```

# Parsing Numbers

Number parsing can be done in several ways:

- `parseInt`: we take only the whole part of the number, do not round it:

``` js live
let myVar = parseInt('3.14');
console.log(myVar);
```

- `parseFloat`: we take the number together with the floating point

``` js live
let myVar = parseFloat('3.14');
console.log(myVar);
```

- `Number`: parse string to number

``` js live
let myVar = Number('10');
console.log(myVar + 10);
```
[/slide]

[slide]
# Problem: Integer or Float
[code-task title="Integer or Float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You will receive **three numbers**. 

Your task is to find their **sum** and print it to the console with the **addition** 

`{number} - Integer or Float`


# Example
  | **Input** | **Output** |
| --- | --- |
|`['9', '100', '1.1']`| 110.1 - Float |
|`['100', '200', '303']`|603 - Integer|

[/task-description]
[tests]
[test]
[input]
9
14156
1231.41
[/input]
[output]
15396.41 - Float
[/output]
[/test]
[test]
[input]
456
120
145.41
[/input]
[output]
721.41 - Float
[/output]
[/test]
[test]
[input]
912
54610
451.11
[/input]
[output]
55973.11 - Float
[/output]
[/test]
[test]
[input]
56
2120
3203
[/input]
[output]
5379 - Integer
[/output]
[/test]
[test]
[input]
170
2098
483
[/input]
[output]
2751 - Integer
[/output]
[/test]
[test]
[input]
10990
78
483
[/input]
[output]
11551 - Integer
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Integer or Float
[code-task title="Integer or Float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(input){
 let firstNumber = Number(input[0]);
 let secondNumber = Number(input[1]);
 let thirdNumber = Number(input[2]);

 let sum = firstNumber + secondNumber + thirdNumber;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    }
    else{
        console.log(`${sum} - Float`);
    }
}
```
[/code-editor]
[task-description]
# Description
You will receive **three numbers**. 

Your task is to find their **sum** and print it to the console with the **addition** 

`{number} - Integer or Float`


# Example
  | **Input** | **Output** |
| --- | --- |
|`['9', '100', '1.1']`| 110.1 - Float |
|`['100', '200', '303']`|603 - Integer|

[/task-description]
[tests]
[test]
[input]
9
14156
1231.41
[/input]
[output]
15396.41 - Float
[/output]
[/test]
[test]
[input]
456
120
145.41
[/input]
[output]
721.41 - Float
[/output]
[/test]
[test]
[input]
912
54610
451.11
[/input]
[output]
55973.11 - Float
[/output]
[/test]
[test]
[input]
56
2120
3203
[/input]
[output]
5379 - Integer
[/output]
[/test]
[test]
[input]
170
2098
483
[/input]
[output]
2751 - Integer
[/output]
[/test]
[test]
[input]
10990
78
483
[/input]
[output]
11551 - Integer
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]