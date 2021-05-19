# JavaScript Object Notation (JSON)

[slide hideTitle]
# What is JSON?

JSON, short for **JavaScript Object Notation**, is a **text-based** format for data exchange.

It is **language independent**, although it is most often used in the context of JavaScript-based projects, such as websites and single-page applications.

JSON is a method of storing data and information in an organized and easily understandable approach. 

```js
{
  "posts": [
    { "id": 1, "title": "JavaScript is Awesome", "author": "michaelp_95" },
    { "id": 2, "title": "How to Set Up Windows 10", "author": "jacob17" },
    { "id": 3, "title": "Why I Think Java is Great for Beginners", "author": "jane_garcia" },
  ]
}
```

The syntax of JSON closely resembles that of a JavaScript **object** - it consists of **key-value** pairs, and can serve as a **representation** of all JavaScript data types, with the exception of functions.

Similarly to XML, it can be used to store data in a **hierarchical** order.

[/slide]

[slide hideTitle]
# Syntax Rules

The following snippet illustrates a typical **JSON** response from a server:

``` js
{
    "id": 98953,
    "name": "Glenna Miller",
    "username": "glennar57",
    "email": "glenna_r@gmail.com",
    "favoriteNums": [4, 82, 39, 174],
    "friends": {
        "73827": "Logan Pearson",
        "27834": "Alexandra Walters",
        "93421": "Nathan Adams"
    }
}
```

The first thing you might notice is that every data entry is a **key-value** pair.

These pairs are enclosed in curly braces `{}` - the syntax used to **define** a JSON.

All keys, as well as string values, are in **double quotes** - JSON **does not** support single quotes.

The values are **separated** from their keys by using a colon - `:`.

Similarly to JavaScript, **arrays** are held in square brackets, and **objects** - in curly braces.

[/slide]

[slide hideTitle]
# Parsing from Strings

JSON is often used for **reading data from a server**, and using the response to **render** an interface on the client's browser.

To do so, we have to **convert** the **JSON** response into a JavaScript **object** using the `JSON.parse()` method.

```js live
let car = '{"make":"Renault","model":"Clio","colour":"grey"}';  

let data = JSON.parse(car);  

console.log(data);
```

In this example, we receive a JSON string, which we then **parse** to a `data` object.

[/slide]

[slide hideTitle]
# Converting to String

The `JSON.stringify()` method converts a JavaScript value to a JSON string representation.

It can accept objects, as well as arrays.

```js live
let notebook = {
    pages: '120',
    size: 'A4',
    manufacturedBy: 'Rocketbook',
};

let cities = ['London', 'Bucharest', 'Paris']

let notebookData = JSON.stringify(notebook);
let cityData = JSON.stringify(cities);

console.log(notebookData);
console.log(cityData);
```

As evident by the output, `stringify` returns a ready for transfer **JSON** string.

[/slide]