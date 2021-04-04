# Map

[slide hideTitle]
# Ce Este Obiectul Map?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-20-21-what-is-a-map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectul Map conține perechi cheie-valoare și păstrează **ordinea originală de inserare** a cheilor.

Atât obiectele, cât și valorile primitive pot fi utilizate fie ca cheie, fie ca valoare.

O buclă for-of returnează o matrice de `[key, value]` pentru fiecare iterație, atunci când este utilizată pe un Map.

Obiectele JavaScript pure sunt ca niște Maps, deoarece ambele vă permit să:
1. Alocați valori cheilor
2. Detectați dacă ceva este stocat într-o cheie
3. Ștergeți cheile
[/slide]

[slide hideTitle]
# Adăugarea/Accesarea Elementelor

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-22-adding-and-accessing-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a adăuga o pereche cheie-valoare, folosiți metoda `.set()`.

În exemplul de mai jos creăm un obiect map, utilizând cuvântul cheie `new Map()`.

Apoi, folosind metoda `.set()` adăugăm o cheie și o valoare obiectului map. 

Primul parametru este cheia și al doilea parametru este valoarea:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map);
```

Pentru a obține valoarea unei chei date utilizați metoda `.get()`:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.get(2));
```

Proprietatea accesorului `.size` returnează numărul de elemente dintr-un obiect Map.


```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.size);
```
[/slide]

[slide hideTitle]
# Conține/Șterge

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-23-contains-and-delete-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a afla dacă un obiect map are o cheie dată, utilizați metoda `.has ()`.

Rezultatul trebuie să fie **true** sau **false**, deoarece metoda `.has()` returnează un **boolean**.

În acest caz este **true**:

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
console.log(map.has(1));
```

Pentru a elimina o pereche cheie-valoare utilizați metoda `.delete()`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.delete(1);
console.log(map);
```

Și, în cele din urmă, utilizați metoda `.clear()` pentru a elimina toate perechile cheie-valoare din obiectul map.

Rezultatul din acest exemplu este 0 după ștergerea tuturor elementelor din obiectul Map.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.clear();
console.log(map.size);
```
[/slide]

[slide hideTitle]
# Iteratori

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-24-iterators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prin utilizarea iteratorilor, putem returna o matrice care conține perechi `[key-value]`.

Pentru a returna o matrice de perechi `[key-value]` utilizați metoda `.entries()` pe un obiect map.

Rezultatul va fi o matrice de matrice `[ [ 1, 'one' ], [ 2, 'two' ] ]`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
let entries = Array.from(map.entries());
console.log(entries);
```

Pentru a returna o matrice de chei, utilizați: `.keys()`.

Rezultatul va fi `[1, 2]`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
let entries = Array.from(map.keys());
console.log(entries);
```
Pentru a returna o matrice de valori, utilizați: `.values()`.

Rezultatul va fi `[ 'one', 'two' ]`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
let entries = Array.from(map.keys());
console.log(entries);
```

[/slide]

[slide hideTitle]
# Iterarea unui Obiect Map

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-25-iterating-a-map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a tipări un obiect map, pur și simplu utilizați o buclă **for-of**.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let [key, value] of map.entries()) {
    console.log(`${key} => ${value}`);
}
```

Pentru a tipări cheile, folosiți: `.keys()`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let key of map.keys()) {
  console.log(key);
}
```

Pentru a tipări valorile, utilizați: `.values()`.

```js live
let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
for (let values of map.values()) {
  console.log(values);
}
```
[/slide]

[slide hideTitle]

# Problemă cu Soluție: Storage

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-28-solution-storage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Storage" taskId="js-fundamentals-pt2-Associative-Arrays-Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function storage(input) {
  // Scrieți codul dvs. aici
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

Scrieți o funcție care necesită un anumit număr de **articole** și **cantitatea lor**.

Dacă același articol apare **de mai multe ori**, **adăugați noua cantitate** la cea **existentă**.

La final tipăriți toate articolele și suma acestora fără a le sorta.

Intrarea vine ca o **matrice de șiruri**.

Folosiți o metodă `Map()`.

## Exemplu

|**Intrare**|**Ieșire**|
|---|---|
| storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']) | tomatoes \-\> 10 |
|                                                          | coffee \-\> 45   |
|                                                          | olives \-\> 100  |

[/task-description]
[tests]
[test open]
[input]
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
[/input]
[output]
tomatoes \-\> 10
coffee \-\> 45
olives \-\> 100
[/output]
[/test]
[test]
[input]
storage(['tomatoes 50', 'tomatoes 61', 'ghj 115', 'ghj 40'])
[/input]
[output]
tomatoes \-\> 111
ghj \-\> 155
[/output]
[/test]
[test]
[input]
storage(['aa 45', 'aa 5', 'olives 140', 'aa 30'])
[/input]
[output]
aa \-\> 80
olives \-\> 140
[/output]
[/test]
[test]
[input]
storage(['jkl 150', 'jkl 6', 'ohjves 160', 'chhee 41'])
[/input]
[output]
jkl \-\> 156
ohjves \-\> 160
chhee \-\> 41
[/output]
[/test]
[test]
[input]
storage(['tomoes 120', 'coe 566', 'oli 6440', 'ee 10'])
[/input]
[output]
tomoes \-\> 120
coe \-\> 566
oli \-\> 6440
ee \-\> 10
[/output]
[/test]
[test]
[input]
storage(['tomjjes 1120', 'clfee 5', 'o;ves 4600', 'coknfee 350'])
[/input]
[output]
tomjjes \-\> 1120
clfee \-\> 5
o;ves \-\> 4600
coknfee \-\> 350
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Sortarea Map

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-28-map-sorting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **sorta** un obiect Map, transformați-l mai întâi într-o **matrice**, apoi folosiți metoda `sort()`.

Aici avem o funcție de comparare care definește ordinea de sortare.

Primul element este `a[1]` și al doilea element este `b[1]`.

Apoi, elementele sunt comparate.

Dacă folosim `a[1] - b[1]` vom sorta în ordine crescătoare.

Dacă folosim `b[1] - a[1]` vom sorta în ordine descrescătoare.

Variabila `kvp` este perechea noastră `[key-value]`.

`[kvp[0]]` este **cheia** și `[kvp[1]]` este **valoarea**.



```js live
let map = new Map();
map.set('one', 1);
map.set('eight', 8);
map.set('two', 2);
let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
for (let kvp of sorted) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: School Grades

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-29-solution-school-grades-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="School Grades" taskId="js-fundamentals-pt2-Associative-Arrays-School-Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function grades(input) {
  // Scrieți codul dvs. aici
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

Scrieți o funcție care stochează elevii cu toate notele acestora.

Dacă un elev apare de mai multe ori, adăugați noile note.

La final, tipăriți elevii sortați după nota medie.

Rezultatul este reprezentat de o **matrice de șiruri**.

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']) | Tammy\: 2\, 4\, 3    |
|                                                          | Lilly\: 4\, 6\, 6\, 5 |
|                                                          | Tim\: 5\, 6\, 6\, 6   |

[/task-description]
[tests]
[test open]
[input]
grades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])
[/input]
[output]
Tammy\: 2\, 4\, 3
Lilly\: 4\, 6\, 6\, 5
Tim\: 5\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['ghjg 4 6 6 5', 'b 5 6 4', 'ghj 2 4 5 3', 'jjjjk 6 6 5 5'])
[/input]
[output]
ghj\: 2\, 4\, 5\, 3
b\: 5\, 6\, 4
ghjg\: 4\, 6\, 6\, 5
jjjjk\: 6\, 6\, 5\, 5
[/output]
[/test]
[test]
[input]
grades(['fgh 4 6 6 5', 'fhg 5 6 5 6', 'hj 2 4 3', 'gg 6 6 6 6'])
[/input]
[output]
hj\: 2\, 4\, 3
fgh\: 4\, 6\, 6\, 5
fhg\: 5\, 6\, 5\, 6
gg\: 6\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['Lilly 4 6 6 5', 'hhj 5 6 4 4 5', 'ghj 2 4 3', 'ghj 6 6', 'fg 5 6 5 6', 'dgfd 2 4 3'])
[/input]
[output]
dgfd\: 2\, 4\, 3
ghj\: 2\, 4\, 3\, 6\, 6
hhj\: 5\, 6\, 4\, 4\, 5
Lilly\: 4\, 6\, 6\, 5
fg\: 5\, 6\, 5\, 6
[/output]
[/test]
[test]
[input]
grades(['jjj 4 6 6 5', 'kjk 5 6', 'ghg 5 5 6 6', 'dfdf 2 2 3 4 3'])
[/input]
[output]
dfdf\: 2\, 2\, 3\, 4\, 3
jjj\: 4\, 6\, 6\, 5
kjk\: 5\, 6
ghg\: 5\, 5\, 6\, 6
[/output]
[/test]
[test]
[input]
grades(['ghj 4 5 6 6 5', 'Tghj 5 6 6 5', 'fgmy 2 4 2 2', 'hgm 6 6 6 3', 'Tim 5 6 2 5', 'Tammy 2 4 6', 'Tim 5 6 6 5', 'Tammy 2 4 3 4 4'])
[/input]
[output]
fgmy\: 2\, 4\, 2\, 2
Tammy\: 2\, 4\, 6\, 2\, 4\, 3\, 4\, 4
Tim\: 5\, 6\, 2\, 5\, 5\, 6\, 6\, 5
ghj\: 4\, 5\, 6\, 6\, 5
hgm\: 6\, 6\, 6\, 3
Tghj\: 5\, 6\, 6\, 5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

