[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/EN/JS-Applications-Modules-11-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- What JavaScript **modules** are

	* a set of **data and functionality** that is accessible to other files

    * **reusable** pieces of code that supercharge our **productivity**


- **IIFE** Modules
    * enabling data **encapsulation**
    * direct data access can be **limited** to the **current scope**

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

- Node\.js Modules
  
	* the **module.exports** - a special object used to export data or functionality
  
    * we use `require()` to import modules

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

## In the next lesson you will learn:

- What HTTP is
  * HTTP Developer Tools

- REST and RESTful Services

- Accessing the GitHub API​

- AJAX

[/slide]
