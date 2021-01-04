[slide]

# Summary

# In this session you learnt:

- What are modules in JavaScript?

	- A set of functions to be included in applications

    - Reusable pieces of code that supercharge our productivity


- IIFE Modules
    - Enabling data encapsulation

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
  
	- The `module.exports` special object is used to export data or functionality
  
    - We use `require()` to import them:

```js
const myModule = require("./myModule.js");

module.exports = 'Hello world!';
```

- ES6 Modules
	- Built directly into JavaScript
	- Declared using the `import/export` statements

```js
import * as myModule from './myModule.js'
```

In the next lesson we will learn:

- What is HTTP

- HTTP Developer Tools

- REST and RESTful Services

- Accessing the GitHub API​

- AJAX

[/slide]
