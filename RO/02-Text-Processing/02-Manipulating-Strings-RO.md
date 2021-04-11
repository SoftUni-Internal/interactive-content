# Manipularea Șirurilor

[slide hideTitle]
# Concatenare

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-7-8-concatinating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Concatenarea** în JS se face cu operatorii: `+` și `+ =` sau prin metoda `concat()`.

**Concat** poate fi folosit și pentru **fuzionarea** a două matrice.

Ceea ce este specific este că **nu schimbă șirul original** sau matricea, în schimb returnează unul nou.

Iată un exemplu despre cum funcționează operatorii `+` și `+=`:

```js live
let sentence = 'Hello' + ', ';
let world = 'John';

sentence += world

console.log(sentence)
```

Să vedem cum funcționează `concat()`:

```js live
let greet = 'Hello, ';
let name = 'John';

let concatenated = greet.concat(name);

console.log(concatenated);
```

În cele din urmă, vedem că ambele moduri vor returna un **șir identic**.

Acest lucru se datorează faptului că `+`, `+=` și metoda `concat()` fac același lucru, dar în moduri diferite.

[/slide]

[slide hideTitle]
# Căutarea de Subșiruri

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-9-searching-for-substrings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **găsi** un subșir, putem folosi `indexOf()` sau `lastIndexOf()`.

Aceste două metode sunt **sensibile la majuscule**, ceea ce înseamnă că dacă căutăm un cuvânt care include o **majusculă și șirul conține versiunea sa cu litere mici**, acestea nu se vor potrivi deloc cu cuvântul și vor da ca rezultat `-1`. 

Ambele pot **lua până la doi parametri:**

- Primul este cuvântul pe care îl caută
- Al doilea este indicele de pornire

Iată un exemplu de utilizare a `indexOf ()`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('JS'));
```

Aici `indexOf` returnează **7** deoarece acesta este primul indice la care apare `JS`.

Acum să încercăm cu `js` în loc de `JS`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('js'));
```

Acum returnează `-1` deoarece **indexOf** este sensibil la majuscule și minuscule și nu detectează **js** ca **JS**.

Să verificăm `lastIndexOf()`.

Este aproape la fel ca **indexOf**, dar cu diferența că **lastIndexOf** caută ultima apariție.

Și să vedem cum funcționează:

```js live
let str = 'JS developer';

console.log(str.lastIndexOf('e'));
console.log(str.lastIndexOf('a'));
```

Primul `console.log` returnează **10**, deoarece acesta este indicele la care apare ultima dată **e**.

Iar al doilea returnează `-1` pentru că nu găsește nimic.

[/slide]

[slide hideTitle]
# Extragerea de Subșiruri

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-10-extracting-substrings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **extrage** un subșir, putem folosi `substring()`. 

Această metodă are doi parametri:

- Primul este indicele **de start**
- Al doilea este indicele **final**

Și va returna partea de la **indicele de început** până la **indicele final**.

Dar dacă nu dăm **al doilea parametru**, acesta va returna partea dintre **indicele de început** și **sfârșitul** șirului.

`Substring()` nu va modifica șirul original, aceasta va returna unul nou.

Acest lucru înseamnă că trebuie să îl atribuim unei variabile pentru a funcționa.

Aici sunt câteva exemple:

```js live
let str = 'Intro to programming';

let subStrOne = str.substring(5, 8)
let subStrTwo = str.substring(5)

console.log(subStrOne);
console.log(subStrTwo);
```

Aici **subStrOne** va returna **to**, deoarece aceasta este partea care se află în intervalul indicelui de început și indicelui de sfârșit.

Dar **subStrTwo** returnează totul de la **to** până la sfârșit.

Acest lucru se întâmplă pentru că nu i-am dat al doilea parametru, care este indicele de **sfârșit**.

[/slide]

[slide hideTitle]
# Operații cu Şiruri

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-11-string-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă dorim să schimbăm direct o parte a unui șir, vom folosi `replace()`.

La fel ca `substring()`, `replace()` nu **va modifica** șirul original, va **returna unul nou**.

Asta înseamnă că trebuie să îl atribuim unei variabile.

**Replace** este o metodă care necesită doi parametri:

-  `pattern`
-  `replacement`

Pentru partea **pattern** putem folosi **o expresie regulată** sau un **șir**.

Iar pentru **replacement** putem folosi `function()` sau un **șir**.

După ce se potrivește cu acel pattern, își va schimba doar prima apariție.

Iată un exemplu:

```js live
let str = 'I love JS. JS is my favorite language';
let replacedStr = str.replace('JS', 'JavaScript');

console.log(replacedStr);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Substring

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-12-solution-substring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Substring" taskId="js-fundamentals-pt2-text-processing-lab-Substring" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function substring(str, firstNumber, secondNumber){
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

Scrieți o funcție care primește **un șir și două numere.**

Numerele vor fi un **indice de pornire** și un **număr de elemente** care trebuie adăugate în subșir.

Imprimați rezultatul.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| substring('ASentence', 1, 8) | Sentence |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
substring('ASentence', 1, 8)
[/input]
[output]
Sentence
[/output]
[/test]
[test]
[input]
substring('gashajGAHJGAasghaj', 4, 8)
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
substring('gasjGAHJAasghaj', 0, 10)
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
substring('gasjGA48HJAasghaj', 5, 1)
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
substring('gasjGA48HJAahaj', 5, 5)
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
substring('jjjasjA48HJAko88/(())haj', 10, 10)
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Împărțirea unui Şir

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-14-splitting-and-finding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când vrem să separăm cuvintele într-un șir, folosim metoda `split()`.

Aceasta împarte un **șir** într-o listă ordonată folosind un model \(separator\), care este primul parametru, și returnează o **matrice**.

Avem opțiunea de a adăuga un al doilea parametru, care este **limita**.

Acesta setează **limita** **indicilor** în **matricea finală**.

Iată un exemplu pentru utilizarea `split()`:

- separatorul va fi un **spațiu**

```js live
let str = 'I love JS';
let divided = str.split(' ');

console.log(divided);
```

# Găsirea într-un Șir

Pentru a găsi o anumită parte a unui șir, folosim metoda `includes()`.

Această metodă are doi parametri:

- Șirul pe care îl căutăm
- Poziția pe care să începem căutarea, fiind opțională

Aceasta preia **șirul** și îl caută în cel principal.

Este similară cu `indexOf()`, dar dacă îl găsește, această metodă returnează `true` sau `false`, în cazul opus.

`includes()` este sensibilă la majuscule și minuscule.

De exemplu:

```js live
let text = 'I love JS';

console.log(text.includes('JS'));
console.log(text.includes('js'));
```
[/slide]

[slide hideTitle]
# Repetarea într-un Șir

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-15-repeating-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Când vrem să **repetăm** un **șir** în JS, folosim `repeat()`. 

Acest lucru ne permite să facem un anumit număr de **copii** ale aceluiași **șir**.

Primește doi parametri:

- `string`
- `count`

După ce este apelată pentru un anumit **șir**, **repeat** va lua **șirul** pe care l-am dat și îl va **înmulți** cu **numărul** pe care îl transmitem.

După aceea, va **returna** un **șir concatenat** din toate copiile.

Iată un exemplu despre cum funcționează `repeat()`:

```js live
let str = '*';

console.log(str.repeat(5));
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Censored Words

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-16-solution-censored-words-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Censored Words" taskId="js-fundamentals-pt2-text-processing-Censored-Words" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function censoredWords(sentence, word){
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
Scrieți o funcție care primește o propoziție ca prim parametru și un singur cuvânt ca al doilea.

Găsiți toate aparițiile acestui cuvânt în text și **înlocuiți-le** cu numărul corespunzător de "\*".

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| censoredWords('A small sentence with some words', 'small') | A \*\*\*\*\* sentence with some words |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
censoredWords('A small sentence with some words', 'small')
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
censoredWords('soallsentencewithsomewords', 'so')
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
censoredWords('pesho gosho stamat pesho', 'pesho')
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
censoredWords('aa bb aa ca pesho gosho stamat pesho', 'a')
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
censoredWords('repeat word repeat repeat word word repeat', 'repeat word')
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
censoredWords('aaa heyyy a heyyy abv hey abc', 'heyyy')
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Metoda Trim

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-18-trimming-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **elimina spațiile albe** folosim metoda `trim()`.

**Trim** va elimina toate **spațiile albe** dintr-un șir, de la ambele capete.

De aceea avem `trimStart()` și `trimEnd()`.

Dacă dorim să eliminăm spațiile albe numai la **început** sau **la sfârșit**, putem folosi una dintre aceste metode.

Niciuna dintre aceste trei metode nu afectează valoarea șirului original.

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

[slide hideTitle]
# Starts With sau Ends With

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-19-starts-with-end-with-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Cu `startsWith()`, putem verifica dacă un șir începe cu un cuvânt specific, pe care îl vom transmite metodei ca parametru.

`endsWith()` este aproape la fel.

Diferența dintre ele este că `endsWith()` verifică dacă acel șir se termină cu un anumit cuvânt.

Dacă găsesc subșirul, vor returna true, sau false în cazul opus.

**StartsWith** poate primi doi parametri:

- **Cuvântul** căutat în șir
- Indicele **poziției** de la care să înceapă căutarea 
      - acest parametru este opțional

**EndsWith** poate primi de asemenea doi parametri, dar al doilea este **lungimea** și este opțional.

Dacă este dat **al doilea parametru**, acesta va fi utilizat ca indicele de pornire al căutării.

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

În ambele exemple, primul **console.log** va returna `true`, dar al doilea va returna `false`, deoarece subșirul nu va fi lozalizat în partea în care are loc căutarea. 

[/slide]

[slide hideTitle]
# Padding la Început și la Sfârșit

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-20-padding-at-the-start-and-end-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Dacă vrem să **adăugăm** un șir **de un anumit număr de ori** la **începutul** sau **la** sfârșitul unui alt șir, putem folosi metodele `padStart()` sau `padEnd()`.

Acestea vor **concatena subșirul**, care este unul dintre cei doi parametri pe care îi transmitem, până când ajung la lungime, care este celălalt parametru pe care l-am transmis.

De asemenea, trebuie să le atribuim unei variabile, deoarece aceste metode **nu vor modifica șirul original.**

Mai întâi să vedem cum funcționează `padStart()`:

```js live
let sentence = 'My name is John';
let padded = sentence.padStart(2, 'Hi!');

console.log(padded);
```

Aici este un exemplu de `padEnd()`:

```js live
let sentence = 'My name is John';
let padded = sentence.padEnd(3, '.');

console.log(padded);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Count String Occurrences

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/RO/interactive-js-fundamentals-text-processing-21-solution-count-string-occurences-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Count String Occurrences" taskId="js-fundamentals-pt2-text-processing-Count-String-Occurrences" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function countStringOccurrences(text, str){
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
Scrieți o funcție care primește un **fragment de text** și un **șir pe care trebuie să îl căutați** în el.

Imprimați numărul de apariții ale acelui cuvânt în șir.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| countStringOccurrences('This is a word and it also is a sentence', 'is') | 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
countStringOccurrences('This is a word and it also is a sentence','is')
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
countStringOccurrences('az ti toi tq to nie vie te az az az', 'az')
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie te az az az', 'toi')
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie az az az', 'te')
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie az az az', 'tq')
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
countStringOccurrences('az tq tq tq tq', 'tq')
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]
