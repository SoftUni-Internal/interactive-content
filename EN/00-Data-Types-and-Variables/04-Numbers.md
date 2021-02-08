# Numbers

[slide hideTitle]
# What is a Number?

[vimeo-video]
[stream language="EN" videoId="489371556/90a6f7534f" default /]
[stream language="RO" videoId="489371556/90a6f7534f"  /]
[/video-vimeo]

Numbers in JavaScript do not have a separate type for **integers** and **floating point numbers.**

We have a type that is `number`.

The largest number we can store is `2^54 +-1`.

We have special values that are:

- `+Infinity` and `–Infinity` that we get when dividing by zero:

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

That can break our program's logic.

``` js live
let nanVar = Number('not a number');
console.log(5 + nanVar);
```

## Parsing Numbers

Number parsing can be done in several ways:

- `parseInt`: we take only the whole part of the number, without rounding it:

``` js live
let myVar = parseInt('3.14');
console.log(myVar);
```

- `parseFloat`: we take the number together with the floating point:

``` js live
let myVar = parseFloat('3.14');
console.log(myVar);
```

- `Number`: parse a string to a number:

``` js live
let myVar = Number('10');
console.log(myVar + 10);
```
[/slide]

[slide hideTitle]
# Problem: Integer or Float

[vimeo-video]
[stream language="EN" videoId="489371609/3a04a5e772" default /]
[stream language="RO" videoId="489371609/3a04a5e772"  /]
[/video-vimeo]

[code-task title="Integer or Float" taskId="fund-js-data-types-and-variables-lab-integer-or-float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(firstNumber, secondNumber, thirdNumber){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {
  return code (Number(input[0]), Number(input[1]), Number(input[2]));
}
```
[/code-adapter]
[task-description]
# Description
You will receive **three numbers**. 

Your task is to find their **sum** and print it to the console with an addition:

`{number} - Integer or Float`


# Example
| **Input** | **Output** |
| --- | --- |
|9, 100, 1.1| 110.1 - Float |
|100, 200, 303|603 - Integer|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
100
1.1
[/input]
[output]
110.1 - Float
[/output]
[/test]
[test open]
[input]
100
200
303
[/input]
[output]
603 - Integer
[/output]
[/test]
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

[slide hideTitle]
# Solution: Integer or Float

[vimeo-video]
[stream language="EN" videoId="489371615/50cc2d6699" default /]
[stream language="RO" videoId="489371615/50cc2d6699"  /]
[/video-vimeo]

[code-task title="Integer or Float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(firstNumber, secondNumber, thirdNumber){
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
(input, code) => {
  return code (Number(input[0]), Number(input[1]), Number(input[2]));
}
```
[/code-adapter]
[task-description]
# Description
You will receive **three numbers**. 

Your task is to find their **sum** and print it to the console with an addition:

`{number} - Integer or Float`


# Example
| **Input** | **Output** |
| --- | --- |
|9, 100, 1.1| 110.1 - Float |
|100, 200, 303|603 - Integer|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
9
100
1.1
[/input]
[output]
110.1 - Float
[/output]
[/test]
[test open]
[input]
100
200
303
[/input]
[output]
603 - Integer
[/output]
[/test]
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