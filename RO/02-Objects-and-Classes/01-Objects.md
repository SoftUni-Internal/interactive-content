# Obiecte

[slide hideTitle]
# Ce este un obiect?

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-3-4-objects-what-is-an-object-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Obiectele** din **JavaScript**, similar cu **Java**, pot fi comparate cu obiectele din viața reală.

Un obiect constă din mai multe **variabile** - numite **proprietăți** și **funcții** - numite **metode**.

Acesta este un exemplu de obiect simplu `country`:

```js live
let country = {
    name: 'United Kingdom',
    capital: 'London',
    population: 64886004,
    language: 'english'
};

console.log(country.name);
```

Pentru a defini un obiect în JavaScript, folosim **acolade**.

Acest obiect are **patru proprietăți** - `name`, `capital`, `population` și `language`.

Putem **accesa** valoarea unei proprietăți scriind numele clasei, urmat de un punct `.` și numele proprietății (de exemplu `country.name`).

[/slide]

[slide hideTitle]
# Variabile care dețin referințe

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-5-variables-holding-references-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Obiectele** sunt un tip de date de referință.

Spre deosebire de tipurile de date primitive, cum ar fi `Număr` și `Șir`, tipurile de referință dețin doar **indicatorul** pentru datele din memorie.

Variabilelor cărora li se atribuie o valoare neprimitivă li se oferă o **referință** la acea valoare:

``` js live
let personOne = {
    name: 'Michelle',
    age: '35',
    city: 'Los Angeles'
};

let personTwo = personOne;

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);

personOne.name = 'Maria';

console.log(`The first person's name is ${personOne.name}.`);
console.log(`The second person's name is ${personTwo.name}.`);
```
 
În acest exemplu, creăm un obiect `personOne` căruia îi atribuim următoarele proprietăți: **name**, **age** și **city**. 

Această valoare este stocată în memorie și **numai referința** este atribuită variabilei.

Când atribuim `personOne` celei de-a doua variabile, care este `personTwo`, creăm o copie a **referinței** care arată spre memorie. 

Ca rezultat, când afișăm proprietățile **name** ale ambelor obiecte pe consolă, primim același rezultat- `Michelle`.

Când schimbăm `personOne.name` pentru a fi egal cu `Maria`, modificăm **obiectul** stocat în memorie. 
 
Deoarece `objectTwo` este pur și simplu o referință la aceeași valoare, obținem același rezultat atunci când aplicăm `console.log` ambelor proprietăți - `Maria.`

[/slide]

[slide hideTitle]
# Proprietățile obiectului

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-6-object-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când o variabilă este alocată unui **obiect**, aceasta se numește o **proprietate**.

Singura diferență dintre ele este că proprietățile **aparțin** unui obiect.

Declararea unei proprietăți se face folosind perechi **cheie-valoare** în format `cheie: valoare`:

```js live
let color = {
    name: 'red',
    rgbValues: [255, 0, 0],
    hexTriplet: '#FF0000'
    
};

console.log(color);
```

După cum putem vedea, proprietățile pot avea diferite **tipuri de date**.

În acest exemplu, obiectul `color` are trei proprietăți.

| **Numele proprietății** | **Valoarea proprietății** | **Tipul de date** |
|---|---|---|
|name|red|**Șir**|
|rgbValues|`[255, 0, 0]`|**Matrice**|
|hexTriplet|\#FF0000|**Șir**|

[/slide]

[slide hideTitle]
# Atribuirea și accesarea proprietăților

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-7-8-assigning-and-accesssing-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **două** sintaxe pentru atribuirea și accesarea proprietăților - **notație punct** și **notație paranteză**.

## Notație punct

Obținerea unei proprietăți folosind notația punct, așa cum sugerează și numele, are următoarea sintaxă: `obiect.proprietate`

Fiind **mai rapid și mai ușor de scris**, este cel mai des utilizat mod de manipulare a obiectelor.

```js live
let artist = {};
artist.firstName = 'Elton';
artist.lastName = 'John';
artist.age = 74;
artist.genres = ['Pop rock', 'Glam rock', 'Soft Rock'];

console.log(`${artist.firstName} ${artist.lastName}`)
```

În acest exemplu, creăm un obiect `artist` gol.

Ulterior, îi atribuim patru proprietăți - `firstName`, `lastName`, `age` și `genres`.

## Notație paranteză

Un **dezavantaj** obișnuit al notației punct este faptul că **nu permite** utilizarea **simbolurilor speciale**, cum ar fi cratimele.

Notarea paranteză rezolvă această problemă acceptând șiruri, numere și chiar matrice și obiecte ca chei, deși acesta din urmă nu este recomandat.

Sintaxa pentru un selector paranteză arată astfel: `obiect[cheie]`

```js live
let student = {
    name: 'Joseph',
    'school-name': 'SoftUni'
}

console.log(student['school-name']);
console.log(student.school-name);
```

După cum putem vedea, utilizarea notării punct în acest exemplu are ca rezultat  `ReferenceError`.

Notarea în paranteză permite, de asemenea, selectarea cheilor folosind **variabile**::

```js
let car = {
    color: 'blue',
    brand: 'Toyota',
    year: 2015
}

let x = 'brand';

console.log(car[x]);
```

## Accesarea proprietăților neatribuite

Încercarea de a accesa o proprietate obiect neatribuită returnează `undefined` (nedefinită):

```js live
let book = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    genre: 'Novel'
};

console.log(book.age);
```

Acest obiect `book` are trei proprietăți: **title**, **author** și **genre**.

Nu are o proprietate **age**, deoarece ar fi irelevantă.

Ca rezultat, valoarea `book.age` este `undefined`.

[/slide]

[slide hideTitle]
# Problemă rezolvată: City Record
[code-task title="City Record" taskId="java-path-js-advanced-objects-and-classes-city-record" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cityRecord(name, population, treasury){
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Veți primi ca argumente urmatoarele date ale unui oraș: **name** (șir), **population** (număr) și **treasury** (număr). 

Setați-le ca **proprietăți** ale unui obiect și **returnați-le**.

## Exemplul Unu

|**Intrare**|**Ieșire**|
|---|---|
| cityRecord('Tortuga', 7000, 15000) | \{ name: 'Tortuga', population: 7000, treasury: 15000 \} |

## Exemplul Doi

|**Intrare**|**Ieșire**|
|---|---|
| cityRecord('Santo Domingo', 12000, 23500) | \{ name: 'Santo Domingo', population: 12000, treasury: 23500 \} |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
cityRecord('Tortuga', 7000, 15000)
[/input]
[output]
\{ name: 'Tortuga', population: 7000, treasury: 15000 \}
[/output]
[/test]
[test open]
[input]
cityRecord('Santo Domingo', 12000, 23500)
[/input]
[output]
\{ name: 'Santo Domingo', population: 12000, treasury: 23500 \}
[/output]
[/test]
[test]
[input]
cityRecord('Hong Kong', 50000, 45262)
[/input]
[output]
\{ name: 'Hong Kong', population: 50000, treasury: 45262 \}
[/output]
[/test]
[test]
[input]
cityRecord('California', 75203720, 45121262)
[/input]
[output]
\{ name: 'California', population: 75203720, treasury: 45121262 \}
[/output]
[/test]
[test]
[input]
cityRecord('Paris', 75203720, 45121262)
[/input]
[output]
\{ name: 'Paris', population: 75203720, treasury: 45121262 \}
[/output]
[/test]
[test]
[input]
cityRecord('Barcelona', 47297302, 91231262)
[/input]
[output]
\{ name: 'Barcelona', population: 47297302, treasury: 91231262 \}
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Metodele obiectelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-9-object-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Împreună cu proprietățile, obiectele JavaScript pot avea și **metode**.

O metodă este pur și simplu o **funcție** care este **parte a unui obiect**.

Vă puteți gândi la metode ca **acțiuni** - acestea pot fi folosite pentru **preluarea, modificarea sau ștergerea datelor** din obiectul lor părinte.

Există mai multe modalități de a **defini** metodele - două dintre ele necesită declararea metodei în momentul **creării clasei**, în timp ce a treia permite adăugarea uneia **ulterior**.

## Declararea proprietății

Adăugarea unui obiect utilizând sintaxa proprietății este foarte asemănătoare cu adăugarea unei proprietăți obișnuite - `cheie: valoare() {...}`

Diferența principală este că valoarea proprietății este o funcție:

``` js live
let dog = {
    name: 'Cooper',
    breed: 'German Shepherd',
    bark: function() {
        console.log('Woof🐶');
    }
}

dog.bark();
```

În acest obiect `dog`, am adăugat o metodă `bark` care imprimă o ieșire pe consolă.

Apoi, scriem numele obiectului (`dog`), urmat de un punct și cheia -`bark`.

La final, adăugăm paranteze de deschidere și închidere pentru a o **invoca**

## Declararea funcției

Definirea unei metode folosind o declararea unei funcții este identică cu scrierea unei funcții obișnuite.

Singura cerință este că trebuie să se afle în corpul obiectului - între parantezele de deschidere și de închidere:

```js live
let city = {
    name: 'Berlin',
    country: 'Germany',
    population: 3769495,
    summarize() {
        console.log(`${this.name} is a city in ${this.country} with a population of ${this.population}.`);
    }
}

city.summarize();
```

În acest exemplu, creăm o funcție `summarize`.

Folosim cuvântul cheie `this` pentru a ne referi la **instanța obiectului curent**.

## Adăugarea unei metode unui obiect existent

Putem adăuga o metodă unui obiect deja definit fie folosind notația **punct** sau **paranteză**:

```js
let person = {
    name: 'Charlotte',
    age: 20
};
person.sayHello = () => console.log('Hi, guys');
```

Aici, adăugăm o **funcție săgeată** `sayHello` obiectului `person`.

[/slide]

[slide hideTitle]
# Ștergerea proprietăților

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-10-deleteing-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a elimina o proprietate dintr-un obiect, folosim operatorul `delete` (șterge).

```js live
let fruit = {
    type: 'apple',
    species: 'Malus domestica',
    calories: 52
}

console.log(fruit.species);

delete fruit.species;

console.log(fruit.species);
```

În acest exemplu, creăm un obiect `fruit` care are o proprietate `species` și îi imprimăm valoarea pe consolă.

Apoi, îl **ștergem** folosind sintaxa `delete obiect.proprietate`.

Dacă încercăm să îi accesăm valoarea pentru a doua oară, vom primi `undefined`.

[/slide]

[slide hideTitle]
# Compararea obiectelor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-11-comparing-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După cum am aflat mai devreme, obiectele sunt un tip de date **de referință**.

De aceea, atunci când le **comparăm**, putem ajunge la rezultate confuze.

## Compararea a două obiecte distincte cu proprietăți identice

În acest exemplu, creăm două obiecte separate - `bagOne` și `bagTwo`.

Cu toate acestea, ambele au **proprietăți complet identice**.

```js live
let bagOne = { 
    compartments: 10,
    volume: 32
}

let bagTwo = { 
    compartments: 10,
    volume: 32
}

console.log(bagOne == bagTwo);
console.log(bagOne === bagTwo);
```

Când le comparăm, se dovedește că nu sunt egale între ele.

Asta pentru că, deși pot arăta la fel, indică locuri diferite din memorie.

## Compararea a două variabile care indică un singur obiect

Aici, creăm un obiect și îl atribuim variabilei `bagOne`.

De data aceasta, în loc să scriem din nou obiectul, am setat `bagTwo` să fie egal cu valoarea `bagOne`.

```js live
let bagOne = { 
    compartments: 10,
    volume: 32
}

let bagTwo = bagOne;

console.log(bagOne == bagTwo);
console.log(bagOne === bagTwo);
```

Ambele comparații returnează `true`, deoarece cele două variabile conțin o referință la **exact același obiect**.


[/slide]

[slide hideTitle]
# Cheile și valorile obiectului

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-12-13-looping-through-objects-and-objects-keys-and-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După cum știm deja, fiecare intrare obiect este o pereche `cheie: valoare`.

Există mai multe metode încorporate în prototipul `Object` care oferă o modalitate de **buclare prin** obiecte.

## Object.entries

Metoda `Object.entries ()` returnează o **matrice** cu **perechi cheie-valoare** din **fiecare** intrare obiect:

```js live
let cat = {
    name: 'Tommy',
    age: 5
};

console.log(Object.entries(cat));
```

## Object.keys

`Object.keys ()` returnează o matrice care conține cheile tuturor proprietăților obiectului (fără valori):

```js live
let giraffe = {
    name: 'Nairobi',
    height: 480
};

console.log(Object.keys(giraffe));
```

## Object.values

Metoda `Object.values ​​()` returnează o matrice care conține valorile tuturor proprietăților obiectului (fără a include cheile acestora):

```js live
let swan = {
    name: 'Olivia',
    lake: 'Reindeer Lake'
};

console.log(Object.values(swan));
```

[/slide]

[slide hideTitle]
# Bucla For-in

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-14-for-in-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi o **buclă for-in** pentru a itera prin **cheile** unui obiect.

În acest fel, putem accesa **valoarea** unei chei date:

``` js live
let pencil = {
    brand: 'BIC',
    type: 'liquid graphite',
    size: 2,
    shape: 'hexagonal'
};

for (let key in pencil) {
    console.log(`${key}: ${pencil[key]}`);
}
```

[/slide]

[slide hideTitle]
# Bucla For-of

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-15-for-of-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **buclă for-of** iterează prin **valorile** unui obiect.

Pentru a utiliza una, trebuie să trecem un obiect enumerabil, cum ar fi matricile returnate de `Object.keys()`, `Object.values()` și `Object.entries()`:

``` js live
let computer = {
    processor: 'Intel Core i7',
    memory: 'SKHynix 8GB DDR4',
    hardDrive: 'Samsung 256GB SSD'
};

for (const key of Object.keys(computer)) {
    console.log(key);
}

console.log('------------------------------');
  
for (const value of Object.values(computer)) {
    console.log(value);
}

console.log('------------------------------');

for (const [key, value] of Object.entries(computer)) {
    console.log(`computer.${key} = ${value}`);
}
```

[/slide]

[slide hideTitle]
# Problemă: Town Population
[code-task title="Town Population" taskId="java-path-js-advanced-objects-and-classes-town-population" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function townPopulation(townData){
    // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Descriere
Sarcina dvs. este să creați un registru pentru diferite **orașe** și **populația** lor. 

## Intrare
**Intrarea** vine ca o matrice de șiruri. 

Fiecare element va conține date pentru un oraș și populația acestuia în următorul format: `{townName} <-> {townPopulation}`

Dacă primiți același oraș de două ori, **va trebui să adăugați** **populația dată** la **cea existentă**.

## Ieșire 
Ar trebui să tipăriți toate orașele și populația lor. 

## Exemplul unu

|**Intrare**|**Ieșire**|
|---|---|
|townPopulation(\['Bucharest \<-\> 1830000', 'Vienna \<-\> 1900000', 'New York \<-\> 10000000', 'Washington \<-\> 2345000', 'Las Vegas \<-\> 1000000'\])| Bucharest : 1830000 |
| | Vienna : 1900000 |
| | New York : 10000000 |
| | Washington : 2345000 |
| | Las Vegas : 1000000 |

## Exemplul doi

|**Intrare**|**Ieșire**|
|---|---|
|townPopulation(\['Istanbul \<-\> 100000', 'Hong Kong \<-\> 2100004', 'Jerusalem \<-\> 2352344', 'Mexico City \<-\> 23401925', 'Istanbul \<-\> 1000'\])| Istanbul : 101000 |
| | Hong Kong : 2100004 |
| | Jerusalem : 2352344 |
| | Mexico City : 23401925 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
townPopulation(['Bucharest \<-\> 1830000', 'Vienna \<-\> 1900000', 'New York \<-\> 10000000', 'Washington \<-\> 2345000', 'Las Vegas \<-\> 1000000'])
[/input]
[output]
Bucharest : 1830000
Vienna : 1900000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
[/output]
[/test]
[test open]
[input]
townPopulation(['Istanbul \<-\> 100000', 'Hong Kong \<-\> 2100004', 'Jerusalem \<-\> 2352344', 'Mexico City \<-\> 23401925', 'Istanbul \<-\> 1000'])
[/input]
[output]
Istanbul : 101000
Hong Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
[/output]
[/test]
[test]
[input]
townPopulation(['CreativityDead \<-\> 1234', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'CreativityDead \<-\> 1111', 'ImDead \<-\> 0'])
[/input]
[output]
CreativityDead : 6789
ImDead : 0
[/output]
[/test]
[test]
[input]
townPopulation(['Test \<-\> 0', 'Out \<-\> 0', 'Txt \<-\> 5'])
[/input]
[output]
Test : 0
Out : 0
Txt : 5
[/output]
[/test]
[test]
[input]
townPopulation(['Silent Hill \<-\> 0', 'Tin City \<-\> 0', 'King Island \<-\> 0', 'Kern \<-\> 0', 'Three Saints Bay \<-\> 1'])
[/input]
[output]
Silent Hill : 0
Tin City : 0
King Island : 0
Kern : 0
Three Saints Bay : 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
