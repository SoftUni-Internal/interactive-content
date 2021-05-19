# Librărie Externă de Șablonare

[slide hideTitle]

# Ce este lit-html?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-15-16-What-Is-Lit-Html-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Lit-html** este o **o librărie de șablonare** - face parte din Proiectul Polymer.

Aceasta este construită pe baza **literalilor șablon etichetați**, care este o proprietate JavaScript introdusă în ECMAScript 6.

Literalii șablon admit **intrări pe mai multe linii** și **interpolare**.

Literalii șablon etichetați ne permit să plasăm un **nume de funcție** înainte unui backtick de deschidere.

**Funcția** corespunzătoare își va **primi** **argumentele** prin intermediul literalului șablon:

```js
html`<h1>I am ${name} from ${city}</h1>`
```

Acesta este un exemplu pentru modul în care arată un **șablon lit-html**.

Vom învăța ce face eticheta `html` într-unul din videoclipurile următoare.

[/slide]


[slide hideTitle]

# Noțiuni de Bază

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-17-Getting-Started-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există câteva moduri de a **instala** lit-html:

## Instalarea lit-html folosind un Pachet NPM

Pentru a instala lit-html prin intermediul **Node Package Manager**\(NPM\), trebuie mai întâi să avem **Node.js** [instalat](https://nodejs.org/en/).

Deschideți un terminal în **directorul de proiect** și scrieți:
[image assetsSrc="js-application-client-side-rendering-lit-html-install-1.png" /]

`npm install lit-html`

[image assetsSrc="js-application-client-side-rendering-lit-html-install-2.png" /]

După aceea, puteți folosi lit-html prin importarea acestuia în fișierul țintă:

`import {html, render} from 'lit-html'`

[image assetsSrc="js-application-client-side-rendering-lit-html-install-3.png" /]


Funcția de etichetă `html` este folosită de lit-html pentru a specifica **șablonul** care trebuie randat.

Funcția `render` acceptă un șablon ca prim parametru și îl **randează**.

## Importarea dintr-un CDN online

Puteți de asemenea să importați lit-html **fără** a trebui să îl instalați, folosind CDN-ul `unpkg`.

În partea de sus a fișierului vostru script scrieți:

`import {html, render} from 'https://unpkg.com/lit-html?module';`

## Încercați-l Online

Puteți folosi oricare dintre următorii **editori online** pentru **a încerca** lit-html:

- [CodeSandbox](https://codesandbox.io/s/wq2wm73o28)
- [JSBin](https://jsbin.com/nahocaq/1/edit?html,output)
- [StackBlitz](https://stackblitz.com/edit/js-pku9ae?file=index.js)

[/slide]


[slide hideTitle]

# Utilizare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-18-Usage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a folosi **lit-html**, trebuie să îl **importați** printr-o cale:

```js
<script type="module">
  import {html, render} from './node_modules/lit-html/lit-html.js';
  
  // ...
</script>
```

Deoarece instrucțiunea `import` funcționează doar în script-uri modul, este **important** să adăugați `type="module"` ca atribut pentru eticheta `script`.

Putem importa **fișiere externe**:

```js
<script type="module" src="index.js"></script>
```

Este recomandat să folosiți [Live Server](https://github.com/tapio/live-server#readme) pentru a vă porni aplicația.

Acest aspect economisește timp prin reîncărcarea **automată** atunci când detectează schimbări în codul vostru.

Puteți să îl instalați scriind `npm install -g live-server` pe linia de comandă.

[image assetsSrc="js-application-client-side-rendering-live-server-install-2.png" /]

Pentru **a porni serverul**, scrieți `live-server`.

[image assetsSrc="js-application-client-side-rendering-live-server-install-3.png" /]

În mod implicit, serverul **va începe să ruleze pe port 8080**.

O fereastră se va deschide **automat** în browser.

Dacă acest lucru nu se întâmplă - specificați **localhost:8080**.

[/slide]


[slide hideTitle]

# Randarea unui Șablon

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-19-Rendering-A-Template-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cele două API-uri ale **lit-html** sunt **html** și **render**.

- **html**

Eticheta de șablon **html** este folosită pentru **a scrie** șabloane.

- **render()**

Funcția **render()** este folosită pentru **a randa** un șablon la un **container DOM**:

`render(template(data), document.querySelector('#main'));`

Aceasta acceptă doi parametri:

- **Șablonul** care trebuie randat 
  * această funcție de șablon acceptă **datele** dinamice folosite pentru **a popula** șablonul

- **Nodul părinte** în care va fi randat

[/slide]

[slide hideTitle]

# Funcții Etichetă / Șabloane Etichetate

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-20-Tag-Functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șabloanele etichetate** sunt apeluri de funcții care își primesc argumentele de la un **literal** șablon:

```js
import {
    html,
    render
} from 'lit-html';

const template = (username) => {
    return html`
    <p> Welcome back, ${username}!</p>
  `;
};

const element = document.querySelector('#main');

render(template('amanda_johnson'), element);

```

Acest exemplu va randa un **paragraf** în nodul părinte cu `id`-ul `main`.

Textul `Welcome back, amanda_johnson!` va fi **afișat**.

[/slide]

[slide hideTitle]

# Legarea Atributelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-21-Attribute-Binding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem lega expresii de **atributele** unui nod și de valorile **proprietății**:

```js
let cssClasses = ['main', 'important'];

// ...

const demoTemplate = (cssClasses) => html`<div class=${cssClasses.join(' ')}>This text will be stylised</div>`;
```

Din moment ce atributele HTML sunt **șiruri**, fiecare expresie pe care o folosim trebuie să **returneze** o valoare care poate fi **convertită** în șir.

Șablonul de mai sus va fi randat precum urmează:

```html
<div class="main important">This text will be stylised</div>
```

## Legarea Atributelor Booleene

Pentru a denota un atribut ca fiind **boolean**, plasăm un semn de întrebare înaintea numelui său - `?attribute`:

```js
const template = (data) => html`<input type="submit" value="Submit">
     <span ?hidden=${!data.hasError}>Incorrect input</span>`;

```

Acest aspect poate fi util atunci când vrem să afișăm informații adiționale în funcție de o **condiție**.

Un exemplu în acest sens este afișarea și ascunderea unui **mesaj de eroare**.

[/slide]

[slide hideTitle]

# Legarea Proprietăților

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-22-Property-Binding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prin plasarea unui **punct** `.` înaintea **numelui proprietății**, putem să legăm elementele de **proprietățile JavaScript** ale unui nod:

```js
const template = (data) => html`<user-list .items=${users} id="users"></user-list>`;
```

Legarea proprietăților poate fi de asemenea folosită pentru **a transmite date** (de exemplu o listă de utilizatori) **subcomponentelor**.

[/slide]


[slide hideTitle]

# Tratarea Evenimentelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-23-Handling-Events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sintaxa pentru **tratarea evenimentelor** arată ca o legare de proprietate, dar are **ptefixul** `@` și numele **evenimentului** după simbol - `@onchange`:

```js
const myButton = () => html`<button @click=${handleClick}>Click Here</button>`;
```

În acest exemplu, folosim obiectul `handleClick` drept **event listener**, dar putem folosi de asemenea și o **funcție simplă**.

```js
let handleClick = {

    handleEvent(event) {
        console.log('You have clicked a button.');
    },

    capture: true,
};

```

Acest obiect include funcția `handleEvent`, care primește obiectul `event` ca parametru.

Variabila booleană `capture` este utilizată pentru a asigura trimiterea evenimentelor de acest tip către **listener-ul înregistrat** mai întâi.

[/slide]

[slide hideTitle]

# Instrucțiuni Condiționale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-24-Conditional-Statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Spre deosebire de alte motoare de șablonare, precum Handlebars, lit-html **nu are construcții încorporate de control al fluxului**. 

Putem folosi o **expresie ternară** Javascript normală:

```js
html`
  ${product.isInStock
      ? html`<button @click=${purchaseHandler}>Buy</button>`
      : html`The selected product is out of stock.`
  }
`;

```

Adițional, putem utiliza **structuri condiționale** precum instrucțiunile "if" sau "switch-case".

[/slide]

[slide hideTitle]

# Randarea Listelor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-25-List-Rendering-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru **a randa liste**, folosim `Array.map` pentru **a transforma** o listă de date în mai multe **șabloane**:

```js
html`
  <ul>
    ${products.map((product) => html`<li>${product.name}</li>`)}
  </ul>
`;

```

În acest exemplu, creăm o **o listă neordonată** și generăm elemente `li` prin **intermediul procesului de mapping printr-o listă** de produse.

[/slide]

[slide hideTitle]

# Directive: Clase și ClassMap

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-26-Directives-Classes-And-Classmap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Directivele** sunt **funcții** personalizate care **modifică modul în care lit-html randează valorile**.

Directiva `classMap` este utilizată pentru a seta o **listă de clase** bazată pe un **obiect**:

```js
import {
    classMap
} from 'lit-html/directives/class-map.js';

let classes = {
    enabled: true,
    hidden: false,
    important: true
};

const template = (classes) => html`<div class=${classMap(classes)}>This text is important.</div>`;

const element = document.querySelector('#root');

render(template(), element);

```

Acest șablon va fi **randat** în următorul mod:

`<div class="enabled important">This text is important</div>`

[/slide]

[slide hideTitle]

# Directive: Stiluri și StyleMap

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-27-Directives-Styles-And-Stylemap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`styleMap` setează **stiluri** asupra unui obiect folosind un **obiect** cu proprietăți de stil:

```js
import {
    styleMap
} from 'lit-html/directives/style-map.js';

let stylesArr = {
    backgroundColor: 'aqua',
    color: 'black'
};

html`<h1 style=${styleMap(stylesArr)}>This title is black</h1>`;
```

**Șablonul randat** are următoarea formă:

```js
<h1 style="background-color:aqua;color:black;">This title is black</h1>
```

[/slide]


[slide hideTitle]

# Directive: repeat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-28-Directives-Repeat-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Directiva `repeat` creează **șabloane multiple** pe baza unei **colecții** date și **le actualizează** în mod eficient când sunt detectate **schimbări**:

```js
import {
    repeat
} from './node_modules/lit-html/directives/repeat';

const artists = (artistInfo) => html`
  <ul>
    ${repeat(artistInfo, (i) => i.id, (i, index) => html`
      <li>${index}: ${i.name}, ${i.genre}</li>`)}
  </ul>
`;

const artistInfo = [{
        id: 1,
        name: 'Rihanna',
        genre: 'R&B'
    },
    {
        id: 2,
        name: 'David Bowie',
        genre: 'Rock'
    },
    {
        id: 3,
        name: 'Daft Punk',
        genre: 'Electronic'
    }
];

const element = document.querySelector('#artists-container');

render(artists(artistInfo), element);

```

`repeat()` acceptă **trei argumente**:

- **Colecția** sursă

- O **funcție** care returnează o **cheie** pentru fiecare element

- O **funcție** care returnează un **șablon** pentru un singur element

[/slide]

[slide hideTitle]
# Demo: lit-html

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/06-JS-Applications-Client-Side-Rendering/RO/JS-App-Client-Side-Rendering-30-Lit-Html-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]
[/slide]
