# Handling Events

[slide hideTitle]

# JavaScript Event Handling

JavaScript event handling is used to make our webpage respond to user input.

An event is sent from the browser when a user performs an action.

We can then implement logic to handle the input accordingly and display appropriate content, an alert, or change CSS rules.

```js
<h2 id="headline">The best AI/ML tool on the market. 🤖</h2>​

-----------------------------------------------

let headline = document.getElementById('headline');​

headline.onmouseover = function(event) {​
  event.target.style.border = '3px solid blue';​
}​

headline.onmouseout = function() {​
  this.style.border = ''; // this === event.target​
}​
```

Here we set an event listener for two events:

- When **a mouse pointer is over** the `h2` element, we style it with a blue border
- Once the mouse **is not hovering** over the element, the border is removed

You may have noticed that we use `this` in the second event listener.

This is a valid syntax, as it points to `event.target`.

[/slide]

[slide hideTitle]

# Event Types in DOM API​

There are multiple event types, each related to a different for of input.

## Mouse Events

Mouse events typically occur when our web application is used on laptop or desktop viewports.

- `click` - when the browser detects a mouseclick
- `dblclick` - when a double click occurs
- `mouseover` - when a pointer is over an element
- `mouseout` - when the pointer is out of the element's area
- `mousedown​` - when a mouse/trackpad button is pressed
- `mouseup` ​- when the mouse button is released
  
## Touch Events

Touch events are only triggered on touch-enabled devices, such as smartphones, tablets, or 2-in-1 laptops.

All of them start with "touch" - e.g. touchstart​, touchend​, touchmove​, touchcancel​.
  
## Keyboard Events

Keyboard events are triggered when a given key is pressed/released.

- `keydown` - when a key is pressed
- `keyup` - when a key is released
- `keypress` - when a key is pressed and subsequently released

## Window (DOM/UI) Events

Window events are related to browser-level events, such as page reloads.

They include scroll, resize, hashchange, load, and unload.

## Form Events

Form events, such as focus, blur, change, and submit, are related to user input in `<form>` elements.

## Focus Events

Focus events show whether an element is currently in focus or not.

A focused element typically has a blue outline, unless specified otherwise or hidden.

[/slide]

[slide hideTitle]

# Multiple Events ​

We can use the `.addEventListener()` method to listen for multiple events on the same element.

For example:

```js
<button id="main-cta">Get Started 🔰</button>

--------------------------------------------

let myBtn = document.getElementById('main-cta');

myBtn.addEventListener('click', clickHandler);​
myBtn.addEventListener('click', handleClick);​
myBtn.addEventListener('mouseover', hoverHandler);​
myBtn.addEventListener('focus', handleFocus);​
```

Here we attach four event listeners for different events.

We can have more than one listener for the same event type (e.g. `click`).

[/slide]
