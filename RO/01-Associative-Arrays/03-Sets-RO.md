# Seturi

[slide hideTitle]
# Ce Este un Set?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-32-33-what-is-a-set-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectul Set vă permite să stocați **unice** valori de orice tip, indiferent dacă sunt valori primitive sau referințe la obiect.

Obiectele set sunt colecții de valori. Puteți itera prin elementele unui set în ordinea lor de inserare.

O valoare dintr-un set poate apărea o singură dată. Este unică pentru colecția Set.

Pentru a crea un set folosiți cuvântul constructor `new Set()`.

În exemplul de mai jos avem o serie de numere. Observați că numărul 2 a fost repetat de două ori!

Acum, haideți să puenm rezultatul pe  `console.log`, pentru a vedea rezultatul. Toate intrările repetate au fost eliminate, deci rămân doar cu valori unice.

Rezultatul este `Set { 1, 2, 3, 4, 5 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set);
```

Utilizați metoda `.add()` pentru a adăuga valori. Rezultatul ar fi `Set { 1, 2, 3, 4, 5, 10 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.add(10);
console.log(set);
```

La fel ca Map, seturile au metoda `.has()`. Această metodă se schimba în **true** sau **false**.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.has(1));
```

Putem șterge o valoare. Utilizați `.delete()`. Rezultatul va fi `Set { 2, 3, 4, 5 }`

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.delete(1);
console.log(set);
```

De asemenea, putem șterge toate elementele din set. Utilizați metoda `.clear()`.

Rezultatul va fi `Set {}`.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
set.clear();
console.log(set);
```

Utilizați accesorul `.size` pentru a obține dimensiunea unui set.

Rezultatul va fi 5.

```js live
let set = new Set([1, 2, 2, 3, 4, 5]);
console.log(set.size);
```

[/slide]
