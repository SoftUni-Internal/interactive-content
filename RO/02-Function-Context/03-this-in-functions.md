# "this" in Functions
[slide]
# "this" With Inner Functions

**Inner functions** are functions that are nested inside other functions. 

Attempting to call `this` from within a nested function does not work as expected:

```js live
let socialMediaUser = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function () {
        this.pageLikes.forEach(function (page) {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser.displayLikes();
```

Calling `this.name` from inside the nested function returns **undefined**. 

This is because `this` in nested functions refers to the global object in the context of nested functions.

```
User: undefined likes: Cute Cats Page
User: undefined likes: Web Programming Gurus
User: undefined likes: SoftUni International
```

If you want to use `this` in similar situations, you can do so with **arrow functions**, which will look into now.

[/slide]

[slide]
# "this" with Arrow Functions
Within **arrow functions** (=>), `this` retains the value of the **enclosing lexical context**.

In other words, they inherit the reference of `this` from the parent object or scope in which they are used.

```js live
let socialMediaUser = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function () {
        this.pageLikes.forEach((page) => {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser.displayLikes();
```

This time the output is correct and the user's name is no longer **undefined**. 

The difference between the previous example and this one is that we now used an **arrow function**.

This function inherited the context from the enclosing **socialMediaUser** object and so we have:

```
User: John Doe likes: Cute Cats Page
User: John Doe likes: Web Programming Gurus
User: John Doe likes: SoftUni International
```

[/slide]