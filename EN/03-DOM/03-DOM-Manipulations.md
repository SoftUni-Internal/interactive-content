# DOM Manipulations

[slide hideTitle]

# Selection of Elements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-11-selection-of-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **DOM** allows the modification of **HTML elements**.

Before they are modified, these elements need to be **selected** first.

Here are the four ways to select an element:

- `getElementById()` - Returns only **one** element with the desired id

- `getElementsByTagName()` - Returns an **array** of the elements with this tag

- `getElementsByClassName()` - Returns an **array** of the elements with this class

- `querySelector()` - Returns the **first** element to match the selector, or **null** if there are none

[/slide]

[slide hideTitle]

# CSS Selectors

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-12-css-selectors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**CSS Selectors** are a quick and efficient way to select one or multiple nested HTML elements.

Here are a few ways to utilize them:

- `p` - Selects element based on **type** (In this case: `<p>`)

- `.container` - Selects **all** elements with the "container" **class**

- `#idNumber` - Selects a **single** element with the "idNumber" **id**

- `input[type="text"]` - Selects **all** input fields that are of type "text"

- `#idNumber, .container` - Selects the element with an "idNumber" id **and** all the elements with the `container` class

[/slide]

[slide hideTitle]

# DOM Manipulations

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-13-14-dom-manipulations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

DOM elements can be **read** and **manipulated** with JavaScript.

Here are some of the **methods** and **properties** which are used in the process:

- `.innerHTML` - A property for **accessing** and **changing** the HTML of an element

- `.attributes` - A property that returns all attributes of an element in a collection

Every item in that collection has **two** values - **attribute** and **value:**

- `.setAttribute()` - A method, used to **add** an attribute to an element, or **update** it, if the element already has the given attribute

- `.style` - A property, used to **directly** update the **CSS** of an element

```js
<h1 id="title">This is the title of a website</h1>
```

```js
let h1 = document.getElementById("title");
h1.style.color = "blue"; // .color selects the CSS property to be changed and "blue" specifies its value
```

- `.removeChild()` - A method, that **removes** and **returns** a child from an HTML element

- `.appendChild()` - A method, that **adds** a child to the **back** of an element

- `.replaceChild()` - A method, that **replaces** one HTML element with another

It takes two parameters - the element to be replaced and the element to replace it with.

- `.document.write()` - A method, used to write text **directly** into the HTML document

[/slide]

[slide hideTitle]

# Creating DOM Elements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-15-17-creating-dom-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** ways to create new HTML elements.

The first one is to **directly** create one using the "**.createElement**" command.

```js
let h1 = document.createElement("h1");
let div = document.createElement("div");
```

And the other one is to copy **existing** elements.

```js
let h1 = document.getElementById("page-title");
let newH1 = h1.cloneNode(true); // returns a duplicate of the h1 tag above
```

It is important to know that even though these elements are created, they **do not exist** in the HTML document.

They are just **JavaScript variables**.
[/slide]

[slide hideTitle]

# Deleting DOM Elements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-16-deleting-dom-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As always, to perform any type of operation on an element, it must be **accessed** first.

Here is an example of how to **get** and **remove** a DOM element.

```js
<article id="post">
  <h1 id="title">Greeting post</h1>
  <p id="content">Hello everybody and welcome to the website.</p>
</article>
```

```js
let parent = document.getElementById("post"); // returns the article element
let title = document.getElementById("title"); // returns the h1 element
let content = document.getElementById("content"); // returns the p element

title.remove(); // directly removes the DOM element

parent.removeChild(content); // removes the element by accessing its parent
```

[/slide]

[slide hideTitle]

# Problem with Solution: Articles List

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-18-solution-one-article-list-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Articles List" taskId="js-advanced-DOM-Articles-List" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]
```
function createArticle(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Article_list_problem.zip) **for this task.**

In this problem, you should create a JavaScript function that creates articles and appends them into an `article` section.

The programs in this language are called **scripts**. 

They can be written directly in the HTML file and **executed automatically** as the page loads.

Scripts are provided and executed as a **plain text**. 

They do not need special preparation or compilation to run.

In this aspect, JavaScript is very **different** from many other languages, which require compilation and additional steps before it, such as Java.

[image assetsSrc="JS-Advanced-DOM-Lab-1.jpg" /]

# Constraints:

- **Title value** from the **title input** should be a **heading 3 element** `<h3>`

- **Content text** from the **textarea element** should be a **paragraph** `<p>`

- Both new created elements (**h3** and **p**) should be appended to a new **article element** `<article\>`

- **The current article element** should be **appended** to the section which has an **id** of "**articles**" (`#articles`)

- You should create a new **article element** only if the **title** and **content are not empty**

- After the button is pressed, you must **clear** the **title value** and **text value**

```js
<div id="createArticle">
   <label for="createTitle">Title</label>
   <input id="createTitle">
   <br>
   <label for="createContent">Content</label>
   <textarea id="createContent"></textarea>
   <button onclick="createArticle()">Create</button>
</div>
<section id="articles">
   <h1>Articles List</h1>
</section>
```

## Input

[image assetsSrc="JS-Advanced-DOM-Lab-3.jpg" /]

## Output

[image assetsSrc="JS-Advanced-DOM-Lab-4.jpg" /]

```js
<section id="articles">
   <h1>Articles List</h1>
   <article>
      <h3>JavaScript</h3>
      <p>
         "JavaScript is a programming language
         that adds interactivity to your website
         (for example games, responses when buttons
         are pressed or data is entered in forms,
         dynamic styling, animation). This article
         helps you get started with this exciting
         language and gives you an idea of
         what is possible."
      </p>
   </article>
</section>

```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";
document.getElementById("createContent").value = "JavaScript Content Test";

result();

let currArticle = document.querySelectorAll('#articles article')[0];

expect(currArticle.childNodes[0].textContent).to.equal("JavaScript Title Test");
expect(currArticle.childNodes[1].textContent).to.equal("JavaScript Content Test");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);

[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript";
document.getElementById("createContent").value = "JavaScript was initially created to “make web pages alive”. The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads. Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.In this aspect, JavaScript is very different from another language called Java";

result();

let currArticle = document.querySelectorAll('#articles article')[0];

expect(currArticle.childNodes[0].textContent).to.equal("JavaScript");
expect(currArticle.childNodes[1].textContent).to.equal("JavaScript was initially created to “make web pages alive”. The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads. Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.In this aspect, JavaScript is very different from another language called Java");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Test Title Field";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createContent").value = "JavaScript Content Test";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

result();

let articlesCount = document.querySelectorAll('#articles article')[0] === undefined;

expect(articlesCount).to.equal(true);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

let title = document.getElementById("createTitle");
let content = document.getElementById("createContent");

title.value = "JavaScript Title Test";
content.value = "JavaScript Content Test";

result();

expect(title.value).to.equal("");
expect(content.value).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";
document.getElementById("createContent").value = "JavaScript Content Test";

result();

document.getElementById("createTitle").value = "JavaScript Title Test 22";
document.getElementById("createContent").value = "JavaScript Content Test 22";

result();

document.getElementById("createTitle").value = "JavaScript Title Test 33";
document.getElementById("createContent").value = "JavaScript Content Test 33";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(3);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Properties vs. Attributes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-20-21-dom-properties-and-html-attributes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Attributes can **define additional** information about the HTML element.

DOM properties, on the other hand, are **properties of the object** that represents an HTML element.

Even though they might look the same, they **are not**.

There are DOM properties that **do not correspond** to an HTML element and vice versa.

**HTML Attributes initialize DOM properties** and although DOM properties **can change**, an HTML attribute **stays the same**.

[/slide]

[slide hideTitle]

# DOM Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-22-dom-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

- `innerHTML` - Used to **get** and **change** the HTML of an element

```js
let div = document.getElementById("container");
div.innerHTML += "<p>What's your name</p>";
```

- `value` - Used to **get** and **set** the value of an element

```js
let input = document.getElementById("name-input");
console.log(input.value); // logs the value of the input field
```

[/slide]

[slide hideTitle]

# HTML Attributes and Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-23-28-html-attributes-and-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This is an example of some HTML to work on:

```js
<a id="link" href="www.google.com">Link</a>
<input id="first-input" type="text">
```

And here are a few of the common methods:

- `getAttribute()` - Returns the value of the element's attribute

Accepts **one** parameter - **the attribute name**.

```js
let a = document.getElementById("link");
a.getAttribute("href"); // www.google.com
```

- `setAttribute()` - **Sets** the value of the element's attribute or **updates** it if it already exists

Accepts two parameters - **name of attribute and value**.

```js
let input = document.getElementById("first-input");
input.setAttribute("name", "username"); // Sets the value of the name attribute to "username"
```

- `removeAttribute()` - **Removes** from the given HTML element

Accepts one parameter - **the name of the attribute**.

```js
let input = document.getElementById("first-input");
input.removeAttribute("name"); // Removes the name attribute of the input
```

- `hasAttribute()` - **Returns a boolean** if the specified attribute is present or not

Takes one parameter - **the name of the attribute**.

```js
let input = document.getElementById("first-input");
input.hasAttribute("type"); // true
input.hasAttribute("name"); // false
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

- `add()` - Accepts the name of the class as a parameter and adds it to the element

- `remove()` - Accepts the name of the class as a parameter and deletes it from the element

```js
let h1 = document.getElementById("title");

h1.classList.add("first"); // adds the "first" class

h1.classList.remove("first"); // removes the "first" class
```

[/slide]

[slide hideTitle]

# Problem with Solution: Growing Word

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-29-solution-two-growing-word-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Growing Word" taskId="js-advanced-DOM-Growing-Word" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]
```
function growingWord(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Growing_word_problem.zip) **for this task.**

In this problem, you should **create a JavaScript functionality** that **changes the size and the color** of a given **paragraph** on **every click**.

[image assetsSrc="JS-Advanced-DOM-Lab-6.jpg" /]

```js
<div id="exercise">
   <div id="colors">
      <div id="blueDiv">Blue</div>
      <div id="greenDiv">Green</div>
      <div id="redDiv">Red</div>
   </div>
   <div>
      <button type="button" onclick="growingWord()">
        CHANGE
      </button>
   </div>
   <p>Growing Word</p>
</div>

```

Every time when we **click** on the `[CHANGE]` button, **the color** and **the size** of **the paragraph** which contains "**Growing Word**" **should change**!

**After every click**, the current paragraph **font size** should be **changed** to **the current font size multiplied by 2**. 

Also, **the color** of that paragraph should change, depending on the **previous color**.

## Example

- If we click **once**, the color should be changed to **blue** and the font size should be **2** (the first, initial size)

- If we click **twice**, the color should be changed to **green** and the font size should be **4** (2 \* 2)

- If we click **three times**, the current color of that paragraph should be changed to **red** and the font size should be **8** (4 \* 2)

- If our paragraph already has a **red color**, on the next click, the color should turn to **blue**

Just **loop through** these three colors (blue, green, red) over and over... while you are **clicking** on that button.

[image assetsSrc="JS-Advanced-DOM-Lab-8.jpg" /]

```js
<div id="exercise">
   <div id="colors">...</div>
   <div>...</div>
   <p style="color: blue; font-size: 2px;"> 
        Growing Word
   </p>
</div>
```

[image assetsSrc="JS-Advanced-DOM-Lab-10.jpg" /]

```js
<div id="exercise">
   <div id="colors">...</div>
   <div>...</div>
   <p style="color: green; font-size: 4px;">
        Growing Word
   </p>
</div>

```

[image assetsSrc="JS-Advanced-DOM-Lab-12.jpg" /]

```js
<div id="exercise">
   <div id="colors">... </div>
   <div>...</div>
   <p style="color: red; font-size: 8px;">
        Growing Word
   </p>
</div>
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();

let fontSize = \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("8px");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("red");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("blue");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("green");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();
result();
result();

let fontSize= \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("32px");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();
result();

let fontSize= \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("16px");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Parents and Child Elements

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-31-36-parents-and-child-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

Both of these methods would return **null** if there were no children elements.

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
console.log(thirdLi.textContent); // Anne
```

These properties would also return **null** if there was just one child element.

The last two methods are used to add a child to the **front** and the **back** of a parent element:

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

list.appendChild(lastLi); // adds the "lastLi" element to the back of the list

list.prependChild(firstLi); // adds the "firstLi" element to the front of the list
```

[/slide]

[slide hideTitle]

# NodeList vs. HTMLCollection

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/EN/JS-Advanced-DOM-37-nodelist-vs-htmlcollection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Both **NodeList** and **HTMLCollection** are indexed collection of **DOM nodes**.

However, **HTMLCollection** is limited only to **Element nodes**, while **NodeList** could hold nodes
**of any type**.

The two collections have the same methods, with the exception of **NodeList's** `namedItem` method.
[/slide]
