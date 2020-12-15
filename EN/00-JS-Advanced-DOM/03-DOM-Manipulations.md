# DOM Manipulations

[slide]

# Selection of Elements

The **DOM** allows the modification of **HTML elements**.

Before they are modified, these elements need to be **selected** first.

Here are the four ways to select an element:

- `getElementById()` - Returns only **one** element with the desired id.

- `getElementsByTagName()` - Returns an **array** of the elements with this tag.

- `getElementsByClassName()` - Returns an **array** of the elements with this class.

- `querySelector()` - Returns the **first** element to match the selector, or **null** if there are none.

[/slide]

[slide]

# CSS Selectors

**CSS Selectors** are a quick and efficient way to select one or multiple nested HTML elements.

Here are a few ways to utilize them:

- `p` - Selects element based on **type** (In this case: `<p>`).

- `.container` - Selects **all** elements with the "container" **class**.

- `#idNumber` - Selects a **single** element with the "idNumber" **id**.

- `input[type="text"]` - Selects **all** input fields that are of type "text".

- `#idNumber, .container` - Selects the element with an "idNumber" id **and** all the elements with the "container class.

[/slide]

[slide]

# DOM Manipulations

DOM elements can be **read** and **manipulated** with Javascript.

Here are some of the **methods** and **properties** which are used in the process:

- `.innerHTML` - A property for **accessing** and **changing** the HTML of an element.

- `.attributes` - A property that returns all attributes of an element in a collection. Every item in that collection has **two** values - **attribute** and **value**.

- `.setAttribute()` - A method, used to **add** an attribute to an element, or **update** it, if the element already has the given attribute.

- `.style` - A property, used to **directly** update the **CSS** of an element.

```js
<h1 id="title">This is the title of a website</h1>
```

```js
let h1 = document.getElementById("title");
h1.style.color = "blue"; // .color selects the CSS property to be changed and "blue" specifies its value
```

- `.removeChild()` - A method, that **removes** and **returns** a child from an HTML element.

- `.appendChild()` - A method, that **adds** a child to the **back** of an element.

- `.replaceChild()` - A method, that **replaces** one HTML element with another. It takes two parameters - the element to be replaced and the element to replace it with.

- `.document.write()` - A method, used to write text **directly** into the HTML document.

[/slide]

[slide]

# Creating DOM Elements

There are **two** ways to create new HTML elements.

The first one is to **directly** create one using the `.createElement` command.

```js
let h1 = document.createElement("h1");
let div = document.createElement("div");
```

And the other one is to copy **existing** elements.

```js
let h1 = document.getElementById("page-title");
let newH1 = h1.cloneNode(true); //returns a duplicate of the h1 tag above
```

It's important to know that even though these elements are created, they **don't exist** in the HTML document.

They are just **Javascript variables**.
[/slide]

[slide]

# Deleting DOM Elements

As always, to perform any kind of operation on an element, it must be **accessed** first.

Here is an example of how to **get** and **remove** a DOM element.

```js
<article id="post">
  <h1 id="title">Greeting post</h1>
  <p id="content">Hello everybody and welcome to the website.</p>
</article>
```

```js
let parent = document.getElementById("post"); //returns the article element
let title = document.getElementById("title"); //returns the h1 element
let content = document.getElementById("content"); //returns the p element

title.remove(); //directly removes the DOM element

parent.removeChild(content); //removes the element by accessing its parent
```

[/slide]

[slide]

# Problem: 1. Article List

[/slide]

[slide]

# Solution: 1. Article List

[/slide]

[slide]

# Properties vs. Attributes

Attributes can **define additional** information about the HTML element.

DOM properties, on the other hand, are **properties of the object** the represents an HTML element.

Even though they might look the same, they **are not**.

There are DOM properties that **don't correspond** to an HTML element and vice versa.

**Attributes initialize DOM properties** and although these properties **can change**, an attribute **stays the same**.

[/slide]

[slide]

# DOM Properties

As covered, DOM elements **can be modified** through their properties.

Suppose there is the following HTML:

```js
<div id="container">
  <p id="my-name"> My name is </p>
</div>
<form>
    <input id="name-input">
</form>
```

Here are a few examples of DOM properties and what they do:

- `textContent` - Used to **read** and **write** text

```js
let p = document.getElementById("my-name");
p.textContent += "Ellie";
```

- `innerHTML` - Used to **get** and **change** the HTML of an element.

```js
let div = document.getElementById("container");
div.innerHTML += "<p>What's your name</p>";
```

- `value` - Used to **get** and **set** the value of an element.

```js
let input = document.getElementById("name-input");
console.log(input.value); //logs the value of the input field
```

[/slide]

[slide]

# HTML Attributes and Methods

This is an example of some HTML to work on:

```js
    <a id="link" href="www.google.com">Link</a>
    <input id="first-input" type="text">
```

And here are a few of the common methods:

- `getAttribute()` - Returns the value of the element's attribute. Accepts **one** parameter - **the attribute name**.

```js
let a = document.getElementById("link");
a.getAttribute("href"); // www.google.com
```

- `setAttribute()` - **Sets** the value of the element's attribute or **updates** it if it already exists. Accepts two parameters - **name of attribute and value**.

```js
let input = document.getElementById("first-input");
input.setAttribute("name", "username"); // Sets the value of the name attribute to "username"
```

- `removeAttribute()` - **Removes** from the given HTML element. Accepts one parameter - **the name of the attribute**.

```js
let input = document.getElementById("first-input");
input.removeAttribute("name"); // Removes the name attribute of the input
```

- `hasAttribute()` - **Returns a boolean** if the specified attribute is present or not. Takes one parameter - **the name of the attribute**.

```js
let input = document.getElementById("first-input");
input.hasAttribute("type"); // true
input.hasAttribute("name"); //false
```

Since an HTML element can have **multiple class names**, there is a property that returns an **array** of all of them.

```js
<h1 id="title" class="title red left">
  Heading 1
</h1>
```

```js
const h1 = document.getElementById("title").classList;

// ["title", "red", "left", value: "title red left"]
```

`classList` has two methods, which **create** or **delete** a CSS class:

- `add()` - Accepts the name of the class as a parameter and adds it to the element.

- `remove()` - Accepts the name of the class as a parameter and deletes it from the element.

```js
let h1 = document.getElementById("title");

h1.classList.add("first"); //adds the "first" class

h1.classList.remove("first"); //removes the "first" class
```

[/slide]

[slide]

# Problem: 2. Growing Word

[/slide]

[slide]

# Solution: 2. Growing Word

[/slide]

[slide]

# Parents and Child Elements

HTML elements can have **multiple** other elements inside of them.

When a certain element holds other elements **between its opening and closing tag** - it is a **parent element**.

All the others inside the parent element are called **children elements**.

```js
<article id="first-post">
  <h1>Today's news</h1>
  <p>Hundreds of people gather to listen to singing kid on the street.</p>
</article>
```

The `.children` read-only property can be used to **get** all of the parent element's children.

```js
let article = document.getElementById("first-post");
let articleElements = article.children; // a collection of all the elements inside the article tag
```

There are two other methods to get the **first** or the **last** child:

- `.firstElementChild`

- `.lastElementChild`

```js
let article = document.getElementById("first-post");

let h1 = article.firstElementChild; // returns the <h1> tag of the article
let p = article.lastElementChild; // returns the <p> tag of the article
```

Both of these methods would return **null** if there are no children elements.

Other properties for navigation between **next** and **previous** elements are:

- `.nextElementSibling`

- `.previousElementSibling`

```js
<ul id="names">
  <li>Thomas</li>
  <li>Kate</li>
  <li>Anne</li>
  <li>David</lid>
</ul>
```

```js
let list = document.getElementById("names");

let firstLi = article.firstElementChild;
let lastLi = article.lastElementChild;

let secondLi = firstLi.nextElementSibling;
console.log(secondLi.textContent); // Kate

let thirdLi = latsLi.previousElementSibling;
console.log(thirdLi.textContent); //Anne
```

These properties would also return **null** if there is just one child element.

The last two methods to mention are for adding a child to the **front** and the **back** of a parent element.

- `.appendChild`

- `.prependChild`

```js
<ul id="years">
  <li>2020</li>
</ul>
```

```js
let list = document.getElementById("years");

let firstLi = document.createElement("li");
let lastLi = document.createElement("li");

list.appendChild(lastLi); //adds the "lastLi" element to the back of the list

list.prependChild(firstLi); //adds the "firstLi" element to the front of the list
```

[/slide]

[slide]

# NodeList vs. HTMLCollection

Both **NodeList** and **HTMLCollection** are indexed collection of **DOM nodes**.

However, **HTMLCollection** is limited only to **Element nodes**, while **NodeList** could hold nodes
**of any type**.

The two collections have the same methods, for the exception of **NodeList**'s `namedItem` method.
[/slide]
