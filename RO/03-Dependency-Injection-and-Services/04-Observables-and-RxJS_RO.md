# Observabile și RxJS

[slide hideTitle]

# Programarea Funcțională

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/23-24-RxJS-and-Observables-and-functional-programming-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Premisa programării funcționale este aceea că funcțiile ar trebui să **nu aibă efecte secundare**, ceea ce înseamnă că o funcție **face doar un singur lucru** și nu schimbă starea. 

Există și câteva **excepții** de la această regulă, în special când discutăm de **biblioteci IO** sau funcții.

Funcțiile pot fi tratate **în același fel ca și obiectele** în programarea orientată pe obiect.  

Ele pot fi asignate unor **variabile**, le puteți returna din **funcții**, și chiar le puteți **pasa altor funcții**.
 
Tot ce se poate face cu **obiecte**, se poate face și cu **funcții**. 

În limbajul de specialitate, ne referim la acest comportament sub denumirea de tratare a funcțiilor drept "**cetățeni de primă clasă**".

Programarea funcțională este **declarativă**, ceea ce înseamnă că utilizează funcții pentru a executa operațiuni specifice fără a menține starea.

Acest aspect o diferențiază de programarea **imperativă**, unde soluția este descrisă pas cu pas.  

Drept urmare, codul funcționaș tinde să fie **mai predictibil** și **mai ușor de testat**, și în același timp, este și mai **concis**.

Majoritatea aplicațiilor moderne JavaScript se folosesc de idei din sfera programării funcționale.

## Programarea Asincronă

JavaScript este un limbaj **single-threaded** (cu un singur fir), ceea ce înseamnă că majoritatea codului care a fost **scris** până acum este rulat ca un **proces unic** pe computer. 

Codul rulează **de sus în jos**, mereu în aceeași ordine, într-un mod foarte **procedural**.

Execuția asincronă începe într-un mod **foarte similar** din partea de sus a fișierului și execută codul până când **ajunge în partea de jos**, dar pe parcursul execuției, ar putea să interacționeze cu anumite funcții asincrone. 

Funcțiile asincrone care se produc pe parcursul procesului sunt executate separat față de restul codului. 

Acest lucru se întâmplă din cauză că funcția **petrece mai mult timp** până când returnează un rezultat.

Ca urmare a acelui proces, s-ar putea să avem **șiruri diferite** multiple care rulează codul în diferite secțiuni. 

În timpul execuției asincrone, codul ar putea fi executat **într-o ordine diferită**, ceea ce face dificil lucrul cu acesta.

Asta înseamnă că trebuie să ne **asigurăm că acest cod va funcționa** indiferent de ordinea de execuție.

[/slide]

[slide hideTitle]

# Programarea Funcțională Reactivă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/26-Functional-Reactive-Programming-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Programarea funcțională reactivă** este o **paradigmă** pentru dezvoltarea de software care integrează fluxul de timp și **evenimentele compoziționale** în programarea funcțională, **lucru care funcționează adesea** cu fluxuri asincrone de date.

Aceste fluxuri de date pot proveni din sau pot fi create de:

- Evenimente **UI** 
- **Click-uri** sau apăsarea unor taste
- **Cereri HTTP** fișiere de sistem sub forma unor matrici sau obiecte sau șiruri  
- **Memoria masinii** sau cache 

Un flux este definit drept o succesiune de **evenimente aflate în curs de desfășurare** ordonate în timp. 

Acestea sunt doar câteva informații pe care le putem obține din fluxuri:

- Datele pe care ele **le emit, care se pot referi la absolut orice** și pot fi **de orice fel**
- **Erorile pe care le manifesta** atunci când ceva funcționează greșit 
- Un **semnal de notificare poate fi primit** atunci când sunt complete 

Fluxul începe cu un anumit **tip de eveniment** cu o valoare specifică precum **coordonatele unui click**.

Dacă **ceva nu funcționează corect** pe parcursul procesului de streaming, acest lucru poate **manifesta o eroare**.

**Aplicația noastră poate reacționa la eroare** în timp ce încă rulează și **va trimite un semnal atunci când a procesat-o**.

Majoritatea fluxurilor de tipul unui **HTTP GET request** sunt în cele din urmă **finalizate** după ce au parsat datele.

Unele fluxuri, totuși, pot să continue să ruleze **fără a se opri**.

De exemplu, puteți să obțineți un flux din **mișcarea mouse-ului**, care va **continua** până când mouse-ul se oprește.
 
Putem folosi observabilele pentru a lucra cu aceste fluxuri în Angular.

[/slide]

[slide hideTitle]

# Observabilul

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/25-The-Observables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Observabilele sunt folosite pentru a **monitoriza aceste fluxuri** și vor **emite** o funcție într-unul dintre următoarele cazuri:

- Dacă o valoare este omisă
- Dacă aăare o eroare
- Dacă este returnat un semnal de încheiere

Un observator poate fi utilizat pentru a se **abona** la observabili. Rețineți că un observabil poate avea multipli observatori. 

Putem interacționa cu un flux de date ca și când ar fi o **matrice normala** folosind metode aplicabile matricilor.

Elementele standard JavaScript ES5 sau chiar ES6 **nu pot fi utilizate pentru a lucra cu observabilii** sau cu **fluxurile**. 

Extensiile reactive precum ReactiveX (RxJS) sunt cele care **ne permit să le manipulăm**.

Observabilii pot fi folosiși pentru a livra valori multiple de **orice tip**, precum literali, mesaje sau evenimente.

Ei pot fi folosiți pentru:

- **A crea** fluxuri
- **A se abona** la fluxuri și a se  **dezabona** de la acestea
- **A reacționa** la noi valori
- **A combina** fluxuri pentru a construi unele noi

[/slide]

[slide hideTitle]

# Introducerea RxJS

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/27-Intoducing-RxJS-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

ReactiveX sau RxJS este acronimul de la **R**eactive E**x**tensions for **J**ava**S**cript. 

Este o bibliotecă pentru **compunerea unor programe asincrone** folosind **succesiuni observabile** și furnizează o **listă lungă de operatori** care ne permite să:

- **Filtrăm** observabilii
- **Selectăm** observabilii
- **Transformăm** observabilii
- **Combinăm** și compunem observabilii 

Extensiile reactive **nu sunt limitate** doar la JavaScript.

Ele sunt, de asemenea, **disponibile pentru multe dintre cele mai populare limbaje de programare** precum Java, C#, Scala, Clojure, Swift, și altele.

## Cum să Instalăm RxJS

Pentru a instala RxJS, deschideți un terminal în directorul principal al **proiectelor voastre Angular** și tastați `npm install rxjs`.

Puteți importa o funcționalitate dată cu CommonJS astfel:

```js
const { range } = require('rxjs')
const { map, filter } = require('rxjs/operators')
```

Puteți, de asemenea, să folosiți `import/export`:

```js
import { range } from 'rxjs'
import { map, filter } from 'rxjs/operators'
```

[/slide]

[slide hideTitle]

# Efectele Secundare ale Observabililor (Fierbite vs Rece)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/28-29-Observables-Side-Effect-(Hot-vs-Cold)-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Prezentarea generală a operatorului Tap

Operatorul `tap` execută un **efect secundar pentru fiecare emisie** pe fiecare observabil sursă.

El returnează un observabil care este **identic** către sursă cu o **funcție de reapelare** (**callback function**).

```js
const obs = range(1, 5)
  .pipe(
    tap(function (i) {
      console.log(`Hello ${i}`);
    })
  );
```

Metoda `pipe` (conductă) poate să primească un număr infinit de **argumente**.

Fiecare argument este un **operator** pe care vreți să îl aplicați **Observabilului**.

## Observabilii Reci (Cold)

Observabilii Cold (reci) **creează un producător de date** pentru fiecare abonat și **inițiază rularea imediat după abonare**.

```js
let coldObservable = Observable.create((observer : any) => {
    observer.next('Our cold observable is up and running');
    setInterval(() => {
        observer.next('Observable One');
    }, 3000);
});
```

Cu alte cuvinte, **succesiunea observabililor începe să împingă valorile** către observatori numai atunci când este apelată prin Abonare. 

```js
let firstSubscription = coldObservable.subscribe(
    i => console.log(`first subscription ${i}`)
  );
```

## Observabilii Fierbinți (Hot)

Atunci când vine vorba despre observabili hot (fierbinți), producătorul trebuie să fie **creat** sau **activat** în afara  **abonamentului**.

Folosind operatorului `share` din RxJS , putem să transformăm orice observabil din rece în fierbinte:

```js
let hotObservable = Observable.create((observer : any) => {
    observer.next('Our hot observable is up and running');
}).pipe(share());
```

Pentru a aplica operatorul `share`, trebuie să îl pasăm ca argument metodei `pipe`.

El returnează un nou Observabil care îl impărtășește pe cel original.

Dacă **nu mai sunt noi abonați**, observabilul nou-creat se va **dezabona** de la observabil sursă.

În concluzie, observabilii fierbinți creează mai întâi un **producător de date**, și fiecare **abonat** primește datele de la **un producător**, începând din momentul abonării.

[/slide]

[slide hideTitle]

# Operatori RxJS des Utilizați

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/30-Commonly-Used-RxJS-Operators-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aceștia sunt printre cei mai des întâlniți și utilizați operatori în RxJS:

- `map` - (harta) - Transfromă fiecare **valoare** în **sursa** furnizată.

```js
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

let src = from([1, 2, 3]);

let demo = src.pipe(map(value => value * 3));

let subscribe = demo.subscribe(val => console.log(val));
```

În acest exemplu, am **multiplicat** valoarea fiecărui element cu **3**.

Consola va afișa următorul rezultat:

```
3
6
9
```

- `filter` - Itemii **filtre** emiși de un Observabil dat și care se referă doar la acei itemi care **satisfac** o **condiție** dată.

```js
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

let src = from([20, 5, 7, 78, 2, 31]);

let demo = src.pipe(filter(number => number >= 20));

let subscribe = demo.subscribe(value => console.log(value);
```

În acest exemplu, filtrăm numerele care **sunt mai mari sau egale** cu **20**.

Iar acesta este rezultatul corespunzător:

```
20
78
31
```

- `reduce` - Însumează valorile dintr-un observabil dat și returnează o valoare singulară.

```js
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

let src = of(11, 52, 19);

let demo = src.pipe(reduce((accumulator, value) => accumulator + value));

let subscribe = demo.subscribe(sum => console.log(sum));
```

În acest exemplu, am însumat cele trei elemente date de **sursă**.

Valoarea rezultată este egală cu **82**.

Puteți aprofunda mai mult subiectul ReactiveX [aici](http://reactivex.io).

[/slide]

[slide hideTitle]

# Prezentarea Generală a RxJS și FRP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/03-Dependency-Injection/31. RxJS-and-FRP-Overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Programarea Funcțională Reactivă (FRP)** folosește fluxuri pentru a manipula datele care sunt transmise sincron sau asincron.

În Angular, folosim **Observabilii** pentru a implementa FRP.

O bibliotecă populară pentru FRP este **RxJS**, care are în componență un proces de implementare pentru observabili și multe alte caracteristici.

[/slide]
