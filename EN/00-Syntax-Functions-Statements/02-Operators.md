# Operators
[slide hideTitle]

# Arithmetic Operators

**Arithmetic operators** are reserved symbols in the code that are used for performing arithmetic operations.

They represent the arithmetic operators in mathematics.

The values on the left and right sides of an arithmetic operator are called **operands**.

Arithmetic operations return a single numerical value as a result.


| **Operator** | **Description** |
| --- | --- |
| \+ | Addition |
| \+\+ | Increment|
| \- | Subtraction |
| \-\- | Decrement |
| \* | Multiplication | 
| \*\* | Exponentiation (ES2016 onward) |
| \/ | Division |
| \% | Modulus division (remainder) |



## Summing and Subtracting

Using the `+` or `-` operator we can sum or subtract numbers.

```js live
let a = 20;
let b = 4;
let x;

x = a + b;
console.log('a + b = ', x)

x = a - b;
console.log('a - b = ', x)
```

Using the `+` operator on string data values will concatenate the two operands.

```js live
let a = 'Harry';
let b = ' Mack';
let x;

x = a + b;
console.log('a + b = ', x)
```

Using the `+` operator with a string and a number will also concatenate them.

```js live
let a = "Let's go, ";
let b = 1212;
let x;

x = a + b;
console.log('a + b = ', x)
```

## Multiplication and Division

Multiplying is done with the `*` operator, and division with the `/` operator.

```js live
let a = 20;
let b = 4;
let x;

x = a * b;
console.log("a * b = ", x)

x = a / b;
console.log("a / b = ", x)
```

In JavaScript, there is **no integer division by default** because all numbers are doubles.

You would expect the result of dividing 6 by 5 to equal 1:

```js live
let result = 6 / 5;
console.log(result);
```
After running the code you will see that the output is **1.2**.

You can bypass this default behavior and perform integer division by using `Math.floor()`.

```js live
let result = Math.floor(6 / 5);
console.log(result);
```

But what if the result of the division is a negative number? 

```js live
let result = Math.floor(-6 / 5);
console.log(result);
```

Normally dividing -6 by 5 equals -1, yet we got -2.

You can use `Math.trunc()` if you are expecting a negative value as a result of the operation, it will work from ES6 onward.

```js live
let result = Math.trunc(-6 / 5);
console.log(result);
```
## Incrementing and Decrementing

You can increment and decrement the value of a numerical variable with the `++` and `--` operators.

```js live
let a = 6;
a++;
console.log(a);
```

```js live
let a = 6;
a--;
console.log(a);
```



[/slide]

[slide hideTitle]

# Assignment Operators

**Assignment operators** assign a value to the operand on the left, depending on the value of the right operand.

Below are some of the commonly used assignment operators:


| **Operator** | **Shorthand** | **Description** |
| --- | --- | --- |
| x \= y | x \= y | Assigns a value to a variable |
| x \= x \+ y | x \+\= y | Addition assignment |
| x \= x \- y | x \-\= y | Subtraction assignment |
| x \= x \* y | x \*\= y | Multiplication assignment |
| x \= x \/ y | x \/\= y | Division assignment |
| x \= x \% y | x \%\= y | Remainder assignment |
| x \= x \*\* y | x \*\*\= y | Exponentiation assignment |

You can either use the complete expression or its shorthand representation.

## Examples

- **Subtraction assignment**:

```js live
let a = 5;
let y = 25;
y -= a;

console.log(y);
```
The above is the same as `y = y - a`.

- **Division assignment**:

```js live
let a = 5;
let y = 25;
y /= a;

console.log(y);
```

Using the shorthand division assignment is the same as doing `y = y / a`.


[/slide]

[slide hideTitle]

# Comparison Operators

**Comparison operators** are used in logical statements when comparing two operands.

| **Operator** | **Description** | 
| --- | --- |
| \=\= | Checks for equality between two values | 
| \=\=\= | Checks for **equal value** and **equal type** |
| \!\= | Checks whether two values are different |
| \!\=\= | Checks whether the** values and their types** are equal |
| \> | Checks whether left value of the left operand is **greater than** the right |
| \>\= | **Greater than** or **equal to** |
| \< | **Less than** |
| \<\= | **Less than** or **Equal to** |

Comparison operations evaluate boolean results, the result can either be `true` or `false`.

A simple comparison between two numeric values:

```js live
let a = 400;
let b = 1;
let result = a > b;
console.log(result);
```

The above returns `true` (400 > 1).

Let us look at equality comparisons - `==` and `===`:

```js live
let a = 777;
let b = 777;
let result = a == b;
console.log(result);
```
The result is `true` as expected.

```js live
let a = 777;
let b = '777';
let result = a == b;
console.log(result);
```
The result is `true` which seems wrong because the value of **b** is a string.

To get an accurate comparison between the two, we also need to check equality by data type with the `===` operator.

```js live
let a = 777;
let b = '777';
let result = a === b;
console.log(result);
```

```js live
console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(3 != '3'); // false
console.log(3 !== '3');// true
console.log(5 < 5.5);  // true
console.log(5 <= 4);   // false
console.log(2 > 1.5);  // true
console.log(2 >= 2);   // true
console.log(5 > 6 ? 'YES' : 'NO');// NO
```

The last line in the code above uses a conditional operator called a **ternary operator**. 

## Ternary Operator

The ternary operator is the only operator in JavaScript that accepts three operands.

It consists of two parts - a condition to evaluate, followed by a question mark (?) and an expression to execute.

`[CONDITION] ? [RETURN THIS IF TRUE] : [RETURN THIS IF FALSE]`

```js live
let a = 6;
let b = "6";

let result = a === b ? 'Equal' : 'Not Equal'
console.log(result);
```

```js live
let isFriend = false;
let result = isFriend ? 'Welcome!' : 'Go away!!'
console.log(result);
```

[/slide]

[slide hideTitle]

# Truthy and Falsy Values

When checked in a Boolean context **truthy** values evaluate to `true` and **falsy** evaluate to `false`.

JavaScript is a bit tricky when it comes to this, so it is worth seeing a few examples.

We can create a function to check this.

First we define the function:

```js
function logTruthiness(val) {
  if (val) {
    console.log('Truthy!');
  } else {
    console.log('Falsy.');
  }
}
```

Now we can use it to experiment with truthy and falsy values in a live code example.

```js live
function logTruthiness(val) {
  if (val) {
    console.log('Truthy!');
  } else {
    console.log('Falsy.');
  }
}

logTruthiness (3.14);      
logTruthiness ({});      
logTruthiness (NaN);      
logTruthiness ('NaN');     
logTruthiness ([]);        
logTruthiness (null);     
logTruthiness ('');        
logTruthiness (undefined);
logTruthiness (0);         
```

The resulting output may seem arbitrary but there is some logic behind this:

- Strings are considered **truthy**
- Empty strings are **falsy**
- Numbers are **truthy**
- Objects are **truthy**
- `NaN` is **falsy** (unless evaluated as a string)
- Arrays are **truthy**
- `null` is **falsy**
- 0 and `undefined` are **falsy**
- `false` is **falsy**
- `true` is **truthy**

[/slide]

[slide hideTitle]

# Logical Operators

There are three logical operators that we can use in JavaScript.

| **Operator** | **Meaning** | 
| --- | --- |
| && | and | 
| \|\| | or | 
| ! | not | 



## The AND Operator

Returns the leftmost "false" value.

If all are true it returns the **last truthy value**.

```js live
const value =   false && 5 && 'yes';
console.log(value);
```

The above returns `false` as it is the leftmost "false" value in this example.

```js live
const value =   true && 5 && 'yes';
console.log(value);
```

In the second example, the returned value is "yes" because it is the last "truthy" value.


## The OR Operator

Returns the leftmost "true" value.

If all are false it returns the **last falsy value**.

```js live
const value =   false || '' || 5;
console.log( value );
```

The above returns **5** as it is the leftmost "true" value in this example.

```js live
const value = null || NaN || undefined;
console.log(value);
```

In the second example, the returned value is "undefined" because it is the last "falsy" value.

## The NOT Operator

Returns false if the operand can be converted to `true`, otherwise, returns `true`.

```js live
const value = !true;
console.log(value);
```

The above example returns `false` because it is the opposite of `true`.

```js live
const value = !false;
console.log(value);
```

The above example returns `true` because it is the opposite of `false`.


[/slide]

[slide hideTitle]

# Typeof Operator

The `typeof` operator is used for checking the type of an operand.

It returns the data type in string format.

You can use it in two ways: `typeof operand` or `typeof(operand)`.

It works for primitives and objects.

```js live
console.log(typeof 'Pogo Stick')
console.log(typeof('Pogo Stick'))
```

`typeof` returned "string" which is the type of data we checked in this example.

```js live
console.log(typeof 1)
```

1 is a "number".

```js live
const person = { name: 'Marshall', age: 25 };
console.log(typeof person);
```

Here are a few results of `typeof` depending on the type of data you are checking.


| **Data Type** | **Output** | 
| --- | --- |
| String | "string" | 
| Number | "number" | 
| Undefined | "undefined" | 
| Null | "object" | 
| BigInt | "bigint" | 
| Function | "function" |
| Any object | "object" |


[/slide]

[slide hideTitle]

# Instanceof Operator

The `instanceof` operator checks if an object belongs to a particular class. 

The syntax for using it is `[Some Object] instanceof [Type]`


```js live
const school = {
  name: "Lisbon Falls",
  teachersCount: 40,
  studentsCount: 300
};
console.log(school instanceof Object);
console.log(school instanceof String);
```
For example, we can create an object called **school** and check if it is an **Object**, which should return `true`.

Checking if it is a **String** returns `false` because it **is** an object.

[/slide]

[slide hideTitle]

# Some Interesting Examples

[image assetsSrc="confused.png" /]


Here are some unusual examples of checking data types:

```js live
console.log(typeof NaN);             
console.log(NaN === NaN);            
console.log(typeof null);            
console.log(null instanceof Object); 
console.log(new Array() == false);   
console.log(0.1 + 0.2);             
```

- The type of **NaN** is number even though it means `Not a Number`
- The data type of **null** is Object but it is not an instance of the JS Object type
- Creating an array with the Array constructor and checking if it is false returns `true` even though arrays are "truthy"
- Summing 0.1 and 0.2 results in 0.30000000000000004 and not 0.3 as expected


Truthy and Falsy values can also surprise you:

Create an empty array and call it "emptiness".

```js live
const emptiness = [];
console.log(emptiness == false)
```

This returns `true` confirming that the array is evaluated as "falsy" even though arrays are supposed to be "truthy".

Doing the same experiment but checking the value of the array with an **if statement** has the opposite result.

```js live
const emptiness = [];

if (emptiness) {
  console.log('This is truthy');
}
```

Now the empty array's value evaluates to `true`.

[/slide]





