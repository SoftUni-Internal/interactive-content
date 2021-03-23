# Manipulări DOM

[slide hideTitle]

# Selectarea Elementelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-11-selection-of-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**DOM** permite modificarea **elementelor HTML.**

Înainte ca elementele să fie modificate, acestea trebuie **selectate**.

Iată cele patru moduri prin care se poate selecta un element:

- `getElementById()` - Returnează **un singur** element cu ID-ul dorit
- `getElementsByTagName()` - Returnează o **serie** de elemente cu această etichetă
- `getElementsByClassName()` - Returnează o **serie** de elemente cu această clasă
- `querySelector()` - Returnează **primul** element care se potrivește cu selectorul, sau **nul** dacă nu există

[/slide]

[slide hideTitle]

# CSS Selectors

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-12-css-selectors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Selectoarele CSS** sunt un mod rapid și eficient de a selecta unul sau mai multe elemente HTML imbricate.

Iată câteva modalități de a le utiliza:

- `p` - Selectează elementul în funcție de **tip** (În acest caz: `<p>`)
- `.container` - Selectează **toate** elementele din **clasa** "container"
- `#idNumber` - Selectează **un singur** element cu **id-ul** "idNumber"
- `input[type="text"]` - Selectează **toate** câmpurile de intrare care sunt de tipul "text"
- `#idNumber, .container` - Selectează elementul cu id-ul "idNumber" **și** toate elementele din clasa "container"

[/slide]

[slide hideTitle]

# Manipulări DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-13-14-dom-manipulations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elementele DOM pot fi **citite** și **prelucrate** folosind Javascript.

Iată câteva dintre **metodele** și **proprietățile** care sunt utilizate în proces:

- `.innerHTML` - O proprietate pentru **accesarea** și **schimbarea** unui element al codului HTML
- `.attributes` - O proprietate care returnează toate atributele unui element dintr-o colecție

Fiecare articol din acea colecție are **două** caracteristici - **atribut** și **valoare**.

- `.setAttribute()` - O metodă, utilizată pentru a **adăuga** un atribut unui element sau pentru a-l **actualiza**, dacă elementul are deja atributul dat
- `.style` - O proprietate, utilizată pentru a actualiza **direct**** CSS-ul** unui element

```js
<h1 id="title">This is the title of a website</h1>
```

```js
let h1 = document.getElementById('title');
h1.style.color = 'blue'; // .color selectează proprietatea CSS care urmează să fie modificată și "blue" îi specifică valoarea.
```

- `.removeChild()` - O metodă, care **elimină** și **returnează** un copil dintr-un element HTML
- `.appendChild()` - O metodă care **adaugă** un copil în **spatele** unui element
- `.replaceChild()` - O metodă, care înlocuiește un element HTML cu altul. Este nevoie de doi parametri - elementul care trebuie înlocuit și elementul cu care să se facă înlocuirea
- `.document.write()` - O metodă, utilizată pentru a scrie text **direct** în documentul HTML

[/slide]

[slide hideTitle]

# Crearea Elementelor DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-15-17-creating-dom-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **două** moduri de a crea elemente HTML noi.

Primul mod este să creezi **direct** un element folosind comanda `.createElement`.
```js
let h1 = document.createElement('h1');
let div = document.createElement('div');
```
Iar celălalt mod este prin copierea elementelor deja **existente**.
```js
let h1 = document.getElementById('page-title');
let newH1 = h1.cloneNode(true); //returnează un duplicat al etichetei h1 de mai sus
```
Este important să știm că, deși aceste elemente sunt create, ele **nu există** în documentul HTML.

Ele sunt doar **variabile Javascript**. 

[/slide]

[slide hideTitle]

# Eliminarea Elementelor DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-16-deleting-dom-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ca întotdeauna, pentru a efectua orice fel de operație asupra unui element, trebuie ca mai întâisă fie **accesat**.

Iată un exemplu de cum **se** obține **și** se **elimină** un element DOM.
``` js
<article id="post">
 <h1 id="title">Greeting post</h1>
 <p id="content">Hello everybody and welcome to the website.</p>
</article>
```

```js
let parent = document.getElementById('post'); // returnează elementul articol
let title = document.getElementById('title'); // returnează elementul h1
let content = document.getElementById('content'); // returnează elementul p

title.remove(); // elimină direct elementul DOM

parent.removeChild(content); //elimină elementul accesând părintele său
```

[/slide]

[slide hideTitle]

# Problem with Solution: Article List

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-18-solution-one-article-list-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Articles List" taskId="js-advanced-DOM-Articles-List" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]
```
function createArticle(){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Descriere

**Iată un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Article_list_problem.zip) **pentru această problemă.**

În această problemă, ar trebui să creați funcționalitatea JS care creează articole și le adaugă într-o secțiune de articole.

Programele din acest limbaj se numesc **scripturi**. 

Acestea pot fi scrise direct în fișierul HTML și **executate automat** pe măsură ce pagina se încarcă.

Scripturile sunt furnizate și executate ca un **text simplu**. 

Nu au nevoie de pregătire specială sau de compilare pentru a rula.

Din acest punct de vedere, JavaScript este foarte **diferit** de multe alte limbaje, care necesită compilare și pași suplimentari înainte de a rula, cum ar fi Java.

[image assetsSrc="JS-Advanced-DOM-Lab-1.jpg" /]

## Constrângeri:

- **Valoarea titlului** din **introducerea titlului** ar trebui să fie un **element de tip heading 3** `<h3>`

- **Conținutul textului** din elementul **suprafa** ț **a textului** ar trebui să fie un **paragraf** `<p>`

- Ambele elemente nou create ( **h3** și **p** ) ar trebui adăugate unui nou element articol `<article>`

- **Elementul articol curent** ar trebui adăugat la secțiunea care are articole id `(#articles)`

- Ar trebui să creezi un nou **element articol** numai dacă **titlul** și **conținutul** nu sunt goale

- După apăsarea butonului, trebuie **să ștergi valoarea titlului** și **valoarea textului**

```js
<div id="createArticle">
   <label for="createTitle">Title</label>
   <input id="createTitle">
   <br>
   <label for="createContent">Content</label>
   <textarea id="createContent"></textarea>
   <button onclick="createArticle()">Create</button>
</div>
<section id="articles">
   <h1>Articles List</h1>
</section>
```

## Input

[image assetsSrc="JS-Advanced-DOM-Lab-3.jpg" /]

## Output

[image assetsSrc="JS-Advanced-DOM-Lab-4.jpg" /]

```js
<section id="articles">
   <h1>Articles List</h1>
   <article>
      <h3>JavaScript</h3>
      <p>
         "JavaScript is a programming language
         that adds interactivity to your website
         (for example games, responses when buttons
         are pressed or data is entered in forms,
         dynamic styling, animation). This article
         helps you get started with this exciting
         language and gives you an idea of
         what is possible."
      </p>
   </article>
</section>

```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";
document.getElementById("createContent").value = "JavaScript Content Test";

result();

let currArticle = document.querySelectorAll('#articles article')[0];

expect(currArticle.childNodes[0].textContent).to.equal("JavaScript Title Test");
expect(currArticle.childNodes[1].textContent).to.equal("JavaScript Content Test");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);

[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript";
document.getElementById("createContent").value = "JavaScript was initially created to “make web pages alive”. The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads. Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.In this aspect, JavaScript is very different from another language called Java";

result();

let currArticle = document.querySelectorAll('#articles article')[0];

expect(currArticle.childNodes[0].textContent).to.equal("JavaScript");
expect(currArticle.childNodes[1].textContent).to.equal("JavaScript was initially created to “make web pages alive”. The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads. Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.In this aspect, JavaScript is very different from another language called Java");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Test Title Field";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createContent").value = "JavaScript Content Test";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

result();

let articlesCount = document.querySelectorAll('#articles article')[0] === undefined;

expect(articlesCount).to.equal(true);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

let title = document.getElementById("createTitle");
let content = document.getElementById("createContent");

title.value = "JavaScript Title Test";
content.value = "JavaScript Content Test";

result();

expect(title.value).to.equal("");
expect(content.value).to.equal("");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<h4>Create a functionality which creates articles and appends them into some article section.</h4>
<div id="createArticle">
    <label for="createTitle">Title</label>
    <input id="createTitle"/><br>
    <label for="createContent">Content</label>
    <textarea id="createContent"></textarea>
    <button>Create</button>
</div>
<section id="articles">
    <h1>Articles List</h1>
</section>
`;

document.getElementById("createTitle").value = "JavaScript Title Test";
document.getElementById("createContent").value = "JavaScript Content Test";

result();

document.getElementById("createTitle").value = "JavaScript Title Test 22";
document.getElementById("createContent").value = "JavaScript Content Test 22";

result();

document.getElementById("createTitle").value = "JavaScript Title Test 33";
document.getElementById("createContent").value = "JavaScript Content Test 33";

result();

let articlesCount = document.querySelectorAll('#articles article').length;

expect(articlesCount).to.equal(3);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Proprietăți vs. Atribute

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-20-21-dom-properties-and-html-attributes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atributele pot **defini** informații **suplimentare** despre elementul HTML.

Proprietățile DOM, pe de altă parte, sunt **proprietăți ale obiectului** care reprezintă un element HTML.

Chiar dacă ar putea arăta la fel, **nu sunt** la fel.

Există proprietăți DOM care **nu corespund** unui element HTML și invers.

**Atributele HTML inițializează proprietățile DOM** și, deși proprietățile DOM **se pot modifica**, un atribut HTML rămâne la fel.

[/slide]

[slide hideTitle]

# Proprietăți DOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-22-dom-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Conform informațiilor parcurse, elementele DOM **pot fi modificate** prin intermediul proprietăților lor.

Să presupunem că există următorul cod HTML:

```js
<div id="container">
 <p id="my-name"> My name is </p>
</div>
<form>
 <input id="name-input">
</form>
```

Iată câteva exemple de proprietăți DOM și ce fac acestea:

- `textContent` - Folosit pentru a **citi** și **scrie** text

```js
let p = document.getElementById('my-name');
p.textContent += 'Ellie';
```

- `innerHTML` - Used to **get** and **change** the HTML of an element. 

Folosit pentru a **obține** și pentru a **modifica** codul HTML al unui element

```js
let div = document.getElementById('container');
div.innerHTML += "<p>What's your name</p>";
```

- `value` - Folosit pentru a **obține** și **seta** valoarea unui element

```js
let input = document.getElementById('name-input');
console.log(input.value); //înregistrează valoarea câmpului de intrare
```
[/slide]

[slide hideTitle]

# Atribute și Metode HTML

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-23-28-html-attributes-and-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acesta este un exemplu de cod HTML pe care să lucrați:

```js
<a id="link" href="www.google.com">Link</a>
<input id="first-input" type="text">
```

Iar aici sunt câteva dintre metodele comune:

- getAttribute() - Returnează valoarea atributului elementului.

Acceptă **un** parametru - **numele atributului**.
```js
let a = document.getElementById('link');
a.getAttribute('href'); // www.google.com
```

- `setAttribute()` - **Setează** valoarea elementului atributului sau îl **actualizează** dacă acesta există deja

Acceptă doi parametri - **numele atributului și valoarea**.
```js
let input = document.getElementById('first-input');
input.setAttribute('name', 'username'); // Setează valoarea numelui atributului la „username"
```

- `removeAttribute()` - **Elimină** din elementul HTML dat

Acceptă un parametru - **numele atributului.**
```js
let input = document.getElementById('first-input');
input.removeAttribute('name'); // Elimină atributul de nume al intrării
```

- `hasAttribute()` - **Returnează un boolean** dacă atributul specificat este prezent sau nu

Ia un parametru - **numele atributului**.

```js
let input = document.getElementById('first-input');
input.hasAttribute('type'); // adevărat
input.hasAttribute('name'); // fals
```
Deoarece un element HTML poate avea **mai multe nume de clase**, există o proprietate care returnează o **serie** cu toate acestea.

```js
<h1 id="title" class="title red left">
 Heading 1
</h1>
```

```js
const h1 = document.getElementById('title').classList;

// ["title", "red", "left", value: "title red left"]

```
classListare două metode, care **creează** sau **șterg** o clasă CSS:

- `add()` - Acceptă numele clasei ca parametru și îl adaugă la element
- `remove()` - Acceptă numele clasei ca parametru și îl șterge din element

```js
let h1 = document.getElementById('title');

h1.classList.add('first'); // adaugă "prima" clasă

h1.classList.remove('first'); // elimină "prima" clasă
```
[/slide]

[slide hideTitle]

# Problem with Solution: Growing Word

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-29-solution-two-growing-word_1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Growing Word" taskId="js-advanced-DOM-Growing-Word" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function growingWord(){
 // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

# Descriere

**Iată un link către** [resursele](https://videos.softuni.org/resources/javascript/javascript-advanced/01-Growing_word_problem.zip) **pentru această sarcină.**

În această problemă, ar trebui **să creați o funcționalitate JS** care **schimbă dimensiunea și culoarea** unui **paragraf** dat **la fiecare clic.**


[image assetsSrc="JS-Advanced-DOM-Lab-6.jpg" /]

```js
<div id="exercise">
 <div id="colors">
 <div id="blueDiv">Blue</div>
 <div id="greenDiv">Green</div>
 <div id="redDiv">Red</div>
 </div>
 <div>
 <button type="button" onclick="growingWord()">CHANGE</button>
 </div>
 <p>Growing Word</p>
</div>
```
De fiecare dată când facem **clic** pe butonul `[CHANGE]`, **culoarea** și **dimensiunea** paragrafului **care conține** "**Growing Word**" ar trebui să se schimbe!

**După fiecare clic**, **dimensiunea fontului** de paragraf curent ar trebui **modificată** la **dimensiunea curentă a fontului înmulțită cu 2**. 

De asemenea, **culoarea** acelui paragraf ar trebui să se schimbe, în funcție de **culoarea anterioară**.

# Exemplu:

- Dacă facem clic **o dată**, culoarea ar trebui schimbată în **albastru** și dimensiunea fontului trebuie să fie **2** (prima dimensiune inițială)
- Dacă facem clic **de două ori**, culoarea ar trebui schimbată în **verde** și dimensiunea fontului ar trebui să fie **4** (2 * 2)
- Dacă facem clic **de trei ori**, culoarea curentă a acelui paragraf ar trebui schimbată în **roșu**, iar dimensiunea fontului ar trebui să fie **8** (4 * 2)
- Dacă paragraful nostru are deja culoarea **roșu**, la următorul clic, culoarea ar trebui să se transforme în **albastru**

Treceți prin aceste trei culori (albastru, verde, roșu) din nou și din nou și din nou ... în timp ce faceți clic pe butonul respectiv.

[image assetsSrc="JS-Advanced-DOM-Lab-8.jpg" /]

```js
<div id="exercise">
 <div id="colors">...</div>
 <div>... </div>
 <p style="color: blue; font-size: 2px;"> Growing Word</p>
</div>
```

[image assetsSrc="JS-Advanced-DOM-Lab-10.jpg" /]

```js
<div id="exercise">
 <div id="colors">...</div>
 <div>... </div>
 <p style="color: green; font-size: 4px;">Growing Word</p>
</div>
```

[image assetsSrc="JS-Advanced-DOM-Lab-12.jpg" /]

```js

<div id="exercise">
 <div id="colors">... </div>
 <div>...</div>
 <p style="color: red; font-size: 8px;"> Growing Word</p>
</div>
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();

let fontSize = \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("8px");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("red");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("blue");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();

let color = \\$("\#exercise").find("p")\[0\].style.color;

expect(color).to.equal("green");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();
result();
result();

let fontSize= \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("32px");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<div class="conditions"\>
\<h1\>Growing Word\</h1\>
\<p\>
Create a functionality which changes the \<strong\>size\</strong\> and the \<strong\>color\</strong\> of a given
paragraph on every \<strong\>click\</strong\>.
\</p\>
\<p\>
After every click, the current paragraph font size should be changed to the current font size
\<strong\>multiplied by 2\</strong\>. Also the color of that paragraph should change, depending on the previous
color.
\</p\>
\</div\>

    \<div id="exercise"\>
        \<div id="colors"\>
            \<div id="blueDiv"\>Blue\</div\>
            \<div id="greenDiv"\>Green\</div\>
            \<div id="redDiv"\>Red\</div\>
        \</div\>
        \<div\>
            \<button type="button"\>CHANGE\</button\>
        \</div\>
        \<p\>Growing Word\</p\>
    \</div\>

`;

result();
result();
result();
result();

let fontSize= \\$("\#exercise").find("p")\[0\].style.fontSize;

expect(fontSize).to.equal("16px");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Elementele Părinte și Copil

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-31-36-parents-and-child-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elementele HTML pot avea **mai multe** alte elemente în interiorul lor.

Când un anumit element deține alte elemente **între eticheta de deschidere și de închidere** - acesta este un **element părinte**.

Toate celelalte din interiorul elementului părinte sunt numite **elemente copil**.

```js
<article id="first-post">
 <h1>Today's news</h1>
 <p>Hundreds of people gather to listen to singing kid on the street.</p>
</article>

```
Proprietatea read-only `.children` poate fi utilizată pentru a obține toți copiii ai unui element părinte.

```js
let article = document.getElementById('first-post');
let articleElements = article.children; // o colecție a tuturor elementelor din eticheta articolului

```
Există alte două metode pentru a obține **primul** sau **ultimul** copil:

- `.firstElementChild`
- `.lastElementChild`

``` js
let article = document.getElementById('first-post');

let h1 = article.firstElementChild; // returnează eticheta <h1> a articolului
let p = article.lastElementChild; // returnează eticheta <p> a articolului

```

Ambele metode returneză valoarea **null** dacă nu există elemente-copil.

Alte proprietăți pentru navigarea între elementele **următoare** și cele **anterioare** sunt:

- `.nextElementSibling`
- `.previousElementSibling`

```js

<ul id="names">
 <li>Thomas</li>
 <li>Kate</li>
 <li>Anne</li>
 <li>David</lid>
</ul>

```

```js
let list = document.getElementById('names');

let firstLi = article.firstElementChild;
let lastLi = article.lastElementChild;

let secondLi = firstLi.nextElementSibling;
console.log(secondLi.textContent); // Kate

let thirdLi = latsLi.previousElementSibling;
console.log(thirdLi.textContent); //Anne
```

Aceste proprietăți ar returna de asemenea **null** dacă există doar un element copil.

Ultimele două metode de menționat sunt folosite pentru a adăuga un copil în partea din față și din spate a unui element părinte.

- `.appendChild`
- `.prependChild`

``` js
<ul id="years">
 <li>2020</li>
</ul>
```

``` js
let list = document.getElementById('years');

let firstLi = document.createElement('li');
let lastLi = document.createElement('li');

list.appendChild(lastLi); // adaugă elementul "lastLi" în spatele listei

list.prependChild(firstLi); // adaugă elementul "firstLi" în partea din față a listei
```

[/slide]

[slide hideTitle]

# NodeList vs. HTMLCollection

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-37-nodelist-vs-htmlcollection-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atât **NodeList**, cât și **HTMLCollection** sunt colecții indexate de **noduri DOM**.

Cu toate acestea, **HTMLCollection** este limitată doar la **nodurile Element**, în timp ce **NodeList** ar putea deține noduri **de orice tip**.

Cele două colecții au aceleași metode, cu excepția metodei namedItem pentru **NodeList**.

[/slide]