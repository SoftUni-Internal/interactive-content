[slide]
# What is a Boolean?

Boolean values ​​are named after [George Boole](https://en.wikipedia.org/wiki/George_Boole), an English mathematician.

Boolean values ​​represent some **logical value**.

They can only have two values `​​true` and `false`.

We can give this value as a **literal** or we can get it from the result of a **given expression**.

``` js live
let myBool = 10 > 9;
console.log(myBool);
```

Boolean comparisons are most often put in `if` construction, we can also return a Boolean value as a **result from a function.**

**Extremely rarely** do we write `true` or `false` explicitly.

# Comparisons and Conditions

Examples of comparison operators:

| Operator | Description | Example   |
| :---:       |    :----:   |   :---:   |
| `==` | equal to (no type) | `if (day == 'Monday')` |
| `===` | equal to (with type) | `if (5 === 5)` |
| `!=`| not equal (no type) | `if (5 != 5)` |
| `!==` | not equal (with type) | `if (5 !== '5')` |
| `>` | greater than | `if (salary > 9000)` |
| `<` | less than | `if (age < 18)` |
| `>=` | greater than or equal to(no type) | `if (6 >= 6)` |
| `<=` | less than or equal to(no type) | `if(6 <= 6)` |

# Booleans examples:

Everything with a "value" is `true`:

``` js live
let number=1;

if (number) {
  console.log(number);
}
```

- Everything without a "value" is `false`

``` js live
let number;

if (number) {
  console.log(number);
} else {
  console.log('false');
}

```
[/slide]

[slide]
# Truthy and Falsy 

In addition to `true` and `false`, JavaScript has `truthy` and `falsy` (sometimes written `falsey`). 

These are values ​​that are **not** `true` or `false`, but when we turn them into a Boolean value they give `true` or `false`.

In JavaScript is **weakly typed language** and we do not have types of variables. 

This does not prevent in if expression to try to **compare** variables that store values ​​with **different types.**

In this example: 

``` js live
console.log(5 == '5');
```

we pass values ​​of different types, using the operator `==` or`!=`. 

In this case, the interpreter will make the so-called **implicit casting**. 

This means that the default interpreter will **convert** one value to **another**, which in most cases means **converting to a string.**

By giving a **string** and a **number**, for example, **the number becomes a string** and the interpreter compares the strings.

If we use `===` the interpreter **does not convert the number to a string**, so **the number five is not the same as string five** and this expression returns `false`.

``` js live
console.log(5 === '5');
```

Regarding `truthy` and `falsy` values, for example in `if` construction we can compare with different types of data.

``` js live
if (5 == true) {
  console.log('same');
}else{
  console.log('not');
}

```

The result of this expression will be `not`, and this is expected behavior.

The result of this expression:
``` js live
if (1 == true) {
  console.log('same');
}else{
  console.log('not');
}
```

Is the `same`, because the interpreter sees them as `1 == true` and turns this  into a **Boolean value.**

The values ​​`0` and `1` become the Boolean value `0 false`, `1 true`.

The other numeric values ​​become Boolean values, and they are `false`.

In javascript we have eight values ​​that are assumed to be `falsy`:

| Value | Description | 
| :---:       |    :----:   |   
| `false` | The keyword `false` | 
| `0` | The number zero | 
| `-0`| The number negative zero | 
| `0n` | BigInt, when used as a boolean | 
| `""` |  Empty string value | 
| `null` |  `null` - the absence of any value | 
| `undefined` | `undefined` - the primitive value | 
| `NaN` |  	`NaN` - not a number | 

All other values ​​are `true`, for example an empty array `[]` and an empty object `{}` are true.

Nevertheless, in loop, if construction a**lways submit the Boolean value**, respectively never submit anything other than a Boolean value. 

It is always better to be **explicit** so as not to be ambiguous.

[/slide]

[slide]
# Problem: Amazing Numbers
[code-task title="Amazing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function amazingNumbers(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function which as input will receive a **number.**
 
Check and print if it is **amazing** or **not** into the following format: 

`{number} Amazing? {result}`

An amazing number is one that includes the **digit 9** the sum of its digits. 

Examples for amazing numbers are: `1233 (1 + 2 + 3 + 3 = 9)`, `583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)`



# Example
  | **Input** | **Output** |
| --- | --- |
|`1233`| 1233 Amazing? True |
|`999`|999 Amazing? False|

[/task-description]
[tests]
[test]
[input]
5454155
[/input]
[output]
5454155 Amazing? True
[/output]
[/test]
[test]
[input]
144
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
55555554
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
5554
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
45645
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
3671
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
1231
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
6123
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
65451
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# SOlution: Amazing Numbers
[code-task title="Amazing Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function amazingNumbers(input){
 let	num = input.toString();
let sum = 0;
	for (let j = 0; j <=num.length - 1; j++) {
		sum += Number(num[j]);
	}
	if (sum.toString().includes('9')) {
		console.log(`${num} Amazing? True`);
			} else {
		console.log(`${num} Amazing? False`);
	}
}
```
[/code-editor]
[task-description]
# Description

Write a function which as input will receive a **number.**
 
Check and print if it is **amazing** or **not** into the following format: 

`{number} Amazing? {result}`

An amazing number is one that includes the **digit 9** the sum of its digits. 

Examples for amazing numbers are: `1233 (1 + 2 + 3 + 3 = 9)`, `583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)`



# Example
  | **Input** | **Output** |
| --- | --- |
|`1233`| 1233 Amazing? True |
|`999`|999 Amazing? False|

[/task-description]
[tests]
[test]
[input]
5454155
[/input]
[output]
5454155 Amazing? True
[/output]
[/test]
[test]
[input]
144
[/input]
[output]
144 Amazing? True
[/output]
[/test]
[test]
[input]
55555554
[/input]
[output]
55555554 Amazing? True
[/output]
[/test]
[test]
[input]
5554
[/input]
[output]
5554 Amazing? True
[/output]
[/test]
[test]
[input]
45645
[/input]
[output]
45645 Amazing? False
[/output]
[/test]
[test]
[input]
3671
[/input]
[output]
3671 Amazing? False
[/output]
[/test]
[test]
[input]
1231
[/input]
[output]
1231 Amazing? False
[/output]
[/test]
[test]
[input]
6123
[/input]
[output]
6123 Amazing? False
[/output]
[/test]
[test]
[input]
65451
[/input]
[output]
65451 Amazing? False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
