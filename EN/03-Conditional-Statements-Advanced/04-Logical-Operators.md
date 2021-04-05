// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Logical-Operators"

# Logical Operators
[slide hideTitle]
# More Complex Conditions

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-19-20-21-Logical Operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us take a look at how we can create more **complex logical conditions** in programming. 

We can use:
* Logical **"AND"** (`&&`)
* Logical **"OR"** (`||`)
* Logical **negation** (`!`) 
* **Parentheses** (`()`)

## Logical "AND", "OR" and "NOT"
This is a short example that demonstrates the power of the logical **"AND"**, the logical **"OR"** and the logical **"NOT"**: 

```js live
let input = ['shark', '50'];
let animal = input[0];
let speed =  Number(input[1]);

if ((animal == 'horse' || animal == 'donkey') && (speed > 40)) {
    console.log("Run fast");
} else if ((animal == 'shark' || animal == 'dolphin') && (speed > 45)) {
    console.log('Swim fast');
} else if (!(speed > 30 || animal == 'turtle')) {
    console.log('Move slow');
}
```

We will explain the logical **"AND"** (`&&`), the logical **"OR"** (`||`), and the logical **"NOT"** (`!`) in the next few sections, along with examples and exercises. 
[/slide]

[slide hideTitle]
# Logical "AND"

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-22-Logical-and-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As we previously saw, in some tasks we have to perform **many checks at once**. 

What happens when more conditions have to be executed at once, and we don't want to make a negation (else) for each one of them? 

The option with nested `if` **blocks** is valid, but the code would look very unordered and for sure – **hard to read and maintain**.

The logical **"AND"** (operator `&&`) means that a few conditions have to be fulfilled simultaneously. 

The following table of truthfulness is applicable:

 | **Operand one** | **Operand two** | **AND**   |
| :---:       |    :----:   |   :---:   |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

## How does the `&&` operator work? 

The `&&` operator accepts a couple of Boolean (conditional) statements, which have a true or a false value, and returns one 'bool' statement as a result. 

Using it instead of a couple of nested `if` blocks, makes the code **more readable**, **ordered** and **easy** to maintain. 

But how does it work when we put a few conditions one after another? 

As we saw above, the logical **"AND"** returns true, only when it accepts as arguments statements with values that are `true`.  

Respectively, when we have a **sequence** of arguments, the logical **"AND"** checks either until there are no more arguments, or until it meets an argument with a `false` value. 

## Example
```js live
let a = true;
let b = true;
let c = false;
let d = true;
let result = a && b && c && d;
console.log(result);
```

The program will run in the **following** way: 

- It starts the check from `a`, reads it, and accepts that it has a true value. After that, it checks `b`

- After it has **accepted** that `a` and `b` return `true`, **it checks the next** argument

- It gets to `c` and sees that the variable has a `false` value

- After the program accepts that the argument `c` has a `false` value, it calculates the expression **before** `c`, **independent** of what the value of `d` is

- That is why the evaluation of `d` is being **skipped** and the whole expression is calculated as `false`

## Example: Point in a Rectangle
Checks whether `point {x, y}` is placed inside the rectangle `{x1, y1} - {x2, y2}`. 

[image assetsSrc="03.Point-in-rectangle-01.png" /]

The input data is read from the console and consists of 6 lines: 

- The decimal numbers `x1`, `y1`, `x2`, `y2`, `x` and `y` (as it is guaranteed that `x1 < x2` and `y1 < y2`).

## Sample Input and Output

  | **Input** | **Output** |
| --- | --- |
|2|Inside|
|-3||
|12||
|3||
|8||
|-1||

## Solution
A point is internal for a given polygon if the following four conditions are applied at the same time:

- The point is placed to the right from the left side of the rectangle

- The point is placed to the left from the right side of the rectangle

- The point is placed downwards from the upper side of the rectangle

- The point is placed upwards from the downside of the rectangle


```js live
let x1 = 2;
let y1 = -3;
let x2 = 12;
let y2 = 3;

let x = 8;
let y = -1;

if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    console.log('Inside');
} else {
    console.log('Outside');
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Bonus Points

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-23-Problem-and-Solution-Bonus-Points-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bonus Points" taskId="pb-js-conditional-statements-advanced-Bonus-Points" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function bonusPoints(input) {
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Create a program, which adds a bonus to given points

* If the points are between **0** and **3**, add **5**

* If the points are between **4** and **6**, add **15**

* If the points are between **7** and **9**, add **20**

# Example
  | **Input** | **Output** |
| --- | --- |
| bonusPoints(4) | 19 |
| bonusPoints(8) | 28 |

[/task-description]
[tests]
[test open]
[input]
bonusPoints(4)
[/input]
[output]
19
[/output]
[/test]
[test open]
[input]
bonusPoints(8)
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
bonusPoints(1)
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Logical "OR" Operator

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-24-25-Logical-or-and-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


The logical **OR** (operator `||`) means that **at least one** among a few conditions are fulfilled. 

Similar to the operator `&&`, the logical **OR** accepts a few arguments of **bool** (conditional) type and returns `true` or `false`. 

We can easily guess that we **obtain** a value `true` whenever at least one of the arguments has a `true` value. 


 | **Operand one** | **Operand two** | **OR** |
| :---: |    :---:   |   :---:   |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |


At school, the teacher says: "John or Peter should clean the board". 

To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it.

## How Does the `||` Operator Work?
We have already learned what the logical **OR** represents. 

But how is it being achieved? 

Just like with the logical **"AND"**, the program checks from left to right the given arguments. 

To obtain `true` from the expression, it is necessary to have at least one argument with a `true` value. 

Respectively, the checking **continues** until an **argument** with **such** value is encountered or until there are not any arguments **left**.

Here is one **example** of the `||` operator in action:

```js live
let a = false;
let b = true;
let c = false;
let d = true;

let result = a || b || c || d;

console.log(result);
```

The program **checks** `a`, accepts that it has a value `false`, and continues. 

Reaching `b`, it understands that it has a `true` value and the whole **expression** is considered as `true`, without having to check `c` or `d`, because their values **wouldn't change** the result of the expression.
[/slide]

[slide hideTitle]
# Problem with Solution: Food or Drink


[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-24-25-Logical-or-and-Problem and Solution-Food-Or-Drink-TRIM-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Food or Drink" taskId="pb-js-conditional-statements-advanced-Food-or-Drink" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodOrDrink(input) {
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description
Create a program, which determines if the **input** is a **food** or a **drink**:

* Print "**food**" for the following: **curry**, **noodles**, **sushi** and **spaghetti**

* Print "**drink**" for the following: **tea**, **water** and **coffee**

* Print "**unknown**" for everything else

# Example
| **Input** | **Output** |
| --- | --- |
|foodOrDrink('curry')| food |
|foodOrDrink('flower')| unknown |

[/task-description]
[tests]
[test open]
[input]
foodOrDrink('curry')
[/input]
[output]
food
[/output]
[/test]
[test open]
[input]
foodOrDrink('flower')
[/input]
[output]
unknown
[/output]
[/test]
[test]
[input]
foodOrDrink('tea')
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
foodOrDrink('something')
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]



[slide hideTitle]
# Logical "NOT" Operator

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-26-Logical-not-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Logical negation (operator `!` ) means that a given condition is **not fulfilled.**

| **a** | **!a** |
|---|---|
| true | false |

The operator `!` accepts as an **argument** a bool variable and **returns** its value.

## Example: Invalid Number

A given number is valid if it is in the range `[100 ... 200]` or it is `0`. 

Validate an invalid number. 

For example, `75` and `220` are **invalid**, but `150` is **valid**.

```js live
let num = 75;

let inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    console.log('invalid');
}
```
[/slide]

[slide hideTitle]
# The Parenthesis Operator

Like the rest of the operators in the programming, the operators `&&` and `||` have a priority, as in this case: `&&` is with higher priority than `||`. 

The operator `()` serves for **changing the priority of operators** and is being calculated first, just like in math. 

Using parentheses also gives the code better readability and is considered to be a good practice. 

Example of checking whether a variable belongs to certain ranges:

```js
if (x < 0 || ((x >= 5) && (x <= 10)) || x > 20) {
    // Commands
}
```
[/slide]
