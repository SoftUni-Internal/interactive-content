# Components Overview

[slide]

# Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Each component has its own logic and controls its own rendering, and can be reused wherever you need them.

There are two types of components that we can define.

These are **Functional** components and **Classes** components.

[/slide]

[slide]

# Functional Component

A Functional component is a JavaScript function which, accepts single argument called props and returns a React element.

Props stands for **properties** and is a plain JavaScript object.

Here is a simple example of a React function that accepts **props** and return a div elemen.

The div element is a React element and is similar to **HTML** but it is called **JSX** - JavaScript XML.

Using curly braces we can dynamically render the value of `props.name`.

```
function Person(props){
    return <div>My name is {props.name}</div>
}
```

[/slide]

[slide]

# Class Component

To create a class component we need a simple JavaScript class, that extends "React.Component" class.

This way we can have access to all the methods in "React.Component" class.

If we need we can have a constructor method, as well, but it is not required.

The only method that is **required** is the `render()` method.

```
class Person extends React.Component {
    render() {
        return <h1>My name is {this.props.name}</h1>
    }
}
```

[/slide]

[slide]

# Component Syntax

Components names always start with PascalCase. 

Tags must be closed otherwise our code will not compile.

All the information is passed via the **props** object from the parent to the child component.

```
<Dropdown> A dropdown list
    <UserHead name="homeHeader" />
    <Menu>
        <MenuItem>Do Something</MenuItem>
        <MenuItem>Do Something Fun!</MenuItem>
    </Menu>
</Dropdown>
```

[/slide]