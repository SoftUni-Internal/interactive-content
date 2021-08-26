# React Overview

[slide hideTitle]

# What is React.js?

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-3-4-React-Overview-what-is-React-js-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

React is a JavaScript **library**, made for building **user interfaces**.

In the world of programming, **a library is a collection of prewritten code**, from which you can use as much, or as little as you would like.

Using a **library**, contrary to a framework, **we are in control of the flow** of our application.

[image assetsSrc="intro-to-react-and-jsx-1.png" /]

**Created by Facebook**, React is among the **most popular** JavaScript libraries.

With a community of millions of developers, it is easy to find solutions to any issues you may face.

## Components

The main building blocks of a React application are **components**.

Components are **reusable pieces of code**, that are used to render **parts of a webpage**, resulting in a **view**.

Every React component has its own **state**, which takes care of storing **component-level data**.

Components can be written as **functions**, as well as **classes**.

For the sake of this example we will use a function\-based component:

```js
const Greeting = (props) => (
  <div>Nice to meet you! My name is {props.firstName} {props.lastName} and I am {props.age} years old.</div>
);

ReactDOM.render(
  <Greeting firstName="Amanda" lastName="Williams" age={39}/>,
  document.getElementById("root")
);
```

First, we create our `Greeting` component with the `props` object as a parameter.

This object is what React uses to access **external data**.

The text between the parentheses is **not just typical HTML**.

`<div>Nice to meet you! My name is {props.firstName} {props.lastName} and I am {props.age} years old.</div>`

It is React's custom **combination of JavaScript and HTML**, called **JSX**.

We will discuss JSX in more depth in a later video.

To embed **JavaScript logic or data in our HTML**, we use curly braces:

`{props.firstName}`

The text between the curly brackets will be **evaluated at render time**, and the resulting HTML will look like this:

`<div>Nice to meet you! My name is Amanda Williams and I am 39 years old.</div>`

[/slide]

[slide hideTitle]

# Features

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-5-6-Features-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

React has a distinctive set of **features** that make it stand out from other JavaScript libraries:

- **Open Source**: By being open-source, React enables anyone to **modify** it to their specific needs

- **Declarative**: At its core, React is a **collection of JavaScript code**, making it declarative as well, which enables benefits like **easier debugging**

- **Component-Based**: Components in React have their own **state**, keeping the DOM clean

- **Isomorphic**: By using Node on the back\-end, JavaScript is running on both the client and the server:

  - Improving user experience

  - Makes code **easier to modify** for all developers

- **Native Support**: React is supported **natively** on both **desktop** and **mobile** operating systems, enabling you to have only **one codebase** for all platforms:

  - With the help of **Electron**, you can create smooth desktop apps

  - Using **to React Native**, you can build user interfaces for both Android and iOS


[/slide]

[slide hideTitle]

# Advantages

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/01.ReactJS-Intro-To-React-And-JSX/Intro-to-ReactJS-7-Advantages-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- **Easy to learn**: requires you to just be familiar with JavaScript on an intermediate level

- Fast **performance**: Since anyone can view the source code, React is very robust and far less vulnerable to security breaches

- Uses all **EcmaScript 6** features: this includes **promises**, **classes** and **modules**

- Compatible with other libraries: The use of open standards enables **better compatibility** with other libraries, while also making **scalability** a breeze

- Great **error reporting**: If anything goes wrong while running your app, React will inform you both on the **terminal** instance from which you launched your app, as well as in the **live version in your browser**

[/slide]
