# Matrice Asociative

[slide hideTitle]
# Ce este o Matrice Asociativă?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-3-4-what-are-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Limbajul JavaScript este construit pe o structură centrală de date - matricea asociativă.

Matricele asociative din JavaScript sunt obiecte în care indicii sunt înlocuiți de chei definite de utilizator.

Nu au proprietatea **lungime (length)** ca matricea normală și nu pot fi iterate folosind o buclă for obișnuită.

Matricele sunt indexate cu **chei de tip șir**. Acestea constau dintr-o **cheie** și o **valoare**.

**Cheia** este un **șir**. **Valoarea** poate fi de **orice tip**.

Exemplu:

|**Cheie**|**Valoare** |
| --- | --- |
| John Smith | \+1\-555\-8976 |
| Lisa Smith | \+1\-555\-1234 |
| Sam Doe    | \+1\-555\-5030 |
[/slide]

[slide hideTitle]
# Declarare

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-5-declaration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O matrice asociativa în JavaScript este doar un obiect, deci îl putem declara dinamic.

Să declarăm și să inițializăm unul.

În acest exemplu, "one" este **cheia** și numărul 1 este **valoarea** corespunzătoare:

```js
let assocArr = { one: 1 };
```

Puteți accesa valorile prin cheile lor.

În acest exemplu, "four" este **cheia** și numărul 4 este **valoarea** corespunzătoare:

```js
assocArr['four'] = 4;
```

Aici, "five" este **cheia** și 5 este **valoarea** corespunzătoare:

```js
assocArr.five = 5;
```

Iată cum declarăm și inițializăm **cheia** mai întâi și apoi o folosim pentru a-i atribui o **valoare**:


```js
let key = 'six';
assocArr[key] = 6;
```
[/slide]

[slide hideTitle]
# Folosirea Unei Bucle "for-in"

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-6-using-for-in-loops-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi o buclă **for-in** pentru a itera prin chei.

Declarați un obiect gol. Apoi atribuiți valori cheilor și, în cele din urmă, iterați prin chei folosind o buclă **for-in**.

Așa cum se observă mai jos:

```js live
let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;

for (let key in assocArr) {
    console.log(key + ' = ' + assocArr[key]);
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Phone Book

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-7-solution-phone-book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Phone Book" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Phone-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function phoneBook(input){
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

Scrieți o funcție care stochează informații despre **numele unei persoane** și **numărul de telefon al acesteia**.

Intrarea este dată sub forma unei **matrice de șiruri**.

Fiecare șir conține un **nume** și **un număr**.

Dacă primiți același nume de două ori, înlocuiți numărul.

La final tipariți rezultatul **fără a-l sorta**.

Utilizați o **matrice asociativă**.

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
| phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']) | Tim \-\> 0876566344   |
|                                                                              | Peter \-\> 0877547887 |
|                                                                              | Bill \-\> 0896543112  |

[/task-description]
[tests]
[test open]
[input]
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
[/input]
[output]
Tim \-\> 0876566344
Peter \-\> 0877547887
Bill \-\> 0896543112
[/output]
[/test]
[test]
[input]
phoneBook(['hj 0552554', 'hr 087587', 'hj 0453112', 'hjk 0845344'])
[/input]
[output]
hj \-\> 0453112
hr \-\> 087587
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['hkkk 0552554', 'hkkk 08754557', 'hj 0453112', 'hjk 0845344'])
[/input]
[output]
hkkk \-\> 08754557
hj \-\> 0453112
hjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['ha 0552554', 'ha 087587', 'hj 0jkl12', 'hghgh 08455534544'])
[/input]
[output]
ha \-\> 087587
hj \-\> 0jkl12
hghgh \-\> 08455534544
[/output]
[/test]
[test]
[input]
phoneBook(['hj 0552554', 'h 087587', 'hdfdf 0454563112', 'hjghjk 0845344'])
[/input]
[output]
hj \-\> 0552554
h \-\> 087587
hdfdf \-\> 0454563112
hjghjk \-\> 0845344
[/output]
[/test]
[test]
[input]
phoneBook(['sdfshj 055562554', 'hjhgjr 0875587', 'sdfhj 0453456112', 'tyuhjk 0844565344'])
[/input]
[output]
sdfshj \-\> 055562554
hjhgjr \-\> 0875587
sdfhj \-\> 0453456112
tyuhjk \-\> 0844565344
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Manipularea Matricelor Asociative

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-9-manipulating-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi următoarea expresie pentru a verifica dacă o **cheie** este **prezentă**.

Utilizați metoda `.hasOwnProperty('key')`.

Să declarăm un obiect gol și să-i atribuim o cheie. Utilizați o instrucțiune `if` și expresia de mai sus pentru a vedea dacă cheia există.

Rezultatul ar trebui să fie "true".

```js live
let assocArr = {};
assocArr.name = 'John Smith';
if (assocArr.hasOwnProperty('name')) {
    console.log(true);
} else {
    console.log(false);
}
```

Eliminarea intrărilor se face folosind cuvântul cheie `delete`.

Pentru a testa acest lucru, vom declara un obiect gol și îi vom atribui o cheie.

Apoi, vom șterge cheia. Ieșirea este un obiect gol, după cum puteți vedea din exemplu:

```js live
let assocArr = {};
assocArr.name = 'John Smith';
delete assocArr.name;
console.log(assocArr);
```

Dacă încercați să accesați o cheie care nu există, atunci veți obține rezultatul **undefined**.

Încercați `console.log()` pentru `assocArr.name` după ștergerea proprietății `name`.

Vedeți exemplul de mai jos:

```js live
let assocArr = {};
assocArr.name = 'John Smith';
delete assocArr.name;
console.log(assocArr.name);
```

Puteți utiliza, de asemenea, ceva numit destructurare.

Sintaxa de alocare a destructurării este o expresie JavaScript care face posibilă despachetarea valorilor din matrice sau a proprietăților din obiecte, în valori separate.

Metoda `Object.entries()` returnează o matrice de matrice ale propriilor perechi `[ key, value ]` ale unui anumit obiect.

În bucla for-of din exemplul de mai jos declarăm variabilele noastre **cheie** și **valoare**.

După prima iterație, variabila `key` va fi egală cu numele, iar variabila `value` va fi egală cu "John Smith".

La a doua iterație a buclei, `key` va fi egală cu vârsta, iar `value` va fi egală cu 28.

```js live
let assocArr = {};
assocArr.name = 'John Smith';
assocArr.age = 28;
for (let [key, value] of Object.entries(assocArr)) {
    console.log(`${key} -> ${value}`);
}
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Meetings

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-11-solution-meetings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Meetings" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Meetings" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function meetings(input){
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

Scrieți o funcție care primește **zilele săptămânii** și **nume** ca intrare.

Tipariți un mesaj pentru fiecare întâlnire reușită în formatul următor:

"**Scheduled for** \$\{**day**\}"

Dacă aceeași zi a săptămânii apare a doua oară, tipăriți mesajul **conflict**:

"**Conflict on** \$\{**day**\}**!**"

La final, tipăriți o listă care conține toate programările de succes și cele conflictuale.

## Exemplu

|**Intrare**|**Ieșire** |
| --- | --- |
| meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']) | Scheduled for Monday    |
|                                                                  | Scheduled for Wednesday |
|                                                                  | Conflict on Monday      |
|                                                                  | Scheduled for Friday    |
|                                                                  | Monday \-\> Peter  |
|                                                                  | Wednesday \-\> Bill   |
|                                                                  | Friday \-\> Tim    |


[/task-description]
[tests]
[test open]
[input]
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
[/input]
[output]
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday \-\> Peter
Wednesday \-\> Bill
Friday \-\> Tim
[/output]
[/test]
[test]
[input]
meetings(['Monday Peter', 'Wednesday Bill', 'Friday Tim'])
[/input]
[output]
Scheduled for Monday
Scheduled for Wednesday
Scheduled for Friday
Monday \-\> Peter
Wednesday \-\> Bill
Friday \-\> Tim
[/output]
[/test]
[test]
[input]
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])
[/input]
[output]
Scheduled for Friday
Scheduled for Saturday
Scheduled for Monday
Conflict on Monday!
Scheduled for Wednesday
Friday \-\> Bob
Saturday \-\> Ted
Monday \-\> Bill
Wednesday \-\> George
[/output]
[/test]
[test]
[input]
meetings(['Thursday Bob', 'Tuesday Ted', 'Tuesday Jeff', 'Sunday George', 'Wednesday John', 'Sunday Jeff', 'Sunday Jeff', 'Saturday Bill'])
[/input]
[output]
Scheduled for Thursday
Scheduled for Tuesday
Conflict on Tuesday!
Scheduled for Sunday
Scheduled for Wednesday
Conflict on Sunday!
Conflict on Sunday!
Scheduled for Saturday
Thursday \-\> Bob
Tuesday \-\> Ted
Sunday \-\> George
Wednesday \-\> John
Saturday \-\> Bill
[/output]
[/test]
[test]
[input]
meetings(['Sunday John', 'Tuesday Jeff', 'Sunday Bob', 'Monday Tim', 'Friday Bill', 'Sunday Peter', 'Saturday John', 'Monday George', 'Tuesday Jeff', 'Tuesday Ted', 'Wednesday Bob', 'Wednesday John', 'Tuesday John', 'Tuesday Ted'])
[/input]
[output]
Scheduled for Sunday
Scheduled for Tuesday
Conflict on Sunday!
Scheduled for Monday
Scheduled for Friday
Conflict on Sunday!
Scheduled for Saturday
Conflict on Monday!
Conflict on Tuesday!
Conflict on Tuesday!
Scheduled for Wednesday
Conflict on Wednesday!
Conflict on Tuesday!
Conflict on Tuesday!
Sunday \-\> John
Tuesday \-\> Jeff
Monday \-\> Tim
Friday \-\> Bill
Saturday \-\> John
Wednesday \-\> Bob
[/output]
[/test]
[test]
[input]
meetings(['Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Jeff', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Ted', 'Tuesday Jeff'])
[/input]
[output]
Scheduled for Tuesday
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Conflict on Tuesday!
Tuesday \-\> Ted
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Sortarea Matricelor Asociative

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-13-sorting-associative-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectele **nu pot fi sortate**. Pentru a face acest lucru, trebuie să le transformăm în matrice.

Apoi le putem **sorta**, **filtra** și **asocia**.

Folosind metoda `Object.entries()` obținem o matrice de matrice.

Vedeți exemplul de mai jos:

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
console.log(entries);
```

Deci, folosind indexarea putem obține **cheia** și **valoarea** pentru fiecare **intrare**.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let firstEntry = entries[0];
console.log(firstEntry[0]);
console.log(firstEntry[1]);
```

După cum sugerează și numele metodei `sort()`, aceasta sortează elementele unei matrice și returnează matricea sortată. Ordinea de sortare implicită este **crescătoare**.

Matricea **entries** din exemplul de mai sus poate fi **sortată**, utilizând o funcție de **comparare**.

Utilizați metoda `.localeCompare()` pentru a sorta **șiruri** în JavaScript.

[/slide]

[slide hideTitle]
# Sortarea După Cheie

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-14-sorting-by-key-and-value-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Pentru a **sorta după cheie**, utilizați **primul element** al fiecărei intrări.

Aici `a[0]` este primul element și `b[0]` al doilea element al funcției de sortare.

Expresia `a[0].localeCompare(b[0])` va sorta matricea în ordine crescătoare.

Dacă avem `b[0].localeCompare(a[0])` funcția va sorta matricea în ordine descrescătoare.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[0].localeCompare(b[0]));
console.log(result);
```

Pentru a **sorta după valoare**, utilizați **al doilea element** al fiecărei intrări.

Acest exemplu este același ca cel de mai sus, singura diferență fiind că folosim al doilea element ca criteriu de sortare.

```js live
let phonebook = {
    Tim: '0876566344',
    Bill: '0896543112'
};
let entries = Object.entries(phonebook);
let result = entries.sort((a, b) => a[1].localeCompare(b[1]));
console.log(result);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: AddressBook

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-15-solution-adress-book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Address Book" taskId="js-fundamentals-pt2-Associative-Arrays-lab-Address-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function addressBook(input){
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

Scrieți o funcție care preia **nume** și **adrese** ca intrare.

Valorile vor fi separate prin "**:**".

Dacă același nume apare de mai multe ori, salvați adresa **cea mai recentă**.

Tipăriți o listă cu toate intrările, **sortate** alfabetic după **nume**.

## Exemplu
|**Intrare**|**Ieșire** |
|---|---|
| addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']) | Bill \-\> Ornery Rd    |
|                                                                                    | Peter \-\> Carlyle Ave |
|                                                                                    | Tim \-\> Doe Crossing  |

[/task-description]
[tests]
[test open]
[input]
addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
[/input]
[output]
Bill \-\> Ornery Rd
Peter \-\> Carlyle Ave
Tim \-\> Doe Crossing
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Coleman Ave', 'Tim:Katie Crossing', 'John:Coleman Ave', 'John:Grover Rd', 'Jeff:Acker Crossing', 'Bob:Katie Crossing'])
[/input]
[output]
Bob \-\> Katie Crossing
Jeff \-\> Acker Crossing
John \-\> Grover Rd
Tim \-\> Katie Crossing
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way',  'Jeff:Huxley Rd'])
[/input]
[output]
Bill \-\> Gateway Way
Bob \-\> Redwing Ave
George \-\> Mesta Crossing
Jeff \-\> Huxley Rd
John \-\> Grover Rd
Peter \-\> Huxley Rd
Ted \-\> Gateway Way
[/output]
[/test]
[test]
[input]
addressBook(['Bob:Coleman Ave', 'Tim:Katie Crossing', 'John:Coleman Ave', 'John:Grover Rd', 'Jeff:Acker Crossing', 'Bob:Katie Crossing', 'Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave',  'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd'])
[/input]
[output]
Bill \-\> Gateway Way
Bob \-\> Redwing Ave
George \-\> Mesta Crossing
Jeff \-\> Huxley Rd
John \-\> Grover Rd
Peter \-\> Huxley Rd
Ted \-\> Gateway Way
Tim \-\> Katie Crossing
[/output]
[/test]
[test]
[input]
addressBook(['George:Westend Ave', 'Jeff:Westend Ave', 'Bill:Redwing Ave', 'George:Coleman Ave', 'George:Acker Crossing', 'Bill:Grover Rd', 'Jeff:8th Rd', 'John:Milwaukee Crossing', 'Bob:Fordem Ave', 'Ted:Toban Ave',  'Bill:8th Rd', 'Peter:Katie Crossing', 'Ted:Dayton Ave', 'Jeff:Milwaukee Crossing', 'Ted:Gateway Way', 'George:Westend Ave', 'George:Westend Ave', 'John:Huxley Rd', 'George:Katie Crossing', 'Peter:Milwaukee Crossing', 'Peter:Katie Crossing', 'Tim:Westend Ave'])
[/input]
[output]
Bill \-\> 8th Rd
Bob \-\> Fordem Ave
George \-\> Katie Crossing
Jeff \-\> Milwaukee Crossing
John \-\> Huxley Rd
Peter \-\> Katie Crossing
Ted \-\> Gateway Way
Tim \-\> Westend Ave
[/output]
[/test]
[test]
[input]
addressBook(['Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Ted:Toban Ave', 'Peter:Katie Crossing', 'Ted:Dayton Ave'])
[/input]
[output]
Peter \-\> Katie Crossing
Ted \-\> Dayton Ave
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Structuri de Date Imbricate

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/02.JS-Fundamentals-Associative-Arrays/RO/02.JS-Fundamentals-Associative-Arrays-18-19-nested-data-structures-and-sorting-nested-data-structures-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valorile stocate în matricele asociative pot fi obiecte sau matrice.

Odată ce avem o **referință** la valoare, o putem **manipula** ca pe orice alt obiect.

În exemplul următor declarăm un obiect care are două proprietăți: "Tim" și "Bill".

"Tim" este un obiect, la fel ca și "Bill". 

Pentru a accesa contactele lui Bill, trebuie să avem o referință la obiect prin crearea variabilei `billsContact`.

Putem accesa această proprietate din obiectul "Bill", utilizând variabila `billsContact`.

```js live
let contacts = {
    Tim: {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    Bill: {
        phone: '0896543112',
        address: 'Nelson Place'
    },
};
let billsContact = contacts['Bill'];
console.log(billsContact.phone);
```

## Sortarea Structurilor de Date Imbricate

Putem **sorta** structuri de date după **valorile proprietății** fiecărei intrări. 

În acest caz, vom folosi destructurarea pentru a sorta cartea de contacte **alfabetic** după adresa fiecărei persoane.

```js live
let contacts = {
    Tim: {
        phone: '0876566344',
        address: 'Doe Crossing'
    },
    Bill: {
        phone: '0896543112',
        address: 'Nelson Place'
    },
};
let entries = Object.entries(contacts);
let result = entries.sort(([keyA, refA], [keyB, refB]) => {
    let addrA = refA.address;
    let addrB = refB.address;
    return addrA.localeCompare(addrB);
});
console.log(result);
```

[/slide]
