# Using "this"

[slide hideTitle]

# "this" in a Method

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-8-9-this-in-a-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When inside a method, `this` is used to access information, stored in the object, that "owns" the object:

```js live
let cat = {
    name: 'Muffins',
    breed: 'British Shorthair',

    info: function() {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function() {
        return this;
    }
}
console.log(cat.info());
console.log('******************');
console.log(cat.whatIsThis());
```

The example above illustrates how `this` is used to retrieve the values, stored inside the properties of the **cat** object. 

Whenever we use `this` in a method, it references the object itself and hence `cat.whatIsThis()` returns the cat object.

You can also retrieve the values of object properties by replacing `this` with the object name.

```js
info: function() {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function() {
        return cat;
    }
```

This is not a good practice and will make the code harder to maintain. 
 
Imagine you want to change the object's name in the future and miss updating it in your methods! 


**Note:** Attempting to return **name** or **breed** without `this` will have unintended consequences. 

If there is no variable with the same name outside the scope of the project, the result will be **undefined**. 

If there is a variable with the same name already defined and if it is in scope its value will be returned.

[/slide]

[slide hideTitle]

# "this" Refers to the Parent Object

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-10-this-refers-to-the-parent-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Take a look at this **example**:

```js live
// Defining a function
function printContext() {
    console.log(this === global);
}
// Creating an object called user
let user = {
    count: 10,
    printContext: printContext,
    printAnotherContext: function() {
        console.log(this === global);
    }
}

user.printContext();

let globalFunction = user.printAnotherContext;

globalFunction();

user.printAnotherContext();
```

Let us see what is going on in the code step by step to understand it better.

Defining a function `printContext()` which checks if `this===global` (`this===window` if running it in the browser) and prints the result to the console.

Creating a **user** object with **two methods**:

- `printContext: printContext` - stores the **printContext** function we defined in step 1 inside a method with the same name

- `printAnotherContext: function() { console.log(this === global); }` - the **printAnotherContext** method checks if `this === global` and prints the result to the console

Calling `user.printContext();` invokes the method that belongs to the **user** object. 

Returns: **false**, because `this` is used within an object's method and returns the object itself.

`let globalFunction = user.printAnotherContext;` 

Now we define a new function, and we are assigning the method **printAnotherContext** from the **user** object to it

Returns **true**, because now `this` is called by the function **globalFunction** and not from the user object's method. 

`this` is indeed equal to **global**.

- `user.printAnotherContext();` will return **false** because `printAnotherContext()` is a method of the object **user** and `this` will return the object itself like it did with the **printContext** method

**To summarize:**

- Used in methods, `this` references the object to which the method belongs

- Used in a function, `this` references the **global** object such as **window** in browsers or **global** in Node
[/slide]

[slide hideTitle]

# In Events

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-11-in-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When used in event handlers, `this` points to the specific element that the event fired from.

Here, we create an HTML file and attach the following event handler to an element with an **id** of `button`.

```js
function solve() {
    let button = document.getElementById('button');

    button.addEventListener('click', function(e) {
        console.log(this);
    });
}
```

When referencing `this` from within an event, it returns the element from which the event was called. 

In our case, it will be the button element that called the `solve()` function.

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

Clicking on the button in the example produces the following **output** in the console:

[image assetsSrc="function-context-04.png" /]

[/slide]

[slide hideTitle]

# In Classes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-12-this-in-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When used in classes, the value of `this` refers to the instance of the class that you initialize using the `new` keyword.

```js live
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.displayInfo = function() {
            console.log(`The vehicle is a ${this.make} ${this.model}.`);
        }
    }
};

let car = new Vehicle('Toyota', 'Corolla');
car.displayInfo();
```

In the example above we are accessing the properties of the **car** class by using `this.`.

Remember we previously learned about using the `this` keyword in objects and it behaved in the same way.

This is because classes are templates for creating objects.

[/slide]
