# Rezumat

[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **First-class functions**:
  - Pot fi pasate ca un **argument**
  - Poti fi **returned**

```js
function sayHello() {
  return 'Hello, ';
}

function greet(sayHello, name) {
  return sayHello() + name;
}
```

- **Higher-Order Functions**:
  - Ia alte **functions** ca argument sau **return** o funcție ca rezultat

```js
const sayHello = function () {
  return function () {
    console.log('Hello!');
  };
};

const greet = sayHello();
greet(); // Output: "Hello"
```


- **IIFE** este prescurtarea pentru Immediately-Invoked Function Expression:
  - Aceasta **encapsulates code and data** \(state\)

```js
(function () {
  let name = 'James';
})();
console.log(name) // TypeError
```


## În următoarea lecție veți învăța despre:

- Ce este structura unui obiect?
- Destructurare
- Forme ale structurării obiectelor
  - agregare
  - concatenare
  - delegare

[/slide]
