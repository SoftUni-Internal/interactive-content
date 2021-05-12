# Programarea Asincronă

[slide hideTitle]

# Bucla de Evenimente

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-3-4-Asynchronous-Programming-and-the-Event-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Bucla de evenimente în JavaScript este **locul unde sunt procesate toate evenimentele de intrare**.

Aceasta pune în coadă handlerele (gestionarii) de evenimente în **Event queue** și le execută în **Call stack**, producând cod JS.

Bucla de evenimente monitorizează **Call stack** și **Callback queue**.

Bucla de eveniment ia primul **eveniment** din coadă și îl împinge în Call stack (dacă este goală).

[image assetsSrc="jsapps-async-programming-event-loop.png" /]


[/slide]

[slide hideTitle]

# Programarea Asincronă în JavaScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-5-6-Asynchronous-Programming-in-JavaScript-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ca limbaj **cu un singur fir de execuție**, JavaScript are doar **o singură stivă de apeluri** și **o singură memorie heap**.

Cu alte cuvinte - bucăți de cod sunt executate **pe rând**.

În acest fel, fiecare dintre aceste bucăți trebuie să aștepte finalizarea celei anterioare.

Executarea unui astfel de cod poate **bloca o întreagă pagină web** din cauza timpului de așteptare a **unei funcții**, care este o problemă serioasă de experiență a utilizatorului.

Există mai multe moduri de a ocoli natura sincronă a JavaScript-ului:

- `callback` - callback este o funcție, care este transmisă ca **un argument către o altă funcție** și efectuează o anumită operație în interiorul acesteia

```js
function calculateTax(income) {
    console.log(income * 0.2);
}

function outer(callback) {
    let income = 1000;
    callback(income);
}

outer(calculateTax); // outer este apelat prin calculateTax ca un callback
```

Callbacks sunt folosite atunci când o funcție trebuie să aștepte finalizarea altei funcții înainte de executare.

- `promise` - Promisiunea este un obiect, **reprezentând date care vor fi obținute ulterior**

Permite programului să ruleze fără a aștepta datele respective.

```js
let promise = new Promise(function(resolve, reject) {
    // Obțineți date asincron, utilizați resolve sau reject după.
});
```

- `async function` - În principiu **construit pe baza promisiunilor**, dar mult mai ușor de utilizat. Permite un **cod mai curat și mai lizibil**

```js
async function getData(url) {
    let data = await fetch(url);
    let text = await data.text();

    console.log(text);
}
```

Este important să știți că cuvântul cheie `async` **trebuie plasat în fața funcției** și cuvântul cheie `await` este plasat în fața operațiilor asincrone.

[/slide]

[slide hideTitle]

# Exemplu: Programarea Asincronă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-7-Asynchronous-Programming-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cel mai simplu mod de a înțelege programarea sincronă și cea asincronă este să vă imaginați o companie care are un magazin fizic și un site web.

- În magazinul fizic, oamenii trebuie să **aștepte la coadă** pentru a cumpăra ceva: programare sincronă

- Cu toate acestea, pe site, sute de oameni pot cumpăra articole **independent unul de celălalt**: programare asincronă

Iată o diagramă a timpului de funcționare a unui cod pentru a vizualiza mai bine conceptul:

[image assetsSrc="JS-Applications-Asynchronous-Programming-1.png" /]


Iată un exemplu de comportament asincron în JavaScript:

```js live
function printSam() {
    console.log('Sam');
}

function printGeorge() {
    console.log('George');
}

console.log('Jessica');

setTimeout(printSam, 3000);

console.log('Tyson');

setTimeout(printGeorge, 1000);
```

Ceea ce se întâmplă aici este că codul este executat **linie cu linie**:

- În primul rând, se imprimă "Jessica”

- După aceea, funcția callback `printSam` este **programată să ruleze după trei secunde**

- "Tyson" este tipărit deoarece cele trei secunde ale `printSam` **nu au trecut încă**

- `printGeorge` este **programat să ruleze după o secundă** în timp ce cele trei secunde ale lui `printSam` încă nu au trecut

- O secundă trece și  `printGeorge` este executat

- Trec trei secunde și `printSam` este executat

Dacă același cod ar fi executat sincron, numele ar fi în următoarea ordine:

- "Jessica"

- "Sam"

- "Tyson"

- "George"

[/slide]
