# Abordarea Erorilor

[slide hideTitle]

# Definiție

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-25-27-error-handling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Error handling** cuprinde **response** și **recovery procedures** ale condițiilor de eroare dintr-o aplicație.

O funcție poate să:

- Facă ceea ce trebuie să facă

- Indice o problemă

Orice alt comportament este **incorrect** și devine o țintă pentru **error handling**.

Când o funcție sau o metodă nu reușește să facă ceea ce indică numele său, **should** :

- Returneze o valoare specială :

```js live
const years = [1991, 1968, 2009];
console.log(years.indexOf(2020));
```

În exemplul de mai sus, `indexOf()` metodei **fails** să găsească `2020` in matricea `years`.

Pentru a indica asta, aceasta returnează valoarea specială `-1`.

- Aruncă o **exception**:

```js live
function toUppercase(string) {
    if (typeof string !== 'string') {
        throw TypeError('The input provided is not a string');
    }

    return string.toUpperCase();
}

toUppercase(5);
```

Funcția `toUppercase()` va arunca o eroare de scriere (TypeError), pentru că este invocată cu un număr, în loc de un șir. 

[/slide]

[slide hideTitle]
# Tipuri de Erori 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-28-types-of-errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cele trei tipuri comune de **errors** sunt :

- **Syntax Errors**
  
  - Fiecare limbaj de programare are un set de **grammar rules** care, dacă sunt greșite, produc probleme
  
  - Cele mai multe dintre [IDEs](https://en.wikipedia.org/wiki/Integrated_development_environment) au capacitatea de a atenționa în legătură cu **Syntax Errors** până în momentul scrierii codului
  

- **Runtime Errors**
  
  - Erorile de timp de rulare apar după compilare, în modul **user is executing your application**
  
  - Folosirea [software frameworks](https://en.wikipedia.org/wiki/Software_framework) poate scădea semnificativ șansele ca astfel de erori să apară 

- **Logical errors**
  
  - аcestea apar atunci când a fost făcută o greșeală în **logic of the script**, iar **rezultatul scontat este incorect**
  
  - аcestea sunt cunoscute sub denumirea de **bugs**

[/slide]

[slide hideTitle]

# Abordarea Erorilor - Excepții

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-29-error-handling-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **excepție** apare atunci când o funcție este **incapabilă să fie executată cu succes**, ceea ce duce la apariția unei erori.

- **RangeError**

**Erorile de interval** apar atunci când o valoare se află **în afara unui anumit interval dat**.

```js live
let arr = new Array(-1);
```

Inițializarea unei matrice cu **dimensiunea -1** va genera o eroare de tip TypeError, deoarece dimensiunea vectorului nu poate fi un număr negativ.

```js live
let bigArr = new Array(9999999999); // RangeError
```

Aceeași eroare va apărea în momentul în care parametrul care reprezintă **dimensiunea** are valoarea peste **4 294 567 295** (2\^32 - 1) - **dimensiunea maximă** a unei matrice în **JavaScript**.

- **TypeError** 

**Erorile de tip** sunt rezultatul unei **valori neașteptate a tipului**.

```js live
let index = undefined.indexOf('hi'); // TypeError
```

```js live
console.print('hi');   // Uncaught TypeError
```

- **ReferenceError**

**Erorile de referință** semnifică faptul că **s-a referențiat** o **variabilă inexistentă**.


```js live
console.log(George);   // Uncaught ReferenceError
```

[/slide]

[slide hideTitle]

# Abordarea Erorilor - Valori Speciale

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-30-error-handling-special-values-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Anumite metode incorporate ale limbajului JavaScript pot returna **valori speciale**, în cazul unor date nepotrivite.

```js
let sqrt = Math.sqrt(-1); // NaN (special value)
```

```js
let sub = 'hello'.substring(2, 1000); // llo
let sub = 'hello'.substring(-100, 100); // hello
// Soft error - substring still does its job: takes all available chars

```

```js
let invalid = new Date('Christmas'); // Invalid Date
let date = invalid.getDate(); // NaN
```


[/slide]


[slide hideTitle]
# Lansarea Excepțiilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-31-throwing-errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosim declarația `throw` pentru a lansa manual o excepție :

```js
function isEven(num) {
  if (typeof num !== 'number') {
    throw TypeError('You must provide a number');
  }

  return num % 2 === 0;
}
```

Dacă este lansat `TypeError`, restul codului **will not** fi executat.

[/slide]

[slide hideTitle]
# Try-Catch

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-32-try-catch-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Constructorul **try-catch** cuprinde două blocuri principale: 

- **try**, care conține codul 

- **catch**, care conține logica de **error handling**

```js
try {
  // Code that can throw an exception
  // If executed properly, the catch block is ignored
} catch (exception) {
  // Executed only if an error is thrown
}
```

[/slide]

[slide hideTitle]
# Proprietățile Excepției 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/04.JS-Advanced-Advanced-Functions/RO/js-advanced-advanced-functions-33-exception-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectul `Error` are mai multe proprietăți:

- `Error.prototype.name` - **name** numele erorii

- `Error.prototype.message` - un **message** al erorii

- `Error.prototype.stack` - un [stack trace](https://en.wikipedia.org/wiki/Stack_trace) al excepției exception
  
[/slide]
