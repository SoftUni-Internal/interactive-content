# Browser Object Model

[slide]

# BOM

The **Browser Object Model** acts as a connection just like the **Document Object Model**.

It connects Javascript to the **browser** just like the DOM connects it to the **HTML document**.

The **BOM** allows browser elements to be accessed and manipulated by **representing them as objects**.

[image assetsSrc="Js-advanced-DOM.png" /]

The following commands show some of the browser's objects:

```js
console.dir(window);
console.dir(navigator);
console.dir(screen);
console.dir(location);
console.dir(history);
console.dir(document);
```

The **window** is the global object in the browser. All global variables are its **properties** and all global functions are its **methods**.

```js
var name = "Steven";
//name is now stored as a property of the window object

function printYear() {
  console.log(2020);
}
//PrintYear is now a method of the window object

name === window.name;
//returns true

window.printYear();
//invokes the function through the window object
```

[/slide]

[slide]

# Playing with BOM

Here are some interesting and educational BOM properties:

```js
console.log(navigator.deviceMemory); //displays the RAM memory of the current machine

document.location = "https://softuni.org"; //redirects to given location

history.back(); //goes back one time

console.log(location.host); //displays the current host

location.reload(); //reloads page
```

[/slide]
