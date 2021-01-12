[slide]

# Summary

**DOM**

- A programming API for **XML** and **HTML** documents

- DOM **methods** and **properties**

```js
let p = document.createElement("p");
let section = document.createElement("section");
```

- Performing **DOM manipulations**

```js
let container = document.getElementById("container");
let h1 = document.getElementById("heading");
let content = document.getElementById("content");

h1.remove();

container.removeChild(content);
```

**BOM**

- **Accessing and using** the browser's objects with JavaScript

```js
console.log(navigator.deviceMemory);

document.location = "https://softuni.org";

history.back();
```

## In the next lesson we will learn:

**DOM Manipulations**

- A deeper look into **DOM-manipulating operations**

[/slide]
