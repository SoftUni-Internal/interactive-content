# Clase

[slide]
# Ce sunt clasele?

[vimeo-video]
[stream language="EN" videoId="489794985/0c02c8963c" default /]
[stream language="RO" videoId="489794985/0c02c8963c"  /]
[/video-vimeo]

O **clasă** este ca un **plan** (sau șablon) pentru crearea de **obiecte**.

Clasele oferă mijloace de **grupare de date și funcționalitate** împreună.

Fiecare instanță de clasă poate avea atașate **atribute**.

Instanțele de clasă pot avea, de asemenea, **metode** pentru **modificarea stării sale**, acestea sunt **comportamentul său**.
[/slide]

[slide]
# Declarație de clasă

[vimeo-video]
[stream language="EN" videoId="489794989/34b7176f44" default /]
[stream language="RO" videoId="489794989/34b7176f44"  /]
[/video-vimeo]

Example: 

``` js
class Student {
  constructor(name) {
    this.name = name;
  }
}
```
Pentru a declara o clasă, folosim cuvântul cheie `class` cu numele clasei, în acest caz `Student`.

`Constructor` este o metodă specială pentru crearea și inițializarea unui obiect.
[/slide]

[slide]
# Exemplu de clasă

[vimeo-video]
[stream language="EN" videoId="489795065/d7a673fc0a" default /]
[stream language="RO" videoId="489795065/d7a673fc0a"  /]
[/video-vimeo]

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

[slide]
# Funcțiile într-o clasă

[vimeo-video]
[stream language="EN" videoId="489795074/7c855b8347" default /]
[stream language="RO" videoId="489795074/7c855b8347"  /]
[/video-vimeo]
Capacitatea de a modifica datele este realizată de funcții speciale care fac parte din clasă și se numesc metode.

Clasele JavaScript acceptă atât metodele **de instanță**, cât și cele **statice**.

Metodele de instanță pot **accesa și modifica** datele instanței.

Metodele de instanță pot apela alte metode de instanță, precum și orice metodă statică.

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

[slide]
# Problemă: Cats

[vimeo-video]
[stream language="EN" videoId="489795072/b02a97d757" default /]
[stream language="RO" videoId="489795072/b02a97d757"  /]
[/video-vimeo]

[code-task title="Cats" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function cats(input){
  // Write your code here
}
```
[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care primește o serie de șiruri în următorul format `{cat name} {age}`.

Creați o clasă Cat care primește în constructor numele și vârsta analizate din intrare.

De asemenea, ar trebui să aibă o funcție numită 'miau' care va tipări `{cat name}, age {age} says Meow` pe consolă.

Pentru fiecare dintre șirurile furnizate trebuie să creați un obiect de pisică.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['Mellow 2', 'Tom 5']`| Mellow, age 2 says Meow|
||Tom, age 5 says Meow|

# Sugestii

* Creați o Clasa a pisicilor cu proprietăți și metode descrise mai sus

* Analizați datele de intrare

* Creați toate obiectele folosind constructorul clasei și datele de intrare analizate, stocați-le într-o matrice

* Parcurgeți matricea utilizând ciclul `for…of` și invocați metoda `.meow()`


[/task-description]
[tests]
[test]
[input]
jsakd 45
dasd 12
[/input]
[output]
jsakd, age 45 says Meow
dasd, age 12 says Meow
[/output]
[/test]
[test]
[input]
jsakd 45
gyug 11
vtv 2
vv 1
huuh 9
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
jsakd 5
huh 2
f 1
huuh 9
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

[slide]
# Solution: Cats

[vimeo-video]
[stream language="EN" videoId="489795144/890591bfdb" default /]
[stream language="RO" videoId="489795144/890591bfdb"  /]
[/video-vimeo]

[code-task title="Cats" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
//Different vido code

function solve(input){
    let cats =[]
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        sayHello(){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let i = 0; i < input.length; i++) {
        let catData = input[i].split(' ')
        let [name, age] = catData
        cats.push(new Cat(name, age))
    }

    for (const key of cats) {
        key.sayHello()
    }
}
```
[/code-editor]
[task-description]

# Descriere

Scrieți o funcție care primește o serie de șiruri în următorul format `{cat name} {age}`.

Creați o clasă Cat care primește în constructor numele și vârsta analizate din intrare.

De asemenea, ar trebui să aibă o funcție numită 'miau' care va tipări `{cat name}, age {age} says Meow` pe consolă.

Pentru fiecare dintre șirurile furnizate trebuie să creați un obiect de pisică.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['Mellow 2', 'Tom 5']`| Mellow, age 2 says Meow|
||Tom, age 5 says Meow|

# Sugestii

* Creați o Clasa a pisicilor cu proprietăți și metode descrise mai sus

* Analizați datele de intrare

* Creați toate obiectele folosind constructorul clasei și datele de intrare analizate, stocați-le într-o matrice

* Parcurgeți matricea utilizând ciclul `for…of` și invocați metoda `.meow()`
[/task-description]
[tests]
[test]
[input]
jsakd 45
dasd 12
[/input]
[output]
jsakd, age 45 says Meow
dasd, age 12 says Meow
[/output]
[/test]
[test]
[input]
jsakd 45
gyug 11
vtv 2
vv 1
huuh 9
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
jsakd 5
huh 2
f 1
huuh 9
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