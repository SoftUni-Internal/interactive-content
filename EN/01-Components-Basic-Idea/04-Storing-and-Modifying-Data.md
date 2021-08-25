# Storing and Modifying Data

[slide hideTitle]

# Component State Overview

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-17-18-Storing-And-Modifying-Data-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

React components have a built-in **state** object.

The **state** object is where we store property values that belong to the component.

When the state object changes, the component re-renders.

Each component can maintain its state, which lives in the **state** object.

Changing the **state** will change how the app looks. 

This way, we can create apps that are dynamic and interactive.

[/slide]

[slide hideTitle]

# State

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-19-State-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The state of a component is always initialized with a **default** value when the component is mounted.

We use the term "mount" to describe the process of injecting the component into the DOM tree.

After mounting the component, we can modify the state as we wish.

We can also save the state object to a database and retrieve this object later when we need it.

We can only modify the state of a component from inside the component.

[/slide]

[slide hideTitle]

# Component State Example

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-20-Component-State-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The state holds information that can change over time.

Usually, this happens as a result of changes in user input or system events.

First we initialize the state with `this.state = { count: 0 };` in the constructor.

Then we use the `bind()` method on `updateCount()` function otherwise the `this` keyword will be **undefined**.

If you do not want to use the `bind()` method in the constructor simply remove this line of code:

`this.updateCount = this.updateCount.bind(this);`

and replace `updateCount()` function with **arrow function expression** like so:

```js
updateCount = () => {
    this.setState(prevState => ({ count: prevState.count +  1 }));
}
```

Inside the `updateCount()` function we update the **state** using the `setState()` method.

**Remember this is the only way in which we can update the state of a component.**

Use "onClick" handler inside the `render()` method to tell React we are expecting a "click" event.

On each click of the button, we will update the count by adding 1 to it.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
      this.setState(prevState => ({ count: prevState.count +  1 }));
  }
  render() {
      return (
          <button onClick={this.updateCount}>
              Clicked {this.state.count} times
          </button>
      );
  }
}

ReactDOM.render(<Button />, document.querySelector('#root'));
```

[/slide]

[slide hideTitle]

# Working with States

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-21-22-23-Working-With-States-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**State** is used only with **class-based components**.

The **state** is set in the **constructor** as we have seen in the previous example.

If we do not set the state, it will be initialized with a default value.

To access the state, use `console.log(this.state)`.

State must **never** be modified directly, use always the `this.setState()` method instead.

Every time we update the state, the component will be rendered again by invoking the `render()` method.

Calls to the `setState()` method are asynchronous inside event handlers.

With the `setState()` method, we can pass a JavaScript object or a callback function to perform some action.

In the example below, we pass a callback arrow function that takes the previous state as an argument and increments it by 1.

Note that we can pass a **reference** of a function to an event handler but not a **function call**! - `<button onClick={this.updateCount}>`.

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
      this.setState(prevState => ({ count: prevState.count +  1 }));
  }
  render() {
      return (
          <button onClick={this.updateCount}>
              Clicked {this.state.count} times
          </button>
      );
  }
}

ReactDOM.render(<Button />, document.querySelector('#root'));
```

[/slide]

[slide hideTitle]

# Stateless Component

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-24-Stateless-Component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A stateless component is one that has no **state** but only **props**.

It is easy to set and test. 

They only receive **props**.

We do not expect stateless components to make HTTP requests or anything more complex. 

They only render some data, and that is it.

```js
function Show(props) {
    return (
        <p>{props.value}</p>
    )
}
```

[/slide]

[slide hideTitle]

# Stateful Component

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-25-26-27-Stateful-Component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Stateful components have both **props** and **state**.

They can make HTTP requests, pass data to a database, or handle more complex logic.

In this example, we have a class called "Input" that extends from React.Component class.

In the constructor we pass our **props** and we initialize the **state**, which will be an empty string - `this.state = { value: "" };`.

We have a `handleChange()` method that we bind to an event handler "onChange".

If we do not use this line of code in the constructor:

`this.handleChange = this.handleChange.bind(this);`

we will get a "TypeError: this is undefined". 

So we always **bind** the `handleChange()` function to `this`, which is the instance of the class.

If you do not want to use the `bind()` method then simply make the function an arrow function expression, for example - `handleChange = () => {}`.

Inside this function we update the state with `setState()` method.

So, now on every "onChange" event, we will call `this.handleChange`, and the value we type in the input field will be updated in the paragraph underneath it.

```js
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        return (
            <div>
                <input name="firstName" type="text" value={this.state.value}
                    onChange={this.handleChange} />
                <p>Show value = {this.state.value}</p>
            </div>
        );
    }
}
```

[/slide]