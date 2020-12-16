# Handling DOM Events

[slide]
# Event Propagation

In the browser we have 3 phases of event propagation:
- Capturing phase – the event goes down to the element.
- Target phase – the event reaches the target element.
- Bubbling phase – the event bubbles up from the element.

[image assetsSrc="Event-Propagation.gif" /]

When clicking on the `<A>` element, the event first goes through the chain down to the element, which is called a **capturing phase**, then it reaches the target and triggers a **target phase**, and then it goes up, which is called a **bubbling phase**, calling handlers on its way up.

To catch an event on the **capturing phase**, we need to set the handler capture option to **true**.

During this phase, only the capturers found on the path from the window to the event target parent are called.

If this parameter is omitted, its default value is **false** and the listener is not a **capturer**.

```js
el.addEventListener('click', listener, true);
```

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is the **bubbling phase**.

In this example the handler is assigned to the `<div>` element, but also runs if you click on any nested tag like `<em>` or `<code>`.

```html
<div onclick="alert('The handler!')">
  <em>Click on <code>ME</code>, or click on the main <code>DIV</code> runs.</em>
</div>
```

A bubbling event goes up to document object, and some events even reach window, calling all handlers on the path.

We can stop the **bubbling** using a method called `event.stopPropagation()`.

In this example `body.onclick` doesn’t work if you click on `<button>`.

```html
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

[/slide]

[slide]

# Event Types In The DOM API

Here are some of the event types used in the DOM.

| **Mouse events** | **Touch events** | **DOM/UI events** | **Keyboard events** | **Focus events** | **Form events** |
| --- | --- | --- | --- | --- | --- |
| click | touchstart | load | keydown | focus (got focus) | input |
| mouseover | touchend | unload | keypress | blur (lost focus) | change |
| mouseout | touchmove | resize | keyup |  | submit |
| mousedown | touchcancel | dragstart / drop |  |  | reset |
| mouseup |  |  |  |  |  |

Let us have a look at the Event Object now.

The **event object** is automatically passed to the **event handler function** to provide extra features and information.

The event handler function could be an anonymous function or a function declaration.

The argument `e` passed to the function is our reference to the event object. 

It has a number of properties like:
- target
- timeStamp
- isTrusted
- clientX/Y

```js
addBtn.addEventListener("click", function(e){
    console.log(e.target);
})
```

**target** property of the event object is a reference to the element event occured upon.

**timeStamp** is a read-only property of the event, which returns the time in milliseconds at which the event was created.

**isTrusted** is a read-only property and it returns either **true** when the event was generated or **false** if the event was created or modified by a script.

**clientX/Y** is a read-only property which returns either the "X" or "Y" coordinates where the event occured.

Also methods like:
- preventDefault()
- stopPropagation()
- stopImmediatePropagation()

The `preventDefault()` method tells the user that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

The `stopPropagation()` method of the event prevents further propagation of the current event in the capturing and bubbling phases.

The `stopImmediatePropagation()` method of the event prevents other listeners of the same event from being called.

[/slide]

[slide]
# Problem: List Of Items
[code-task title="List Of Items" taskId="Js-Advanced-Dom-Manipulations-List-Of-Items" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that **reads** the text inside an input field and **appends** the specified text to a list inside an HTML page.

# Example
[image assetsSrc="List-Of-Items.png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = `
\<h1\>List of Items\</h1\>
    \<main\>
        \<ul id="items"\>
            \<li\>First\</li\>
            \<li\>Second\</li\>
        \</ul\>
        \<input type="text" id="newItemText" /\>
        \<input type="button" value="Add" onclick="addItem()"\>
    \</main\>
`;

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
[test]
[input]
document.body.innerHTML = `
\<h1\>List of Items\</h1\>
    \<main\>
        \<ul id="items"\>
            \<li\>First\</li\>
            \<li\>Second\</li\>
        \</ul\>
        \<input type="text" id="newItemText" /\>
        \<input type="button" value="Add""\>
    \</main\>
`;

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
[/tests]
[/code-task]

[/slide]

