# Composition

[slide]

# Composition Overview

Just like DOM Elements, React components can be **nested**.

```js
function Greet(props) {
  return <h1>Hello, my name is {props.name}!</h1>; 
}
function Hometown(props) {
  return <h2>I am from {props.town}.</h2>;
}
function Combine(props) { 
  return (
    <div>
      <Greet />
      <Hometown />
    </div>
  );
} 

```

This can be used to achieve **encapsulation**, as well as **loose coupling**.

**Encapsulating** React components enables us to **hide the internal state** of the components from the outside.

**Loose coupling**, on the other hand, means that each of the nested components has very little to no knowledge about the state of the neighboring components.

[/slide]



[slide]

# Component Syntax

Here is what the syntax of nested components looks like:

```js
<Dropdown> Choose Your Color 
  <Menu> 
    <MenuItem>Red</MenuItem>
    <MenuItem>Green</MenuItem> 
    <MenuItem>Blue</MenuItem> 
  </Menu> 
</Dropdown>

```

The example above shows a `Dropdown` component that contains in itself another component, called `Menu`.

Nested inside the `Menu` components are three `MenuItem`

As you can see, each component has its own **opening** and **closing** tag. 

You can also use self closing tags, as shown here:

`<UserHead name='homeHeader' />`

Information in components is passed via the `props` object we discussed earlier.

The name attribute in this `UserHead` component is its property.

Props can be just about anything the component needs to function, including **function references**.

[/slide]




[slide]

# Advantages

Here are the main advantages of component\-based development;

- **Faster development**: since a new application can be assembled through existing components, development time will be reduced

- **Easy to maintain**: since a component can be managed individually, it can be done easier and in less time, making **debugging** easier as well

- **Scalability**: you can add additional functionality to a given component, without affecting the rest of the application

[/slide]

