# Iterația Matricei

[slide hideTitle]
# Imprimarea Matricelor pe Consolă

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-16-17-Array-iteration-and-printing-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a imprima toate elementele matricei, poate fi utilizată o buclă for:

``` js live
let capitals = ['Bucharest', 'Washington', 'London'];

for (let i = 0; i < capitals.length; i++) {
  console.log(capitals[i]);
}
```

O altă modalitate de a imprima toate elementele matricei este utilizarea `toString()`:

``` js live
let capitals = ['Bucharest', 'Washington', 'London'];

console.log(capitals.toString())
```
[/slide]

[slide hideTitle]
# Bucla "for-of"
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-23-24-for-of-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Bucla `for..of` este utilizată pentru a itera prin orice obiect iterabil, dar nu poate fi utilizată pentru a accesa indicii acestuia. 

``` js live
const cars = ['Nio', 'Tesla', 'Xpeng'];

for (const car of cars) {
  console.log(car);
}
```
[/slide]

[slide hideTitle]
# Imprimarea Unei Matrice cu "for-of"
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-25-Printing-an-array-with-for-of-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

``` js live
let arr = [1, 2, 3, 4, 5, 6];

for(let num of arr){
  console.log(num);
}
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Reverse an Array of Numbers
[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-18-Solution-Reverse-an-array-of-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reverse an Array of Numbers" taskId="fundamentals-js-arrays-lab-Reverse-an-Array-of-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reverse(n, inputArr){
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
Creați un program care primește un număr **n** și o **matrice de numere**.

Sarcina voastră este să creați **o nouă matrice** cu **n** numere, **inversate**, și să imprimați elementele sale pe o singură linie, unite printr-un singur spațiu (" ").


## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| reverse(3, [10, 20, 30, 40, 50]) | 30 20 10 |
| reverse(4, [-1, 20, 99, 5]) | 5 99 20 -1 |
| reverse(2, [66, 43, 75, 89, 47]) | 43 66 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
reverse(3, [10, 20, 30, 40, 50])
[/input]
[output]
30 20 10
[/output]
[/test]
[test open]
[input]
reverse(4, [-1, 20, 99, 5])
[/input]
[output]
5 99 20 -1
[/output]
[/test]
[test open]
[input]
reverse(2, [66, 43, 75, 89, 47])
[/input]
[output]
43 66
[/output]
[/test]
[test]
[input]
reverse(3, [110, 520, 330, 87])
[/input]
[output]
330 520 110
[/output]
[/test]
[test]
[input]
reverse(3, [-41, 520, 99, 5])
[/input]
[output]
99 520 -41
[/output]
[/test]
[test]
[input]
reverse(4, [-31, 320, 199, 5])
[/input]
[output]
5 199 320 -31
[/output]
[/test]
[test]
[input]
reverse(1, [-16, 20, 9159, 5])
[/input]
[output]
-16
[/output]
[/test]
[test]
[input]
reverse(2, [6342, 74, 1, 139, 417])
[/input]
[output]
74 6342
[/output]
[/test]
[test]
[input]
reverse(3, [616, 43, 75, 89, 47])
[/input]
[output]
75 43 616
[/output]
[/test]
[test]
[input]
reverse(2, [41, 423, 475, 89, 47])
[/input]
[output]
423 41
[/output]
[/test]
[test]
[input]
reverse(5, [664, 43, 715, 8899, 747, 44, 78])
[/input]
[output]
747 8899 715 43 664
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Reverse an Array of Strings

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/02.JS-Fundamentals-Arrays/02.JS-Fundamentals-Arrays-21-Solution-Reverse-array-of-strings-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reverse an Array of Strings" taskId="fundamentals-js-arrays-lab-Reverse-an-Array-of-Strings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reverse(arr){
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

Creați un program care primește o **matrice de șiruri** (valori separate de spațiu).

Sarcina dvs. este **să o inversați** și **să imprimați** elementele sale.

**Inversați** elementele.

## Exemplu
|**Imput**|**Output** |
| --- | --- |
| reverse(['a', 'b', 'c', 'd', 'e']) | e d c b a  |
| reverse(['abc', 'def', 'hig', 'klm', 'nop']) | nop klm hig def abc |
| reverse(['33', '123', '0', 'dd']) | dd 0 123 33 |

## Comentarii
Primul element trebuie să fie ultimul și ultimul trebuie să devină primul.

[/task-description]
[tests]
[test open]
[input]
reverse(['a', 'b', 'c', 'd', 'e'])
[/input]
[output]
e d c b a
[/output]
[/test]
[test open]
[input]
reverse(['abc', 'def', 'hig', 'klm', 'nop'])
[/input]
[output]
nop klm hig def abc
[/output]
[/test]
[test open]
[input]
reverse(['33', '123', '0', 'dd'])
[/input]
[output]
dd 0 123 33
[/output]
[/test]
[test]
[input]
reverse(['3ghj3', '123', '0', 'dkl;d', 'dasjkjd', 'dage'])
[/input]
[output]
dage dasjkjd dkl;d 0 123 3ghj3
[/output]
[/test]
[test]
[input]
reverse(['3gjhgjh3', '123bnmb', 'nmbmn0', 'dd', 'dasd', 'dage'])
[/input]
[output]
dage dasd dd nmbmn0 123bnmb 3gjhgjh3
[/output]
[/test]
[test]
[input]
reverse(['3bmn3', '12bnmbn3', '0', 'dd', 'dasd', 'dage'])
[/input]
[output]
dage dasd dd 0 12bnmbn3 3bmn3
[/output]
[/test]
[test]
[input]
reverse(['3hjkh3', '1hjkh23', '0ghjgj', '45dd', 'djklasd', 'dage'])
[/input]
[output]
dage djklasd 45dd 0ghjgj 1hjkh23 3hjkh3
[/output]
[/test]
[test]
[input]
reverse(['3jkj3', '124543', '0', 'dd', 'dsadaffa'])
[/input]
[output]
dsadaffa dd 0 124543 3jkj3
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
