[slide hideTitle]

# Modules

Modules in Node.js are groups of files, **providing certain functionality**.

Using modules brings several benefits, including:

- Improved code **accessibility** and **reusability**

- Separation of concerns - they operate within **their** own context, **independently of each other**

- Improving the project **structure**, making code **easier to read**

- Can be used **within each other**

In other words, modules are **like different branches of a company** - small, neatly organized, and responsible for their task.

When brought together, they produce a finished product.

In Node.js, there are three types of modules:

- **Core**

- **Local**

- **Third-party**

[/slide]

[slide hideTitle]

# Local Modules

Local modules are **functions** or **variables**, used locally within a project.

Typically, you must create a separate folder for **services** or **controllers**.

The files in that folder are going to be utilized throughout the whole application, by importing them.

Here is an example of a folder structure:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-2.jpg" /]

The `simple-function.js` file holds a basic function which **exported as a local module** and **usable in other files**:

```js
function calculateTax(rate, amount) {
  return rate * amount;
}

module.exports = calculateTax;
```

The `app.js` file **imports a local module and uses its functionality** like this:

```js
const calculateTax = require("./simple-function.js");

function doAccounting(income, propertyValue, VAT) {
  const incomeTax = calculateTax(0.2, income);
  const propertyTax = calculateTax(0.3, propertyValue);
  const vatTax = calculateTax(0.1, VAT);

  console.log(`Income tax -> ${incomeTax}$`);
  console.log(`Property tax -> ${propertyTax}$`);
  console.log(`VAT -> ${vatTax}$`);
}

doAccounting(20000, 50000, 1000);

/*
Income tax -> 4000$
Property tax -> 15000$
VAT -> 100$
*/
```

[/slide]

[slide hideTitle]

# Third-Party Modules

Node.js allows for the use of **third-party modules**.

As the name suggests, these modules are **created by other people** and **uploaded for public use**.

All third-party modules are made accessible through `npm` (**Node Package Manager**).

Every module is available on [npm](https://www.npmjs.com/) with **additional information** such as:

- Installation guide

- Documentation

- Bug reports and last updates

- List of people who are contributing to the module

To install a third-party module, **open a terminal and type in**:

```js
npm install express

// Type the name of the module after npm install
```

You can also install a module with **additional options**:

```js
npm install -g express

// Saves the module globally on the machine instead of the current folder
```

```js
npm install mocha --save-dev

// Saves the mocha module as a developer dependency, as it is not needed by the users
```

After installation, use a third-party module like so:

```js
const express = require("express");
```

[/slide]

[slide hideTitle]

# Core Modules

Core modules are the **foundation** of the Node.js environment.

They provide the most **basic functionality** and are **automatically loaded** on start.

Here are some of the most commonly used core modules:

- `url`

```js
const url = require("url");

// Used to parse URLs
```

- `path`

```js
const path = require("path");

// Used to operate with file paths
```

- `fs`

```js
const fs = require("fs");

// Used to operate with the file system
```

- `stream`

```js
const stream = require("stream");

// Used to stream data
```

[/slide]

[slide hideTitle]

# URL Module

The `url` module offers some functionality to perform **various operations with URLs**.

The most common reason to use this module is to **separate a URL into parts** and **extract information** from them.

A typical URL consists of **three parts**:

- `host` - the main location, also called a **domain**

- `path` - the location of the necessary content on the domain

- `query` - additional parameters used for exchanging/filtering data

By using the `url` module, these parts can be **accessed** and **used** like this:

```js
// Example URL: http://www.localhost:3000/home?year=2017&month=february
```

```js
const url = require("url");
const urlObj = url.parse(req.url); // turning the URL to an object of parts

const host = urlObj.host;
console.log(host); // localhost:3000

const path = urlObj.path;
console.log(path); // "/home"

const query = urlObj.query;
console.log(query); // ?year=2017&month=february
```

[/slide]

[slide hideTitle]

# Query String Module

A query string is a way to **assign values** to variables and **pass them as URL parameters**.

As seen in the previous slides a query string looks like this:

```js
const queryString = "?name=David&age=35";
```

The `querystring` module in Node.js transforms such strings into **objects of key-value pairs**.

This is how to parse a query string:

```js
const qString = "?name=David&age=35";
const qs = require("querystring");

const queryObject = qs.parse(qString);

console.log(queryObject.name); // David
console.log(queryobject.age); // 35
```

[/slide]
