# Introduction to Node.js

[slide]

# Node.js Overview

Normally, JavaScript is used **in the browser** to make a web page **more interactive**.

Node.js is a **runtime environment** that allows writing JavaScript **on the server**.

Here are some of the benefits that come along with it:

- Node.js is **very easy to learn** as it uses just **regular JavaScript**.

- It has a **high performance** thanks to **Google's V8 engine**, which compiles code **fast and efficiently**.

- Node.js has a **great package manager** with **over a million free packages**.

- Its community is very **large and active** which means bug-fixes and updates on packages are happening **very often**.

[/slide]

[slide]

# Installation

_**Here is a**_ [link](https://nodejs.org/en/) _**to the official Node.js website**_.

It is recommended to download and install the latest version.

To check Node.js's current version on a machine just open a terminal and type:

```js
node -v
```

[/slide]

[slide]

# Environment Setup

There are two ways to execute Node.js code:

- Running it **directly from the terminal**.

```js live
function greeting() {
    console.log("Hello Node.js!");
}

greeting(); 
```

- Writing the code in a file and opening it with the `node` command.

```js live
function sumNumbers(x, y){
    console.log(x + y);
}

sumNumbers(25, 55);    
```

Suppose the code from above is saved in an `app.js` file.

This is how to execute it in the terminal:

```js
node app.js
```

[/slide]

[slide]

# NPM Packages

Node.js projects are **initialized as NPM Packages**.

To initialize a personal Node.js project:

- Open a terminal and type:

```js
npm init
```

- Define the project's key characteristics.

- Wait for the `package.json` configuration file to be created.

- Open an editor and start coding.

To **go around** all the questions about the project's characteristics just type: 

```js
npm init -y
```

[/slide]

[slide]

# Configuration (package.json)

The `package.json` file is an object, holding key **metadata** and **general information** about a project.

This is some of the information that could be found in a `package.json` file:

- `name`

- `version` 

- `description`

- `author`

- `license`

- `scripts`

Here is how a `package.json` file looks like:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-1.jpg" /]
[/slide]