# Introducere Obiectului

[slide]
# Ce sunt obiectele?

[vimeo-video]
[stream language="EN" videoId="489795277/32e690031f" default /]
[stream language="RO" videoId="489795277/32e690031f"  /]
[/video-vimeo]

Obiectele din JavaScript, ca și în **multe alte limbaje de programare**, pot fi comparate cu obiectele din viața reală.

Conceptul de obiecte din JavaScript poate fi înțeles cu obiecte tangibile din viața reală.

Un obiect constă din mai multe variabile și funcții numite proprietăți și metode.

În JavaScript, în timpul rulării puteți adăuga și elimina proprietăți din orice obiect.

Exemplu: 

``` js live
let person = { name:'Peter', age: 20 };
console.log(person.name);
```

În exemplul de mai sus, inițializăm un obiect cu numele `person`.

Acest obiect are două proprietăți `name` și `age`.

Putem accesa valoarea proprietății cu numele clasei `.` nume de proprietate.

[/slide]

[slide]
# Definirea Obiectului 

[vimeo-video]
[stream language="EN" videoId="489795273/ab8664a147" default /]
[stream language="RO" videoId="489795273/ab8664a147"  /]
[/video-vimeo]

Putem defini un obiect gol și adăuga proprietățile ulterior:

``` js
let person = {name:'Peter', age: 20, hairColor: 'black'};
```

Putem defini obiectul gol și adăuga proprietățile ulterior:

``` js
let person = {};
person.name ='Peter';
person["lastName"] = 'Parker';
person.age = 20;
person.hairColor = 'black';
```

[/slide]

[slide]
# Metode de obiecte

[vimeo-video]
[stream language="EN" videoId="489795322/e2b71c887b" default /]
[stream language="RO" videoId="489795322/e2b71c887b"  /]
[/video-vimeo]

Funcțiile dintr-un obiect JavaScript se numesc metode.

Putem defini metode folosind mai multe sintaxe.

Prima sintaxă:

``` js
let person = {
    sayHello : function() {
    console.log('Hi, guys');
  }
}
```

Second syntax:
```js 
let person = {
  sayHello() {
     console.log('Hi, guys');
  }
}
```

Putem adăuga o metodă a unui obiect deja definit:

```js
let person = { name:'Peter', age: 20 };
person.sayHello = () => console.log('Hi, guys');
```

[/slide]

[slide]
# Metode încorporate

[vimeo-video]
[stream language="EN" videoId="489795341/8532941804" default /]
[stream language="RO" videoId="489795341/8532941804"  /]
[/video-vimeo]

Metode:

* `Object.entries()`: returnează o matrice de tupluri, care deține toate proprietățile și valorile lor
 
* `Object.keys()`: returnează matricea care deține toate proprietățile unui obiect

* `Object.values()`: returnează o matrice cu toate valorile proprietăților obiectului

``` js live
let cat = { name:'Tom', age: 5 };

console.log(Object.entries(cat));

console.log(Object.keys(cat));

console.log(Object.values(cat));

```

[/slide]

[slide]
# Iterează prin chei

[vimeo-video]
[stream language="EN" videoId="489795350/598a1cef8e" default /]
[stream language="RO" videoId="489795350/598a1cef8e"  /]
[/video-vimeo]

Putem itera prin cheile unui obiect, folosind o buclă `for-in` pentru a itera peste proprietățile obiectului prin cheie:

``` js live
let person = { name:'Peter', age:'18', grade:'5.50' };

for (let key in person) {
   console.log(`${key}: ${person[key]}`);
}

```

[/slide]

[slide]
# Problemă: Person Info

[vimeo-video]
[stream language="EN" videoId="489795432/3e85c0a88d" default /]
[stream language="RO" videoId="489795432/3e85c0a88d"  /]
[/video-vimeo]

[code-task title="Person Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function personInfo(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care primește o matrice de 3 elemente, le setează la un **obiect** și tipărește proprietățile obiectului după cheie și valoare în format:
`{key}: {value}`

Intrarea vine ca 3 șiruri separate în următoarea ordine: nume, prenume, vârstă.

# Exemplu
   |**Intrare**|**Ieșire** |
| --- | --- |
|`['Peter','Pan','20']`| firstName: Peter |
||lastName: Pan|
||age: 20|

[/task-description]
[tests]
[test]
[input]
Johny
Tony
15
[/input]
[output]
firstName: Johny
lastName: Tony
age: 15
[/output]
[/test]
[test]
[input]
A
b
2
[/input]
[output]
firstName: A
lastName: b
age: 2
[/output]
[/test]
[test]
[input]
CC
BB
50
[/input]
[output]
firstName: CC
lastName: BB
age: 50
[/output]
[/test]
[test]
[input]
Z
X
41
[/input]
[output]
firstName: Z
lastName: X
age: 41
[/output]
[/test]
[test]
[input]
JO
PA
22
[/input]
[output]
firstName: JO
lastName: PA
age: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Soluție: Person Info

[vimeo-video]
[stream language="EN" videoId="489795397/a61485a8d9" default /]
[stream language="RO" videoId="489795397/a61485a8d9"  /]
[/video-vimeo]

[code-task title="Person Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
//Different vido code

function personInfo(input){
  let person = {
        firstName: input[0],
        lastName: input[1],
        age: input[2]
    }

    for (let [key, value] of Object.entries(person)){
        console.log(key + ": " + value);
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care primește o matrice de 3 elemente, le setează la un **obiect** și tipărește proprietățile obiectului după cheie și valoare în format:
`{key}: {value}`

Intrarea vine ca 3 șiruri separate în următoarea ordine: nume, prenume, vârstă.

# Exemplu
   |**Intrare**|**Ieșire** |
| --- | --- |
|`['Peter','Pan','20']`| firstName: Peter |
||lastName: Pan|
||age: 20|

[/task-description]
[tests]
[test]
[input]
Johny
Tony
15
[/input]
[output]
firstName: Johny
lastName: Tony
age: 15
[/output]
[/test]
[test]
[input]
A
b
2
[/input]
[output]
firstName: A
lastName: b
age: 2
[/output]
[/test]
[test]
[input]
CC
BB
50
[/input]
[output]
firstName: CC
lastName: BB
age: 50
[/output]
[/test]
[test]
[input]
Z
X
41
[/input]
[output]
firstName: Z
lastName: X
age: 41
[/output]
[/test]
[test]
[input]
JO
PA
22
[/input]
[output]
firstName: JO
lastName: PA
age: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problemă: City

[vimeo-video]
[stream language="EN" videoId="489795448/09ea78efff" default /]
[stream language="RO" videoId="489795448/09ea78efff"  /]
[/video-vimeo]

[code-task title="City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function city(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Primеște o matrice care conține cinci elemente.

Creați un obiect de oraș care va conține **numele orașului**, **zona, populația**, **țara** și* *codul poștal**.

Iterați toate cheile și imprimați-le cu valorile lor în format:

`{key} -> {value}`

Introducerea va fi în următoarea ordine:**nume**, **zonă**, **populație**, **țară** și **postCode**.

Vezi exemplele de mai jos.


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['Bucharest', '228', '1.83m', 'Romania', '010082']`| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1.83m|
||country \-\> Romania|
||postCode \-\> 010082|

[/task-description]
[tests]
[test]
[input]
Sofia
492
1238438
Bulgaria
1000
[/input]
[output]
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
[/output]
[/test]
[test]
[input]
hnn
1848
354645
mklmlk
1561
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
ii
44
189
jiji
484
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

[slide]
# Soluție: City

[vimeo-video]
[stream language="EN" videoId="489795461/ed6a2ec0c8" default /]
[stream language="RO" videoId="489795461/ed6a2ec0c8"  /]
[/video-vimeo]

[code-task title="City" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
//Different vido code

function city(input){
 let cityObject = {
        name: input[0],
        area: input[1],
        population: input[2],
        country: input[3],
        postCode: input[4]
    }

    for (let key in cityObject){
        console.log(`${key} -> ${cityObject[key]}`);
    }
}
```
[/code-editor]
[task-description]
# Descriere
Primire și matrice care conține cinci elemente.

Creați un obiect de oraș care va conține **numele orașului**, **zona, populația**, **țara** și* *codul poștal**.

Iterați toate cheile și imprimați-le cu valorile lor în format:

`{key} -> {value}`

Introducerea va fi în următoarea ordine:**nume**, **zonă**, **populație**, **țară** și **postCode**.

Vezi exemplele de mai jos.


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['Bucharest', '228', '1.83m', 'Romania', '010082']`| name \-\> Bucharest |
||area \-\> 228|
||population \-\> 1.83m|
||country \-\> Romania|
||postCode \-\> 010082|

[/task-description]
[tests]
[test]
[input]
Sofia
492
1238438
Bulgaria
1000
[/input]
[output]
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
[/output]
[/test]
[test]
[input]
hnn
1848
354645
mklmlk
1561
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
ii
44
189
jiji
484
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
