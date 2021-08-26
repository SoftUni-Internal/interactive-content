# Context

[slide hideTitle]

# Definition

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-27-30-Context-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In a typical React application, data is passed from parent to child elements via **props**.

This could cost performance issues for **certain props** that are required by many components within our application.

**Context** provides a scheme to share values between **components** without having to explicitly pass a prop through every level of the tree.

Context is designed to share data that can be considered **global** for a tree of React components.

Such global data could be the current authenticated user, theme, or preferred language.

Most often we use **context** when some data needs to be **available** by many components at different nesting levels.

We should apply context only in cases where we can not solve the specific problem using another tool because with the context we can not reuse code.

If we want to avoid passing props through nested levels, we should use component composition as a simpler solution.
[/slide]

[slide hideTitle]

# Context API

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-31-35-Context-API-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The context offers us several functions that we can use:

- `React.createContext`: Creates a context in which we can give it a default value. 

We can create many contexts.

- `Context.Provider`: sets a way to set the value in context. 

When changing the currency, we can change the context itself.

- `Class.contextType`: we can set which context to be used in our class

- `Context.Consumer`: A React component that subscribes to context changes

This lets you subscribe to a context within a function component.

- `Context.displayName`: says what the name of the context itself is. 

It is often used for debugging purposes. 

Also, each component has a display name, that we could change if we need to.

[/slide]

[slide hideTitle]

# Context Usage

It is important how we break **down the components** so that we can use the context correctly.

We can use context when we need data deep inside, for example, if we need data at the **root** level.

If we only need data from the **parent** component to be submitted to the **child** component, it is not necessary to use context.

In these cases, we can **safely use props.**

## React.createContext

Creates a Context object, while rendering will read the current context value from the closest matching provider above it in the tree.

The default value is used only when a component does not have a matching provider above it in the tree.

```js
const someContext = React.createContext(defaultValue);
```

## Context.Provider

Every Context object comes with a Provider React component.

This allows consuming components to subscribe to context changes and accepts a value prop to be passed to consuming components.

One Provider can be connected to many consumers.


```js
<MyContext.Provider value={/* some value */}>
```

## Class.contextType

Property that can be assigned a Context object created by `React.createContext`.

Let you consume the nearest current value of that Context type using `this.context`.

You can reference this in any of the lifecycle methods including the render function.

## Context.Consumer

A React component that **subscribes** to context changes.

Let you subscribe to a context within a function component.

Requires a function as a child:

- **Receives** the current context value

- **Return** a React node

- Value will be **equal** to the value prop of the closest Provider

## Context.displayName

React DevTools uses this string to determine what to display for the context.

```js
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';

<MyContext.Provider> // "MyDisplayName.Provider" in DevTools
<MyContext.Consumer> // "MyDisplayName.Consumer" in DevTools

```

[/slide]

[slide hideTitle]

# Without Using Context

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-36-Without-using-Context-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This example shows how to present information without using context.

```js
class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}
function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}
class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}
```
[/slide]

[slide hideTitle]

# Using Context

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-37-Using-Context-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With context, all we have to do is create context and give it value.

In this case, we give the context a default value of `light` and based on some event to change the theme to `dark`.

```js 
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );}
}
```

By the way, we can use this context in the **tree**, in case we use it in the toolbar.

```js
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );}

```

```js
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

```
[/slide]

[slide hideTitle]

# Context: Demo

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/03.ReactJS-Compenents-Deep-Dive/React-Components-Deep-Dive-Context-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]