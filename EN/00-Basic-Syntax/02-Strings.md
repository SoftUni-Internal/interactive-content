[slide]
# What is a String?

A string is a type of data that is used to present **text** aand is a **sequence** of characters.

Each symbol has a **position** in the string and when we connect them, **a text is obtained.**

We can take the individual **symbols** from the string.

Here we take the first element of the string and its length.

``` js live
let myString = "Hello JavaScript!";

console.log(myString[0]);
console.log(myString.length);
```

# Strings Are Immutable


But keep in mind that we can only take the individual elements of the string, but we can not change the elements inside the string.

Strings are immutable. 

In this example we try to chache the fourth symbol which is `o`:

``` js live
let myString = "Hello JavaScript!";
console.log(myString);

myString[4] = 'Change fourth symbol!';
console.log(myString);  
```

We know we can change the **data held by a variable**, but we can't change symbols in the string.
[/slide]

[slide]
# String Interpolation

[/slide]