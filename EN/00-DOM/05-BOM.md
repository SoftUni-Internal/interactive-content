# Browser Object Model

[slide hideTitle]

# BOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-40-41-browser-object-model-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Browser Object Model** acts as a connection, just like the **Document Object Model**.

It connects JavaScript to the **browser** the same way the DOM connects it to the **HTML document**.

The **BOM** allows browser elements to be accessed and manipulated by **representing them as objects**.

[image assetsSrc="Js-advanced-DOM-1.png" /]

The following commands show some of the browser's **objects**:

```js
console.dir(window);
console.dir(navigator);
console.dir(screen);
console.dir(location);
console.dir(history);
console.dir(document);
```

The **window** is the global object in the browser. 

All global variables are its **properties** and all global functions are its **methods**.

```js
var name = "Steven";
// name is now stored as a property of the window object

function printYear() {
    console.log(2020);
}
// PrintYear is now a method of the window object

name === window.name;
// returns true

window.printYear();
// invokes the function through the window object
```

[/slide]

[slide hideTitle]

# Playing with BOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-42-playing-with-bom-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some interesting and educational **BOM properties**:

```js
console.log(navigator.deviceMemory); // Displays the RAM memory of the current machine

document.location = "https://softuni.org"; // Redirects to given location

history.back(); // Goes back one time

console.log(location.host); // Displays the current host

location.reload(); // Reloads the page
```

[/slide]
