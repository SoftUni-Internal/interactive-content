# Introducerea Obiectului

[slide hideTitle]
# Ce Reprezintă Obiectele?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-3-4-What-are-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Obiectele din JavaScript, ca și în **multe alte limbaje de programare**, pot fi comparate cu obiectele din viața reală.

Conceptul de obiecte din JavaScript poate fi înțeles prin utilizarea obiectelor din viața reală drept exemplu.

Un obiect constă din mai multe variabile și funcții numite proprietăți și metode.

În JavaScript, în timpul rulării puteți adăuga și elimina proprietăți din orice obiect.

Exemplu: 

``` js live
let person = {
    name: 'Peter',
    age: 20
};
console.log(person.name);
```

În exemplul de mai sus, inițializăm un **obiect** cu numele `person`.

Acest obiect are **două proprietăți**: `name` și `age`.

Putem accesa valoarea proprietății cu numele clasei `.` numele proprietății.

[/slide]

[slide hideTitle]
# Definirea Obiectului
 
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-5-Object-definition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acest exemplu ne arată cum se definesc obiectele:

``` js
let person = {
    name: 'Peter',
    age: 20,
    hairColor: 'black'
};
```

Putem defini un obiect gol și să adăugăm proprietățile ulterior:


``` js
let person = {};
person.name = 'Peter';
person['lastName'] = 'Parker';
person.age = 20;
person.hairColor = 'black';
```

[/slide]

[slide hideTitle]
# Metode de Obiecte

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-6-Methods-of-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Funcțiile dintr-un obiect JavaScript se numesc metode.

Putem defini metode folosind mai multe sintaxe.

**Prima sintaxă:**

``` js
let person = {
    sayHello: function() {
        console.log('Hi, guys');
    }
}
```

**A doua sintaxă:**
```js 
let person = {
    sayHello() {
        console.log('Hi, guys');
    }
}
```

Putem **adăuga o metodă** a unui **obiect deja definit**:

```js
let person = {
    name: 'Peter',
    age: 20
};
person.sayHello = () => console.log('Hi, guys');
```

[/slide]

[slide hideTitle]
# Metode Încorporate

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-7-Built-in-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cele mai folosite metode încorporate de obiecte sunt următoarele:

* `Object.entries()`: returnează o matrice de tupluri, care deține toate proprietățile și valorile lor
 
* `Object.keys()`: returnează o matrice care deține toate proprietățile unui obiect

* `Object.values()`: returnează o matrice cu toate valorile proprietăților obiectului

``` js live
let cat = {
    name: 'Tom',
    age: 5
};

console.log(Object.entries(cat));

console.log(Object.keys(cat));

console.log(Object.values(cat));

```

[/slide]

[slide hideTitle]
# Iterarea Prin Chei


[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-8-Iterate-through-keys-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem itera prin cheile unui obiect folosind o buclă `for-in`.

Acest lucru ne permite să accesăm proprietățile unei chei date:
``` js live
let person = {
    name: 'Peter',
    age: '18',
    grade: '5.50'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Person Info

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-10-Solution-Person-info-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Person Info" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Person-Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function personInfo(firstName, lastName, age){
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
Scrieți o funcție care primește **trei elemente**, le setează la un **obiect** și **returnează** obiectul creat.

Intrarea vine ca 3 șiruri **separate** în următoarea ordine: **firstName**, **lastName**, **age**.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| personInfo('Peter','Pan','20') | \{ firstName: 'Peter', lastName: 'Pan', age: '20' \} |
| personInfo('Kellie', 'Ellison', '33') | \{ firstName: 'Kellie', lastName: 'Ellison', age: '33' \} |


[/task-description]
[tests]
[test open]
[input]
personInfo('Peter', 'Pan', '20')
[/input]
[output]
\{ firstName: 'Peter', lastName: 'Pan', age: '20' \}
[/output]
[/test]
[test open]
[input]
personInfo('Kellie', 'Ellison', '33')
[/input]
[output]
\{ firstName: 'Kellie', lastName: 'Ellison', age: '33' \}
[/output]
[/test]
[test]
[input]
personInfo('Johny', 'Tony', '15')
[/input]
[output]
\{ firstName: 'Johny', lastName: 'Tony', age: '15' \}
[/output]
[/test]
[test]
[input]
personInfo('A', 'b', '2')
[/input]
[output]
\{ firstName: 'A', lastName: 'b', age: '2' \}
[/output]
[/test]
[test]
[input]
personInfo('CC', 'BB', '50')
[/input]
[output]
\{ firstName: 'CC', lastName: 'BB', age: '50' \}
[/output]
[/test]
[test]
[input]
personInfo('Z', 'X', '41')
[/input]
[output]
\{ firstName: 'Z', lastName: 'X', age: '41' \}
[/output]
[/test]
[test]
[input]
personInfo('JO', 'PA', '22')
[/input]
[output]
\{ firstName: 'JO', lastName: 'PA', age: '22' \}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]
# Problemă cu Soluție: City

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-12-Solution-City-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="City" taskId="JS-fundamentals-2-Objects-and-Classes-lab-City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function city(input){
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

Veți primi un **оbiect** care conține informații despre un oraș. 

Parcurgeți toate cheile și imprimați-le cu valorile lor în acest format:

\{**key**\} **->** \{**value**\}

Intrarea trebuie să aibă următoarea ordine: **name**, **area**, **population**, **country** și **postcode**.

Pentru mai multe informații, vedeți exemplele de mai jos.


## Exemplul Unu
|**Intrare**|**Ieșire**|
| --- | --- |
| city(\{ name: 'Bucharest', area: '228', population: '1830000', country: 'Romania', postCode: '010082' \})| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1830000|
||country \-\> Romania|
||postCode \-\> 010082|

## Exemplul Doi
|**Intrare**|**Ieșire**|
| --- | --- |
| city(\{ name: 'London', area: '1572', population: '9000000', country: 'England', postCode: '533537' \})| name \-\> London |
||area \-\> 1572|
||population \-\> 9000000|
||country \-\> England|
||postCode \-\> 533537|

[/task-description]
[tests]
[test open]
[input]
city(\{ name: 'Bucharest', area: '228', population: '1830000', country: 'Romania', postCode: '010082' \})
[/input]
[output]
name -> Bucharest
area -> 228
population -> 1830000
country -> Romania
postCode -> 010082
[/output]
[/test]
[test open]
[input]
city(\{ name: 'London', area: '1572', population: '9000000', country: 'England', postCode: '533537' \})
[/input]
[output]
name \-\> London
area \-\> 1572
population \-\> 9000000
country \-\> England
postCode \-\> 533537
[/output]
[/test]
[test]
[input]
city(\{ name: 'hnn', area: '1848', population: '354645', country: 'mklmlk', postCode: '1561' \})
[/input]
[output]
name -> hnn
area -> 1848
population -> 354645
country -> mklmlk
postCode -> 1561
[/output]
[/test]
[test]
[input]
city(\{name: 'ii', area: '44', population: '189', country: 'jiji', postCode: '484' \})
[/input]
[output]
name -> ii
area -> 44
population -> 189
country -> jiji
postCode -> 484
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
