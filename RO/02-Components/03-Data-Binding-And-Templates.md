# Data Bindings And Templates

[slide hideTitle]

# Templates and Data Binding Overview

Angular-Components-16-17-Data-Binding-And-Templates

Vizualizarea fiecărei componente are un șablon atașat acesteia.

Un șablon este doar HTML care definește cum va fi randată componenta.

Aranjamentul **vizualizărilor e ierarhic**, permițându-ne să **modificăm** sau să **afișăm** și să **ascundem** întregi secțiuni UI sau chiar pagini sub forma unor unități. 

În interiorul unui șablon, putem să:

- **Randăm proprietățile matricei**, utilizând repetorul `*ngFor` 
- **Randăm proprietățile imbricate** ale unui obiect
- Utilizăm **instrucțiuni condiționate**, utilizând `*ngIf`
- **Atașăm evenimente** și ne ocupăm de acestea în cadrul componentei

Șablonul unei componente poate fi definit cu inline HTML sau putem specifica un fișier extern din care să încărcăm HTML-ul.


[/slide]

[slide hideTitle]

# Render An Array Using NgFor

Angular-Components-18-Render-an-array-using-ngfor

Aici avem prezentat un exemplu de clasă numită "**GamesComponent**" și un HTML asociat acesteia.

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```
Acest șablon include elemente de **sintaxă de șablon Angular**, `*ngFor`, `{{game.title}}`.

Elementele de sintaxă de șablon precizează lui **Angular cum să randeze HTML-ul**, utilizând logica de program și datele.

Directiva `*ngFor` este utilizată pentru **iterarea printr-o listă**. 

Observați faptul că simbolul `*` este necesar înainte de cuvântul-cheie "ngFor".

Acest simbol înseamnă că atributul de după acesta este o directiva structurală.

```html
<h1>Games List</h1>
    <p>Pick a game to Buy</p>
<ul>
  <li *ngFor="let game of games">
    {{game.title}}
  </li>
</ul>
```

Codul crează un nou element în listă pentru fiecare joc din matricea de jocuri.

Dacă dorim să accesăm oricare dintre proprietățile obiectului **game**, realizăm acest lucru prin scrierea `game.propertyName`

Aceste nume sunt arbitrare. Le putem denumi în orice mod dorim.


[/slide]

[slide hideTitle]

# Conditional Statements Using ngIf

Angular-Components-19-Conditional-Statements-Using-ngif

Aici se află același exemplu:

```js
export class GamesComponent {
    games : Game[];
    constructor() {
        this.games = [ // Array of games ]
    }
}
```

Creăm instrucțiuni de tip **if** utilizând cuvântul-cheie `*ngIf`, așa cum apare în codul HTML de mai jos.

```html
<h1>Games List</h1>
<p>Pick a game to Buy</p>
<ul>
  <li *ngFor="let game of games">
   <div>
    {{game.title}}
   </div>
   <span *ngIf="game.price >= 100">
    Price: {{game.price}}
   </span>
  </li>
</ul>
```

Codul de mai sus verifică proprietatea **price** a fiecărui obiect din matrice și **afișează prețul doar dacă acesta e mai mare sau egal cu 100**.

[/slide]

[slide hideTitle]

# Attach Events

Angular-Components-20-Attach-Events

Putem afișa conținut adițional cu ajutorul gestionarilor de evenimente.

Gestionarii de evenimente sunt utilizați pentru ascultarea de anumite evenimente, iar aceștia pot fi atașați elementelor HTML.

Aici avem un exemplu HTML de **sintaxă pentru cum să implementăm legătura de evenimente în Angular**:

```html
<button (click)="showContent($event)">Show Content</button>
```

Legătura de evenimente **ascultă pentru apariția evenimentelor de click ale butonului** și apelează metoda `showContent()` a componentei oridecâteori are loc un click.

```js
export class GamesComponent {
    public games: Game[];
    showContent: boolean;

    constructor() {
        this.games = [ // Array of games ]
    }

    showAdditionalContent($event) {
        this.showContent = true;
    }
}
```

[/slide]

[slide hideTitle]

# Binding Attributes

Angular-Components-21-Binding-attributes

Este o idee bună să setăm mereu o proprietate pentru element cu o legătură de proprietate, acolo unde e posibil.

Atunci când nu avem o proprietate de element pentru a crea o legătură, putem utiliza **legătura de atribute**.

Sintaxa pentru legătura de atribute este **similară cu sintaxa de legătură de proprietăți**, dar în locul unui **element de proprietate între paranteze**, utilizăm numele atributului cu prefixul **attr**, urmat de un **dot**. 

Ulterior, setăm **valoarea atributului la o anumită expresie** care se evaluează la un șir de caractere.

```js
export class GamesComponent {
    imgUrl: string;
    constructor() {
        this.imgUrl = "a url to an image"
    }
}
```

```html
<img [attr.src]="imgUrl" />
```

Notă: Dacă expresia se evaluează la `null` sau `undefined`, întregul atribut va fi eliminat.

[/slide]

[slide hideTitle]

# Binding CSS Classes

Angular-Components-22-Binding-css-classes

## Legătura cu Multiple Clase CSS 

```html
<div [class]="expression">Bad curly</div>
```
Angular va adăuga clasa la expresia pe care o alegem. 

Această expresie poate fi:
- Un șir de caractere cu nume de clase, delimitat prin spații
- Un obiect ce conține nume de clase sub formă de chei și expresii de tip truthy/falsy drept valori
- O matrice ce conține nume de clase


## Legătura cu un nume specific de clasă

Pentru a crea o legătură cu o singură clasă, utilizăm **clasa de prefix**, urmată de un **punct** și de **numele clasei CSS**.

De exemplu: `[class.special]="isSpecial"`. 

Angular adaugă **clasa atunci când expresia de legătură** `isSpecial` este de tip **truthy** și elimină clasa atunci când expresia este de tip **falsy**.

```html
<div [class.special]="isSpecial">
 The class binding is special
</div>

<div class="special"[class.special]="!isSpecial">
 This one is not so special
</div>
```

Atunci când creăm o legătură cu o singură clasă, expresia utilizată poate fi de tip boolean, undefined sau null, iar valorile de date de intrare date drept exemplu pot fi de tip true sau false.


[/slide]

[slide hideTitle]

# Binding Styles

Angular-Components-23-Binding-styles

## Legătura cu atributul de stil 

Dacă trebuie să creăm o **simplă legătură de stil**, utilizăm **stilul prefix**, urmat de un **punct** și de **numele proprietății stilului CSS**.

De exemplu: `[style.color]="isSpecial ? 'red' : 'green'"`. 

Angular setează **proprietatea cu valoarea expresiei de legătură**, care este de obicei un șir de caractere.

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >
 Save
</button>
```

## Legătura de stil cu unități

Stilurile precum **font-size**, **width**, etc, au o extensie de unitate. 

Următorul exemplu **setează condițional dimensiunea fontului** în unitatea "em", dacă `isSpecial` este de tip truthy.

În mod alternativ, setează dimensiunea fontului din unitatea "%" dacă `isSpecial` este de tip falsy.

```html
<button [style.font-size.em]="isSpecial ? 3 : 1">
 Big
</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50">
 Small
</button>
```

[/slide]

[slide hideTitle]

# Reference And Null-Safe Operator

Angular-Components-24-Reference-and-nullsafe-operator

Putem utiliza variabile **dintr-o parte de șablon** într-o **altă parte de șablon**.

O variabilă de șablon poate **să facă referință la următoarele**:

- Un **element DOM** dintr-un șablon
- O **directivă**
- Un **element**
- **TemplateRef**
- O **componentă web**

În cadrul șablonului, **utilizăm simbolul hash** `#` pentru a declara o **variabilă de șablon**. 

Următoarea **variabilă de șablon** `#phone` declară o variabilă phone pe un element `<input>`.

```html
<input #phone placeholder="phone number" />
```

Putem face referință **la o anumită variabilă de șablon oriunde** în cadrul șablonului componentei. 

Aici, un `<button>` se referă la variabila phone.

```html
<button (click)="callPhone(phone.value)">Call</button>
```

În exemplul de mai jos, Angular randează vizualizarea lui "**game**" înainte ca lui "**game**" să i se asigneze o valoare.

Acest lucru va genera o **excepție**. 

`?` se oprește din evaluare atunci când "**game**" este **null** sau **undefined**, ceea ce se întâmplă de obicei atunci când **datele sunt preluate în mod asincron**, de exemplu, de la server, ceea ce poate necesita ceva timp.

```js
<div>The current hero's name is {{game?.title}}</div>
<div>The null hero's name is {{game && game.name}}</div>
```

Următoarea dată când **se detectează o schimbare**, legăturile vor fi reevaluate. 

Când "game" e diferit de **null** sau **undefined**, atunci se va crea o legătură cu `game.title`.

[/slide]

[slide hideTitle]

# Template Expressions

Angular-Components-25-Template-Expressions

O expresie de șablon **produce o valoare**.

Angular **execută expresia** și o asignează unei **proprietăți a unei ținte de legătură**.

Se pun expresiile dintre paranteze în următorul fel: `{{1 + 1}}`. 

Ținta poate fi un **element HTML**, o **componentă** sau o **directivă**.

Aceste expresii de șablon **arată aproape ca JavaScript**, dar acestea **nu sunt JavaScript pur**. 

Multe expresii JavaScript sunt **expresii legale de șabloane**, dar nu e cazul tuturor.

Expresiile JavaScript **care au** sau promovează efecte colaterale sunt **interzise**, inclusiv:

- Asignări `(=, +=, -=, ...)`.
- New - operatorul `new`.
- Operatori de incrementare și decrementare `(++ and --)`.

[/slide]

[slide hideTitle]

# Types Of Data Binding

Angular-Components-26-Types-of-data-binding

Există trei tipuri de creare de legături de date.

**De la sursa de date la vizualizare**

Utilizarea de acolade duble `{{ }}` pentru a afișa conținut din model:

```js
{{expression}}
[target]="expression"
bind-target="expression"
```

**De la vizualizare la sursa de date**

Putem **realiza legături de date dintr-o vizualizare** pentru o componentă, **utilizând tehnica creării legăturii de evenimente**.

```js
(target)="statement"
on-target="statement"
```

**Crearea de legături bidirecționale**

Sincronizarea legăturilor de date în Angular **între partea de model și partea de vizualizare**.

Când datele din partea de **model se schimbă**, **se schimbă și partea de vizualizare**, iar când datele din cadrul părții de vizualizare se schimbă, **are loc o actualizare a datelor din partea de model**. 

Acest lucru **are loc în mod automat**, fapt care reprezintă o asigurare a conceptului că atât partea de **model**, cât și partea de **view** sunt actualizate mereu.

Directiva `ng-model` permite existența unei **legături bidirecționale între** partea de model și cea de vizualizare.

```js
[(ngModel)]="expression"
bindon-target="expression"
```

[/slide]
