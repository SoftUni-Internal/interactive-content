[slide hideTitle]

# Modulele

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-43-44-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modulele în Node.js sunt grupuri de fișiere care **furnizează anumite funcționalități**.

Utilizarea modulelor aduce câteva beneficii, printre care enumerăm:

- **accesibilitate** și **reutilizare** îmbunătățite ale codului

- Separarea preocupărilor - ele operează în contextul **lor** propriu, **independent unele de altele**

- Îmbunătățirea **structurii** proiectului, care face codul **mai ușor de citit**

- Pot fi folosite **unele într-altele**

Cu alte cuvinte, modulele sunt precum **ramuri diferite ale unei companii** - mici, organizate cu grijă și responsabile pentru sarcina care le este atribuită.

Atunci când sunt puse laolaltă, ele devin un produs finit.

În Node.js, există trei tipuri de module:

- **Module centrale (Core)**

- **Module locale (Local)**

- **Module de la persoane terțe (Third-party)**

[/slide]

[slide hideTitle]

# Modulele Locale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-45-local-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modulele locale sunt **funcții** sau **variabile**, folosite local într-un proiect.

În mod tipic, trebuie să creați un folder separat pentru **servicii** sau pentru **controlori**.

Fișierele din acel folder vor fi utilizate pe parcursul întregii aplicații, prin intermediul unui import.

Iată un exemplu de structură a unui astfel de folder:

[image assetsSrc="JS-BackEnd-Intro-To-Nodejs-2.jpg" /]

Fișierul `simple-function.js` conține o funcție de bază care este **exportată ca modul local** și **poate fi utilizată și în alte fișiere**:

```js
function calculateTax(rate, amount) {
    return rate * amount;
}

module.exports = calculateTax;
```

Fișierul `app.js` file **importă un modul local și îi utilizează funcționalitatea** astfel:

```js
const calculateTax = require("./simple-function.js");

function doAccounting(income, propertyValue, VAT) {
    const incomeTax = calculateTax(0.2, income);
    const propertyTax = calculateTax(0.3, propertyValue);
    const vatTax = calculateTax(0.1, VAT);

    console.log(`Income tax -> ${incomeTax}$`);
    console.log(`Property tax -> ${propertyTax}$`);
    console.log(`VAT -> ${vatTax}$`);
}

doAccounting(20000, 50000, 1000);

/*
Income tax -> 4000$
Property tax -> 15000$
VAT -> 100$
*/
```

[/slide]

[slide hideTitle]

# Modulele Terților

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-46-third-party-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Node.js permite utilizarea **modulelor de la persoane terțe (third-party)**.

Așa cum reiese și din denumire, aceste module sunt **create de alte persoane** și **încărcate în domeniul public pentru a fi utilizate**.

Toate modulele terților sunt accesibile prin `npm` (**Node Package Manager**).

Fiecare modul este disponibil la link-ul oferit pe [npm](https://www.npmjs.com/) cu **informații suplimentare** precum:

- Ghidul de instalare

- Documentație

- Rapoarte privind erori și cele mai recente actualizări

- Lista persoanelor care contribuie la modulul respectiv

Pentru a instala un modul al unui terț, **deschideți un terminal și tastați**:

```js
npm install express

// Tastați numele modulului după npm install
```

Putem, de asemenea, să instalăm un modul, specificând câteva **opțiuni suplimentare**:

```js
npm install -g express

// Salvează modulul global pe computer în loc să îl aducă în folderul actual
```

```js
npm install mocha --save-dev

// Salvează modulul mocha drept dependență de dezvoltator, întrucât nu este necesar utilizatorilor
```

După instalare, putem folosi un modul produs de terți conform celor de mai jos:

```js
const express = require("express");
```

[/slide]

[slide hideTitle]

# Modulele Centrale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-47-core-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modulele centrale sunt **fundația** mediului Node.js.

Ele furnizează cele mai **de bază funcționalități** și sunt **încărcate automat** la inițializare.

Iată câteva dintre cele mai întâlnite module centrale:

## `url`(url-ul)

```js
const url = require("url");
```

Modulul `url` include **metode** de manipulare a URL-urilor, incluzând **parsarea** și **serializarea**.

De asemenea, are o cantitate mare de **proprietăți**, precum:

- `url.protocol` - folosit pentru accesarea sau schimbarea unui protocol url (de ex. din `http` în `https`)
- `url.pathname` - prin care putem accesa și modifica o porțiune a căii de acces a unui URL (`/profile`, `/products/3`)
- `url.search` - care poate fi folosită să modificăm sau să accesăm porțiunea de căutare a unui URL (`?title=QueryOne`)

## `path`(calea de acces)

```js
const path = require("path");

// Folosită pentru a opera cu calea de accesare a unui fișier.
```

## `fs`

```js
const fs = require("fs");

// Folosită pentru a opera cu sistemul de fișiere.
```

## `stream` - fluxul de date

```js
const stream = require("stream");

// Folosită pentru gestiunea fluxurilor de date.
```

[/slide]

[slide hideTitle]

# Modulele URL

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-48-49-url-modules-and-parts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Modulul `url` offeră câteva funcționalități pentru a executa **diverse operațiuni cu URL-uri**.

Cel mai des întâlnit motiv de a utiliza acest modul este pentru a **separa un URL în părți** și a **extrage informații** din acestea.

Un URL obișnuit este compus din **trei părți**:

- `host` (gazda) - locația principală, care mai poartă și denumirea de **domeniu**

- `path` (calea de acces) - locația conținutului necesar de pe domeniul respectiv

- `query` (căutarea) - parametrii suplimentare utilizați pentru schimbul de date sau pentru filtrarea datelor

Utilizând moduluil `url`, aceste părți pot fi **accesate** și **utilizate** astfel:

```js
// Exemplul de URL: http://www.localhost:3000/home?year=2017&month=february
```

```js
const url = require("url");
const urlObj = url.parse(req.url); // transformă URL-ul într-un obiect compus din mai multe părți

const host = urlObj.host;
console.log(host); // localhost:3000

const path = urlObj.path;
console.log(path); // "/home"

const query = urlObj.query;
console.log(query); // ?year=2017&month=february
```

[/slide]

[slide hideTitle]

# Modulul șir de Interogare (Query String) 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/01-Intro-to-NodeJS/interactive-js-backend-nodejs-50-query-string-module-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un șir de interogare este o modalitate de a **aloca valori** unor variabile și de a le **pasa drept parametri ai unui URL**.

Așa cum ați văzut și în slide-urile anterioare, acestea încep întotdeauna cu un semn de întrebare `?`:

```js
const queryString = "?name=David&age=35";
```

Fiecare parametru este o pereche de tip **cheie-valoare**, alăturate utilizarea semnului egal (=): `name=David`

**Parametrii** sunt conectați folosind semnul ampersand - `&`.

Modulul `querystring` în Node.js transformă astfel de șiruri în **obiecte de perechi de tip cheie-valoare**.

Iată cum parsați un șir de interogare:

```js
const qString = "?name=David&age=35";
const qs = require("querystring");

const queryObject = qs.parse(qString);

console.log(queryObject.name); // David
console.log(queryobject.age); // 35
```

Metoda `parse` acceptă argumentul `qString`.

După ce a fost parsat, este returnat un obiect, iar noi putem să îi accesăm și să îi modificăm fiecare proprietate.

[/slide]
