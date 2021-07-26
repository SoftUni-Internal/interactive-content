# Event Handling

[slide hideTitle]

# Event Handler

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-19-20-event-handler-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Event registration is done by providing a callback function.

There are 3 ways to register an event:

- Using HTML Attributes

- Using a DOM event handler

- Using DOM event handler

[/slide]

[slide hideTitle]

# Event Listener

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-21-event-listener-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To be able to use our **event handler function**, we need the `.addEventListener()` method.

The first parameter is the **type**, which is a case sensitive string representing the event type to listen for.

The second one is our **handler** function. 

It specifies the function to run when the event occurs.

The third parameter is optional. 

It is a Boolean value that specifies whether the event should be executed in the capturing or in the bubbling phase. 

Its default value is false.

Another useful method that we should know is the `.removeEventListener()` method.

It removes an event handler that has been previously attached with the `addEventListener()` method.


```js
addBtn.addEventListener('click', handler, false);
```

Another method is the `.removeEventListener()` method.

It removes previously registered event listener from the target.

```js
addBtn.removeEventListener('click', handler);
```
[/slide]

[slide hideTitle]

# Attaching Click Event

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-22-attaching-click-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is an example using the "**click**" type and the "**clickMe**" function as an event handler.

On each click of the button, the "**number**" will be incremented by one.

```js
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', clickMe);

function clickMe(e) {
    const target = e.currentTarget;
    const targetText = target.textContent;
    target.textContent = Number(targetText) + 1;
}
```

[/slide]

[slide hideTitle]

# Attaching Hover and Input Events

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-23-24-attaching-hover-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Attaching Hover Events

Here is an example of using the "**mouseOver**" type and a function declaration.

The code will run if we **mouse hover** the button. 

The result will be a change of the background color of the button, and a change of the color of the text content of the button:

```js
const button = document.getElementsByTagName('div')[0];
button.addEventListener('mouseover', function(e) {
    const style = e.currentTarget;
    const {
        backgroundColor
    } = style;
    if (backgroundColor === 'white') {
        targetStyles.backgroundColor = '#234465';
        targetStyles.color = 'white';
    } else {
        targetStyles.backgroundColor = 'white';
        targetStyles.color = '#234465';
    }
});
```
## Attaching Input Events

In this example, we use the "**input**" type to demonstrate how we can enable a button when we type something in the input field.

By default, the button is **disabled** in the HTML. 

As soon as we type anything in the input field, the button will be **enabled** because of the following line of code in the handler function: `button.setAttribute('disabled', 'false');`.

```js
const inputField = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
inputField.addEventListener('input', function() {
    button.setAttribute('disabled', 'false');
});
```

[/slide]

[slide hideTitle]

# Remove Events

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-25-remove-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Here is a more in-depth implementation of the `.addEventListener()` and the `.removeEventListener()` methods.

The first event listener (`focus`, `focusEvent`) will add focus to the password input field if we click on this field.

The second event listener `blur`, (event) will remove **focus** if we click on another input field.

Finally, the third event listener attached to the button will remove the first event listener when the button is clicked. 

At this point, we lose the **focus** effect.


```js
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
password.addEventListener('focus', focusEvent);

function focusEvent(event) {
    event.target.style.background = '#234465';
}
password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});
button.addEventListener('click', () => {
    password.removeEventListener('focus', focusEvent);
});
```

[/slide]

[slide hideTitle]

# Multiple Events

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-26-multiple-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can add multiple events to the same element, without overwriting existing events.

```js
element.addEventListener('click', function);
element.addEventListener('click', myFunction);
element.addEventListener('mouseover', mySecondFunction);
element.addEventListener('mouseout', myThirdFunction);
```

[/slide]

[slide hideTitle]

# SetInterval() and ClearInterval()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-27-setinterval-clearinterval-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In JavaScript, we can **start** or **stop** timers.

The `setInterval()` method calls a function or evaluates an expression at specified intervals (in milliseconds).

The `setInterval()` method will continue calling the function until `clearInterval()` is called, or the window is closed.

In the example below, the interval is 1000 milliseconds, or 1 second.

The `clearInterval()` method clears a timer set with the `setInterval()` method.


```js
let intervalID = setInterval(
    function() {
        console.log('1 sec. passed');
    }, 1000
);
```

Use the `.clearInterval()` method to cancel an existing timer.

```js
clearInterval(intervalID);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Add Delete

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-28-29-solution-two-add-delete-items-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Add Delete" taskId="Js-Advanced-Dom-Manipulations-Add-Delete" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]
```
function addItem(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/JS-Advanced-DOM-Manipulations-Lab-02.Add-Delete.zip) **for this task.**

Extend the previous problem to display a `[Delete]` link after each list item. 

Clicking on it should delete the item with no confirmation.

# Example
[image assetsSrc="Dom-Manipulation(4).gif" /]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = \`
\<h1\>List of Items\</h1\>
\<ul id="items"\>
\</ul\>
\<input type="text" id="newText" /\>
\<input type="button" value="Add"  onclick="addItem()"\>
\`;

document.getElementById('newText').value = 'First';
result();

document.getElementById('newText').value = 'Second';
result();

let items = \$('\#items li');

// Verify items where added with delete links
expect(items.get(0).innerHTML).to.contains('First', "Element wasn't added.");
expect(items.get(0).innerHTML).to.contains('\<a href="\#"\>\[Delete\]\</a\>', "Delete link wasn't added.");
expect(items.get(1).innerHTML).to.contains('Second', "Element wasn't added.");
expect(items.get(1).innerHTML).to.contains('\<a href="\#"\>\[Delete\]\</a\>', "Delete link wasn't added.");

// Setup event
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('click', true, true);
items.eq(1).find('a').get(0).dispatchEvent(clickEvent);

expect(\$('\#items li').length).to.equal(1, "Correct element wasn't deleted.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<h1\>List of Items\</h1\>
\<ul id="items"\>
\</ul\>
\<input type="text" id="newText" /\>
\<input type="button" value="Add"  onclick="addItem()"\>
\`;

document.getElementById('newText').value = 'First';
result();

document.getElementById('newText').value = 'Second';
result();

let items = \$('\#items li');

// Verify items where added with delete links
expect(items.get(0).innerHTML).to.contains('First', "Element wasn't added.");
expect(items.get(0).innerHTML).to.contains('\<a href="\#"\>\[Delete\]\</a\>', "Delete link wasn't added.");
expect(items.get(1).innerHTML).to.contains('Second', "Element wasn't added.");
expect(items.get(1).innerHTML).to.contains('\<a href="\#"\>\[Delete\]\</a\>', "Delete link wasn't added.");

// Setup event
var clickEvent = document.createEvent('MouseEvents');
clickEvent.initEvent('click', true, true);
items.eq(1).find('a').get(0).dispatchEvent(clickEvent);

expect(\$('\#items li').length).to.equal(1, "Correct element wasn't deleted.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Event Delegation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/EN/JS-Advanced-DOM-Manipulations-32-33-34-event-delegation-pros-and-cons-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Capturing and bubbling allow us to implement an event handling pattern called **event delegation**.

If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them, we put a single handler on their common ancestor.

In the handler, we use `event.target` to see where the event actually happened, and we handle it.

In the example, we add an event listener to our parent, which is the `<ul>` element.

Then, in the 'if' statement, we add a condition, so that if we click on a `<li>` element, the `console.log()` method will display a message telling us exactly on which element we clicked.


```
<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
</ul>
```

```js
document.getElementById('parent-list')
    .addEventListener('click', function(event) {
        if (event.target && event.target.nodeName == 'LI') {
            console.log(
                'List item', event.target.id,
                ' was clicked!');
        }
    });
```

## Pros and Cons

**Advantages:**

- Code quality

- Saving memory

- Better performance

- Less DOM manipulations

**Disadvantages:**

- Not all events bubble up

- The child stops propagation

- May cause high CPU load


[/slide]

