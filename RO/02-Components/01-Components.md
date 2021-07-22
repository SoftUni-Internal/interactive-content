# Ideea De Bază a Componentelor

[slide hideTitle]

# Ideea Din Spatele Componentelor

Merge: Angular-Components-3-4-Components with: Angular-Components-5-The-Idea-behind-components



Componentele sunt elementele de bază ale tuturor aplicațiilor unghiulare.

Definim comportamentul unei componente utilizând o clasă TypeScript.

Fiecare componentă are propriul **HTML** în linie sau șablon sau poate avea propriile stiluri CSS atașate.

Clasa interacționează cu vizualizarea printr-un **API** de **proprietăți** și **metode**.

Decoratorul `@Component` identifică clasa imediat sub ea ca o clasă componentă și îi specifică metadatele. 

În codul dat exemplu mai jos putem vede că **AppComponent** este doar o clasă, fără nici o notație sau sintaxă unghiulară specială. 

Nu este o componentă până nu vedem decoratorul `@Component` pentru a-l marca ca una.

```js
import { Component } from '@angular/core';
```

```js
@Component({
    selector: 'app-root',
    template: `<h1>{{title}}</h1>`,
    styles: [ `h1 { background-color: red; }` ]
})
```

Instrucțiunea  **selector** este selectorul CSS care va fi folosit pentru referirea la componentă.

**Șablonul** păstrează conținuturile HTML ale componentei.


**Stiurile** sunt șablonul CSS template l componentei. 

Instrucțiile  **Șablon** și **stiluri** pot încărca și fișiere CSS și HTML externe.


```js
export class AppComponent { title = 'App Title'; }
```

Această ultimă linie de cod este ultima parte necesară pentru a putea exporta **AppComponent** și pentru a-l putea folosi oriunde în aplicație.

De asemenea trecem o proprietate numită **titlu** cu o valoare de **App Title**, care va înlocui proprietatea `{{title}}` odată ce componenta este afișată într-o vizualizare.

Aranjamentul vizualizărilor este ierarhic, permițându-ne să modificăm sau să afișăm și să ascundem secțiuni sau pagini întregi de interfață bazate pe permisiunile utilizatorului sau acțiunile întreprinse de utilizator.

Componentele pot interacționa între ele și pot fi încorporate în alte componente creând o ierarhie.

Vizualizarea gazdă a șablonului este definită de șablonul care este direct asociat cu o componentă.

[image assetsSrc="Angular-Components.png" /]

[/slide]

[slide hideTitle]

# Crearea Manuală a Componentelor 

Componentele sunt elementele cele mai de bază ale unei aplicații Angular.

Sarcinile principale ale unei componente sunt afișarea unei anumite pagini sau secțiuni și legarea datelor între **vizualizare** și **model**.

O componentă conține 3 părți:

- Fișier șablon: o vizualizare HTML
- Fișier TypeScript: un model
- Fișier de stil: stil CSS

Pentru a crea o componentă avem nevoie de **Component Decorator**. 

Ne oferă metadate și îi spune lui Angular despre crearea **Componentei** care nu este o clasă normală.

Mai întâi, importăm **Componenta** din biblioteca `@angular/core`. 

Apoi creăm componenta angulară.

Decoratorul `@Component` marchează clasa **TypeScript** ca și componentă și ne permite să-i adăugăm metadate.

În cele din urmă, exportăm clasa.

O putem apela apoi în modulul aplicației sau în alte locuri din proiect.

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

Scrierea HTML și CSS în linie sau utilizarea fișierelor externe depinde de noi și de modul în care dorim să ne structurăm proiectul.

În unele situații când șablonul necesită mai multe linii de cod, ar putea fi mai bine să creați un fișier HTML sau CSS extern pentru a menține lucrurile organizate.

**Selector** este folosit pentru apelarea componentei Înăuntrul altor fișiere HTML a le proiectului ca o etichetă HTML: `<app-home></app-home>`

**Șablonul** este locul unde se află vizualizarea HTML a componentei.


**templateUrl** este calea către fișierul HTML astfel: `templateUrl: './app.component.html'`

**styleUrls** poate fi mai mult de unul. Aici se află stilul CSS al componentei. De obicei este o matrice.

**Furnizorii** sunt o listă de servicii, care poate fi injectată folosind **Injecția de Dependență**.

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

Un exemplu cu `furnizori`:

```js
@Component({
    selector: 'app-home',
    templateUrl: 'registerform.html'
    styleUrls: ['./app.component.css']
  providers: [RegistrationService]
})
```

Acest lucru se face atunci când dorim să încărcăm cu nerăbdare un modul care are nevoie de un serviciu specific pentru a funcționa.

Serviciul va fi disponibil doar pentru componentă și descendenții săi.

Celelalte componente din același modul nu îl vor putea accesa.

După ce am creat o componentă trebui să o adăugăm în mulțimea **declarațiilor** în modulul aplicației.

**NgModules** ajuta la organizarea unei aplicații în blocuri coerente de funcționalitate.

Matricea de declarații este locul în care toate componentele, directivele și conductele sunt adăugate pentru a le face utilizabile în acel modul special.

Adăugarea acestora la această matrice asigură faptul că diferitele elemente pot comunica între ele.

Fără această declarație, o componentă nu ar putea utiliza directive și conducte.

**Directivele** sunt atașate elementelor DOM pentru a le îmbunătăți într-un fel funcționalitatea.

**Conductele** sunt elemente care primesc unele date ca intrare și ieșire, datele fiind într-un format diferit.


```js
@NgModule({
    declarations: [ AppComponent, HomeComponent ]
})
```

[/slide]

[slide hideTitle]

# Crearea Componentelor Folosind CLI

Putem folosi **Angular CLI**, care este o interfață de linie de comandă pentru Angular, pentru a genera o nouă componentă.

Scrieți următoarea comandă: `ng generate component home`.

Interfața din linia de comandă creează un folder nou cu numele componentei aflate în `src/app/home/` și importă componenta în modulul aplicației.

Aceasta este cea mai rapidă metodă de a creda o nouă componentă.

Când vom crea o componentă prin CLI, câteva lucruri vor fi adăugate pentru noi:
- un folder cu numele componentei
- un fișier component
- un fișier șablon HTML
- un fișier șablon CSS
- un fișier de specificații de testare

Comportamentul implicit al comenzii `ng generate component` poate fi ajustat.

[/slide]
