# Handling DOM Events

[slide hideTitle]

# Event Propagation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-11-12-dom-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Event propagation is a way to describe the "stack" of events that are fired in a web browser.

In the browser we have 3 phases of event propagation:

- **Capturing** phase: the event goes down to the element

- **Target** phase: the event reaches the target element

- **Bubbling** phase: the event bubbles up from the element

When clicking on the `<A>` element, the event first goes through the chain down to the element, which is called a **capturing phase**, then it reaches the target and triggers a **target phase**, and then it goes up, which is called a **bubbling phase**, calling handlers on its way up.

To catch an event on the **capturing phase**, we need to set the handler capture option to **true**.

During this phase, only the capturers found on the **path** from the **Window** to the **event target parent** are called.

If this parameter is omitted, its default value is **false**, and the listener is not a **capturer**.


```js
el.addEventListener('click', listener, true);
```

When an event happens on an element, it first runs the handlers on it, then on its parent, and then all the way up on other ancestors. 

This is the **bubbling phase**.

In this example, the handler is assigned to the `<div>` element, but it also runs if we click on any **nested tag**, like  `<em>` or `<code>`.

```js
<div onclick="alert('The handler!')">
  <em>Click on <code>ME</code>, or click on the main <code>DIV</code> runs.</em>
</div>
```

A bubbling event goes up to the "document" object, and some events even reach "window", calling all handlers on the path.

We can stop **bubbling** by using a method, called `event.stopPropagation()`.

In this example, `body.onclick` does not work if we click on `<button>`.

```js
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

[/slide]

[slide hideTitle]

# Event Types In The DOM API

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-13-event-types-in-dom-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here are some of the event types used in the DOM.

| **Mouse events** | **Touch events** | **DOM/UI events** | **Keyboard events** | **Focus events** | **Form events** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| click | touchstart | load | keydown | focus (got focus) | input |
| mouseover | touchend | unload | keypress | blur (lost focus) | change |
| mouseout | touchmove | resize | keyup |  | submit |
| mousedown | touchcancel | dragstart / drop |  |  | reset |
| mouseup |  |  |  |  |  |

[/slide]

[slide hideTitle]

# Event Object Properties and Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-14-15-event-object-properties-and-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us examine the Event Object.

The **event handler function** could be an **anonymous function** or a **function declaration**.

The argument `e`, which is passed to the function, is our **reference to the event object**.

The event object has many **properties** and **methods**. 

## Properties

Some of the properties are:

- **target**

- **timeStamp**

- **isTrusted**

- **ClientX / ClientY**

```js
addBtn.addEventListener('click', function(e){
    console.log(e.target);
})
```

The **target** event property returns the element that triggered the event.

The **timeStamp** event property is read-only. 

It returns the **time in milliseconds** from the beginning of the current document's lifetime until the event was created.

The **isTrusted** event property returns a Boolean value that is indicating whether the event is trusted or not.

The **clientX** property returns the horizontal coordinate (according to the client area) of the mouse pointer when a mouse event was triggered.

The **clientY** property returns the vertical coordinate.

## Methods

Some of the methods are:

- `preventDefault()`

- `stopPropagation()`

- `stopImmediatePropagation()`

The `preventDefault()` method tells the user that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

The `stopPropagation()` method prevents further propagation of the current event in the capturing and the bubbling phases.

The `stopImmediatePropagation()` method prevents other listeners of the same event from being called.

[/slide]

[slide hideTitle]
# Problem with Solution: List Of Items

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-16-17-solution-list-of-items-html-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Of Items" taskId="Js-Advanced-Dom-Manipulations-lab-List-Of-Items" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function addItem(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/JS-Advanced-DOM-Manipulations-Lab-01.List-Of-Items.zip) **for this task.**

Write a function that **reads** a text inside an input field and **appends** the specified text to a list inside an HTML page.

# Example
[image assetsSrc="Dom-Manipulation(3).png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = \`
\<h1\>List of Items\</h1\>
    \<main\>
        \<ul id="items"\>
            \<li\>First\</li\>
            \<li\>Second\</li\>
        \</ul\>
        \<input type="text" id="newItemText" /\>
        \<input type="button" value="Add""\>
    \</main\>
\`;

document.getElementById('newItemText').value = 'new mode';

result();

let liElements = document.getElementsByTagName('li');

assert.equal(liElements.length, 3, 'List items count is invalid');
assert.equal(liElements\[2\].textContent, 'new mode', 'The new list item contains something different');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<h1\>List of Items\</h1\>
    \<main\>
        \<ul id="items"\>
            \<li\>First\</li\>
            \<li\>Second\</li\>
        \</ul\>
        \<input type="text" id="newItemText" /\>
        \<input type="button" value="Add" onclick="addItem()"\>
    \</main\>
\`;

\\$('\#newItemText').val('new mode');
result();

\\$('\#newItemText').val('Fourth Grade');
result();

let liElements = document.getElementsByTagName('li');

assert.equal(liElements.length, 4, 'List items count is invalid');
assert.equal(liElements\[2\].textContent, 'new mode', 'The new list item contains something different');
assert.equal(liElements\[3\].textContent, 'Fourth Grade', 'The new list item contains something different');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
