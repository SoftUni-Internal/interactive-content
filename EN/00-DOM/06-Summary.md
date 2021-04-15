[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-43-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- A programming API for **XML** and **HTML** documents

- DOM **methods** and **properties**

```js
let p = document.createElement('p');
let section = document.createElement('section');
```

- Performing **DOM manipulations**

```js
let container = document.getElementById('container');
let h1 = document.getElementById('heading');
let content = document.getElementById('content');

h1.remove();

container.removeChild(content);
```

- **Accessing and using** the browser's objects with JavaScript

```js
console.log(navigator.deviceMemory);

document.location = 'https://softuni.org';

history.back();
```

## In the next lesson you will learn:

- **DOM Manipulations**

- A deeper look into **DOM-manipulating operations**

[/slide]
