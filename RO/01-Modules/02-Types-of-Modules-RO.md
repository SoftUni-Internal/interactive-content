# Tipuri de Module

[slide hideTitle]
# Modulele IIFE

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/RO/JS-Applications-Modules-6-iife-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Modulele IIFE** sunt esentiale pentru dezvoltarea front-end.

Acestea ne permit să **ascundem anumite date și funcționalități din domeniul de aplicare global** și au fost utilizate foarte frecvent **până când au fost introduse modulele ES6**.

Vom afla despre modulele ES6 mai târziu.

Să aruncăm o privire la acest exemplu:

```js 
var myModule = (function() {
    var count = 0;

    function increase() {
        count++;
    }

    return {    
        increase: increase
    }
}());
```

În exemplul de mai sus, definim variabila `myModule`, care stochează modulul nostru IIFE.

Acest modul conține variabila  `count` și funcţia `increase()`.

După cum știți, variabilele definite cu `var` sunt **disponibile global** în mod implicit.

**Modulele IIFE** pot suprascrie acest comportament.

Obiectul returnat conține funcționalitatea și datele pe care le facem accesibile la nivel global.

În acest caz, funcția `increase()` **poate fi apelată de oriunde pentru a mări contorul**.

Totuși, contorul în sine **nu poate fi accesat direct**, decât dacă îl declarăm în **return object**.

[/slide]

[slide hideTitle]
# Modulele Node.js

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/RO/JS-Applications-Modules-7-8-nodejs-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Node\.js, **fiecare fișier are propriul său domeniu de aplicare**.

Fișierele individuale ar putea fi considerate ca **module separate**.

**Modulele pe care le creăm manual trebuie exportate** înainte ca acestea să poată fi solicitate.

## Importarea

**Importăm** module Node.js folosind funcţia `require()`.

**Modulele încorporate** pot fi importate după cum urmează:

```js
const querystring = require('querystring');
```

Pentru **propriile module**, trebuie să declarați **calea relativă** a fișierului pe care doriți să îl importați:

```js
const currencyConverter = require('./currencyConverter.js');
```

Calea este **relativă la fișierul în care efectuați importul**.

## Exportarea

Pentru a **exporta** module în Node.js, folosim obiectul **module.exports**.

Orice puneți pe obiectul **module.exports** este disponibil la nivel global pentru **alte module**.

Următorul exemplu creează un modul care returnează o funcție numită "greeting":

```js
module.exports.greeting = function(name) {
    console.log('Hello' + name);
};
```

De asemenea, puteți atașa un obiect la **module.exports**, așa cum se arată mai jos:

```js
module.exports.person = {
    firstName: 'Bernard',
    lastName: 'Mills',
    age: 27
}
```

Puteți utiliza un obiect pentru a exporta **mai multe** funcții, astfel: 

```js
module.exports.currencyConverter = {
    toUSD: convertToUSD,
    toGBP: convertToGBP
}
```


## Module Node.js încorporate

**Node.js** are multe **module încorporate** pe care le puteți **include** și **utiliza** în **oricare dintre fișierele dvs. Node.js**.

Iată câteva dintre cele mai frecvent utilizate:

- Modulul `http`
    * folosit pentru a crea un **HTTP server**
    * este un modul `https` de asemenea, care poate fi folosit pentru o mai mare securitate

```js
let http = require('http');
```

- Modulul `url`:
    * folosit pentru a transforma un **șir URL** într-un **obiect** cu o proprietate `href`

```js
let url = require('url');
```

- Modulul `fs`:
    * permite accesul la **sistemul de fișiere** al computerului

```js
let fs = require('fs');
```

- Modulul `zlib`:
    * oferă o modalitate de a arhiva și dezarhiva fișierele
    * cel mai des folosit împreună cu `fs`

```js
var zlib = require('zlib');
```

[/slide]

[slide hideTitle]
# Modulele ES6 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/02.JS-Applications-Modules/RO/JS-Applications-Modules-9-es6-modules-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În 2015, odată cu introducerea standardului **EcmaScript 6**, modulele au fost introduse **nativ** în JavaScript.

Instrucțiunile JavaScript **de module încorporate exportă și importă întotdeauna un obiect**.

## Importarea

Importarea unui modul se poate face în mai multe moduri:

- Importarea unei **funcții specifice**

```js
import convertToUSD from './currencyConverter.js'
```

- Importarea **întregului obiect**

```js
import * as convert from './currencyConverter.js'
```

Pentru a importa întregul obiect, folosim un **asterisc**, urmat de **numele** pe care dorim să îl folosim.

- **Schimbarea numelui** după importarea obiectului

```js
import { toUSD as convertToUSD } from './currencyConverter.js'
```

## Exportul

Folosim declarația **export** pentru a crea un modul JavaScript.

```js
export { myFunction, variableOne };
```

Folosind cuvântul cheie `default`, putem importa ulterior valoarea cu **orice nume dat**:

```js
export default greetFunction;
```

Gândiți-vă la următorul bloc de cod ca la un **fișier diferit**, în care importăm `myFunction`:

```js
import hello from './test.js';
```

Rețineți că exportul **implicit**  **nu ne permite** să exportăm mai multe valori.

Modulele pe care le exportăm sunt în [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) **în mod implicit**.

[/slide]
