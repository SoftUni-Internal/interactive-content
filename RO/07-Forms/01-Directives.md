# Directive

[slide hideTitle]

# Prezentare Generală a Directivelor

js-angular-forms-3-4-Directives-and-directives-overview

Există trei tipuri de directive în Angular:  **Components**, **Attribute**, și  **Structural**.

## Directivele Componente

**Componentele** Angular sunt un **subset** de directive, asociate întotdeauna cu un **șablon**.

Doar o componentă poate fi instanțiată pentru un anumit element dintr-un șablon.

Deoarece componentele sunt bazate pe șabloane, acest lucru ne permite să construim **interfețe de utilizator** bogate, utilizând o sintaxă HTML.

Acest HTML este apoi inserat direct în **DOM**.

O componentă trebuie să aparțină unui **NgModule** pentru a fi disponibilă pentru alte componente sau aplicație.

## Directive Privind Atributele

Directivele privind atributele modifică aspectul sau comportamentul unui **element**, **componente** sau al unei alte **directive**.

De exemplu, directiva încorporată **NgStyle** poate modifica mai multe stiluri de elemente în același timp.

Exemplele includ: 

- **Evidențierea** textului unui element
- **Concentrarea** pe intrare atunci când are loc o anumită acțiune
- Afișarea unei definiții pentru un cuvânt atunci când utilizatorul **plasează sau face clic** pe un element
- **Ascunderea și afișarea** unui modul când se face clic pe un buton

## Directive Structurale

Directivele structurale sunt responsabile pentru layout-ul **HTML**.

Acestea schimbă structura DOM, de obicei prin **adăugarea**, **eliminarea** sau **manipularea** elementelor.

Iată câteva dintre directivele structurale încorporate:

- **NgIf** - acceptă o expresie care se evaluează fie la `true` sau la `false`
- **NgFor** și  **NgForOf** - randează șabloane pentru fiecare articol dintr-o colecție
- **NgSwitch** - acceptă o declarație de comutare

Sunt ușor de recunoscut:

```js
<div *ngIf="hero" class="name">{{hero.name}}</div>
```

Așa cum se arată mai sus, un asterisc `*` precede numele atributului unei directive.

[/slide]

[slide hideTitle]

# Compararea Directivelor

js-angular-forms-5-Directives-Comparison

## Directivele Privind Atribute

Directivele privind atributele au aspectul și stilul lor de layout.

Cu alte cuvinte, se ocupă de schimbarea aspectului și comportamentului unui element DOM.

O directivă de atribut are o singură componentă pe un element gazdă, dar acceptă mai multe directive.

Câteva exemple includ directivele  `ngStyle` și `ngClass`.

### `ngStyle`

Directiva `ngStyle` este folosită pentru a seta proprietățile stilului CSS ale unui element:

```js
<some-element [ngStyle]="{'font-style': styleExpression}">...</some-element>
```

Este declarată folosind paranteze pătrate cu cuvântul cheie `ngStyle` în interior.

Fiecare proprietate de stil este definită la fel ca într-un fișier `CSS`:

```js
{'max-width.px': widthExpression}
```

### `ngClass`

Folosim `ngClass` pentru a atribui și elimina clase CSS dintr-un element HTML.

Acceptă trei tipuri de expresii:

- `string` - clasele din șir sunt adăugate după ce sunt împărțite de un spațiu

```js
<div [ngClass]="'main navbar'">...</div>
```

- `Array` - clasele sunt adăugate în același aranjament ca matricea

```js
<article [ngClass]="['secondary', 'last-article']">...</article>
```

- `Object` - cheile sunt clase CSS care se adaugă atunci când expresia dată în valoare se evaluează la o valoare adevărată, altfel sunt eliminate

```js
<ul [ngClass]="{'first': true, 'second': true, 'third': false}">...</ul>
```

## Directive Structurale

Scopul principal al directivelor structurale este de a defini și modifica aspectul HTML și structura DOM.

Este important de reținut că putem aplica o singură directivă structurală unui element gazdă.

Există trei directive structurale principale în Angular: `*ngIf`, `*ngFor`, și `*ngSwitch`.

[/slide]

[slide hideTitle]

# Construirea unei Directive Simple Privind Atributele

js-angular-forms-6-Build-a-Simple-Attribute-Directive

O directivă de atribut necesită construirea unei clase de controler adnotate cu decoratorul `@Directive`.

```js
import { Directive } from '@angular/core'
```

De asemenea, puteți genera o directivă cu CLI Angular:

```js
ng generate directive highlight
```

Această comandă va crea un fișier  `highlight.directive.ts` în directorul `src/app`,  precum și un fișier de testare `spec.ts`. 

Apoi, directiva poate fi importată în matricea de declarații din `AppModule`.

Angular CLI se ocupă automat de asta.

**Selectorul** este înconjurat de **paranteze pătrate** ca în exemplu.

```js
@Directive({
    selector: '[appHighlight]' 
})
export class HighlightDirective {
    constructor() { }
}
```

[/slide]

[slide hideTitle]

# Atașarea Stilurilor la Elementele de Referință

js-angular-forms-7-Attach-Styles-to-Referenced-Elements
js-angular-forms-8-Warning - Use-Renderer2

Injectați elementul de referință și schimbați culoarea de fundal ca în exemplul de mai jos.

```js
export class HighlightDirective implements OnInit {
    constructor(private el : ElementRef) {}
    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

**Notă:** Nu este o practică bună să accesați direct elementele DOM prin **ElementRef**.

Angular nu se limitează să ruleze numai pe browser.

Poate rula și cu  **service workers**.

**Services Worker** este un mediu în care DOM este **inaccesibil**.

Utilizați **Renderer2** pentru a manipula elemente DOM.

```js
import { Renderer2 } from '@angular/core'
```

[/slide]

[slide hideTitle]

# Utilizarea Renderer2

js-angular-forms-8-Warning - Use-Renderer2

Pentru a utiliza Renderer2, trebuie să-l injectăm.

În acest fel, putem accesa metodele sale și putem modifica DOM.

```js
constructor( private renderer: Renderer2) { }
ngOnInit() {
    this.renderer.setStyle(
        this.el.nativeElement,
        'background-color', 
        'red'
    );
}
```

În acest exemplu, folosim callback-ul `setStyle` pentru a seta un stil CSS la elementul curent.

Acceptă trei argumente:

- **elementul**
- **numele** stilului
- Valoarea **corespunzătoare**

Renderer2 are multe alte metode, cum ar fi `setProperty`,` setValue` și `removeStyle`.

[/slide]

[slide hideTitle]

# Răspunsul la Evenimente

js-angular-forms-10-Respond-to-Events

O directivă ar putea fi mai dinamică.

Poate detecta când utilizatorul mută mouse-ul în sau din element și răspunde prin setarea sau ștergerea culorii de evidențiere.

```js
import { HostListener } from '@angular/core'
```

Acum, vom adăuga două handlere  de evenimente care răspund atunci când mouse-ul intră sau iese.

Folosim decoratorul **HostListener**.

```js
@HostListener('mouseenter') onMouseLeave(e) {
    this.highlight('yellow');
}
@HostListener('mouseleave') onMouseLeave(e) {
    this.highlight('blue');
}
```

În acest exemplu, setăm culoarea unui element la galben atunci când are loc un eveniment `mouseenter`.

Când indicatorul mouse-ului părăsește elementul, culoarea va fi setată la albastru.

[/slide]

[slide hideTitle]

# Folosirea HostBinding

js-angular-forms-11-Using-HostBinding

Folosim **decoratorul** `HostBinding` pentru a marca o proprietate DOM ca proprietate obligatorie pentru gazdă.

De asemenea, furnizează metadate de configurare.

Angular efectuează verificări automate la legările proprietății gazdei în timpul detectării modificărilor.

Dacă este detectată o modificare de legare, aceasta actualizează elementul gazdă al directivei.

```js
import { HostBinding } from '@angular/core'

export class BasicHighlightDirective {
    @HostBinding('style.backgroundColor')
    backgroundColor: string;
    highlight(color: string) {
        this.backgroundColor = color;
    }
}
```

În codul de mai sus, creăm o directivă care setează proprietatea CSS `backgroundColor` pe un element.

[/slide]
