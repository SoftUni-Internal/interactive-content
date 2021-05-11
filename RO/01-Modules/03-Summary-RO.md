[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/EN/JS-Applications-Modules-11-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Ce sunt **modulele** JavaScript

	* un set de **date și funcționalități** care este accesibil altor fișiere

    * bucăți de cod **reutilizabile** care ne suplimentează **productivitatea**


- Module **IIFE** 
    * activarea **încapsulării** datelor 
    * accesul direct la date poate fi **limitat** la **domeniul de aplicare actual**

```js 
var myModule = (function() {
    let people = ['Jane', 'Alicia', 'Mark'];

    function addPerson(name) {
        people.push(name)
    }

    return {    
        addPerson: addPerson
    }
}());
console.log(people); // ReferenceError
```

- Module Node\.js
  
	* **module.exports** - un obiect special folosit pentru a exporta date sau funcționalități
  
    * folosim `require()` pentru a importa module

```js
const myModule = require('./myModule.js');

module.exports = 'Hello world!';
```

- ES6 Modules
	* built directly into JavaScript
	* declared using the `import`/`export` statements

```js
import * as myModule from './myModule.js'
```

## În lecția următoare veți învăța:

- Ce este HTTP
  * Instrumente de dezvoltare HTTP 

- Servicii REST și RESTful 

- Accesarea GitHub API​

- AJAX

[/slide]
