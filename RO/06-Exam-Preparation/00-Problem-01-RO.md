# Problem 1: Task Manager
[slide hideTitle]
# Task Manager

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/07.JS-Advanced-Exam-Preparation/RO/Problem-1-Task-Manager-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Task Manager" taskId="js-advanced-exam-preparation-task-manager" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function taskManager(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

**Aici aveți un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/JS-Advanced-Exam-Preparation-First-Task-Resources.zip) **pentru această cerință.**

Folosiți fișierele "**index.html**" și "**app.js**" pentru a rezolva această problemă.

**Notă: trebuie să terminați această cerință fără să schimbați nimic în fișierul HTML(index.html)**.

[image assetsSrc="exam-prep-picture1.jpg" /]

## Cerința voastră

Scrieți **codul JavaScript lipsă** pentru a face Funcționalitatea Managerului de activități să funcționeze astfel:

Când butonul "**Add**" este apăsat, primul lucru pe care trebuie să-l facă este să **valideze datele de intrare**.

Dacă vreuyn câmp de date de intrare este gol, **funcția nu ar trebui să facă nimic**.

După validarea câmpurilor datelor de intrare, **trebuie să adaugi o nouă cerință (articol)** secțiunii "**Open**".

Structura HTML arată astfel:

```js
<section>
   <div>
      <h1 class="orange">Open</h1>
   </div>
   <div>
      <article>
         <h3>JS Advanced Exam</h3>
         <p>Description: To organize the Exam</p>
         <p>Due Date: 2020.04.14</p>
         <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
         </div>
      </article>
   </div>
</section>
```

Articolul ar trebui să aibă două butoane "**Start**" și "**Delete**". 

Fii **atent să setezi clasele la butoane** și părintele `div`.

Când butonul "**Start**" este apăsat, **trebuie să mutați cerința** în secțiunea "**In Progress**".

**Aveți grijă cu butoanele!** 

Structura HTML arată astfel: 

```js
<section>
   <div>
      <h1 class="yellow">In Progress</h1>
   </div>
   <div>
      <article>
         <h3>JS Exam preparation</h3>
         <p>Description: To make tasks for JS Advanced Exam</p>
         <p>Due Date: 2020.03.15</p>
         <div class="flex">
            <button class="red">Delete</button>
            <button class="orange">Finish</button>
         </div>
      </article>
   </div>
</section>
```

Când butonul "**Delete**" este apăsat, cerința (întregul articol) **ar trebui eliminat din HTML.**

După apăsarea butonului "**Finish**", **cerința va fi completă**, și ar trebui să mutați articolul în secțiunea "**Complete**".

Butoanele, incluzând elementul lor părinte `div`,trebuie eliminate.

[image assetsSrc="exam-prep-pic4.png" /]

```js
<section>
   <div>
      <h1 class="green">Complete</h1>
   </div>
   <div>
      <article>
         <h3>Angular 8.0</h3>
         <p>Description: To prepare my project</p>
         <p>Due Date: 2020.02.22</p>
      </article>
   </div>
</section>
```

**Trimiteți soluția în corpul** `solve()` **funcției.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

elements.task.value = "JS Advanced Exam";
elements.description.value = "Lern DOM, Unit Testing and Classes";
elements.date.value = "2020.04.08";

let sections = document.getElementsByTagName("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

elements.addButton.click();

assert.equal(open.children.length, 2, "Incorrect count of added tasks in 'Open' section");
assert.equal(open.children\[1\].children\[0\].tagName, "ARTICLE", "Incorrect tagname");
assert.equal(open.children\[1\].children\[0\].children.length, 4, "Incorrect count of added HTML Elements in the article tag");
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "JS Advanced Exam", "Incorrect Task name");
assert.equal(open.children\[1\].children\[0\].children\[1\].textContent, "Description: Lern DOM, Unit Testing and Classes", "Incorrect description");
assert.equal(open.children\[1\].children\[0\].children\[2\].textContent, "Due Date: 2020.04.08", "Incorrect date");
assert.equal(open.children\[1\].children\[0\].children\[3\].children.length, 2, "Incorrect count of buttons");

let delBtn = open.children\[1\].children\[0\].children\[3\].children\[1\];
delBtn.click();

//testing if task is deleted
assert.equal(open.children\[1\].children.length, 0, "Incorrect count of children elements in 'Open' section");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
//most functionality with one task

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "JS Advanced Exam";
elements.description.value = "Lern DOM, Unit Testing and Classes";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if task is added
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "JS Advanced Exam", "'JS Advanced Exam' is missing in 'Open' section ");

//moving the task to "In Progress" section
let startBtn = open.children\[1\].children\[0\].children\[3\].children\[0\];
startBtn.click();

//testing if the task is in "In Progress" section
assert.equal(inProgress.children\[1\].children\[0\].children\[1\].textContent, "Description: Lern DOM, Unit Testing and Classes", "'Lern DOM, Unit Testing and Classes' is missing in 'In Progress' section ");

//moving the task to "Completed" section
let finishBtn = inProgress.children\[1\].children\[0\].children\[3\].children\[1\];
finishBtn.click();

//testing the task in "Completed" section
assert.equal(complete.children\[1\].children\[0\].children\[2\].textContent, "Due Date: 2020.04.08" , "'2020.04.08' is missing in 'Completed' section ");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//add new articles
document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

elements.task.value = "Something";
elements.description.value = "Something";
elements.date.value = "2020.04.08";

let sections = document.getElementsByTagName("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

elements.addButton.click();

assert.equal(open.children.length, 2, "first test");
assert.equal(open.children\[1\].children\[0\].tagName, "ARTICLE", "2test");
assert.equal(open.children\[1\].children\[0\].children.length, 4, "3test");
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "Something", "4test");
assert.equal(open.children\[1\].children\[0\].children\[0\].tagName, "H3", "5test");

assert.equal(open.children\[1\].children\[0\].children\[1\].textContent, "Description: Something", "6test");
assert.equal(open.children\[1\].children\[0\].children\[2\].textContent, "Due Date: 2020.04.08", "7test");
assert.equal(open.children\[1\].children\[0\].children\[2\].tagName, "P", "8test");

assert.equal(open.children\[1\].children\[0\].children\[3\].children.length, 2, "9test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[0\].tagName, "BUTTON", "10test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[1\].tagName, "BUTTON", "11test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//add multiple new articles

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

//add second task
elements.task.value = "Task2";
elements.description.value = "Description2";
elements.date.value = "2020.04.09";
elements.addButton.click();

//add third task
elements.task.value = "Task3";
elements.description.value = "Description3";
elements.date.value = "2020.04.10";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if all tasks are added
assert.equal(open.children.length, 2, "first test");
assert.equal(open.children\[1\].children\[0\].tagName, "ARTICLE", "2test");
assert.equal(open.children\[1\].children\[0\].children.length, 4, "3test");

//testing first task
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "Task1", "4test");
assert.equal(open.children\[1\].children\[0\].children\[1\].textContent, "Description: Description1", "5test");
assert.equal(open.children\[1\].children\[0\].children\[2\].textContent, "Due Date: 2020.04.08", "6test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children.length, 2, "7test");

//testing second task
assert.equal(open.children\[1\].children\[1\].children\[0\].textContent, "Task2", "8test");
assert.equal(open.children\[1\].children\[1\].children\[1\].textContent, "Description: Description2", "9test");
assert.equal(open.children\[1\].children\[1\].children\[2\].textContent, "Due Date: 2020.04.09", "10test");
assert.equal(open.children\[1\].children\[1\].children\[3\].children.length, 2, "11test");

//testing second task
assert.equal(open.children\[1\].children\[2\].children\[0\].textContent, "Task3", "12test");
assert.equal(open.children\[1\].children\[2\].children\[1\].textContent, "Description: Description3", "13test");
assert.equal(open.children\[1\].children\[2\].children\[2\].textContent, "Due Date: 2020.04.10", "14test");
assert.equal(open.children\[1\].children\[2\].children\[3\].children.length, 2, "15test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// deleting from the open Section

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if task is added
assert.equal(open.children.length, 2, "first test");
assert.equal(open.children\[1\].children\[0\].tagName, "ARTICLE", "2test");
assert.equal(open.children\[1\].children\[0\].children.length, 4, "3test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[0\].textContent, "Start", "4test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[1\].textContent, "Delete", "5test");

let delBtn = open.children\[1\].children\[0\].children\[3\].children\[1\];
delBtn.click();

//testing if task is deleted
assert.equal(open.children\[1\].children.length, 0, "6test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// moving the task in "In Progress"

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if task is added
assert.equal(open.children.length, 2, "first test");
assert.equal(open.children\[1\].children\[0\].tagName, "ARTICLE", "2test");
assert.equal(open.children\[1\].children\[0\].children.length, 4, "3test");

let startBtn = open.children\[1\].children\[0\].children\[3\].children\[0\];
startBtn.click();

//testing if task is moved
assert.equal(inProgress.children.length, 2, "4test");
assert.equal(inProgress.children\[1\].children\[0\].tagName, "ARTICLE", "5test");
assert.equal(inProgress.children\[1\].children\[0\].children.length, 4, "6test");
assert.equal(inProgress.children\[1\].children\[0\].children\[0\].textContent, "Task1", "7test");
assert.equal(inProgress.children\[1\].children\[0\].children\[3\].children\[0\].textContent, "Delete", "8test");
assert.equal(inProgress.children\[1\].children\[0\].children\[3\].children\[1\].textContent, "Finish", "9test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//moving multiple tasks in "In Progress"

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

//add second task
elements.task.value = "Task2";
elements.description.value = "Description2";
elements.date.value = "2020.04.09";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if tasks are added
assert.equal(open.children\[1\].children.length, 2, "first test");

let startBtn1 = open.children\[1\].children\[0\].children\[3\].children\[0\];
let startBtn2 = open.children\[1\].children\[1\].children\[3\].children\[0\];
startBtn2.click();
startBtn1.click();

//testing the first moved task
assert.equal(inProgress.children\[1\].children.length, 2, "2test");
assert.equal(inProgress.children\[1\].children\[0\].tagName, "ARTICLE", "3test");
assert.equal(inProgress.children\[1\].children\[0\].children\[0\].textContent, "Task2", "4test");
assert.equal(inProgress.children\[1\].children\[0\].children\[1\].textContent, "Description: Description2", "5test");
assert.equal(inProgress.children\[1\].children\[0\].children\[2\].textContent, "Due Date: 2020.04.09", "6test");

//testing the second moved task
assert.equal(inProgress.children\[1\].children.length, 2, "7test");
assert.equal(inProgress.children\[1\].children\[1\].children\[0\].tagName, "H3", "8test");
assert.equal(inProgress.children\[1\].children\[1\].children\[0\].textContent, "Task1", "9test");
assert.equal(inProgress.children\[1\].children\[1\].children\[1\].textContent, "Description: Description1", "10test");
assert.equal(inProgress.children\[1\].children\[1\].children\[2\].textContent, "Due Date: 2020.04.08", "11test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//deleting multiple times from "In Progress"

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

//add second task
elements.task.value = "Task2";
elements.description.value = "Description2";
elements.date.value = "2020.04.09";
elements.addButton.click();

//add third task
elements.task.value = "Task3";
elements.description.value = "Description3";
elements.date.value = "2020.04.10";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if tasks are added
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "Task1", "2test");
assert.equal(open.children\[1\].children\[1\].children\[0\].textContent, "Task2", "3test");
assert.equal(open.children\[1\].children\[2\].children\[0\].textContent, "Task3", "4test");

//moving the tasks to "In Progress" section
let startBtn1 = open.children\[1\].children\[0\].children\[3\].children\[0\];
let startBtn2 = open.children\[1\].children\[1\].children\[3\].children\[0\];
let startBtn3 = open.children\[1\].children\[2\].children\[3\].children\[0\];
startBtn2.click();
startBtn1.click();
startBtn3.click();

//deleting task with name "Task1", which should be on second place of the childrenArr
let delBtn1 = inProgress.children\[1\].children\[0\].children\[3\].children\[0\];
let delBtn2 = inProgress.children\[1\].children\[1\].children\[3\].children\[0\];
let delBtn3 = inProgress.children\[1\].children\[2\].children\[3\].children\[0\];
delBtn2.click();

//testing the number of the rest tasks and their names
assert.equal(inProgress.children\[1\].children.length, 2, "5test");
assert.equal(inProgress.children\[1\].children\[0\].children\[0\].textContent, "Task2", "6test");
assert.equal(inProgress.children\[1\].children\[1\].children\[0\].textContent, "Task3", "7test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//moving in "Completed"

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value= "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing if tasks are added
assert.equal(open.children\[1\].children\[0\].children\[0\].textContent, "Task1", "1test");

//moving the task to "In Progress" section
let startBtn = open.children\[1\].children\[0\].children\[3\].children\[0\];
startBtn.click();

//moving the task to "Completed" section
let finishBtn = inProgress.children\[1\].children\[0\].children\[3\].children\[1\];
finishBtn.click();

//testing the task in "Completed" section
assert.equal(complete.children\[1\].children.length, 1, "2test");
assert.equal(complete.children\[1\].children\[0\].children.length, 3, "3test");
assert.equal(complete.children\[1\].children\[0\].children\[0\].tagName, "H3", "4test");
assert.equal(complete.children\[1\].children\[0\].children\[1\].tagName, "P", "5test");
assert.equal(complete.children\[1\].children\[0\].children\[2\].tagName, "P", "6test");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//testing if all the classes are correctly added

document.body.innerHTML = `
\<main\>
    \<div class="wrapper"\>
        \<section\>
            \<div\>
                \<h1 class="gray"\>Add Task\</h1\>
            \</div\>
            \<div\>
                \<form action=""\>
                    \<label for="task"\>Task\</label\>\<br\>
                    \<input type="text" id="task" name="task" placeholder="JS Advanced Exam"\>\<br\>
                    \<label for="description"\>Description\</label\>\<br\>
                    \<textarea id="description" placeholder="Lern DOM, Unit Testing and Classes"\>\</textarea\>
                    \<label for="date"\>Due Date\</label\>\<br\>
                    \<input type="text" id="date" name="date" placeholder="2020.04.08"\>\<br\>
                    \<button id="add"\>Add\</button\>
                \</form\>
            \</div\>
        \</section\>

        \<section\>
            \<div\>
                \<h1 class="orange"\>Open\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="yellow"\>In Progress\</h1\>
            \</div\>
            \<div id="in-progress"\>
                
            \</div\>
        \</section\>
        \<section\>
            \<div\>
                \<h1 class="green"\>Complete\</h1\>
            \</div\>
            \<div\>
                
            \</div\>
        \</section\>
    \</div\>
\</main\>
`;

result();

let elements = \{
    task: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
\}
elements\["addButton"\] = document.getElementById("add");

//add first task
elements.task.value = "Task1";
elements.description.value = "Description1";
elements.date.value = "2020.04.08";
elements.addButton.click();

let sections = document.querySelectorAll("section");
let open = sections\[1\];
let inProgress = sections\[2\];
let complete = sections\[3\];

//testing classes in Open section
assert.equal(open.children\[1\].children\[0\].children\[3\].classList.value, "flex", "1test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[0\].classList.value, "green", "2test");
assert.equal(open.children\[1\].children\[0\].children\[3\].children\[1\].classList.value, "red", "3test");

//moving the task to "In Progress" section
let startBtn = open.children\[1\].children\[0\].children\[3\].children\[0\];
startBtn.click();

//testing classes in "In Progress" section
assert.equal(inProgress.children\[1\].children\[0\].children\[3\].classList.value, "flex", "4test");
assert.equal(inProgress.children\[1\].children\[0\].children\[3\].children\[0\].classList.value, "red", "5test");
assert.equal(inProgress.children\[1\].children\[0\].children\[3\].children\[1\].classList.value, "orange", "6test");

//moving the task to "Completed" section
let finishBtn = inProgress.children\[1\].children\[0\].children\[3\].children\[1\];
finishBtn.click();
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
