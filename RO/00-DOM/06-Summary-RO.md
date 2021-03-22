[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-43-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție, ați învățat:

- O programare API pentru documentele **XML** și **HTML**.

- **Metodele** and **Proprietățile** ale DOM

```js
let p = document.createElement('p');
let section = document.createElement('section');
```

- Efectuarea **manipulărilor DOM**

```js
let container = document.getElementById('container');
let h1 = document.getElementById('heading');
let content = document.getElementById('content');

h1.remove();

container.removeChild(content);
```

- **Accesarea și utilizarea** obiectelor browserului cu JavaScript

```js
console.log(navigator.deviceMemory);

document.location = 'https://softuni.org';

history.back();
```

## În lecția următoare, veți învăța:

- **Manipulările DOM**

- O privire mai profundă asupra **operațiunilor de manipulare a DOM**

[/slide]
