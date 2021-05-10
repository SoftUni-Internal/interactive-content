# Homework

[slide hideTitle]

# Problem: Subtraction

[code-task title="Subtraction" taskId="js-advanced-DOM-Subtraction" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function subtraction(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Subtraction.zip) **for this task.**

An HTML page holds **two text fields** with **id**s "**firstNumber**" and "**secondNumber**". 

Write a function to **subtract** the values from these text fields and display the result in the `<div>` named "**result**".

## HTML and JavaScript Code

Implement the description above to provide the following functionality:

- Your function should take the values of "**firstNumber**" and "**secondNumber**", **convert** them to numbers, **subtract** the second number from the first one and then append the result to the `<div>` with `id="result"`

- Your function should be able to work with **any 2 numbers** in the inputs, not only the ones given in the example

## Example

[image assetsSrc="JS-Advanced-DOM-Homework-1.png" /]

[hints]
[hint]
We see that the **textboxes** and the `div`s have `id` attributes on them:

```js
<div id="wrapper">
   <input type="text" id="firstNumber" 
        value="13.33" disabled>
   <input type="text" id="secondNumber" 
        value="22.18" disabled>
   <div id="result"></div>
</div>
```

We can take the numbers directly from the input field by using the `getElementById()` function.
[/hint] 
[hint]
After we have taken the **elements** from the **DOM**, it is time to do the actual work.

We get the values of the two **textboxes**

```js
let firstNumber = document
  .getElementById('firstNumber').value;

let secondNumber = document
  .getElementById('secondNumber').value;
```

The value of a textbox, as one would expect, is **text**. 

In order to get a **number**, we need to use a function to **parse them**.
[/hint] 
[hint]
All that is left now is to append the result to the `div`.

We use the same function to get the **result** element by `id` and change its **text content** to the result of the **subtraction**.

```js
function subtract() {
  let firstNumber = Number(document
    .getElementById('firstNumber').value);
  let secondNumber = Number(document
    .getElementById('secondNumber').value);

  document.getElementById('result')
    .textcontent = firstNumber - secondNumber;
}
```
[/hint] 
[/hints] 


## Submission

Submit only the `subtract()` function.


[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = '\<div id="wrapper"\>\<input type="text" id="firstNumber" value="13.33" disabled\>\<input type="text" id="secondNumber" value="22.18" disabled\>\<div id="result"\>\</div\>\</div\>';

result();

var \\$div = \\$('\#result');

expect(\\$div\[0\].textContent).to.equal("-8.85");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = '\<div id="wrapper"\>\<input type="text" id="firstNumber" value="0" disabled\>\<input type="text" id="secondNumber" value="0" disabled\>\<div id="result"\>\</div\>\</div\>';

result();

var \\$div = \\$('\#result');

expect(\\$div\[0\].textContent).to.equal("0");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = '\<div id="wrapper"\>\<input type="text" id="firstNumber" value="15" disabled\>\<input type="text" id="secondNumber" value="2" disabled\>\<div id="result"\>\</div\>\</div\>';

result();

var \\$div = \\$('\#result');

expect(\\$div\[0\].textContent).to.equal("13");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = '\<div id="wrapper"\>\<input type="text" id="firstNumber" value="0" disabled\>\<input type="text" id="secondNumber" value="-13.40" disabled\>\<div id="result"\>\</div\>\</div\>';

result();

var \\$div = \\$('\#result');

expect(\\$div\[0\].textContent).to.equal("13.4");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Fill Dropdown

[code-task title="Fill Dropdown" taskId="js-advanced-DOM-Fill-Dropdown"  executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function fillDropdown(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/02-Fill-Dropdown.zip) **for this task.**

Your task is to take values from **input** fields with **id**s "**newItemText**" and "**newItemValue**".

Then you should **create** and **append** an `<option>` to the `<select>` with an **id** of "**menu**".

## Example

[image assetsSrc="JS-Advanced-DOM-Homework-5.gif" /]

[hints]
[hint]
Your **function** should take the **values** of `newItemText` and `newItemValue`.
[hint]
After that, you should **create** a new `option` element and set its `textContent` and its **value** to the newly retrieved ones.
[/hint] 
[hint]
Once you have done all of that, you should **append** the newly created `<option>` as a **child** to the `<select>` item with id "**menu**".
[/hint] 
[hint]
Finally, you should **clear** the value of the two `input` fields.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = \`
    \<h1\>Dropdown Menu\</h1\>
    \<article\>
        \<div\>
            \<select id="menu"\>\</select\>
        \</div\>
        \<label for="newItemText"\>
            Text:
        \</label\>
        \<input type="text" id="newItemText" /\>
        \<label for="newItemValue"\>
            Value:
        \</label\>
        \<input type="text" id="newItemValue" /\>
        \<input type="button" value="Add" onclick="addItem()"\>
    \</article\>
\`;

\$('\#newItemText').val('new node');
\$('\#newItemValue').val('val1');

result();

let item = \$('\#menu').find('option');
expect(item.text()).to.contains('new node', "Item text wasn't added");
expect(item.val()).to.contains('val1', "Item value wasn't added");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
    \<h1\>Dropdown Menu\</h1\>
    \<article\>
        \<div\>
            \<select id="menu"\>\</select\>
        \</div\>
        \<label for="newItemText"\>
            Text:
        \</label\>
        \<input type="text" id="newItemText" /\>
        \<label for="newItemValue"\>
            Value:
        \</label\>
        \<input type="text" id="newItemValue" /\>
        \<input type="button" value="Add" onclick="addItem()"\>
    \</article\>
\`;

\$('\#newItemText').val('Some Text');
\$('\#newItemValue').val('myValue');

result();

let item = \$('\#menu').find('option');
expect(item.text()).to.contains('Some Text', "Item text wasn't added");
expect(item.val()).to.contains('myValue', "Item value wasn't added");
expect(\$('\#newItemText').val()).to.equal('', "Text input was not cleared");
expect(\$('\#newItemValue').val()).to.equal('', "Value input was not cleared");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
    \<h1\>Dropdown Menu\</h1\>
    \<article\>
        \<div\>
            \<select id="menu"\>\</select\>
        \</div\>
        \<label for="newItemText"\>
            Text:
        \</label\>
        \<input type="text" id="newItemText" /\>
        \<label for="newItemValue"\>
            Value:
        \</label\>
        \<input type="text" id="newItemValue" /\>
        \<input type="button" value="Add" onclick="addItem()"\>
    \</article\>
\`;

\$('\#newItemText').val('Option 1');
\$('\#newItemValue').val('value1');
result();
\$('\#newItemText').val('Option 2');
\$('\#newItemValue').val('value2');
result();

let item = \$('\#menu').find('option');
expect(item\[0\].textContent).to.contains('Option 1', "Item wasn't added");
expect(item\[0\].value).to.contains('value1', "Item wasn't added");
expect(item\[1\].textContent).to.contains('Option 2', "Item wasn't added");
expect(item\[1\].value).to.contains('value2', "Item wasn't added");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Accordion

[code-task title="Accordion" taskId="js-advanced-DOM-Accordion" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function accordion(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/03-Accordion.zip) **for this task.**

You will receive an **HTML** file.

Your task is to show **more/less** information by clicking on an `[ADD]` button (it is not an actual button, but a **span** that has an `onclick` event attached to it).

When the `[More]` button is clicked, it **reveals** the content of a **hidden** `div`, and the text of the button is **changed** to `[Less]`.

When the same link is clicked **again** (now reading **Less**), **hide** the `div` and **change** the text of the link to **More**.

The link action should be **toggleable** (you should be able to **click** the button an **infinite** amount of times).

## Example

[image assetsSrc="JS-Advanced-DOM-Homework-6.gif" /]

## Hints

- To **change** the text content of a button, you could use **getElementsByClassName**

However, that returns a **collection** and we need only **one** element from it, so the correct way is to use `getElementsByClassName("button")[0]` as it will return the needed `span` element.

- After that, we should change the **display style** of the `div` with an id of "**extra**"

If the display style is "**none**", we should **change** it to "**block**" and the **opposite**

- Along with all of this, we should **change** the text content of the **button** to `[Less]`/`[More]`

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = `
<div id="accordion">
        <div class="head">DOM Manipulations Exercise <span class="button">More</span></div>
        <div id="extra" style="display: none">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.</p>
        </div>
    </div>
`;

result(); // Show

let extra = document.getElementById("extra");
let button = document.getElementsByClassName("button")[0];

button.click();

expect(extra.style.display).to.equal('block', "Text was not made visible.");
expect(button.textContent).to.contains('Less', "Button text wasn't changed.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="accordion"\>
        \<div class="head"\>DOM Manipulations Exercise \<span class="button"\>More\</span\>\</div\>
        \<div id="extra" style="display: none"\>
            \<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.\</p\>
        \</div\>
    \</div\>
\`;

let extra = document.getElementById("extra");
let button = document.getElementsByClassName("button")\[0\];

result(); // Show
expect(extra.style.display).to.equal('block', "Text was not made visible.");
expect(button.textContent).to.contains('Less', "Button text wasn't changed.");

result(); // Hide
expect(extra.style.display).to.equal('none', "Text was not hidden.");
expect(button.textContent).to.contains('More', "Button text wasn't changed.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = \`
\<div id="accordion"\>
        \<div class="head"\>DOM Manipulations Exercise \<span class="button"\>More\</span\>\</div\>
        \<div id="extra" style="display: none"\>
            \<p\>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit
                anim id est laborum.\</p\>
        \</div\>
    \</div\>
\`;

let extra = document.getElementById("extra");
let button = document.getElementsByClassName("button")\[0\];

result(); // Show
expect(extra.style.display).to.equal('block', "Text was not made visible.");
expect(button.textContent).to.contains('Less', "Button text wasn't changed.");

result(); // Hide
expect(extra.style.display).to.equal('none', "Text was not hidden.");
expect(button.textContent).to.contains('More', "Button text wasn't changed.");

result(); // Show
expect(extra.style.display).to.equal('block', "Text was not made visible.");
expect(button.textContent).to.contains('Less', "Button text wasn't changed.");

result(); // Hide
expect(extra.style.display).to.equal('none', "Text was not hidden.");
expect(button.textContent).to.contains('More', "Button text wasn't changed.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Order the Names

[code-task title="Order the names" taskId="js-advanced-DOM-Order-The-Names" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function orderTheNames(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/04-Order-the-Names.zip) **for this task.**

Write a **function that orders names alphabetically.**

[image assetsSrc="JS-Advanced-DOM-Homework-7.jpg" /]

You will receive a **name of a student as an input.**

When the **"Register"** button is **clicked**, you should add the given student name in the SoftUni Database, while **keeping** the **alphabetical order.**

For instance, if we register **David**, his name should appear in the **D** column.

[image assetsSrc="JS-Advanced-DOM-Homework-8.jpg" /]

[image assetsSrc="JS-Advanced-DOM-Homework-9.jpg" /]

If you **receive more than one name with the same starting letter**, you should **join all names** by acomma and a space **(", ")**.

[image assetsSrc="JS-Advanced-DOM-Homework-10.jpg" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("Pepe");

\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[15\].textContent;
expect(test).to.equal("Peterson, Pepe");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("Nickson");

\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[13\].textContent;
expect(test).to.equal("Nixon, Nickson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("AARON");

\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[0\].textContent;
expect(test).to.equal("Aaron");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("AARON");
\\$("button").trigger("click");

\\$("\#exercise input").val("angus");
\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[0\].textContent;
expect(test).to.equal("Aaron, Angus");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("Ziliph");
\\$("button").trigger("click");

\\$("\#exercise input").val("Yamamoto");
\\$("button").trigger("click");

\\$("\#exercise input").val("YANA");
\\$("button").trigger("click");

\\$("\#exercise input").val("Zoro");
\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[25\].textContent;
expect(test).to.equal("Ziliph, Zoro");

let test2 = \\$("ol")\[0\].children\[24\].textContent;
expect(test2).to.equal("Yamamoto, Yana");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div id="container"\>

        \<main id="main"\>
            \<div id="exercise"\>
                \<article\>
                    \<input type="text" /\>
                    \<button type="button"\>ADD\</button\>
                \</article\>

                \<div\>
                    \<h1\>SoftUni Database\</h1\>
                    \<ol type="A"\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>Nixon\</li\>
                        \<li\>\</li\>
                        \<li\>Peterson\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                        \<li\>\</li\>
                    \</ol\>
                \</div\>
            \</div\>
        \</main\>

    \</div\>
`;

result();

\\$("\#exercise input").val("FRANK");
\\$("button").trigger("click");

\\$("\#exercise input").val("Furious");
\\$("button").trigger("click");

\\$("\#exercise input").val("fury");
\\$("button").trigger("click");

\\$("\#exercise input").val("Farmerson");
\\$("button").trigger("click");

let test = \\$("ol")\[0\].children\[5\].textContent;
expect(test).to.equal("Frank, Furious, Fury, Farmerson");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Chat Room

[code-task title="Chat Room" taskId="js-advanced-DOM-Chat-Room" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function chatRoom(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/05-Chat-Room.zip) **for this task.**

Write a **function** to create the functionality of **a chat room.**

[image assetsSrc="JS-Advanced-DOM-Homework-11.jpg" /]

**Note:** Do not forget to **add an event listener** to the **send button!**

The **new** `div` element with class **"message my-message"** should contain the **current message** that is about to be send.

The **current** `div` should be appended to the `div` with an `id="chat_messages"`.

**The input should be cleared on each click of the send button.**

[image assetsSrc="JS-Advanced-DOM-Homework-12.jpg" /]

[image assetsSrc="JS-Advanced-DOM-Homework-13.jpg" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

document.getElementById('chat_input').value = "Are you there?";
document.getElementById('send').click();

let messages = document.getElementById('chat_messages').children;

assert.equal(messages.length, 5, 'The messages count is invalid');
assert.equal(messages\[4\].textContent, 'Are you there?', 'The expected message is different.');
assert.equal(messages\[4\].tagName, 'DIV', 'The expected message element should be DIV');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Children length, textContent, tagName
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

document.getElementById('chat_input').value = "Helloooooooooooooooo, its me... :D";
document.getElementById('send').click();

let messages = document.getElementById('chat_messages').children;

assert.equal(messages.length, 5, 'The messages count is invalid');
assert.equal(messages\[4\].textContent, 'Helloooooooooooooooo, its me... :D', 'The expected message is different.');
assert.equal(messages\[4\].tagName, 'DIV', 'The expected message element should be DIV');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Class name check
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

document.getElementById('chat_input').value = "Helloooooooooooooooo, its me... :D";
document.getElementById('send').click();

let messages = document.getElementById('chat_messages').children;

assert.equal(messages\[4\].className, 'message my-message', 'The expected className is different.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Clearing input field
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

let input = document.getElementById('chat_input');
input.value = "Just TESTING";
document.getElementById('send').click();

assert.equal(input.value, '', 'The input field, should be cleared!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Multiple messages
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

let input = document.getElementById('chat_input');
let button = document.getElementById('send');

input.value = "Are you there?";
button.click();

input.value = "Hello???";
button.click();

input.value = "Cmon man, don't waste my time... :@";
button.click();

let messages = document.getElementById('chat_messages').children;

assert.equal(messages.length, 7, 'The messages count is invalid');
assert.equal(messages\[4\].textContent, 'Are you there?', 'The expected message is different.');
assert.equal(messages\[5\].textContent, 'Hello???', 'The expected message is different.');
assert.equal(messages\[6\].textContent, "Cmon man, don't waste my time... :@", 'The expected message is different.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Children length, textContent, tagName
document.body.innerHTML = `
\<div class="flexbox"\>
        \<div class="chat-box"\>
            \<div class="chat-box-header"\>
                \<h3\>Chat Room\<br /\>\<small\>Last active: 2 min ago\</small\>\</h3\>
            \</div\>
            \<div id="chat_box_body" class="chat-box-body"\>
                \<div id="chat_messages"\>
                    \<div class="profile other-profile"\>
                        \<img src="https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed"
                            width="30" height="30" /\>
                        \<span\>Other profile\</span\>
                    \</div\>
                    \<div class="message other-message"\>
                        Sorry, I am busy right now, Can I write you back later?
                    \</div\>
                    \<div class="profile my-profile"\>
                        \<span\>My profile\</span\>
                        \<img src="https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619"
                            width="30" height="30" /\>
                    \</div\>

                    \<div class="message my-message"\>
                        Hi!
                    \</div\>
                \</div\>
            \</div\>
            \<div id="typing"\>
                \<div\>\<span\>\</span\> \<span\>\</span\> \<span\>\</span\> \<span class="n"\>Someone\</span\> is typing...\</div\>
            \</div\>
            \<div class="chat-box-footer"\>
                \<textarea id="chat_input" placeholder="Enter your message here..."\>\</textarea\>
                \<button id="send"\>
                    \<svg style="width:24px;height:24px" viewBox="0 0 24 24"\>
                        \<path fill="\#006ae3" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /\>
                    \</svg\>
                \</button\>
            \</div\>
        \</div\>
    \</div\>
`;

result();

document.getElementById('chat_input').value = "Hello";
document.getElementById('send').click();

document.getElementById('chat_input').value = "It's me again";
document.getElementById('send').click();

let messages = document.getElementById('chat_messages').children;

assert.equal(messages.length, 6, 'The messages count is invalid');
assert.equal(messages\[4\].textContent, 'Hello', 'The expected message is different.');
assert.equal(messages\[4\].tagName, 'DIV', 'The expected message element should be DIV');

assert.equal(messages\[5\].textContent, "It's me again", 'The expected message is different.');
assert.equal(messages\[5\].tagName, 'DIV', 'The expected message element should be DIV');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Numpad Calculator

[code-task title="Numpad Calculator" taskId="js-advanced-DOM-Numpad-Calculator" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function numpadCalculator(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/06-Numpad-Calculator.zip) **for this task.**

Write a **function** that implements a **calculator** with the following functionalities.

[image assetsSrc="JS-Advanced-DOM-Homework-14.png" /]

When one of **the buttons is clicked**, its value should be shown in the "**Expression**" field (`#expressionOutput`).

For instance, if we click on the button with value **9**, the expected **result** should be:

[image assetsSrc="JS-Advanced-DOM-Homework-15.png" /]

If the **current Expression** field (`#expresisonOutput`) contains the whole mathematical expression (**left operand**, **operator** and **right operand**: "**9 + 2**", for example), the expected **result** should be:

[image assetsSrc="JS-Advanced-DOM-Homework-16.png" /]

When the **equal sign** `=` **is pressed**, the **result of that expression** should appear in the **Result** (`#resultOutput`) field.

[image assetsSrc="JS-Advanced-DOM-Homework-17.png" /]

Otherwise, if we create an **invalid expression**, such as `"99 +" (without second/right operand)`, and we click on the equal sign `=`, the expected result should be:

[image assetsSrc="JS-Advanced-DOM-Homework-18.png" /]

The "**Clear**" button should clear both Expression and Result fields (`#expressionOutput` and `#resultOutput`)

For instance, if we have the following expression:

[image assetsSrc="JS-Advanced-DOM-Homework-19.png" /]

And we press "**Clear**", the expected result should be:

[image assetsSrc="JS-Advanced-DOM-Homework-20.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='1'\]")\[0\].click();
\\$("button\[value='2'\]")\[0\].click();

\\$("button\[value='+'\]")\[0\].click();

\\$("button\[value='3'\]")\[0\].click();
\\$("button\[value='='\]")\[0\].click();

let test1 = \\$("\#expressionOutput")\[0\].innerHTML;
let test2 = \\$("\#resultOutput")\[0\].innerHTML;

\\$("button\[value='Clear'\]")\[0\].click();

let test3 = \\$("\#expressionOutput")\[0\].innerHTML;
let test4 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test1).to.equal("12 + 3");
expect(test2).to.equal("15");
expect(test3).to.equal("");
expect(test4).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='3'\]")\[0\].click();
\\$("button\[value='4'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();

\\$("button\[value='-'\]")\[0\].click();

\\$("button\[value='7'\]")\[0\].click();
\\$("button\[value='8'\]")\[0\].click();

\\$("button\[value='='\]")\[0\].click();

let test1 = \\$("\#expressionOutput")\[0\].innerHTML;

expect(test1).to.equal("345 - 78");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='9'\]")\[0\].click();

\\$("button\[value='\*'\]")\[0\].click();

\\$("button\[value='8'\]")\[0\].click();
\\$("button\[value='0'\]")\[0\].click();

\\$("button\[value='='\]")\[0\].click();

let test2 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test2).to.equal("720");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='7'\]")\[0\].click();
\\$("button\[value='2'\]")\[0\].click();
\\$("button\[value='0'\]")\[0\].click();

\\$("button\[value='/'\]")\[0\].click();

\\$("button\[value='9'\]")\[0\].click();

\\$("button\[value='='\]")\[0\].click();

let test2 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test2).to.equal("80");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='1'\]")\[0\].click();
\\$("button\[value='+'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();
\\$("button\[value='='\]")\[0\].click();

\\$("button\[value='Clear'\]")\[0\].click();

let test4 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test4).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='1'\]")\[0\].click();
\\$("button\[value='3'\]")\[0\].click();

\\$("button\[value='\*'\]")\[0\].click();

\\$("button\[value='4'\]")\[0\].click();
\\$("button\[value='='\]")\[0\].click();

\\$("button\[value='Clear'\]")\[0\].click();

let test3 = \\$("\#expressionOutput")\[0\].innerHTML;
let test4 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test3).to.equal("");
expect(test4).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='1'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();
\\$("button\[value='.'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();

\\$("button\[value='+'\]")\[0\].click();

\\$("button\[value='3'\]")\[0\].click();
\\$("button\[value='6'\]")\[0\].click();
\\$("button\[value='.'\]")\[0\].click();
\\$("button\[value='8'\]")\[0\].click();

\\$("button\[value='='\]")\[0\].click();

let test1 = \\$("\#expressionOutput")\[0\].innerHTML;
let test2 = \\$("\#resultOutput")\[0\].innerHTML;

\\$("button\[value='Clear'\]")\[0\].click();

let test3 = \\$("\#expressionOutput")\[0\].innerHTML;
let test4 = \\$("\#resultOutput")\[0\].innerHTML;

expect(test1).to.equal("15.5 + 36.8");
expect(test2).to.equal("52.3");
expect(test3).to.equal("");
expect(test4).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
	\<div id="calculator"\>
		\<!-- Screen and clear key --\>
		\<div class="top"\>
			\<button class="clear" type="button" value="Clear"\>C\</button\>
			\<p id="expressionOutput"\>\</p\>
			\<p id="resultOutput"\>\</p\>
			\<div id="result"\>\</div\>
		\</div\>

		\<div class="keys"\>
			\<!-- operators and other keys --\>
			\<button type="button" value="7"\>7\</button\>
			\<button type="button" value="8"\>8\</button\>
			\<button type="button" value="9"\>9\</button\>
			\<button type="button" value="/"\>/\</button\>
			\<button type="button" value="4"\>4\</button\>
			\<button type="button" value="5"\>5\</button\>
			\<button type="button" value="6"\>6\</button\>
			\<button type="button" value="\*"\>x\</button\>
			\<button type="button" value="1"\>1\</button\>
			\<button type="button" value="2"\>2\</button\>
			\<button type="button" value="3"\>3\</button\>
			\<button type="button" value="-"\>-\</button\>
			\<button type="button" value="0"\>0\</button\>
			\<button type="button" value="."\>.\</button\>
			\<button type="button" value="="\>=\</button\>
			\<button type="button" value="+"\>+\</button\>
		\</div\>
	\</div\>
`;

result();

\\$("button\[value='1'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();
\\$("button\[value='.'\]")\[0\].click();
\\$("button\[value='5'\]")\[0\].click();

\\$("button\[value='+'\]")\[0\].click();

\\$("button\[value='='\]")\[0\].click();

let test1 = \\$("\#expressionOutput")\[0\].innerHTML;
let test2 = \\$("\#resultOutput")\[0\].innerHTML;

\\$("button\[value='Clear'\]")\[0\].click();

expect(test1).to.equal("15.5 + ");
expect(test2).to.equal("NaN");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problem: Number Convertor

[code-task title="Number Convertor" taskId="js-advanced-DOM-Number-Convertor" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function repeatString(){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/07-Number-Convertor.zip) **for this task.**

Write a function that **converts** a **decimal number** to **binary** and **hexadecimal**.

[image assetsSrc="JS-Advanced-DOM-Homework-21.jpg" /]

The given number will always be in **decimal format.**

The "**From**" select menu will only have a **Decimal** option, but the "**To**" select menu will have **two options:** **binary** and **hexadeicmal**.

This means that our program should have the functionality to **convert decimal** to **binary** and **decimal** to **hexadecimal**.

Note that the "**To**" **select menu** is empty by default.

You have to insert the two options (**binary** and **hexadecimal**) inside before continuing.

Also, they should have **values** (binary and hexadecimal).

- When the `[Convert it]` button is **clicked**, the expected result should appear in the `[Result]` input field

[image assetsSrc="JS-Advanced-DOM-Homework-22.jpg" /]

[image assetsSrc="JS-Advanced-DOM-Homework-23.jpg" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// 20 to binary
document.body.innerHTML = \`
\<div id="container"\>
    \<label for="input"\>Number\</label\>
    \<input type="number" id="input"/\>\<br\>
    \<label for="selectMenuFrom"\>From\</label\>
    \<select id="selectMenuFrom"\>
        \<option selected value="decimal"\>Decimal\</option\>
    \</select\>
    \<label for="selectMenuTo"\>To\</label\>
    \<select id="selectMenuTo"\>
        \<option selected value=""\>\</option\>
    \</select\>
    \<button\>Convert it\</button\>
\</div\>
\<footer\>
    \<label for="result"\>Result\</label\>
    \<input type="text" name="output" id="result" disabled readonly/\>
\</footer\>
\`;

result();

\\$("\#input").val("20");
\\$("\#selectMenuTo").val("binary");
\\$("button").trigger("click");

let res = \\$("\#result").val();
expect(res).to.equal("10100");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// 100 to binary
document.body.innerHTML = \`
\<div id="container"\>
    \<label for="input"\>Number\</label\>
    \<input type="number" id="input"/\>\<br\>
    \<label for="selectMenuFrom"\>From\</label\>
    \<select id="selectMenuFrom"\>
        \<option selected value="decimal"\>Decimal\</option\>
    \</select\>
    \<label for="selectMenuTo"\>To\</label\>
    \<select id="selectMenuTo"\>
        \<option selected value=""\>\</option\>
    \</select\>
    \<button\>Convert it\</button\>
\</div\>
\<footer\>
    \<label for="result"\>Result\</label\>
    \<input type="text" name="output" id="result" disabled readonly/\>
\</footer\>
\`;

result();

\\$("\#input").val("100");
\\$("\#selectMenuTo").val("binary");
\\$("button").trigger("click");

let res = \\$("\#result").val();
expect(res).to.equal("1100100");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// 110 to hexadecimal
document.body.innerHTML = \`
\<div id="container"\>
    \<label for="input"\>Number\</label\>
    \<input type="number" id="input"/\>\<br\>
    \<label for="selectMenuFrom"\>From\</label\>
    \<select id="selectMenuFrom"\>
        \<option selected value="decimal"\>Decimal\</option\>
    \</select\>
    \<label for="selectMenuTo"\>To\</label\>
    \<select id="selectMenuTo"\>
        \<option selected value=""\>\</option\>
    \</select\>
    \<button\>Convert it\</button\>
\</div\>
\<footer\>
    \<label for="result"\>Result\</label\>
    \<input type="text" name="output" id="result" disabled readonly/\>
\</footer\>
\`;

result();

\\$("\#input").val("110");
\\$("\#selectMenuTo").val("hexadecimal");
\\$("button").trigger("click");

let res = \\$("\#result").val();
expect(res).to.equal("6E");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// 1515 to hexadecimal
document.body.innerHTML = \`
\<div id="container"\>
    \<label for="input"\>Number\</label\>
    \<input type="number" id="input"/\>\<br\>
    \<label for="selectMenuFrom"\>From\</label\>
    \<select id="selectMenuFrom"\>
        \<option selected value="decimal"\>Decimal\</option\>
    \</select\>
    \<label for="selectMenuTo"\>To\</label\>
    \<select id="selectMenuTo"\>
        \<option selected value=""\>\</option\>
    \</select\>
    \<button\>Convert it\</button\>
\</div\>
\<footer\>
    \<label for="result"\>Result\</label\>
    \<input type="text" name="output" id="result" disabled readonly/\>
\</footer\>
\`;

result();

\\$("\#input").val("1515");
\\$("\#selectMenuTo").val("hexadecimal");
\\$("button").trigger("click");

let res = \\$("\#result").val();
expect(res).to.equal("5EB");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// 903 to binary
document.body.innerHTML = \`
\<div id="container"\>
    \<label for="input"\>Number\</label\>
    \<input type="number" id="input"/\>\<br\>
    \<label for="selectMenuFrom"\>From\</label\>
    \<select id="selectMenuFrom"\>
        \<option selected value="decimal"\>Decimal\</option\>
    \</select\>
    \<label for="selectMenuTo"\>To\</label\>
    \<select id="selectMenuTo"\>
        \<option selected value=""\>\</option\>
    \</select\>
    \<button\>Convert it\</button\>
\</div\>
\<footer\>
    \<label for="result"\>Result\</label\>
    \<input type="text" name="output" id="result" disabled readonly/\>
\</footer\>
\`;

result();

\\$("\#input").val("903");
\\$("\#selectMenuTo").val("binary");
\\$("button").trigger("click");

let res = \\$("\#result").val();
expect(res).to.equal("1110000111");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
