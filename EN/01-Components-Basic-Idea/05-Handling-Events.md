# Handling Events

[slide hideTitle]

# Handling Events

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-29-32-Handling-Events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Handling events with React elements is very similar to handling events in the DOM.

There are some syntax differences though.

React events are named using camelCase, rather than lowercase. 

With JSX we pass a function as an event handler, rather than a string.

**Important: Do not pass a function call but rather a reference to the function.**

In React, we do not need to call the `addEventListener()` method to add listeners to a DOM element.

We simply provide a listener as shown in the example:

```js
<button onClick={this.clickHandler}>
    Click me! I'm a counter
</button>
```

There are two ways in which we can pass arguments to event handlers.

We can use **arrow functions**, or we can do it with the `bind()` method.

As you have probably seen, when we create an event handler method, we always need to add `this` to the constructor, to bind `this`.

There is no need to create a constructor method only for binding our methods. 

There should be another solution, and that is using arrow functions.

We have created a new anonymous function, which automatically binds `this`.

That is why we do not need to use the `.bind()` method.

```js
<button onClick={(e) => this.deleteRow(id, e)}>
    Delete Row
</button>
```

Using the `bind()` method on the other hand is necessary simply because `onClick={ this.deleteRow }` will not work.

We need to bind `this` value from the function to our class as we know each function creates its own environment.

```js
<button onClick={this.deleteRow.bind(this, id)}>
    Delete Row
</button>
```

In this example, we define a function called `clickHandler`.

It sets the value of the variable "currentClicks" to `this.state.clicks`.

Then we update the state with the `setState()` method.

```js
clickHandler = () => {
    const currentClicks = this.state.clicks;
    this.setState({ clicks: currentClicks + 1 })
}
```

We also have our "Button" component, that passes some props to another component.

```js
<Button clickHandler={() => this.clickHandler()} clicks={this.state.clicks} />
```

When we click the button, we will call the "clickHandler" function, update the state and re-render the counter with the new value.

```js
<button className="counter" onClick={props.clickHandler}>
    Click me! I'm a counter [{props.clicks}]
</button>
```

[/slide]

[slide hideTitle]

# SynteticEvent

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-34-Synthetic-Event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser's native event. 

It has the same interface as the browser’s native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers.

```js
function onClick(event) {
    console.log(event);
    console.log(event.type);
    const eventType = event.type;
}
```

[/slide]

[slide hideTitle]

# Event Pooling

[video src="https://videos.softuni.org/hls/Javascript/javascript-ReactJS/EN/02.ReactJS-Components-Basic-Idea/React-Components-Basic-Idea-35-Event-Pooling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The SyntheticEvent objects are pooled. 

This means that the SyntheticEvent object will be reused and all properties will be nullified after the event handler has been called. 

For example, this will not work because we cannot access the event in the **async** way.

```js
function handleChange(e) {
  // This will not work because the event object gets reused.
  setTimeout(() => {
    console.log(e.target.value); // Too late!
  }, 100);
}
```

If we need to access the event object's properties after the event handler has run, we need to call the `e.persist()` method:

```js
function handleChange(e) {
  // Prevents React from resetting its properties:
  e.persist();
  setTimeout(() => {
    console.log(e.target.value); // Works
  }, 100);
}
```

[/slide]