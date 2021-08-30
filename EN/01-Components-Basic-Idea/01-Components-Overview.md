# Components Overview

[slide hideTitle]

# Components

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-3-4-Components-Overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Components let you split the UI into independent, reusable pieces and think about each piece in isolation.

Each component has its logic, controls its rendering, and can be reused wherever you need them.

There are two types of components that we can define.

These are **Functional** components and **Classes** components.

[/slide]

[slide hideTitle]

# Functional Components

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-5-Functional-Component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A Functional component is a JavaScript function which, accepts a single argument called **props** and returns a React element.

Props stand for **properties** and is a plain JavaScript object.

Here is a simple example of a React function that accepts **props** and returns a div element.

**JSX** allows us to wright **HTML** in React. **JSX** stands for **JavaScript XML**.

To be able to display variables, we use curly braces shown in the example below.

```js
function Person(props){
    return <div>My name is {props.name}</div>
}
```

[/slide]

[slide hideTitle]

# Class Components

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-6-Class-Component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To create a class component, we need a simple JavaScript class.

It should extend the `React.Component` class.

This way, we can have access to all its methods.

Having a constructor method is not required unless we are working with an internal state.

The only method that is **required** is the `render()` method.

```js
class Person extends React.Component {
    render() {
        return <h1>My name is {this.props.name}</h1>
    }
}
```

[/slide]

[slide hideTitle]

# Component Syntax

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-7-Component-Syntax-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Component names use the PascalCase convention.

Tags must be closed for our code to compile.

To pass information from the parent to the child component, we use the **props** object.

```js
<Dropdown> A dropdown list
    <UserHead name="homeHeader" />
    <Menu>
        <MenuItem>Do Something</MenuItem>
        <MenuItem>Do Something Fun!</MenuItem>
    </Menu>
</Dropdown>
```

[/slide]
