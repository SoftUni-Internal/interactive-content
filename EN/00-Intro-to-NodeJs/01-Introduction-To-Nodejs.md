# Introduction to Node.js

[slide hideTitle]

# Node.js Overview

Typically, JavaScript is used **in the browser** to make a web page **more interactive**.

Node.js is a **runtime environment** that allows writing JavaScript **on the server**.

Here are some of the benefits that come along with it:

- Node.js is **very easy to learn** as it uses **regular JavaScript**

- **High performance** thanks to **Google's V8 engine**, which compiles code **fast and efficiently**

- It has a **great package manager**, called **NPM**, with **over a million free packages**

- Its community is very **large and active** which means bug fixes and updates on packages occur **frequently**


## Installation

**Here is a** [link](https://nodejs.org/en/) **to the Node.js's official website.**

Download and install the latest version, if you have not already

To check Node.js's current version on a machine, just open a terminal and type:
```js
node -v
```
If the command returns a version number, Node.js has been successfully installed.

Otherwise, try running the installer again.


## Environment Setup

There are two ways to execute JS code using Node.js:

- Running it **directly from the terminal**

```js live
function greeting() {
 console.log('Hello Node.js!');
}

greeting(); 
```

- Writing the code in a file and opening it with the `node` command

```js live
function sumNumbers(x, y){
 console.log(x + y);
}

sumNumbers(25, 55); 
```

Let us assume that the code has been stored in an `app.js` file.

You can execute it using the `node` command, followed by the name of the file:

```js
node app.js
```

## NPM Packages

Node.js projects are **initialized as NPM Packages**.

To initialize a personal Node.js project:

- Open a **terminal** and type:

```js
npm init
```

- Define the project's key **characteristics**

- Wait for the `package.json` configuration file to **generate**

- Open an **editor** and start coding

To **apply default values** to all questions about the project's characteristics, just type in: 

```js
npm init -y
```
## Configuration (package.json)

The `package.json` file is an object, which holds a **metadata** key and **general information** about a certain project.

Here is a part of the information, discoverable in a `package.json` file:

- `name` - the project name (eg. "Music App")

- `version` - a version number, like **1.0.0**

- `description` - the purpose of the application

- `author` - name of the developer

- `license` - the type of copyright licensing the code has (e.g. "ISC")

- `scripts` - predefined scripts, made accessible using a keyword

Here is what a typical `package.json` file looks like:


```js
{
    "name": "demo",
    "version": "1.0.0",
    "description": "Node.js demo project",
    "main": "index.js",
    "engines": {
        // Sets versions of Node.js and others
        "node": ">= 6.0.0",
        "npm": ">= 3.0.0"
    },
    "scripts": {
        // Defines a set of node scripts
        "start": "node index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```
[/slide]
