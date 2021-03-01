# Manipularea Corzilor

[slide]
# Concatenare

[vimeo-video]
[stream language="EN" videoId="489817452/a5c7ddac9c" default /]
[stream language="RO" videoId="489817452/a5c7ddac9c"  /]
[/video-vimeo]

**concatenarea** în JS se face cu operatorii: `+` și `+ =` sau prin metoda `concat()`.

**Concat** poate fi folosit și pentru **fuzionarea**a două matrice.

Ceea ce este specific, este că **nu schimbă șirul original** sau matricea, în schimb returnează unul nou.

Iată un exemplu despre cum funcționează operatorii `+` și `+=`:

```js live
let sentence = 'Hello' + ', ';
let world = 'John';

sentence += world

console.log(sentence)
```

Let us see how `concat()` works: 

```js live
let greet = 'Hello, ';
let name = 'John';

let concatenated = greet.concat(name);

console.log(concatenated);
```

În cele din urmă, vedem că ambele moduri vor returna un **șir identic**.

Acest lucru se datorează faptului că `+` și `+=` și metoda `concat()` fac la fel, dar în moduri diferite.

[/slide]

[slide]
# Căutarea de Subșiruri

[vimeo-video]
[stream language="EN" videoId="489817455/1fa425821a" default /]
[stream language="RO" videoId="489817455/1fa425821a"  /]
[/video-vimeo]

Pentru a **găsi** un subșir, putem folosi `indexOf()` sau `lastIndexOf()`.

Aceste două metode sunt **sensibile la majuscule**, aceasta înseamnă că, dacă căutăm un cuvânt care include o **literă majusculă și șirul conține versiunea sa cu litere mici**, acestea nu se vor potrivi deloc cu cuvântul și vor da ca rezultat `-1`. 

Ambii pot **lua până la doi parametri:**

- Primul este cuvântul pe care îl caută.
- Al doilea este indicele de pornire.

Iată un exemplu de utilizare a `indexOf ()`

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('JS'));
```

Aici `indexOf` returnează **7** deoarece acesta este primul index care apare in `JS`.

Acum să încercăm cu `js` nu `JS`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('js'));
```

Acum returnează `-1` deoarece **indexOf** este sensibil la majuscule și minuscule și nu detectează **js** ca **JS**

Să verificăm `lastIndexOf()`.

Este aproape la fel ca **indexOf**, dar cu diferența că **lastIndexOf**caută ultima apariție.

Și să vedem cum funcționează:

```js live
let str = 'JS developer';

console.log(str.lastIndexOf('e'));
console.log(str.lastIndexOf('a'));
```

Primul `console.log` returnează **10**, deoarece acesta este indexul în care apare ultima dată **e**.

Iar al doilea returnează `-1` pentru că nu găsește nimic.

[/slide]

[slide]
# Extragerea de Subșiruri

[vimeo-video]
[stream language="EN" videoId="489817495/403a2d42fe" default /]
[stream language="RO" videoId="489817495/403a2d42fe"  /]
[/video-vimeo]

Pentru a **extrage** un subșir, putem folosi `substring()`. Această metodă are doi parametri:

- Primul este indicele de start.
- Al doilea este indicele final.

Și va returna partea de la **indexul de început** până la **indexul final**.

Dar dacă nu dăm **al doilea parametru**, acesta va returna partea dintre **indexul de început** și **sfârșitul**.

**Subșirul** nu va modifica șirul original, acesta va returna unul nou.

Aceasta înseamnă că trebuie să o atribuim unei variabile pentru a funcționa.

Aici sunt cateva exemple:

```js live
let str = 'Intro to programming';

let subStrOne = str.substring(5, 8)
let subStrTwo = str.substring(5)

console.log(subStrOne);
console.log(subStrTwo);
```
Aici **subStrOne** va reveni **la**, deoarece aceasta este partea care se află în intervalul indexului de început și sfârșit.

Dar **subStrTwo** returnează totul de la **la** până la sfârșit.

Asta pentru că nu i-am dat al doilea parametru, care este indicele **sfârșit**.

[/slide]

[slide]
# Operațiuni cu șiruri

[vimeo-video]
[stream language="EN" videoId="489817576/c647cb8ef4" default /]
[stream language="RO" videoId="489817576/c647cb8ef4"  /]
[/video-vimeo]

Dacă dorim să schimbăm direct o parte a unui șir, vom folosi `replace()`.

La fel ca `substring()`, `replace()` nu **va modifica** șirul original, va **întoarce unul nou**.

Asta înseamnă că trebuie s-o atribuim unei variabile.

**Înlocuire** este o metodă care necesită doi parametri:

-  model
- înlocuire

Pentru partea **model** putem folosi **Regex** sau **șir**.

Și pentru **înlocuire** putem folosi `function()` sau un **șir**.

După ce se potrivește cu acest model, își va schimba doar prima apariție.

Iată un exemplu:

```js live
let str = 'I love JS. JS is my favorite language';
let replacedStr = str.replace('JS', 'JavaScript');

console.log(replacedStr);
```

[/slide]

[slide]
# Problem: Substring

[vimeo-video]
[stream language="EN" videoId="489817604/03cd593d45" default /]
[stream language="RO" videoId="489817604/03cd593d45"  /]
[/video-vimeo]

[code-task title="Problem: Substring" taskId="text-processing-lab-2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function substring(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

## Descriere
Scrieți o funcție care primește **un șir și două numere.**

Numerele vor fi un indice de pornire și un număr de elemente pentru subșir.

Imprimați rezultatul.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['ASentance', '1', '8']`| Sentance |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ASentance
1
8
[/input]
[output]
Sentance
[/output]
[/test]
[test]
[input]
gashajGAHJGAasghaj
4
8
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
gasjGAHJAasghaj
0
10
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
gasjGA48HJAasghaj
5
1
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
gasjGA48HJAahaj
5
5
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
jjjasjA48HJAko88/(())haj
10
10
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Substring

[vimeo-video]
[stream language="EN" videoId="489816947/090fda2f05" default /]
[stream language="RO" videoId="489816947/090fda2f05"  /]
[/video-vimeo]

[code-task title="Solution: Substring" taskId="text-processing-lab-2-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
// Different vido code
function solve(index) {
    let word = index[0];
    let index1 = Number(index[1]);
    let index2 = Number(index[2]);

    let sub = word.substring(index1, index1 + index2)
    console.log(sub)
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește **un șir și două numere.**

Numerele vor fi un indice de pornire și un număr de elemente pentru subșir.

Imprimați rezultatul.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['ASentance', '1', '8']`| Sentance |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ASentance
1
8
[/input]
[output]
Sentance
[/output]
[/test]
[test]
[input]
gashajGAHJGAasghaj
4
8
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
gasjGAHJAasghaj
0
10
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
gasjGA48HJAasghaj
5
1
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
gasjGA48HJAahaj
5
5
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
jjjasjA48HJAko88/(())haj
10
10
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Împărțirea unui Șir

[vimeo-video]
[stream language="EN" videoId="489816954/24e31211e5" default /]
[stream language="RO" videoId="489816954/24e31211e5"  /]
[/video-vimeo]
Când vrem să separăm cuvintele într-un șir, folosim metoda `split()`.

Împarte un **șir** într-o listă ordonată folosind un model \(separator\), care este primul parametru și returnează o **matrice**.

Avem opțiunea de a adăuga un al doilea parametru, care este**limita**.

Setează **limita** a **indexurilor** în **matricea finală**.

Iată un exemplu despre utilizarea `split()`

- separatorul va fi **spațiu**

```js live
let str = 'I love JS';
let divided = str.split(' ');

console.log(divided);
```

# Găsirea într-un Șir

Pentru a găsi o anumită parte a unui șir, folosim metoda `include()`.

Această metodă are doi parametri:

- Șirul pe care îl căutăm.
- Poziția în care să începeți căutarea. Acesta este opțional.

Copiază **șirul** și caută-l în cel principal.

Copiază șirul și caută-l în cel principal.

Este similar cu `indexOf()`, dar dacă îl găsește, această metodă returnează `true` și `false` dacă nu.

**Include** este sensibil la majuscule și minuscule.

De exemplu:

```js live
let text = 'I love JS';

console.log(text.includes('JS'));
console.log(text.includes('js'));
```
[/slide]

[slide]
# Repetarea într-un Șir

[vimeo-video]
[stream language="EN" videoId="489817061/4454e2aa76" default /]
[stream language="RO" videoId="489817061/4454e2aa76"  /]
[/video-vimeo]

Când vrem să **repetăm** un **șir** în JS, folosim `repeat()`. Aceasta ne permite să facem un anumit număr de **copii** ale aceluiși **șir**.

Primește doi parametri:

-  String
-  Count

După ce este apelat la un anumit **șir**, **repetați** va lua **șirul** pe care l-am dat și îl va **înmulți** cu **numărul** pe care îl trecem la aceasta.

După aceea, va **returna** un **șir concatenat** din toate copiile.

Iată un exemplu despre cum funcționează **repetarea**:

```js live
let str = '*';

console.log(str.repeat(5));
```

[/slide]

[slide]
# Problem: Censored Words

[vimeo-video]
[stream language="EN" videoId="489817109/c566f94bb4" default /]
[stream language="RO" videoId="489817109/c566f94bb4"  /]
[/video-vimeo]

[code-task title="Censored Words" taskId="text-processing-lab-3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function censoredWords(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește un text ca prim parametru și un singur cuvânt ca al doilea.

Găsiți toate aparițiile acestui cuvânt în text și **înlocuiți-le** cu numărul corespunzător de `*`.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['A small sentence with some words', 'small']`| A \*\*\*\*\* sentence with some words |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
A small sentence with some words
small
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
soallsentencewithsomewords
so
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
pesho gosho stamat pesho
pesho
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
aa bb aa ca pesho gosho stamat pesho
a
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
repeat word repeat repeat word word repeat
repeat word
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
aaa heyyy a heyyy abv hey abc
heyyy
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Censored Words

[vimeo-video]
[stream language="EN" videoId="489817292/f7357145f2" default /]
[stream language="RO" videoId="489817292/f7357145f2"  /]
[/video-vimeo]

[code-task title="Censored Words" taskId="text-processing-lab-3-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
//Different vido code

function censoredWords(input){

    let text = input[0];
    let word = input[1];

    while (text.indexOf(word) > -1) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește un text ca prim parametru și un singur cuvânt ca al doilea.

Găsiți toate aparițiile acestui cuvânt în text și **înlocuiți-le** cu numărul corespunzător de `*`.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['A small sentence with some words', 'small']`| A \*\*\*\*\* sentence with some words |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
A small sentence with some words
small
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
soallsentencewithsomewords
so
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
pesho gosho stamat pesho
pesho
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
aa bb aa ca pesho gosho stamat pesho
a
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
repeat word repeat repeat word word repeat
repeat word
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
aaa heyyy a heyyy abv hey abc
heyyy
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Metoda trimming

[vimeo-video]
[stream language="EN" videoId="489817107/ed4fac30e5" default /]
[stream language="RO" videoId="489817107/ed4fac30e5"  /]
[/video-vimeo]

Pentru a **elimina spațiile albe** folosim metoda `trim()`.

**Decuparea** va elimina toate **spațiile albe** dintr-un șir, de la ambele capete.

De aceea avem `trimStart()` și `trimEnd()`.

Dacă dorim să eliminăm spațiile albe numai la **început** sau **la sfârșit**, putem folosi unul dintre acestea.

Toate aceste trei metode nu afectează valoarea șirului original.

Deci va trebui să le atribuim unei variabile.

Iată un exemplu de utilizare `trim()`:

```js live
let str = '         Some text here              ';

console.log(str.trim());
```

Acum să vedem cum funcționează `trimStart()` cu același șir:

```js live
let str = '         Some text here              ';

console.log(str.trimStart());
```

Și nu în ultimul rând - `trimEnd()`:

```js live
let str = '         Some text here              ';

console.log(str.trimEnd());
```

[/slide]

[slide]
# Începe Cu sau se Termină Cu

[vimeo-video]
[stream language="EN" videoId="489817165/3eb9153a87" default /]
[stream language="RO" videoId="489817165/3eb9153a87"  /]
[/video-vimeo]

Cu `startsWith()`, putem verifica dacă un șir începe cu un cuvânt specific, că vom trece la metodă ca parametru.

**EndsWith** este aproape la fel.

Diferența dintre ele este că `endsWith()` verifică dacă acel șir se termină cu un anumit cuvânt.

Dacă găsesc șirul, vor reveni adevărat și dacă nu - fals.

**StartsWith** poate primi doi parametri:

- Cuvântul căutat în șir.
- Și **poziția** de la care să înceapă indexul. Acest parametru este opțional.

**EndsWith** poate primi, de asemenea, doi parametri.

Dar a doua este **lungimea** și este opțională.

Dacă este dat **al doilea parametru**, acesta va spune din ce index să căutați.

Iată câteva exemple despre modul în care funcționează:

```js live
let sentence = 'My name is John';

console.log(sentence.startsWith('My'));
console.log(sentence.startsWith('My', 3));
```

Să vedem și cum funcționează `endsWith()`:

```js live
let sentence = 'My name is John';

console.log(sentence.endsWith('John'));
console.log(sentence.endsWith('John', 10));
```

În primul exemplu,**console.logs**, va reveni la `true`, dar în al doilea, va întoarce `false`, deoarece șirul nu va fi în partea de căutare. 

[/slide]

[slide]
# Padding la Început și la Sfârșit

[vimeo-video]
[stream language="EN" videoId="489817167/90a1d0997d" default /]
[stream language="RO" videoId="489817167/90a1d0997d"  /]
[/video-vimeo]

Dacă vrem să **adăugăm** un șir **de un anumit număr de timp** la **începutul** sau **la** sfârșitul al unui alt șir, putem folosi `padStart()` sau `padEnd()` metode.

Vor **concatena subșirul**, care este unul dintre cei doi parametrii pe care îi transmitem până când ajung la lungime, care este celălalt parametru pe care i l-am dat.

De asemenea, trebuie să le atribuim unei variabile, deoarece **nu vor modifica șirul original.**

Mai întâi să vedem cum funcționează `padStart()`:

```js live
let sentence = 'My name is John';
let padded = sentence.padStart(2, 'Hi!');

console.log(padded);
```

Aici este un exemplu de `padEnd()`

```js live
let sentence = 'My name is John';
let padded = sentence.padEnd(3, '.');

console.log(padded);
```

[/slide]

[slide]
# Problem: Count String Occurrences

[vimeo-video]
[stream language="EN" videoId="489817230/bda8e696ff" default /]
[stream language="RO" videoId="489817230/bda8e696ff"  /]
[/video-vimeo]

[code-task title="Count String Occurrences" taskId="text-processing-lab-4" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function countStringOccurrences(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește o bucată de text și un șir pe care trebuie să le căutați în ea.

Imprimați toate aparițiile acelui cuvânt în șir.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['This is a word and it also is a sentence','is']`| 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
This is a word and it also is a sentence
is
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az ti toi tq to nie vie te az az az
az
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie te az az az
toi
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
te
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
tq
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
az tq tq tq tq
tq
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]

[slide]
# Solution: Count String Occurrences

[vimeo-video]
[stream language="EN" videoId="489817236/3a7e106620" default /]
[stream language="RO" videoId="489817236/3a7e106620"  /]
[/video-vimeo]

[code-task title="Count String Occurrences" taskId="text-processing-lab-4-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
//Different vido code
function countStringOccurrences(input){
   let sentence = input[0].split(' ')
   let keyWord = input[1];
   let occs = 0

    for(word of sentence){
        if(word === keyWord){
            occs++
        }
    }
    console.log(occs)
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește o bucată de text și un șir pe care trebuie să le căutați în ea.

Imprimați toate aparițiile acelui cuvânt în șir.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['This is a word and it also is a sentence','is']`| 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
This is a word and it also is a sentence
is
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az ti toi tq to nie vie te az az az
az
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie te az az az
toi
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
te
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
tq
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
az tq tq tq tq
tq
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]