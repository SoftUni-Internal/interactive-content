# External Templating Library

[slide hideTitle]

# What is lit-html?

**Lit-html** is a simple **templating library**, part of the Polymer Project.

It is built on **tagged template literals**, a JavaScript feature, introduced in EcmaScript 6.

As you may know, template literals support **multilne input**, as well as **interpolation**.

Tagged template literals allow us to put a **function name** before the opening backtick.

The corresponding **function** will **receive** its **arguments** through the template literal:

```js
html`<h1>I am ${name} from ${city}</h1>`
```

This example shows what a typical **lit-html template** looks like.

We will learn what the `html` tag does in a later video.

[/slide]


[slide hideTitle]

# Getting Started

There are a few ways to **install** lit-html:

## Installing lit-html using an NPM Package

To install lit-html via the **Node Package Manager**\(NPM\), we must have **Node.js** [installed](https://nodejs.org/en/).

After opening a terminal in our **project directory**, type:

`npm install lit-html`

You can then use lit-html by importing it in the target file:

`import {html, render} from 'lit-html'`

The `html` tag function is used by lit-html to represent the **template** to be rendered.

The `render` function accepts a template as a first parameter and **renders** it.

## Importing from an online CDN

You can also import lit-html **without** having to install it, using the `unpkg` CDN.

At the top of your script file, type:

`import {html, render} from 'https://unpkg.com/lit-html?module';`

## Trying it out online

You can use any of the following **online editors** to **try out** lit-html:

- [CodeSandbox](https://codesandbox.io/s/wq2wm73o28)
- [JSBin](https://jsbin.com/nahocaq/1/edit?html,output)
- [StackBlitz](https://stackblitz.com/edit/js-pku9ae?file=index.js)

[/slide]


[slide hideTitle]

# Usage

In order to use **lit-html**, you must **import** it via path:

```js
<script type="module">
  import {html, render} from './node_modules/lit-html/lit-html.js';
  
  // ...
</script>
```

Since the `import` statement only works in module scripts, it is **important** to add `type="module"` as an attribute to the `script` tag.

To import an **external file** instead:

```js
<script type="module" src="index.js"></script>
```

It is recommended to use [Live Server](https://github.com/tapio/live-server#readme) to start your application.

It saves time by **automatically** reloading when it detects changes in your code.

You can install it by typing `npm install -g live-server` in a command-line tool.

To **start the server**, type `live-server`.

By default, the server will **start running on port 8080**.

A browser window will open **automatically**.

If it does not, go to **localhost:8080**.

[/slide]


[slide hideTitle]

# Rendering a Template

**Lit-html's** two main APIs are **html** and **render**.

- **html**

The **html** template tag is used to **write** templates.

- **render()**

The **render()** function is used to **render** a template to a **DOM container**:

`render(template(data), document.querySelector('#main'));`

It accepts two parameters:

- The **template** to render
  * this template function accepts the dynamic **data** used to **populate** the template

- The **parent node** to render it inside

[/slide]

[slide hideTitle]

# Tag Functions / Tagged Templates

**Tagged templates** are function calls that get their arguments from a template **literal**:

```js
import {
    html,
    render
} from 'lit-html';

const template = (username) => {
    return html`
    <p> Welcome back, ${username}!</p>
  `;
};

const element = document.querySelector('#main');

render(template('amanda_johnson'), element);

```

This example will render a **paragraph** inside a parent node with an `id` of `main`.

The text `Welcome back, amanda_johnson!` will be **displayed**.

[/slide]

[slide hideTitle]

# Atrribute Binding

We can bind expressions to а node's **attribute** and **property** values:

```js
let cssClasses = ['main', 'important'];

// ...

const demoTemplate = (cssClasses) => html`<div class=${cssClasses.join(' ')}>This text will be stylised</div>`;
```

Since HTML attributes are **strings**, any expression we put must **return** a value that can be **converted** into a string.

The above template will render as follows:

```html
<div class="main important">This text will be stylised</div>
```

## Boolean Attribute Binding

To denote an attribute as a **boolean**, we put a question mark right before its name - `?attribute`:

```js
const template = (data) => html`<input type="submit" value="Submit">
     <span ?hidden=${!data.hasError}>Incorrect input</span>`;

```

This can be useful when we want to display additional information, depending on a **condition**.

Like displaying and hiding an **error message**, for example.

[/slide]

[slide hideTitle]

# Property Binding

By putting a **period** `.` before the **property name**, we can bind to a node's **JavaScript properties**:

```js
const template = (data) => html`<user-list .items=${users} id="users"></user-list>`;
```

Property bindings can also be used to **pass data**, such as a list of users, to **subcomponents**.

[/slide]


[slide hideTitle]

# Handling Events

The syntax for **handling events** looks like a property binding, but it has the **prefix** `@` and the name of the **event** after it - `@onchange`:

```js
const myButton = () => html`<button @click=${handleClick}>Click Here</button>`;
```

In this example we use the `handleClick` object as an **event listener**, but we can also use a **plain function**.

```js
let handleClick = {

    handleEvent(event) {
        console.log('You have clicked a button.');
    },

    capture: true,
};

```

This object includes the `handleEvent` function which receives the `event` object as a parameter.

The `capture` boolean is used to make sure that events of this type will be dispatched to the **registered listener** first.

[/slide]

[slide hideTitle]

# Conditional Statements

Unlike other templating engines, like Handlebars, lit-html has **no built-in control-flow constructs**. 

We can use a normal JavaScript **ternary expression** instead:

```js
html`
  ${product.isInStock
      ? html`<button @click=${purchaseHandler}>Buy</button>`
      : html`The selected product is out of stock.`
  }
`;

```

Additionally, we can also use **conditional structures** such as the `if` or `switch-case` statements.

[/slide]

[slide hideTitle]

# List Rendering

To **render lists**, we use `Array.map` to **transform** a list of data into multiple **templates**:

```js
html`
  <ul>
    ${products.map((product) => html`<li>${product.name}</li>`)}
  </ul>
`;

```

In this example, we create an **unordered list**, and generate `li` elements by **mapping through a list** of products.

[/slide]

[slide hideTitle]

# Directives: Classes and ClassMap

**Directives** are custom **functions** that **modify how lit-html renders values**.

The `classMap` directive is used to set a **list of classes** based on an **object**:

```js
import {
    classMap
} from 'lit-html/directives/class-map.js';

let classes = {
    enabled: true,
    hidden: false,
    important: true
};

const template = (classes) => html`<div class=${classMap(classes)}>This text is important.</div>`;

const element = document.querySelector('#root');

render(template(), element);

```

This template will be **rendered** out like this:

`<div class="enabled important">This text is important</div>`

[/slide]

[slide hideTitle]

# Directives: styles and styleMap

`styleMap` sets **styles** on an element using an **object** with style properties:

```js
import {
    styleMap
} from 'lit-html/directives/style-map.js';

let stylesArr = {
    backgroundColor: 'aqua',
    color: 'black'
};

html`<h1 style=${styleMap(stylesArr)}>This title is black</h1>`;
```

The **rendered template** looks like this:

```js
<h1 style="background-color:aqua;color:black;">This title is black</h1>
```

[/slide]


[slide hideTitle]

# Directives: repeat

The `repeat` directive creates **multiple templates** from a given **collection** and **updates** them efficiently when **changes** are detected:

```js
import {
    repeat
} from './node_modules/lit-html/directives/repeat';

const artists = (artistInfo) => html`
  <ul>
    ${repeat(artistInfo, (i) => i.id, (i, index) => html`
      <li>${index}: ${i.name}, ${i.genre}</li>`)}
  </ul>
`;

const artistInfo = [{
        id: 1,
        name: 'Rihanna',
        genre: 'R&B'
    },
    {
        id: 2,
        name: 'David Bowie',
        genre: 'Rock'
    },
    {
        id: 3,
        name: 'Daft Punk',
        genre: 'Electronic'
    }
];

const element = document.querySelector('#artists-container');

render(artists(artistInfo), element);

```

`repeat()` accepts **three arguments**:

- The source **collection**

- A **function** which returns a **key** for each item

- A **function** that returns a **template** for a single item

[/slide]
