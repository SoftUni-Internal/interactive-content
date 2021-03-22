# Organizarea Evenimentelor DOM

[slide hideTitle]

# Propagarea Evenimentelor 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-11-12-dom-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Propagarea evenimentelor este un mod de a descrie o "stack" de evenimente care sunt declanșate în browser.  

În browser vom avea 3 faze ale propagării evenimentului: 

- Faza de **capturare**: evenimentul merge către element

- Faza de **țintă**:  evenimentul ajunge la elementul țintă 

- **Bubbling** phase: evenimentul se ridică la suprafață dinspre element 

[image assetsSrc="Dom-Manipulation(2).gif" /]

Atunci când dăm click pe elementul `<A>`, evenimentul merge mai întâi pe lanț, în jos, către element, aceasta fiind numită **capturing phase**, apoi ajunge la țintă și declanșează **target phase**, iar apoi merge în sus, ceea ce se numește **bubbling phase**, apelând organizatorii în drumul său. 

Pentru a prinde un eveniment în **capturing phase**, trebuie să setăm opțiunea de captură a organizatorului la **true**.

Pe perioada acestei faze, doar capturatorii găsiți pe drumul dinspre fereastră spre părintele țintei evenimentului sunt apelați. 

Dacă acest parametru este omis, valoarea sa inițială este **false**, iar ascultătorul nu este un **capturer**.


```js
el.addEventListener('click', listener, true);
```

Când un eveniment se întâmplă cu un alt element, ea pornește organizatorul pentru acesta, apoi pentru părintele acestuia, iar apoi pentru toate, în drumul său către alți strămoși. Aceasta este **bubbling phase**.

In acest exemplu, organizatorul este asignat elementului `<div>` element, dar pornește, de asemenea, și dacă dăm click pe un tag imbricat cum ar fi `<em>` sau `<code>`.

```js
<div onclick="alert('The handler!')">
  <em>Click on <code>ME</code>, or click on the main <code>DIV</code> runs.</em>
</div>
```

Un eveniment bubbling a urcă spre obiectul "document", iar unele evenimente chiar ating "window", apelând toți organizatorii de pe traseu. 

Putem opri faza **bubbling** folosind o metodă numită `event.stopPropagation()`.

În acest exemplu, `body.onclick` nu va funcționa dacă dăm click pe `<button>`.

```js
<body onclick="alert(`the bubbling doesn't reach here`)">
  <button onclick="event.stopPropagation()">Click me</button>
</body>
```

[/slide]

[slide hideTitle]

# Tipuri de Evenimente în DOM API

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-13-event-types-in-dom-api-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iată câteva tipuri de evenimente folosite în DOM.

| **Mouse events** | **Touch events** | **DOM/UI events** | **Keyboard events** | **Focus events** | **Form events** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| click | touchstart | load | keydown | focus (got focus) | input |
| mouseover | touchend | unload | keypress | blur (lost focus) | change |
| mouseout | touchmove | resize | keyup |  | submit |
| mousedown | touchcancel | dragstart / drop |  |  | reset |
| mouseup |  |  |  |  |  |

[/slide]

[slide hideTitle]

# Proprietățile și Metodele Obiectelor Event

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-14-15-event-object-properties-and-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să examinăm Obiectul Eveniment. 

Funcția **event handler function** poate fi o **anonymous function** sau o **function declaration**.

Argumentul nostru `e`, care este pasat funcției, este **reference to the event object**.

Obicetul event are mai multe **properties** și **methods**. 

## Proprietăți

Unele dintre proprietăți sunt: 

- **target**

- **timeStamp** 

- **isTrusted**

- **ClientX / ClientY**

```js
addBtn.addEventListener("click", function(e){
    console.log(e.target);
})
```

Proprietatea **target** a evenimentului returnează elementul care a declanșat evenimentul.

Proprietatea **timeStamp** a evenimentului este doar în citire. 

Aceasta returnează **time in milliseconds** de la începutul vieții documentului curent până la momentul când a fost creat evenimentul. 

Proprietatea **isTrusted** returnează o valoare Booleană care indică dacă evenimentul este real sau nu. 

Proprietatea **clientX** returnează o coordonată orizontală (în acord cu aria client) a pointerului mouse-ului, atunci când un eveniment mouse este declanșat. 

Proprietatea **clientY** returnează coordonata verticală. 

## Metode

Câteva dintre metode sunt: 

- `preventDefault()`

- `stopPropagation()`

- `stopImmediatePropagation()`

Metoda `preventDefault()` îi spune userului dacă evenimentul nu este organizat explicit, pentru ca acțiunea sa să nu aibă loc așa cum s-ar fi întâmplat în mod normal. 

Metoda `stopPropagation()` previne propagarea mai departe a unui eveniment curent în fazele de capturare și bubbling. 

Metoda `stopImmediatePropagation()` previne apelarea altor ascultători ai aceluiași eveniment. 

[/slide]

[slide hideTitle]
# Problemă cu Soluție: List Of Items

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/02.JS-Advanced-DOM-Manipulations/RO/JS-Advanced-DOM-Manipulations-16-17-solution-list-of-items-html-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="List Of Items" taskId="Js-Advanced-Dom-Manipulations-lab-List-Of-Items" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function addItem(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

**Aici este un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-advanced/JS-Advanced-DOM-Manipulations-Lab-01.List-Of-Items.zip) **pentru această sarcină.**

Creați o funcție care **citește** un text din interiorul unui câmp de intrare și **adaugă** textul specificat unei liste din interiorul unei pagini HTML.

# Exemplu
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
