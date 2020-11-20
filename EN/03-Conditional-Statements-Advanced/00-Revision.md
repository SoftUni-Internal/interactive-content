[slide]

# Revision

In the last lesson we learned:

- Numbers can be **compared** by:  `==`, `<`, `>`, `<=`, `>=` and `!=` operators:

```js live
console.log(5 <= 10);  
```

- Simple if-conditions check a condition and execute a block of code if it is true: 

```js live
let a = 10;
if (a > 5) {
    console.log("The number `a` is bigger than 5");
}
```

- The **if-else** construction executes only one of the two blocks, depending on whether a condition is **true** or **false**:

```js live
let a = 10;
if (a > 5) {
    console.log("The number `a` is bigger than 5");
} else {
    console.log("The number `a` is smaller or equal than 5");
}
```

- If-else constructions can be chained as **if-else-if-else sequences**:

```js live
let a = 10;
if (a > 100) {
    console.log("The number `a` is bigger than 100");
} else if (a > 20) {
    console.log("The number `a` is bigger than 20");
} else {
    console.log("The number `a` is smaller or equal than 20");
}
```

[/slide]
