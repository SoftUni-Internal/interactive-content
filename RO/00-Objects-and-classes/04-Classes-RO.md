# Clase

[slide hideTitle]
# Ce sunt Clasele?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-24-25-What-are-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **clasă** este ca un **plan** (sau șablon) pentru crearea **obiectelor**.

Clasele oferă mijloace pentru **gruparea datelor și funcționalității** împreună.

Fiecare instanță de clasă poate avea atașate **atribute**.

O instanță a unei clase poate avea, de asemenea, **metode** pentru **modificarea stării sale**, acestea fiind **comportamentul său**.
[/slide]

[slide hideTitle]
# Declararea Clasei

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-26-Class-declaration-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Exemplu:**

``` js
class Student {
    constructor(name) {
        this.name = name;
    }
}
```
Pentru a declara o clasă, folosim cuvântul cheie `class`, urmat de numele clasei, în acest caz `Student`.

`Constructor` este o metodă specială pentru crearea și inițializarea unui obiect.
[/slide]

[slide hideTitle]
# Exemplu de Clasă
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-27-Class-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cuvântul cheie `class` este folosit pentru a crea o clasă.

**Atributele clasei** sunt **aceleași pentru toate instanțele clasei**.

**Atributele de instanță** sunt **unice pentru fiecare instanță a clasei**.

```js
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
```

Cuvântul cheie `this` este folosit pentru a seta o proprietate a obiectelor la o valoare dată.

Acesta este modul în care creăm o **instanță** a clasei `Student`:

```js
let student = new Student('Peter', 5.50);
```
[/slide]

[slide hideTitle]
# Funcțiile Într-o Clasă

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-28-Functions-in-a-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Capacitatea de a modifica date este realizată de funcții speciale care fac parte din clasă și se numesc metode.

Clasele JavaScript acceptă atât metodele **de instanță**, cât și cele **statice**.

Metodele de instanță pot **accesa și modifica** datele instanței.

Metodele de instanță pot apela alte metode de instanță, precum și orice metodă statică.

Metodele statice **se referă la clasă** în loc de o instanță a acesteia.

Prin urmare, nu au **acces** la datele instanței.

``` js live
class Dog {
    constructor() {
        this.speak = () => {
            console.log('Woof');
        }
    }
}

let dog = new Dog();
dog.speak();
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Cats

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/01.JS-Fundamentals-Objects-and-classes/RO/01.JS-Fundamentals-Object-and-Classes-31-Solution-Cat-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Cats" taskId="JS-fundamentals-2-Objects-and-Classes-lab-Cats" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cats(input){
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

Scrieți o funcție care primește o matrice de șiruri în următorul format: "\{**cat name**\} \{**age**\}".

Creați o clasă Cat care primește în constructor numele și vârsta parsate din intrare.

De asemenea, trebuie să aibă o funcție numită **meow** care va tipări "\{**cat name**\}**, age** \{**age**\} **says Meow**" pe consolă.

Pentru fiecare dintre șirurile furnizate trebuie să creați un obiect Cat.

# Exemplul Unu
  |**Intrare**|**Ieșire** |
| --- | --- |
|cats(['Mellow 2', 'Tom 5'])| Mellow, age 2 says Meow|
||Tom, age 5 says Meow|


# Exemplul doi
  |**Intrare**|**Ieșire** |
| --- | --- |
|cats(['Millie 3', 'Lola 7'])| Millie, age 3 says Meow|
||Lola, age 7 says Meow|

[hints]
[hint]
Creați o clasa Cat cu proprietățile și metodele descrise mai sus:

```js
class Cat {
  constructor(name, age) {
    // ...
  }

  meow() {
    // ...
  }
}
```
[/hint] 
[hint]
Parsați datele de intrare:

```js
let [name, age] = line.split(delimiter);
```
[/hint] 
[hint]
Creați toate obiectele folosind constructorul clasei și datele de intrare parsate, stocați-le într-o matrice:

```js
let cat = new Cat(name, age);

cats.push(cat);
```
[/hint] 
[hint]
Parcurgeți matricea utilizând ciclul **for…of** și invocați metoda `.meow()`:

```js
for (let cat of cats) {
  // invocați .meow()...
}
```
[/hint] 
[/hints] 


[/task-description]
[tests]
[test open]
[input]
cats(['Mellow 2', 'Tom 5'])
[/input]
[output]
Mellow, age 2 says Meow
Tom, age 5 says Meow
[/output]
[/test]
[test open]
[input]
cats(['Millie 3', 'Lola 7'])
[/input]
[output]
Millie, age 3 says Meow
Lola, age 7 says Meow
[/output]
[/test]
[test]
[input]
cats(['jsakd 45', 'dasd 12'])
[/input]
[output]
jsakd, age 45 says Meow
dasd, age 12 says Meow
[/output]
[/test]
[test]
[input]
cats(['jsakd 45', 'gyug 11', 'vtv 2', 'vv 1', 'huuh 9'])
[/input]
[output]
jsakd, age 45 says Meow
gyug, age 11 says Meow
vtv, age 2 says Meow
vv, age 1 says Meow
huuh, age 9 says Meow
[/output]
[/test]
[test]
[input]
cats(['jsakd 5', 'huh 2', 'f 1', 'huuh 9'])
[/input]
[output]
jsakd, age 5 says Meow
huh, age 2 says Meow
f, age 1 says Meow
huuh, age 9 says Meow
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]
