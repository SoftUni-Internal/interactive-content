// sectionId: "Javascript::Programming-Basics::Expressions-and-Statements::Expressions"

[slide hideTitle]
# Expressions

[video src="https://videos.softuni.org/hls/javascript-basics/01.Expressions-and-Statements/EN/01-PB-JavaScript-expressions-and-statements-30-29-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Expressions** are sequences of operators, literals, and variables that are evaluated to a value.
  * Consist of at least one **operand**
  * Can have 1 or more **operators**

```js
let y = x + 5;
```
```js
let name = "John Doe";
```
In most of the contexts in which expressions are used, for example in statements, the expression is expected to evaluate to some value. 
* If `x` and `y` are numbers, the expression `x + y` evaluates to a numeric value. 

# Numerical expressions
In programming, we can calculate numerical expressions. For example:
```js live
let r = (150-20) / 2 + 5;

console.log(r);
```
The standard rule for **priorities** of arithmetic operations is applied: multiplication and division are always done before addition and subtraction. 

In the case of an expression in **brackets**, it is calculated **first**, just like in math.
[/slide]
