# Usages of "this"

[slide hideTitle]

# "this" in a Method

When inside a method, `this` is used to access information, stored in the object, that "owns" the object:

```js live
let cat = {
    name: "Muffins",
    breed: "British Shorthair",

    info: function () {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function () {
        return this;
    }
}
console.log(cat.info());
console.log("******************");
console.log(cat.whatIsThis());
```

The example above illustrates how `this` is used to retrieve the values, stored inside the properties of the **cat** object. Whenever we use `this` in a method, it references the object itself and hence `cat.whatIsThis()` returns the cat object.

You can also retrieve the values of object properties by replacing `this` with the object name.

```js
info: function () {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function () {
        return cat;
    }
```
 This is not a good practice and will make the code harder to maintain. 
 
 Imagine you want to change the object's name in the future and miss updating it in your methods! 


Note: Attempting to return **name** or **breed** without `this` will have unintended consequences. 

If there is no variable with the same name outside the scope of the project, the result will be **undefined**. If there is a variable with the same name already defined and if it is in scope its value will be returned.

[/slide]

[slide hideTitle]

# "this" Refers to the Parent Object

Consider the example below:

```js live
//Defining a function
function foo() {
    console.log(this === global);
}
//Creating an object called user
let user = {
    count: 10,
    foo: foo,
    bar: function () { console.log(this === global); }
}

user.foo();

let func = user.bar; //func is a global function

func();

user.bar();
```

Let us see what is going on in the code step by step to understand it better.

Defining a function `foo()` which checks if `this===global` (`this===window` if running it in the browser).

Creating an object **user** with two methods:
   - `foo: foo` - stores the **foo** function we defined in step 1 inside a method with the same name
   -  `bar: function()` - the **bar** method checks if `this===global`

Calling `user.foo();` invokes the method belonging to the **user** object. Returns: **false**, because `this` is used within an object's method and returns the object itself.

`let func = user.bar;` Now we define a new function, and we are assigning the method **bar** from the **user** object to it. 

Returns **true**, because now `this` is called by the function **func** and not from the user object's method. 

`this` is indeed equal to **global**.

- `user.bar();` will return **false** because `bar()` is a method of the object **user** and `this` will return the object iself like it did with the **foo** method

To summarize: 
- used in methods, `this` references the object to which the method belongs
- used in a function, `this` references the **global** object such as **window** in browsers or **global** in Node
[/slide]

[slide hideTitle]

# In Events

When used in event handlers, `this` points to the specific element that the event fired from.

If you create an HTML file and attach the following event handler to an element with id "button", what would the resulting output in the console be?

```js
function solve() {
    let button = document.getElementById('button');

    button.addEventListener('click', function (e) {
        console.log(this);
    });
}
```

When referencing `this` from within an event, it returns the element from which the event was called. In our case, it will be the button element that called the ``solve()`` function.

You can test it yourself by creating an HTML file with the following example code:

```js
<html>
<body>
    <p>Welcome to your code playground!</p>

    <button id="button">Click me</button>

    <script>
        function solve() {
            let button = document.getElementById('button');

            button.addEventListener('click', function (e) {
                console.log(this);
            });
        }
        solve();
    </script>
</body>
</html>
```

Clicking on the button in the example produces the following output in the console:

[image assetsSrc="function-context-04.png" /]

[/slide]

[slide hideTitle]

# In Classes

When used in classes, the value of `this` refers to the instance of the class that you initialize using the `new` keyword.

```js live
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.displayInfo = function () {
            console.log(`The vehicle is a ${this.make} ${this.model}.`);
        }
    }
};

let car = new Vehicle("Toyota", "Corolla");
car.displayInfo();
```

In the example above we are accessing the properties of the **car** class by using ``this.``.

Remember we previously learned about using the ``this`` keyword in objects and it behaved in the same way.

This is because classes are templates for creating objects!

[/slide]
