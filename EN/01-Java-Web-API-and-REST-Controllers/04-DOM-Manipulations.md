# DOM Manipulations

[slide hideTitle]

# Selection of Elements

The Document Object Model is a tree of nodes created by the browser.

Each node represents an HTML element, and can be manupulated using JavaScript.

When working with the DOM, there are four ways to select HTML elements:

- `.getElementById()` - selects an element by ID
  * the most specific selector, as there should be only one element with a given ID 

- `.getElementsByClassName()` - selects elements by class name
  * there can be multiple elements with the same class name

- `.getElementsByTagName()` - selects elements by HTML tag name
  * for example, we can select all divs, sections, or anchor tags

- `.querySelector()` - uses CSS selectors to select elements
  * `".class-name"` - to select an element by class name
  * `"#id"` - to select by ID
  * `"element"` - to select by an HTML element by tag name (e.g. div, nav, aside, section)

[/slide]

[slide hideTitle]

# CSS Selectors

As we mentioned earlier, CSS selectors can be passed to the `.querySelector()` method.

We can use multiple CSS selectors to match specific elements.

For example:

- `"#main h2"` - selects all `h2` titles inside an element with an id of `main`
- `".main.cta"` - selects all elements with both main and cta set within its class attribute
- `"section>div"` - selects all divs where the parent is a section element
- `"p::after"` - inserts something after the content of each paragraph
- `"*"` - selects all elements

[/slide]

[slide hideTitle]

# DOM Manipulations

There are four main methods to manipulate the content of HTML elements through the DOM.

## innerHTML

We use the `.innerHTML()` method to change the text of an element:

```js live
const myDiv = document.createElement('div');
console.log(myDiv);

myDiv.innerHTML = "Welcome to my site 👨🏼‍💻"
console.log(myDiv);
```

In this example, we create a new div element and set its innerHTML value to a string.

## setAttribute

Each HTML element can have one or more attributes.

We use the `.setAttribute()` method to attach attributes to a DOM element:

```js
const mainBtn = document.querySelector("button");

mainBtn.setAttribute("class", "callToAction");
```

It accepts two arguments:

- `name` (e.g. `"class"`) - specifies the name of the attribute
  * converted to lowercase by default

- `value` (e.g. `"callToAction"`) - the value to assign to the attribute
  * automatically converted to a string 

## style.property

We can assign CSS properties to an element directly from our scripts:

```js
const title = document.getElementById("title");

title.style.color = "red";
```

In this example, we set the color of a title to red.

[/slide]

[slide hideTitle]

# Creating DOM Elements

The `document.createElement()` method creates a new HTML element with a specified tagName:

```js
const p = document.createElement('p');
```

By using `document.createTextNode()`, we can create a new text node.

```js
const text = document.createTextNode('Hello World! 🙋');​
```

Then, we can append it to the newly created paragraph:

```js
p.appendChild(text);​
```

Using these methods, we can build more complex UIs:

```js
let list = document.createElement('ul');​

let liMark = document.createElement('li');​
liMark.textContent = 'Mark';​
list.appendChild(liMark);​

let liJenny = document.createElement('li');​
liJenny.innerHTML = '<b>Jenny</b>';​
list.appendChild(liJenny);​

document.body.appendChild(list);​
```

In this example, we create an unordered list `ul` with two list item `li` elements.

[/slide]

[slide hideTitle]

# Deleting DOM Elements

Deleting an HTML element from the DOM is done via the `Node.removeChild()` method:

```js
<ul id="users">
  <li id="1">Mark</li>
  <li id="2">
    <b>Maria</b>
  </li>
</ul>

----------------------------------

let parent = document.getElementById('users');​
let child = document.getElementById('1');​
parent.removeChild(child);​
```

In this example, we remove the first `li` element by calling the `removeChild` method on its parent.

[/slide]