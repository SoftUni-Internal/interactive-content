# Types of Modules

[slide hideTitle]
# IIFE Modules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/EN/JS-Applications-Modules-6-iife-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**IIFE Modules** are essential for front-end development.

They enable us to **hide certain data and functionality from the global scope** and have been very commonly used **until ES6 Modules were introduced**.

We will learn about ES6 modules in a later video.

Let us take a look at this example:

```js 
var myModule = (function() {
    var count = 0;

    function increase() {
        count++;
    }

    return {    
        increase: increase
    }
}());
```

In the example above, we define the `myModule` variable, which stores our IIFE module.

This module contains the `count` variable and the `increase()` function.

As you may know, variables defined with `var` are **available globally** by default.

**IIFE modules** can override this behavior.

The object that is returned contains the functionality and data that we make globally accessible.

In this case, the `increase()` function **can be called from anywhere to increase the counter**.

The counter itself, however, **cannot be directly accessed**, unless we declare it in the **return object**.

[/slide]

[slide hideTitle]
# Node.js Modules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/EN/JS-Applications-Modules-7-8-nodejs-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Node\.js, **every file has its own scope**.

Individual files could be considered as **separate modules**.

**The modules we create manually have to be exported** before they could be required.

## Importing

We **import** Node.js modules using the `require()` function.

**Built-in modules** can be imported as follows:

```js
const querystring = require('querystring');
```

For **your own modules**, you have to declare the **relative path** of the file you want to import:

```js
const currencyConverter = require('./currencyConverter.js');
```

The path is **relative to the file in which you do the import**.

## Exporting

To **export** modules in Node\.js, we use the **module.exports** object.

Whatever you push in the **module.exports** object is made globally available to **other modules**.

The following example creates a module that returns a greeting function:

```js
module.exports.greeting = function(name) {
    console.log('Hello' + name);
};
```

You can also attach an object to **module.exports**, as shown below:

```js
module.exports.person = {
    firstName: 'Bernard',
    lastName: 'Mills',
    age: 27
}
```

You can use an object to export multiple functions, like so:

```js
module.exports.currencyConverter = {
    toUSD: convertToUSD,
    toGBP: convertToGBP
}
```


## Built-in Node.js modules

**Node.js** has many **built-in modules** which you can **include** and **use** in **any of your Node.js files**.

Here are some commonly used ones:

- The `http` module
    * used to create an **HTTP server**
    * there is an `https` module as well

```js
let http = require('http');
```

- The `url` module:
    * used to parse a **URL string** into an **object** with an `href` property

```js
let url = require('url');
```

- The `fs` module:
    * enables access to the computer's **filesystem**

```js
let fs = require('fs');
```

- The `zlib` module:
    * provides a way of zipping and unzpping files
    * often used in conjunction with ``fs

```js
var zlib = require('zlib');
```

[/slide]

[slide hideTitle]
# ES6 Modules

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/EN/JS-Applications-Modules-9-es6-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In 2015, with the introduction of the EcmaScript 6 standard, modules were introduced natively to JavaScript.

JavaScript's **built-in module statements always export and import an object**.

## Importing

Importing an object can be done in several ways:

- Importing a **specific function**

```js
import convertToUSD from './currencyConverter.js'
```

- Importing the **whole object**

```js
import * as convert from './currencyConverter.js'
```

To import the whole object, we use an **asterisk**, followed by the **name** we want to use.

- **Changing the name** after importing

```js
import { toUSD as convertToUSD } from './currencyConverter.js'
```

## Exporting

We use the export statement to create a JavaScript module.

```js
export { myFunction, variableOne };
```

Using the default keyword we can later import the value with **any given name**:

```js
export default greetFunction;
```

Think of the next code block as a different file, in which we import `myFunction`:

```js
import hello from './test.js';
```

Keep in mind that **default** exporting **does not allow** us to export more than one value.

The modules we export are in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) **by default**.

[/slide]