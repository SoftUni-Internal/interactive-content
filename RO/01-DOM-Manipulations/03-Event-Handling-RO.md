# Organizatorul de Evenimente

[slide hideTitle]

# Organizator de Evenimente

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-19-20-event-handler-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Înregistrarea unui eveniment este făcută printr-o funcție callback. 

Există 3 moduri de a înregistra un eveniment:

- Folosind Atribute HTML

- Prin folosirea unui organizator de evenimente de tip DOM

- Prin folosirea organizatorului de evenimente DOM

[/slide]

[slide hideTitle]

# Ascultător de Evenimente

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-21-event-listener-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a putea folosi funcția noastră **event handler** funcție, trebuie să aplicăm metoda`.addEventListener()`.

Prima oară folosim **type**, care este un șir case sensitive ce reprezintă tipul de eveniment pe care dorim să-l ascultăm. 

A doua funcție este funcția **handler**. 

Aceasta specifică funcției să înceapă, atunci când intervine evenimentul. 

Al treilea parametru este opțional. 

Este o valoare Booleană care specifică dacă evenimentul trebuie să fie executat în faza de capturare sau în faza de bubling.

Valoarea ei inițială este false. 

O altă metodă folositoare despre care trebui să știm este metoda `.removeEventListener()`.

Ea îndepărtează un organizator de evenimente care a fost atașat anterior metodei `addEventListener()`.


```js
addBtn.addEventListener("click", handler, false);
```

O altă metoda este metoda `.removeEventListener()`.

Ea îndepărtează ascultătorul de evenimente înregistrat anterior din țintă. 

```js
addBtn.removeEventListener("click", handler);
```
[/slide]

[slide hideTitle]

# Atașarea Click Event

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-22-attaching-click-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici avem un exemplu de folosire a tipului "**click**" și a funcției "**clickMe**", ca organizator de evenimente.

La fiecare click pe buton, "**number**" va fi incrementat cu unu.

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

# Atașarea unui Eveniment Hover

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-23-24-attaching-hover-event-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Atașarea unui Eveniment Hover

Aici avem un exemplu de folosire a tipului "**mouseOver**" și a declarării unei funcții. 

Codul va returna if dacă folosim **mouse hover** pe buton.

Rezultatul va fi o schimbare a culorii de background a butonului și schimbarea culorii textului din interiorul butonului. 

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

În acest exemplu, folosim tipul "**input**" pentru a demonstra cum putem activa un buton când scriem ceva în câmpul de intrare. 

Inițial, butonul este **dezactivat** in HTML. 

De îndată ce scriem ceva în câmpul input, butonul va fi **activat** datorită acestei linii de cod din funcția handler: `button.setAttribute('disabled', 'false');`.

```js
const inputField = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
inputField.addEventListener('input', function () {
    button.setAttribute('disabled', 'false');
});
```

[/slide]

[slide hideTitle]

# Ștergerea Evenimentelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-25-remove-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici avem o implementare mai profundă a `.addEventListener()` și a metodelor `.removeEventListener()`.

Primul ascultător de evenimente (`focus`, `focusEvent`) se va concentra către parola din câmpul input, dacă dăm click pe acest câmp. 

Al doilea ascultător de evenimente `blur`, (event) va șterge **focus** dacă dăm click pe un alt câmp input.

În final, al treilea ascultător de evenimente atașat butonului, va șterge primul ascultător de evenimente, atunci când facem click pe buton.

În acest moment, pierdem efectul **focus**.


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

[slide hideTitle]

# Evenimente Multiple

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-26-multiple-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem adăuga mai multe evenimente aceluiași element, fără să rescriem evenimentele existente. 

```js
element.addEventListener("click", function);
element.addEventListener("click", myFunction);
element.addEventListener("mouseover", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
```

[/slide]

[slide hideTitle]

# SetInterval() şi ClearInterval()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-27-setinterval-clearinterval-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În JavaScript, putem **start** sau **stop** cronometrul.

Fixarea intervalului sau metoda `setInterval()` apelează o funcție sau evaluează o expresie la intervale de timp specifice.(in milisecunde).

Metoda `setInterval()` va continua să apeleze funcția până când `clearInterval()` este apelată sau fereastra este închisă. 

În exemplul de mai jos, intervalul este 1000 millisecunde sau 1 secundă.

Metoda `clearInterval()` șterge cronometrul setat cu metoda `setInterval()`.


```js
let intervalID = setInterval(
    function() {
        console.log('1 sec. passed');
    }, 1000
);
```

Folosiți metoda `.clearInterval()` pentru a șterge un anumit timer. 

```js
clearInterval(intervalID);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Add Delete

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-28-29-solution-two-add-delete-items-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Add Delete" taskId="Js-Advanced-Dom-Manipulations-Add-Delete" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]
```
function addItem(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

***Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/JS-Advanced-DOM-Manipulations-Lab-02.Add-Delete.zip) **pentru această sarcină.**

Extindeți problema anterioară pentru a afișa un link `[Delete]` după fiecare element din listă. 

Dând click, vom șterge elementul, fără să primim vreo confirmare. 

# Exemplu
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

# Delegarea Evenimentelor 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-32-33-event-delegation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Capturarea și bubbling-ul ne permit să implementăm un eveniment folosind patternul numit **event delegation**.

Dacă avem o mulțime de elemente care sunt tratate în același fel, atunci, în loc să asignăm un organizator fiecăruia dintre ele, putem pune un singur organizator strămoșului lor comun. 

În organizator, folosim `event.target` pentru a vedea unde a avut loc, de fapt, evenimentul și astfel îl putem organiza. 

În acest exemplu, adăugăm un ascultător părintelui, acesta fiind elementul `<ul>`.

Apoi, în declarația 'if', adăugăm o condiție, astfel încât dacă dăm click pe elementul `<li>`, metoda `console.log()` să afișeze un mesaj care să ne spună exact pe ce element am dat click.


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

**Avantaje:**

- Cod de calitate

- Economie de memorie

- Performanță mai bună

- Mai puține manipulări DOM

**Dezavantaje:**

- Nu toate evenimentele apar bubble

- Moștenitorul oprește propagarea 

- Poate încărca mult CPU


[/slide]

