# Utilizarea "this"

[slide hideTitle]

# "this" Într-o Metodă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-8-9-this-in-a-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când se află în interiorul unei metode, `this` este folosit pentru a accesa informațiile, stocate în obiect, care "deține" obiectul:

```js live
let cat = {
    name: 'Muffins',
    breed: 'British Shorthair',

    info: function() {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function() {
        return this;
    }
}
console.log(cat.info());
console.log('******************');
console.log(cat.whatIsThis());
```

Exemplul de mai sus ilustrează modul în care `this` este folosit pentru a recupera valorile, stocate în proprietățile obiectului **cat**.

De fiecare dată când folosim `this` într-o metodă, se referă la obiectul în sine și, prin urmare `cat.whatIsThis()` returnează obiectul cat.

De asemenea, puteți prelua valorile proprietăților obiectului înlocuind `this` cu numele obiectului.

```js
info: function() {
        return `${this.name} is a ${this.breed}.`
    },
    whatIsThis: function() {
        return cat;
    }
```

Aceasta nu este o practică bună și va face codul mai greu pentru a menține.
 
Imaginați-vă că doriți să schimbați numele obiectului în viitor și să nu îl actualizați în metodele dvs.!

**Notă:** Încercarea de a returna **name** sau **breed** fără `this` va avea consecințe neintenționate.

Dacă nu există nicio variabilă cu același nume în afara scopului proiectului, rezultatul va fi **undefined**. 

Dacă există o variabilă cu același nume deja definită și dacă este în domeniul său de aplicare, valoarea acesteia va fi returnată.

[/slide]

[slide hideTitle]

# "this" se Referă la Obiectul Parent

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-10-this-refers-to-the-parent-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Luați în considerare exemplul de mai jos:

```js live
// Defining a function
function printContext() {
    console.log(this === global);
}
// Creating an object called user
let user = {
    count: 10,
    printContext: printContext,
    printAnotherContext: function() {
        console.log(this === global);
    }
}

user.printContext();

let globalFunction = user.printAnotherContext;

globalFunction();

user.printAnotherContext();
```

Să vedem ce se întâmplă în codul pas cu pas pentru a-l înțelege mai bine.

Definirea unei funcți `printContext()` care verifică dacă `this===global` (`this===window` dacă o rulează în browser) și imprimă rezultatul pe consolă.

Crearea unui obiect **user** cu două metode:

- `printContext: printContext` - stochează funcția **printContext** definită la pasul 1 într-o metodă cu același nume

- `printAnotherContext: function() { console.log(this === global); }` - metoda **printAnotherContext** verifică dacă  `this === global` și imprimă rezultatul pe consolă.

Apelarea `user.printContext();` invocă metoda care aparține obiectului **user** object. Returnează: **false**, deoarece `this` este utilizat în cadrul metodei unui obiect și returnează obiectul în sine

`let globalFunction = user.printAnotherContext;` 

Acum definim o nouă funcție și atribuim metoda **printAnotherContext** obiectului **user**.

Returnează **true**, deoarece acum `this` este apelat de funcția **globalFunction** și nu din metoda obiectului utilizatorului.

`this` este într-adevăr egal cu **global**.

- `user.printAnotherContext();` va returna **false** deoarece `printAnotherContext()` este o metodă a obiectului **user** și `this` va returna obiectul în sine așa cum a făcut-o cu metoda **printContext**.

**Să rezumăm:**

- Folosit în metode, `this` face referire la obiectul căruia îi aparține metoda

- Folosit într-o funcție, `this` face referire la obiectul **global** cum ar fi **window** în browser-ul sau **global** în Node

[/slide]

[slide hideTitle]

# În Evenimente/Events

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-11-in-events-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Atunci când este utilizat în event handler, `this` indică elementul specific din care s-a declanșat evenimentul.

Dacă creați un fișier HTML și atașați următorul event handler la un element cu id "button", care ar fi rezultatul rezultat în consolă?

```js
function solve() {
    let button = document.getElementById('button');

    button.addEventListener('click', function(e) {
        console.log(this);
    });
}
```

Când se face referire la `this` din cadrul unui eveniment, acesta returnează elementul de la care a fost chemat evenimentul.

În cazul nostru, button va fi elementul care a apelat funcția `solve()`.

Îl puteți testa singur creând un fișier HTML cu următorul exemplu de cod

```js
<html>
   <body>
      <p>Welcome to your code playground!</p>
      <button id="button">Click me</button>
      <script>
         function solve() {
             let button = document.getElementById('button');
         
             button.addEventListener('click', function (e) {
                 console.log(this);
             });
         }
         solve();
      </script>
   </body>
</html>
```

Dacă faceți clic pe butonul din exemplul, se produce următoarul rezultat în consolă:

[image assetsSrc="function-context-04.png" /]

[/slide]

[slide hideTitle]

# In Classes

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-12-this-in-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când este utilizată în clase, valoarea `this` se referă la instanța clasei pe care o inițializați utilizând cuvântul cheie `new`.

```js live
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.displayInfo = function() {
            console.log(`The vehicle is a ${this.make} ${this.model}.`);
        }
    }
};

let car = new Vehicle('Toyota', 'Corolla');
car.displayInfo();
```

În exemplul de mai sus, accesăm proprietățile clasei **car** folosind `this.`.

Amintiți-vă că am aflat anterior despre utilizarea cuvântului cheie `this` în obiectele și s-a comportat în același mod.

Acest lucru se datorează faptului că clasele sunt șabloane pentru crearea obiectelor.

[/slide]
