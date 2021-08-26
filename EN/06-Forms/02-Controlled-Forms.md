# Controlled Forms

[slide hideTitle]

# Controlled Components

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-5-Controlled-Forms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In **controlled components**, form data is handled by their **internal state**.

**Component-level state** is the **only data source** for the input elements that are rendered by the component.

By default in HTML, form elements maintain their state by themselves, updating it on user input.

In React, however, we handle data inside the component:

- The values of input elements are stored within the state
- We use custom handlers to change or submit events
  - The `setState()` function is called in the event of state change
  - Using a custom function, we handle the form submission


[/slide]

[slide hideTitle]

# Form Component Declaration and Rendering

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-6-7-Form-Component-Declaration-Rendering-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

This example shows the process of declaring and rendering a form component:

```js
import React from 'react';

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({value: event.target.value});
  }

  submitHandler(event) {
    alert('You have typed in ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="What is on your mind" value={this.state.value} onChange={this.changeHandler} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SimpleForm;

```

First, we create a class-based component `SimpleForm`.

In our return statement, we render a simple form with a **textbox** and a `Submit` button.

We must set the initial state of our component in the constructor:

`this.state = {value: ''};`

This `value` variable is what we will use to store the value of our input area:

`<input type="text" value={this.state.value} onChange={this.changeHandler} />`

We set the `value` attribute to be equal to the `value` variable in our state object.

Let us create our handler functions.

We handle changes in the input by using `changeHandler()`:

```js
changeHandler(event) {
    this.setState({value: event.target.value});
  }
```

Our change handler receives the `event` object as a parameter from `onSubmit`.

Using `setState()` we modify our current value, setting it to `event.target.value`, which stores the user-typed text.

The state will be updated on every keystroke.

Handling form submission is done similarly:

```js
submitHandler(event) {
  alert('You have typed in:' + this.state.value);
  event.preventDefault();
}
```

It is very important to invoke the `event.preventDefault()` method.

It **overrides** the default behavior of HTML form submission, like **redirecting**.

Lastly, when using a class component we must `bind` our handlers so that `this` always points to the current component instance: 

```js
constructor(props) {
    super(props);                    

    this.state = {value: ''};

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
```

[/slide]

[slide hideTitle]

# Controlled Component

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-8-9-Controlled-Component-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are some important  key points to remember about controlled components:

- You should always use `setState()` to modify the state
  - Directly modifying the state can result in losing data or the component not displaying changes

`this.state.notification = 'You should never update the state like this.';`

- When the `value` attribute is set on a form element, the displayed value will always equal `this.state.value`

- On every keystroke, `changeHandler` updates the state, and the display value updates accordingly

- Every type of state mutation has an associated handler
  - Like `changeHandler` and `submitHandler`, for example

```js
changeHandler(event) {
  this.setState({age: Number(event.target.value)});
}
```

[/slide]

[slide hideTitle]

# Controlled Forms

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-10-Controlled-Forms-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In controlled forms, inputs are managed **explicitly**.

The whole data flow of the form is managed by the developer:
- Values are stored in the state
- Input and Submissions are handled using separate functions

[image assetsSrc="reactjs-forms(1).png" /]

[/slide]

[slide hideTitle]

# Unified Input Approach

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/07.ReactJS-Forms/React-Forms-11-Unified-Input-Approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

React similarly handles all form inputs.

## The `textarea` Element

A `<textarea>` element defines its text by its children in HTML:

``` js
<textarea>
  This is a simple textarea.
</textarea>
```

Similar to an `<input>` element, in React, a `<textarea>` uses a value attribute which means it can be written identically to a form that uses a single-line input.

``` js
<form onSubmit={this.submitHandler}>
  <textarea value={this.state.value} onChange={this.changeHandler} />
  <input type="submit" value="Submit" />
</form>

```

## The `select` Tag

This is a simple `<select>` menu in HTML:

``` js
<select>
  <option value="paris">Paris</option>
  <option value="london">London</option>
  <option selected value="bucharest">Bucharest</option>
</select>
```

In React, instead of making an initial selection using the `selected` attribute, we put a `value` tag in the root `<select>` element.

This is how the same menu looks in React:

```js
<select value={this.state.value} onChange={this.handleChange}>
  <option value="paris">Paris</option>
  <option value="london">London</option>
  <option value="bucharest">Bucharest</option>
</select>

```

Instead of using `<option>` tags to visualize options in `<select>`, you can also pass an array into the value attribute:

`<select multiple={true} value={['Paris', 'London']}>`

[/slide]
