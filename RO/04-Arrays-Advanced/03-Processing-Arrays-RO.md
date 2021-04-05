# Procesarea Matricelor

[slide hideTitle]
# Transormarea Elementelor

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05. JS-Fundamentals-Arrays-Advanced-22-23-processing-arrays-and-map-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Începând de la ES5, tipul JavaScript `Array` oferă metoda `map()` care ne permite să transformăm elementele unei matrice într-un mod mai curat.

Metoda `map()` creează o nouă matrice cu rezultatele apelării unei funcții pentru fiecare element al matricei.

În acest exemplu, creăm o nouă matrice folosind metoda `map()` și stocăm lungimea fiecărui șir. 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);

console.log(lengths);
```

În acest exemplu, avem o matrice **string** și, folosind `map()`, convertim fiecare element într-un **number**. 

De asemenea, folosind `map()`, incrementăm fiecare număr din matrice. 

``` js live
let numsAsStrings = ['5', '3', '14', '-2', '8'];
let nums = numsAsStrings.map(Number);

console.log(nums);

let incremented = nums.map(x => x + 1);
console.log(incremented);
```

Puteți citi mai multe despre [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
[/slide]

[slide hideTitle]
# Filtrarea Elementelor

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-24-filter-elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `filter()` creează o nouă matrice, plină cu toate elementele matricei care trec un test dat (furnizat ca funcție).

În acest exemplu, folosim metoda `filter()` pentru a crea o nouă matrice, unde lungimea fiecărui element este mai mare de trei.

În acest exemplu, creăm o nouă matrice, care conține doar numere pozitive. 

``` js live
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);

console.log(longWords);
```

În acest exemplu, facem o nouă matrice numai cu numere pozitive. 

``` js live
let nums = [5, -11, 3, -2, 8];
let positiveNums = nums.filter(x => x > 0);
console.log(positiveNums);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Process Odd Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-05-solution-process-odd-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Process Odd Numbers" taskId="fundamentals-js-arrays-advanced-lab-Process-Odd-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumbers(arr){
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

Vi se oferă o **matrice de numere**.

Scrieți o funcție care tipărește toate elementele în poziții, dublate și în ordine inversă.

**Intrarea** este o matrice de numere

**Ieșirea** este tipărită pe consolă, **pe o singură linie**, **separată de un spațiu.**


## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|oddNumbers([10, 15, 20, 25]) | 50 30 |
|oddNumbers([3, 0, 10, 4, 7, 3]) | 6 8 0 |

# Sfaturi

- Numărarea în matrice începe de la '0'
- De exemplu: primim 10, 15, 20, 25
- Elementele aflate în poziții impare sunt 15 (index 1) și 25 (index 3)
- Trebuie să luăm aceste două elemente și să le înmulțim \* 2
- În cele din urmă, le imprimăm pe consolă în **ordine inversă**

[/task-description]
[tests]
[test open]
[input]
oddNumbers([10, 15, 20, 25])
[/input]
[output]
50 30
[/output]
[/test]
[test open]
[input]
oddNumbers([3, 0, 10, 4, 7, 3])
[/input]
[output]
6 8 0
[/output]
[/test]
[test]
[input]
oddNumbers([34, 12, 34, 2, 56, 6])
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
oddNumbers([34, 12, 34, 2, 56, 6])
[/input]
[output]
12 4 24
[/output]
[/test]
[test]
[input]
oddNumbers([4, 22, 30, 12, 6, 16, 25, 10])
[/input]
[output]
20 32 24 44
[/output]
[/test]
[test]
[input]
oddNumbers([6, 5, 56])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
oddNumbers([34, 62, 3, 9, 56])
[/input]
[output]
18 124
[/output]
[/test]
[test]
[input]
oddNumbers([4, 12, 34, 2, 8, 6, 1, 31])
[/input]
[output]
62 12 4 24
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Sortarea Matricelor

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-27-28-sorting-arrays-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `sort()` **sortează elementele** unei matrice.

În funcție de **funcția de comparare** oferită, ordinea de sortare poate **fi alphabetică sau numerică**, fie ascendentă (în sus) sau descendentă (în jos).

În mod implicit, metoda `sort()` sortează valorile ca **șiruri în ordine alfabetică și crescătoare.**

Dacă dorim să sortăm numerele sau alte valori, trebuie să oferim o funcție de comparare corectă.**

În acest exemplu, avem o serie de nume.

Dacă numim metoda `sort()` direct, fără a trece o **funcție de comparare**, metoda va funcționa corect - va sorta numele în ordine alfabetică crescătoare.

``` js live
let names = ['Peter', 'George', 'Mary'];
names.sort(); 

console.log(names); 
```

Cu toate acestea, dacă avem o matrice care conține **numere**, și nu **șiruri**, rezultatul va fi neașteptat și incorect.

Fără **o funcție de comparare** trecută, metoda `sort()` va trata tabloul ca o matrice de **șiruri**, nu ca o matrice de **numere**.

Deci, le va sorta ca valori **string**. 

``` js live
let numbers = [20, 40, 10, 30, 100, 5];

numbers.sort();
console.log(numbers);
```

[/slide]

[slide hideTitle]
# Funcții de Comparare

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-29-compare-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Din fericire, metoda `sort()` poate sorta valori negative, zero și pozitive în ordinea corectă.

Când metoda `sort()` compară două valori, trimite valorile către **funcția de comparare** și sortează valorile în funcție de valoarea returnată.

Rezultatul ar putea fi: **negativ, zero sau pozitiv.**

- Dacă rezultatul este negativ, `a` este sorat înainte de  `b`
- Dacă rezultatul este pozitiv, `b` este sortat înainte de `a`
- Dacă rezultatul este 0, nu se schimbă nimic

``` js live
let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a-b);

console.log(nums.join('|'));
```
[/slide]

[slide hideTitle]
# Sortarea Matricelor de Siruri

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-30-sorting-string-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda `localeCompare()` compară două șiruri de caractere în locale actuale.

Este o metodă de șir, deci nu poate fi aplicată direct pe o matrice.

În acest exemplu, trecem metoda `localeCompare()` **ca funcție de comparație**.

``` js live
let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b));

console.log(words);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Smallest two Numbers

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/04.JS-Fundamentals-Arrays-Advanced/05.JS-Fundamentals-Arrays-Advanced-problem-06-solution-smallest-two-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Smallest two Numbers" taskId="fundamentals-js-arrays-advanced-lab-Smallest-two-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestTwoNumbers(arr){
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

Scrieți o funcție care sortează o matrice în ordine crescătoare și imprimă primele două numere.

Intrările este o matrice de numere.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
|smallestTwoNumbers([30, 15, 50, 5]) | 5 15 |
|smallestTwoNumbers([3, 0, 10, 4, 7, 3]) | 0 3 |


## Sfaturi
- Putem folosi următoarea funcție pentru a sorta elementele matricei: 

 ```js
let sortedInAscending = arr.sort((a, b) => {
  return a - b
});
```

- Ulterior, primele două elemente din matrice sunt cele mai mici

- Putem folosi metoda `slice()` pentru a lua primele două elemente

[/task-description]
[tests]
[test open]
[input]
smallestTwoNumbers([30, 15, 50, 5])
[/input]
[output]
5 15
[/output]
[/test]
[test open]
[input]
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
[/input]
[output]
0 3
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 3, 2, 1])
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-53, 31, \-42, 21, 13, 2, 31])
[/input]
[output]
\-53 \-42
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([31, 42, \-25, 3, 2, 1])
[/input]
[output]
\-25 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 13, 2, 1])
[/input]
[output]
\-5 1
[/output]
[/test]
[test]
[input]
smallestTwoNumbers([\-5, 11])
[/input]
[output]
\-5 11
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
