# Object Composition

[slide hideTitle]

# What is Object Composition?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-3-4-object-composition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A composite data type is any data type that can be constructed in a program using the programming language's primitive data types and other composite types. 

The act of constructing a composite type is known as composition.

Here is an example of combining simple objects into more complex ones.

Notice that the student object is composed of primitive types like `firstName`, `lastName`, `age` as well as more complex types like `location`, which is another object.

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

[slide hideTitle]

# Composing an object

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-5-composing-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example of how we can compose an object. 

First, we declare and initialize the primitive data types `name`, `population` and `country`.

After that, we assign those variables to the `town` object. 

And finally, we assign the `location` object to the `town` object.

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

[slide hideTitle]

# Combining data with functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-6-combining-data-with-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can also combine data using functions, that is because functions are also objects in JavaScript.

The way we add a function to the object:
- First, we have the function name `grow`
- Followed by `:`
- Then the keyword `function`
- Parameters(if such exists) inside parentheses of the function
- Finally, curly braces containing the scope of the function

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

[slide hideTitle]

# Printing objects

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/EN/JS-Advanced-Object-Composition-7-printing-objects-tostring-function-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Printing objects using the `toString()` function:

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