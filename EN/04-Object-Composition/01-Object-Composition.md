# Object Composition

[slide]

# What is Object Composition?

A composite data type is any data type which can be constructed in a program using the programming language's primitive data types and other composite types. 

The act of constructing a composite type is known as composition.

Here is an example of combining simple objects into more complex ones.

Notice that the student object is composed by primitive types like `firstName`, `lastName`, `age` as well as more complex types like `location`, which is another object.

To access the `location` objects property `lat` we use the following: `student.location.lat`.

```js live
let student = {
    firstName: 'Maria',
    lastName: 'Green',
    age: 22,
    location: { lat: 52.520, lng: 13.404 }
}
console.log(student);
console.log(student.location.lat);
```

[/slide]

[slide]

# Composing an object

Here is an example of how we can compose an object. 

First we declare and initialize the primitive data types `name`, `population` and `country`.

After that we assign those variables to the `town` object. 

And finally we assing the `location` object to the `town` object.

```js live
let name = "Berlin";
let population = 3769495;
let country = "Germany";
let town = { name, population, country };
console.log(town);
town.location = { lat: 52.520, lng: 13.404 };
console.log(town);
```

[/slide]

[slide]

# Combining data with functions

We can also combine data using functions, that is because functions are also objects in JavaScript.

The way we add a function to the object:
- first we have the function name `grow`.
- followed by `:`.
- then the keyword `function`.
- parameters(if such exsit) inside parenteses of the function.
- finally curly braces containing the scope of the function.

```js live
let rect = {
    width: 10,
    height: 4,
    grow: function(w, h) {
        this.width += w; this.height += h;
        },
        print: function() {
            console.log(`[${this.width} x ${this.height}]`);
            }
};
rect.grow(2, 3);
rect.print();
```

[/slide]

[slide]

# Printing objects

Printing objects using the `ToString()` function:

```js live
let rect = {
    width: 10,
    height: 4,
    toString: function() {
        return `rect[${this.width} x ${this.height}]`;
        }
};
console.log(rect);
console.log(rect.toString());
console.log('' + rect); 
```

[/slide]