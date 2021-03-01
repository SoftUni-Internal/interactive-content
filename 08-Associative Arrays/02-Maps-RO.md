# Map

[slide]
# Ce este obiectul Map?

[vimeo-video]
[stream language="EN" videoId="489798657/f9cf526cd8" default /]
[stream language="RO" videoId="489798657/f9cf526cd8"  /]
[/video-vimeo]

Obiectul Map conține perechi cheie-valoare și păstrează **ordinea originală de inserare** a cheilor.

Atât obiectele, cât și valorile primitive pot fi utilizate fie ca cheie, fie ca valoare.

O buclă for-of returnează o matrice de `[key, value]` pentru fiecare iterație, atunci când este utilizată pe o hartă.

Obiectele JavaScript pure sunt ca niște Hărți, deoarece ambele vă permit să:
1. Alocați valori cheilor.
2. Detectați dacă ceva este stocat într-o cheie.
3. Ștergeți cheile
[/slide]

[slide]
# Adăugarea, accesarea elementelor

[vimeo-video]
[stream language="EN" videoId="489798724/1030d751f4" default /]
[stream language="RO" videoId="489798724/1030d751f4"  /]
[/video-vimeo]

Pentru a adăuga o pereche cheie-valoare, folosiți metoda `.set()`.

În exemplul de mai jos creăm un obiect map, utilizând cuvântul cheie `new Map()`.

Apoi, folosind metoda `.set()` adăugăm o cheie și o valoare al obiectului map. Primul parametru este cheia și al doilea parametru este valoarea.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
console.log(map);
```

Pentru a obține valoarea unei chei date utilizați metoda `.get()`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
console.log(map.get(2));
```

Proprietatea accesorului `.size` returnează numărul de elemente dintr-un obiect map.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
console.log(map.size);
```
[/slide]

[slide]
# Conține / Șterge

[vimeo-video]
[stream language="EN" videoId="489798726/3bdccf1504" default /]
[stream language="RO" videoId="489798726/3bdccf1504"  /]
[/video-vimeo]

Pentru a afla dacă un obiect map are o cheie dată, utilizați metoda `.has ()`.

Rezultatul trebuie să fie **true** sau **false**, deoarece metoda `.has()` returnează un **boolean**.

În acest caz este **true**

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
console.log(map.has(1));
```

Pentru a elimina o pereche cheie-valoare utilizați metoda `.delete()`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
map.delete(1);
console.log(map);
```

Și, în cele din urmă, utilizați metoda `.clear()` pentru a elimina toate perechile cheie-valoare din obiectul map.

Rezultatul din acest exemplu este 0 după ștergerea tuturor elementelor din obiectul Map.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
map.clear();
console.log(map.size);
```
[/slide]

[slide]
# Iteratori

[vimeo-video]
[stream language="EN" videoId="489798762/eb50153555" default /]
[stream language="RO" videoId="489798762/eb50153555"  /]
[/video-vimeo]

Prin utilizarea iteratorilor, putem returna o matrice care conține perechi [key-value].

Pentru a returna o matrice de perechi [key-value] utilizați metoda `.entries()` pe un obiect map.

Rezultatul va fi o serie de matrice `[ [ 1, 'one' ], [ 2, 'two' ] ]`

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
let entries = Array.from(map.entries());
console.log(entries);
```
Pentru a returna o serie de matrice utilizați: `.keys()`.

Rezultatul va fi după cum urmează `[1, 2]`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
let entries = Array.from(map.keys());
console.log(entries);
```
Pentru a returna o serie de valori utilizați: `.values()`.

Rezultatul va fi `[ 'one', 'two' ]`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
let entries = Array.from(map.values());
console.log(entries);
```

[/slide]

[slide]
# Iterarea unui obiect Map

[vimeo-video]
[stream language="EN" videoId="489798765/fa6116356d" default /]
[stream language="RO" videoId="489798765/fa6116356d"  /]
[/video-vimeo]

Pentru a tipări un obiect map, pur și simplu utilizați o buclă **for-of**

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
for (let [key, value] of map.entries()) {
    console.log(`${key} => ${value}`);
}
```

Pentru a tipări cheile folosiți: `.keys()`.

```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
for (let key of map.keys()) {
  console.log(key);
}
```

Pentru a tipări valorile utilizați: `.values()`.
```js live
let map = new Map();
map.set(1, "one");
map.set(2, "two");
for (let values of map.values()) {
  console.log(values);
}
```

[/slide]

[slide]

# Problemă: Storage

[vimeo-video]
[stream language="EN" videoId="489798824/5773104659" default /]
[stream language="RO" videoId="489798824/5773104659"  /]
[/video-vimeo]

[code-task title="Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care necesită un anumit număr de **articole** și **cantitatea lor**.

Dacă același element apare **de mai multe ori**, **adăugați noua sumă** la **existentă**.

La final tipăriți toate articolele și suma acestora fără a le sorta.

Intrarea vine ca o **matrice de șiruri**.

Folosiți un obiect **Map()**.

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| `['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']` | tomatoes \-\> 10 |
|                                                          | coffee \-\> 45   |
|                                                          | olives \-\> 100  |

[/task-description]
[tests]
[test]
[input]
tomatoes 10
coffee 5
olives 100
coffee 40
[/input]
[output]
tomatoes \-\> 10
coffee \-\> 45
olives \-\> 100
[/output]
[/test]
[test]
[input]
tomatoes 50
tomatoes 61
ghj 115
ghj 40
[/input]
[output]
tomatoes \-\> 111
ghj \-\> 155
[/output]
[/test]
[test]
[input]
aa 45
aa 5
olives 140
aa 30
[/input]
[output]
aa \-\> 80
olives \-\> 140
[/output]
[/test]
[test]
[input]
jkl 150
jkl 6
ohjves 160
chhee 41
[/input]
[output]
jkl \-\> 156
ohjves \-\> 160
chhee \-\> 41
[/output]
[/test]
[test]
[input]
tomoes 120
coe 566
oli 6440
ee 10
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
tomjjes 1120
clfee 5
o;ves 4600
coknfee 350
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

[slide]

# Soluție: Storage

[vimeo-video]
[stream language="EN" videoId="489798859/c32c318fc8" default /]
[stream language="RO" videoId="489798859/c32c318fc8"  /]
[/video-vimeo]

[code-task title="Storage" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
//Video code

function solve(input) {
  let map = new Map();

  for(let line of input){
    let tokens = line.split(' ');
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if(map.has(product)){
      quantity += map.get(product);
    }
    map.set(product, quantity);
  }

  for(let[product, quantity] of map){
    console.log(`${product} -> ${quantity}`);
  }
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care necesită un anumit număr de **articole** și **cantitatea lor**.

Dacă același element apare **de mai multe ori**, **adăugați noua sumă** la **existentă**.

La final tipariți toate articolele și suma acestora fără a le sorta.

Intrarea vine ca o **matrice de șiruri**.

Folosiți un obiect **Map()**.

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| `['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']` | tomatoes \-\> 10 |
|                                                          | coffee \-\> 45   |
|                                                          | olives \-\> 100  |

[/task-description]
[tests]
[test]
[input]
tomatoes 10
coffee 5
olives 100
coffee 40
[/input]
[output]
tomatoes \-\> 10
coffee \-\> 45
olives \-\> 100
[/output]
[/test]
[test]
[input]
tomatoes 50
tomatoes 61
ghj 115
ghj 40
[/input]
[output]
tomatoes \-\> 111
ghj \-\> 155
[/output]
[/test]
[test]
[input]
aa 45
aa 5
olives 140
aa 30
[/input]
[output]
aa \-\> 80
olives \-\> 140
[/output]
[/test]
[test]
[input]
jkl 150
jkl 6
ohjves 160
chhee 41
[/input]
[output]
jkl \-\> 156
ohjves \-\> 160
chhee \-\> 41
[/output]
[/test]
[test]
[input]
tomoes 120
coe 566
oli 6440
ee 10
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
tomjjes 1120
clfee 5
o;ves 4600
coknfee 350
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

[slide]
# Sortare Map

[vimeo-video]
[stream language="EN" videoId="489798851/7c58633974" default /]
[stream language="RO" videoId="489798851/7c58633974"  /]
[/video-vimeo]

Pentru a **sorta** un obiect Map, transformați-l mai întâi într-o **matrice**, apoi folosiți metoda `sort()`.

Aici avem o funcție de comparare care definește ordinea de sortare.

Primul element este `a[1]` și al doilea element este `b[1]`. Apoi, elementele sunt comparate.

Dacă folosim `a[1] - b[1]` vom sorta în ordine crescătoare.

Dacă folosim `b[1] - a[1]` vom sorta în ordine descrescătoare.

Variabila `kvp` este perechea noastră `[key-value]`.

`[kvp[0]]` este **cheia** și `[kvp[1]]` este **valoarea**.


```js live
let map = new Map();
map.set("one", 1);
map.set("eight", 8);
map.set("two", 2);
let sorted = Array.from(map.entries()).sort((a, b) => a[1] - b[1]);
for (let kvp of sorted) {
  console.log(`${kvp[0]} -> ${kvp[1]}`);
}
```

[/slide]

[slide]

# Problemă: School Grades

[vimeo-video]
[stream language="EN" videoId="489798893/fbb50d617a" default /]
[stream language="RO" videoId="489798893/fbb50d617a"  /]
[/video-vimeo]

[code-task title="School Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care stochează elevii cu toate notele.

Dacă un elev apare de mai multe ori, adăugați noile note.

La final, tipăriți elevii sortați după nota medie.

Rezultatul vine ca o **matrice de șiruri**.

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| `['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']` | Tammy\: 2\,4\,3    |
|                                                          | Lilly\: 4\,6\,6\,5 |
|                                                          | Tim\: 5\,6\,6\,6   |

[/task-description]
[tests]
[test]
[input]
Lilly 4 6 6 5
Tim 5 6
Tammy 2 4 3
Tim 6 6
[/input]
[output]
Tammy\: 2\, 4\, 3
Lilly\: 4\, 6\, 6\, 5
Tim\: 5\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
ghjg 4 6 6 5
b 5 6 4
ghj 2 4 5 3
jjjjk 6 6 5 5
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
fgh 4 6 6 5
fhg 5 6 5 6
hj 2 4 3
gg 6 6 6 6
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
Lilly 4 6 6 5
hhj 5 6 4 4 5
ghj 2 4 3
ghj 6 6
fg 5 6 5 6
dgfd 2 4 3
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
jjj 4 6 6 5
kjk 5 6
ghg 5 5 6 6
dfdf 2 2 3 4 3
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
ghj 4 5 6 6 5
Tghj 5 6 6 5
fgmy 2 4 2 2
hgm 6 6 6 3
Tim 5 6 2 5
Tammy 2 4 6
Tim 5 6 6 5
Tammy 2 4 3 4 4
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

[slide]
# Soluție: School Grades

[vimeo-video]
[stream language="EN" videoId="489798897/2d3a116709" default /]
[stream language="RO" videoId="489798897/2d3a116709"  /]
[/video-vimeo]

[code-task title="School Grades" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
//Video code

function solve(input){
let map = new Map();
for(let line of input){
  let tokens = line.split(' ');
  let name = tokens.shift();
  let grades = tokens.map(Number);

  if(!map.has(name)){
    map.set(name, []);
  }

  let existing = map.get(name);
  for(let grade of grades){
    existing.push(grade);
   }
 }

 let sorted = Array.from(map).sort(compareAvarage);

 for(let[name, grades] of sorted){
   console.log(`${name}: ${grades.join(', ')}`);
 }

 function compareAvarage(a, b){
   let avgA = 0;
   a[1].forEach(x => avgA += x);
   avgA /= a[1].length;

   let avgB = 0;
   b[1].forEach(x => avgB +=x);
   avgB /= b[1].length;
   return avgA - avgB;
 }
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care stochează elevii cu toate notele.

Dacă un elev apare de mai multe ori, adăugați noile note.

La final, tipăriți elevii sortați după nota medie.

Rezultatul vine ca o **matrice de șiruri**.

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| `['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']` | Tammy\: 2\,4\,3    |
|                                                          | Lilly\: 4\,6\,6\,5 |
|                                                          | Tim\: 5\,6\,6\,6   |

[/task-description]
[tests]
[test]
[input]
Lilly 4 6 6 5
Tim 5 6
Tammy 2 4 3
Tim 6 6
[/input]
[output]
Tammy\: 2\, 4\, 3
Lilly\: 4\, 6\, 6\, 5
Tim\: 5\, 6\, 6\, 6
[/output]
[/test]
[test]
[input]
ghjg 4 6 6 5
b 5 6 4
ghj 2 4 5 3
jjjjk 6 6 5 5
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
fgh 4 6 6 5
fhg 5 6 5 6
hj 2 4 3
gg 6 6 6 6
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
Lilly 4 6 6 5
hhj 5 6 4 4 5
ghj 2 4 3
ghj 6 6
fg 5 6 5 6
dgfd 2 4 3
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
jjj 4 6 6 5
kjk 5 6
ghg 5 5 6 6
dfdf 2 2 3 4 3
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
ghj 4 5 6 6 5
Tghj 5 6 6 5
fgmy 2 4 2 2
hgm 6 6 6 3
Tim 5 6 2 5
Tammy 2 4 6
Tim 5 6 6 5
Tammy 2 4 3 4 4
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
