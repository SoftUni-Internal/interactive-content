[slide]
# Numbers
The numbers in JavaScript do not have a separate type for **integers** and **floating point numbers.**

We have a type that is **numbers.**

The largest number we can store is 2<sup>54</sup>

```math
2<sup>54</sup>
```


We have special values ​​that are:

- `+Infinity` and `–Infinity`  we get when we divide by zero

``` js live
console.log(5 / 0);
console.log(-5 / 0);
```

We get Infinity in order not to get a **compile time error.**

- `NaN` (not-a-number):  we can get NaN when we try to parse a string that cannot be parsed or when we try to divide by zero:

``` js live
let nanVar = Number(`not a number`);
console.log(nanVar);
```

The problem with `NaN` is that when we use it in **mathematical terms**, we always get `NaN`. 

If we have **logic in our program that gives** `NaN`, and then we have some **mathematical operation**, we will always get `NaN`. 

That can break our program logic.

``` js live
let nanVar = Number(`not a number`);
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