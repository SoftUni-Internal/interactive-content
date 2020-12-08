# Logical Operators
[slide]
# More Complex Conditions


[vimeo-video]
[stream language="EN" videoId="486871142/63e6f30a5a" default /]
[stream language="RO" videoId="486871142/63e6f30a5a"  /]
[/video-vimeo]

Let's take a look at how we can create more **complex logical conditions** in programming. 

We can use:
* logical **"AND"** (`&&`)
* logical **"OR"** (`||`)
* logical **negation** (`!`) 
* **brackets** (`()`).

# Logical "AND", "OR" and "NOT"
This is a short example that demonstrates the power of the logical **"AND"**, the logical **"OR"** and the logical **"NOT"**: 

```js live
let input = ["shark", "50"];
let animal = input[0];
let speed =  Number(input[1]);

if ((animal == "horse" || animal == "donkey") && (speed > 40)) {
    console.log("Run fast");
} else if ((animal == "shark" || animal == "dolphin") && (speed > 45)) {
    console.log("Swim fast");
} else if (!(speed > 30 || animal == "turtle")) {
    console.log("Move slow");
}
```

We shall explain the logical **"AND"** (`&&`), the logical **"OR"** (`||`), and the logical **"NOT"** (`!`) in the next few sections, along with examples and exercises. 
[/slide]

[slide]
# Logical "AND"
[vimeo-video]
[stream language="EN" videoId="486871442/f9e84d4655" default /]
[stream language="RO" videoId="486871442/f9e84d4655"  /]
[/video-vimeo]

As we saw, in some tasks we have to make **many checks at once**. 

What happens when more conditions have to be executed at once, and we don't want to make a negation (else) for each one of them? 

The option with nested `if` **blocks** is valid, but the code would look very unordered and for sure – **hard to read and maintain**.

The logical **"AND"** (operator `&&`) means that a few conditions have to be fulfilled simultaneously. 

The following table of truthfulness is applicable:

 | Operand one | Operand two | AND   |
| :---:       |    :----:   |   :---:   |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

# How does the `&&` operator work? 
The `&&` operator accepts a couple of Boolean (conditional) statements, which have a true or a false value, and returns one 'bool' statement as a result. 

Using it instead of a couple of nested `if` blocks, makes the code **more readable**, **ordered** and **easy** to maintain. 

But how does it work when we put a few conditions one after another? 

As we saw above, the logical **"AND"** returns true, only when it accepts as arguments statements with values that are `true`.  

Respectively, when we have a **sequence** of arguments, the logical **"AND"** checks either until there are no more arguments, or until it meets an argument with a `false` value. 

# Example
```js live
let a = true;
let b = true;
let c = false;
let d = true;
let result = a && b && c && d;
console.log(result);
```

The program will run in the **following** way: 
- It starts the check from `a`, reads it and accepts that it has a true value. After that it checks `b`.  
- After it has **accepted** that `a` and `b` return `true`, **it checks the next** argument. 
- It gets to `c` and sees that the variable has a `false` value. 
- After the program accepts that the argument `c` has a `false` value, it calculates the expression **before** `c`, **independent** of what the value of `d` is. 
- That is why the evaluation of `d` is being **skipped** and the whole expression is calculated as `false`.

# Example: Point in a Rectangle
Checks whether **`point {x, y}`** is placed **inside the rectangle {x1, y1} – {x2, y2}**. 

[image assetsSrc="03.Point-in-rectangle-01.png" /]

The input data is read from the console and consists of 6 lines: 
- the decimal numbers `x1`, `y1`, `x2`, `y2`, `x` and `y` (as it is guaranteed that `x1 < x2` and `y1 < y2`).

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
A point is internal for a given polygon, if the following four conditions are applied at the same time:
-  The point is placed to the right from the left side of the rectangle.
-  The point is placed to the left from the right side of the rectangle.
-  The point is placed downwards from the upper side of the rectangle.
-  The point is placed upwards from the down side of the rectangle.

```js live
let x1 = 2;
let y1 = -3;
let x2 = 12;
let y2 = 3;

let x = 8;
let y = -1;

if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
    console.log("Inside");
} else {
    console.log("Outside");
}
```
[/slide]

[slide]
# Problem: Bonus Points
[code-task title="Bonus Points" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function bonusPoints(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program that applies bonus to given points
  * If points are between **0** and **3**, adds **5**
  * If points are between **4** and **6**, adds **15**
  * If points are between **7** and **9**, adds **20**

# Example
  | **Input** | **Output** |
| --- | --- |
|4| 19 |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
19
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Bonus Points
[vimeo-video]
[stream language="EN" videoId="486871642/75ebf87fb1" default /]
[stream language="RO" videoId="486871642/75ebf87fb1"  /]
[/video-vimeo]

[code-task title="Bonus Points" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function bonusPoints(input) {
    let points = Number(input);

    if (points >= 0 && points <= 3) {
      points += 5;
    } else if (points >= 4 && points <= 6) {
      points += 15;
    } else if (points >= 7 && points <= 9) {
      points += 20;
    }

    console.log(points);
}
```
[/code-editor]
[task-description]
# Description
Write a program that applies bonus to given points
  * If points are between **0** and **3**, adds **5**
  * If points are between **4** and **6**, adds **15**
  * If points are between **7** and **9**, adds **20**

# Example
  | **Input** | **Output** |
| --- | --- |
|4| 19 |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
19
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Logical "OR" Operator

[vimeo-video]
[stream language="EN" videoId="488463195/decef19bc9" default /]
[stream language="RO" videoId="488463195/decef19bc9"  /]
[/video-vimeo]


The logical **OR** (operator `||`) means that **at least one** among a few conditions is fulfilled. 

Similar to the operator `&&`, the logical **OR** accepts a few arguments of **bool** (conditional) type and returns `true` or `false`. 

We can easily guess that we **obtain** a value `true` every time when at least one of the arguments has a `true` value. 


 | Operand one | Operand two | OR |
| :---:       |    :----:   |   :---:   |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |


At school the teacher says: "John or Peter should clean the board". To fulfill this condition (to clean the board), it is possible either just for John to clean it, or just for Peter to clean it, or both of them to do it.

# How Does the `||` Operator Work?
We have already learned what the logical **OR** represents. But how is it actually being achieved? 

Just like with the logical **"AND"**, the program checks from left to right the given arguments. 

In order to obtain `true` from the expression, it is necessary to have at least one argument with a `true` value. 

Respectively, the checking **continues** until an **argument** with **such** value is met or until the arguments **are over**.

Here is one **example** of the `||` operator in action:

```js live
let a = false;
let b = true;
let c = false;
let d = true;

let result = a || b || c || d;

console.log(result);
```

The programs **checks** `a`, accepts that it has a value `false` and continues. 

Reaching `b`, it understands that it has a `true` value and the whole **expression** is calculated as `true`, without having to check `c` or `d`, because their values **wouldn't change** the result of the expression.
[/slide]

[slide]
# Problem: Food or Drink

[vimeo-video]
[stream language="EN" videoId="488477836/b40ae06b15" default /]
[stream language="RO" videoId="488477836/b40ae06b15"  /]
[/video-vimeo]



[code-task title="Food or Drink" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodOrDrink(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:
 * Reads single line and print **drink**, **food** or **unknown**
  * Foods: curry, noodles, sushi, spaghetti 
  * Drinks: tea, water, coffee
  * Everything else is unknown

# Example
  | **Input** | **Output** |
| --- | --- |
|curry| food |
|flower| unknown |

[/task-description]
[tests]
[test]
[input]
curry
[/input]
[output]
food
[/output]
[/test]
[test]
[input]
tea
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
something
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Solution: Food or Drink

[vimeo-video]
[stream language="EN" videoId="488477876/d4fe816fbd" default /]
[stream language="RO" videoId="488477876/d4fe816fbd"  /]
[/video-vimeo]


[code-task title="Food or Drink" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodOrDrink(input) {
    let product = input;
    if (product == "curry" || product == "noodles" || product == "sushi" || product == "spaghetti") {
      console.log("food");
    } else if (product == "tea" || product == "water" || product == "coffee") {
      console.log("drink");
    } else {
      console.log("unknown");
    }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:
  * Reads single line and print **drink**, **food** or **unknown**
  * Foods: curry, noodles, sushi, spaghetti 
  * Drinks: tea, water, coffee
  * Everything else is unknown

# Example
  | **Input** | **Output** |
| --- | --- |
|curry| food |
|flower| unknown |

[/task-description]
[tests]
[test]
[input]
curry
[/input]
[output]
food
[/output]
[/test]
[test]
[input]
tea
[/input]
[output]
drink
[/output]
[/test]
[test]
[input]
something
[/input]
[output]
unknown
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]
# Logical "NOT" Operator


[vimeo-video]
[stream language="EN" videoId="486872932/bae112a39e" default /]
[stream language="RO" videoId="486872932/bae112a39e"  /]
[/video-vimeo]

Logical negation (operator `!` ) means that a given condition is **not fulfilled.**

| a | !a |
|---|---|
| true | false |

The operator `!` accepts as an **argument** a bool variable and **returns** its value.

# Example: Invalid Number
A given number is valid if it is in the range `[100 … 200]` or it is `0`. Do a validation for an invalid number. 

For example, `75` and `220` are **invalid**, but `150` is **valid**.

```js live
let num = 75;

let inRange = (num >= 100 && num <= 200) || num == 0;
if (!inRange) {
    console.log("invalid");
}
```
[/slide]

[slide]
# The Parenthesis  Operator
Like the rest of the operators in the programming, the operators `&&` and `||` have a priority, as in this case: `&&` is with higher priority than `||`. 

The operator `()` serves for **changing the priority of operators** and is being calculated first, just like in maths. 

Using parentheses also gives the code better readability and it is considered to be a good practice. 

Example of checking whether a variable belongs to certain ranges:

```js
if (x < 0 || ((x >= 5) && (x <= 10)) || x > 20) {
    // Commands
}
```
[/slide]
