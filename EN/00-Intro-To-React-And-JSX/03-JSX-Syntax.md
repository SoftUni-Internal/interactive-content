# JSX Syntax

[slide hideTitle]

# JSX Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-12-13-14-JSX-Syntax-and-overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**JSX** is React's unique approach to combining **HTML and JavaScript** in a single `.js` file.

With the help of JSX, you can change both how the **data** is prepared for rendering, as well as control the **flow** and **state** of the component, from **a single file**.

It is also what enables the great **error reporting**, which React is known for.

## JSX Syntax

Here is an example of the JSX syntax:

```js

let username = 'annemiller';
let element = <p className="greeting">Hello, {username}</p>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

```

First, we declare a variable called `username`.

Then we create another variable, called `element`.

We store a paragraph element inside, putting the `username` variable between curly braces.

Inside these curly braces, you can put any JavaScript expression, like `2 + 3`, or a **function call**, for example.

When the component is rendered, anything between them is going to be **evaluated**.

The `ReactDOM.Render()` method is what we use to render our paragraph.

It takes in two parameters \- the element we want to render, and the `root` HTML element, in which our paragraph will be rendered.

[/slide]

[slide hideTitle]

# JSX Rules and Principles

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-15-JSX-Rules-and-principles-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are some rules and good practices you have to follow:

- **Standard HTML elements** are **always** written in **lowercase**
  * elements like `div`, `p`, `h1`, `form` and so on
  
- For our **custom components**, we should always use **Pascal case**
  * `LoginForm`, `Greeting`, `CustomHeader`

- The **names** of components **cannot be expressions**, but we can use **variables**

- There must always be a **root** element

[/slide]


[slide hideTitle]

# Compilation

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-16-JSX-Compilation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**JSX compiles to plain JavaScript**, resulting in less boilerplate code, while also letting developers focus on the task itself.

At compile time, the following line will be converted to a `React.createElement()` call:

`const element = <p>Hello, {username}</p>;`

The resulting code will look like this:

```js
let element = React.createElement(
  'p',
  {className: 'greeting'},
  `Hello, ${username}`
);
```

[/slide]

[slide hideTitle]

# JSX: Demo

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Simple-JSX-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]