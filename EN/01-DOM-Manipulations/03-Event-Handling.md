# Event Handling

[slide]

# Event Handler

Event registration is done by providing a callback function.

There are 3 ways to register an event:
- with HTML Attributes.
- using DOM Element properties.
- using DOM event handler.

[/slide]

[slide]

# Event Listener

To be able to use our event handler function we need the `.addEventListener()` method.

It accepts 3 parameters. 

First one is the type, which is a case sensitive string representing the event type to listen for.

Second one is our handler function.

And the third parameter is optional. Default value is **false**.

```js
addBtn.addEventListener("click", handler, false);
```

Another method is the `.removeEventListener()` method.

It removes previously registered event listener from the target.

```js
addBtn.removeEventListener("click", handler);
```
[/slide]

[slide]

# Attaching Click Event

Here is an example using the "click" type and the "clickMe" function as an event handler.

On each click of the button the number will increment with one.

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

[slide]

# Attaching hover event

Example using the "mouseover" type and a function declaration.

The code will run if we mouse over the button.

The result will be a change of the background color of the button and a change of the color of the text content of the button.

```js
const button = document.getElementsByTagName('div')[0];
button.addEventListener('mouseover', function (e) {
    const style = e.currentTarget;
    const { backgroundColor } = style;
    if(backgroundColor === 'white'){
        targetStyles.backgroundColor = '#234465';
        targetStyles.color = 'white';
    } else {
        targetStyles.backgroundColor = 'white';
        targetStyles.color = '#234465';
    }}
);
```

[/slide]

[slide]

# Attaching Input Events

In this example we are using the "input" type to demonstrate how we can enable a button when we type something in the input field.

The button is **desabled** by default in the HTML. As soon as we type anyting in the input field the button will be **enabled** because of the following line of code in the handler function `button.setAttribute('disabled', 'false');`.

```js
const inputField = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
inputField.addEventListener('input', function () {
    button.setAttribute('disabled', 'false');
});
```

[/slide]

[slide]

# Remove Events

Here is a more in-depth implementation of the `.addEventListener()` method and the`.removeEventListener()` method.

The first event listener `('focus', focusEvent)`will add **focus** to the password input field if you click inside the field.

The second event listener `'blur', (event)` will remove **focus** if you click another input field.

Finally the third event listener attached to the button will remove the first event listener when the button is clicked and we lose the **focus** effect at that point.

```js
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
password.addEventListener('focus', focusEvent);
function focusEvent (event){
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

[slide]

# Multiple Events

We can add multiple events to the same element without overwriting existing events.

```js
element.addEventListener("click", function);
element.addEventListener("click", myFunction);
element.addEventListener("mouseover", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

[/slide]

[slide]

# SetInterval() And ClearInterval()

In JavaScript we can **start** or **stop** timers.

Use the `.setInterval()` method to execute a piece of code with a fixed time delay.

The time delay is specified in milliseconds. In the example below it is 1000 milliseconds or 1 second.

```js
let intervalID = setInterval(
    function() {
        console.log("1 sec. passed");
    }, 1000
);
```

Use the `.clearInterval()` method to cancel an existing timer.

```js
clearInterval(intervalID);
```

[/slide]

[slide]
# Problem: Add Delete
[code-task title="Add Delete" taskId="Js-Advanced-Dom-Manipulations-Add-Delete" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Extend the previous problem to display a `[Delete]` link after each list item. Clicking ot it, should delete the item with no confirmation.

# Example
[image assetsSrc="Dom-Manipulation(4).png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document\.body\.innerHTML \= \`
\<h1\>List of Items\</h1\>
\<ul id\=\"items\"\>
\</ul\>
\<input type\=\"text\" id\=\"newText\" /\>
\<input type\=\"button\" value\=\"Add\"  onclick\=\"addItem\(\)\"\>
\`\;

document\.getElementById\(\'newText\'\)\.value \= \'First\'\;
result\(\)\;

document\.getElementById\(\'newText\'\)\.value \= \'Second\'\;
result\(\)\;

let items \= \\$(\'\#items li\'\)\;

\/\/ Verify items where added with delete links
expect\(items\.get\(0\)\.innerHTML\)\.to\.contains(\'First\'\, \"Element wasn\'t added\.\"\)\;
expect\(items\.get\(0\)\.innerHTML\)\.to\.contains\(\'\<a href\=\"\#\"\>\[Delete\]\</a\>\'\, \"Delete link wasn\'t added\.\"\)\;
expect\(items\.get\(1\)\.innerHTML\)\.to\.contains\(\'Second\'\, \"Element wasn\'t added\.\"\)\;
expect\(items\.get\(1\)\.innerHTML\)\.to\.contains\(\'\<a href\=\"\#\"\>\[Delete\]\</a\>\'\, \"Delete link wasn\'t added\.\"\)\;

\/\/ Setup event
var clickEvent \= document\.createEvent\(\'MouseEvents\'\)\;
clickEvent\.initEvent\(\'click\'\, true\, true\)\;
items\.eq\(1\)\.find\(\'a\'\)\.get\(0\)\.dispatchEvent\(clickEvent\)\;

expect\(\\$\(\'\#items li\'\)\.length\)\.to\.equal\(1\, \"Correct element wasn\'t deleted\.\"\)\;
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide]

# Event Delegation

Capturing and bubbling allow us to implement an event handling pattern called **event delegation**.

If we have a lot of elements handled in one and the same way, then instead of assigning a handler to each of them, we can put a single handler on their common ancestor.

In the handler we use `event.target` to see where the event actually happened and handle it.

In the example we add an event listener to our parent, which is the `<ul>` element.

Then in the if statement we add a condition, so that if we click on a `<li>` element the `console.log()` method will display a message telling us exactly on which element we clicked.

```html
<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
</ul>
```

```js
document.getElementById("parent-list")
    .addEventListener("click", function(event) {
        if(event.target && event.target.nodeName == "LI") {
            console.log(
                "List item ", event.target.id, 
                " was clicked!");
            }
});
```

**Pros and Cons**

Benefits
- Simplifies initialization
- Saves memory
- Less code

Limitations
- Event must be bubbling
- May add CPU load

[/slide]

[slide]
# Solution: Add Delete
[code-task title="Add Delete" taskId="Js-Advanced-Dom-Manipulations-Add-Delete-Solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function solve(){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Extend the previous problem to display a `[Delete]` link after each list item. Clicking ot it, should delete the item with no confirmation.

# Example
[image assetsSrc="Dom-Manipulation(4).png" /]

[/task-description]
[code-io /]
[tests]
[test]
[input]
document\.body\.innerHTML \= \`
\<h1\>List of Items\</h1\>
\<ul id\=\"items\"\>
\</ul\>
\<input type\=\"text\" id\=\"newText\" /\>
\<input type\=\"button\" value\=\"Add\"  onclick\=\"addItem\(\)\"\>
\`\;

document\.getElementById\(\'newText\'\)\.value \= \'First\'\;
result\(\)\;

document\.getElementById\(\'newText\'\)\.value \= \'Second\'\;
result\(\)\;

let items \= \\$(\'\#items li\'\)\;

\/\/ Verify items where added with delete links
expect\(items\.get\(0\)\.innerHTML\)\.to\.contains(\'First\'\, \"Element wasn\'t added\.\"\)\;
expect\(items\.get\(0\)\.innerHTML\)\.to\.contains\(\'\<a href\=\"\#\"\>\[Delete\]\</a\>\'\, \"Delete link wasn\'t added\.\"\)\;
expect\(items\.get\(1\)\.innerHTML\)\.to\.contains\(\'Second\'\, \"Element wasn\'t added\.\"\)\;
expect\(items\.get\(1\)\.innerHTML\)\.to\.contains\(\'\<a href\=\"\#\"\>\[Delete\]\</a\>\'\, \"Delete link wasn\'t added\.\"\)\;

\/\/ Setup event
var clickEvent \= document\.createEvent\(\'MouseEvents\'\)\;
clickEvent\.initEvent\(\'click\'\, true\, true\)\;
items\.eq\(1\)\.find\(\'a\'\)\.get\(0\)\.dispatchEvent\(clickEvent\)\;

expect\(\\$\(\'\#items li\'\)\.length\)\.to\.equal\(1\, \"Correct element wasn\'t deleted\.\"\)\;
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide]

# Event Delegation

Capturing and bubbling allow us to implement an event handling pattern called **event delegation**.

If we have a lot of elements handled in one and the same way, then instead of assigning a handler to each of them, we can put a single handler on their common ancestor.

In the handler we use `event.target` to see where the event actually happened and handle it.

In the example we add an event listener to our parent, which is the `<ul>` element.

Then in the if statement we add a condition, so that if we click on a `<li>` element the `console.log()` method will display a message telling us exactly on which element we clicked.

```html
<ul id="parent-list">
    <li id="post-1">Item 1</li>
    <li id="post-2">Item 2</li>
</ul>
```

```js
document.getElementById("parent-list")
    .addEventListener("click", function(event) {
        if(event.target && event.target.nodeName == "LI") {
            console.log(
                "List item ", event.target.id, 
                " was clicked!");
            }
});
```

**Pros and Cons**

Benefits
- Simplifies initialization
- Saves memory
- Less code

Limitations
- Event must be bubbling
- May add CPU load

[/slide]