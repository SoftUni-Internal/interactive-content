# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Person and Teacher
[code-task title="Person and Teacher" taskId="js-advanced-prototypes-and-inheritance-person-and-teacher" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function personAndTeacher() {
    // Scrieți codul aici

    return {
        Person,
        Teacher
    }
}
```

[/code-editor]
[task-description]

# Descriere

Scrieți o clasă **Person** și o clasă **Profesor** care extinde **Persoană**.

- Clasa **Person** ar trebui să aibă un **nume** și un **e-mail**
- Clasa **Profesor** ar trebui să aibă un **nume**, un **e-mail** și un **subiect**

## Intrare și ieșire

Va exista o intrare **NU**. 

Funcția dvs. ar trebui să returneze un obiect care conține clasele **Person** și **Profesor**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let p = new Person('Pesho','pesho@pesho.com');
expect(p.name).to.equal("Pesho");
expect(p.email).to.equal('pesho@pesho.com');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('mesho','mesho@pesho.com','Meshematika');
expect(t.name).to.equal("mesho");
expect(t.email).to.equal('mesho@pesho.com');
expect(t.subject).to.equal('Meshematika');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

expect(Teacher.prototype).to.be.an.instanceof(Person);
let t = new Teacher();
expect(t).to.be.an.instanceof(Person);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problemă: Inheriting and Replacing ToString
[code-task title="Inheriting and Replacing ToString" taskId="js-advanced-prototypes-and-inheritance-inheriting-and-replacing-toString" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function toStringExtension() {
    // Scrieți codul aici

    return {
        Person,
        Teacher,
        Student
    }
}
```

[/code-editor]
[task-description]

# Descriere

Extindeți clasele **Persoană** și **Profesor** din sarcina anterioară și adăugați o clasă **Student** care moștenește de la **Persoană**.

Adăugați funcția `toString ()` la toate clasele, formatul ar trebui să fie după cum urmează:

- **Person** - returnează "**Persoană (nume:** \{**nume**\}**, e-mail:** \{**e-mail**\}**)**"
- **Student** - returnează "**Student (nume:** \{**nume**\}**, e-mail:** \{**e-mail**\}**, curs:** \{**curs**\}**)**"
- **Profesor** - returnează "**Profesor (nume:** \{**nume** \}**, e-mail:** \{**e-mail**\}**, subiect:** \{**subiect**\}**)**"

Încercați să refolosiți codul folosind funcția `toString ()` din clasa de bază.

## Intrare și ieșire

Va exista o intrare **NU**.

Funcția dvs. ar trebui să returneze un obiect care conține clasele **Person**, **Profesor** și **Student**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let p = new Person("Pesho",'Pesho@pesh.com');
expect(p.toString()).to.equal('Person (name: Pesho, email: Pesho@pesh.com)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Gosho",'gosh@gosh.com',"Graphics");
expect(t.toString()).to.equal('Teacher (name: Gosho, email: gosh@gosh.com, subject: Graphics)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let s = new Student("Stamat",'stamcho@stamishteto.bg',666);
expect(s.toString()).to.equal('Student (name: Stamat, email: stamcho@stamishteto.bg, course: 666)');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]

# Problemă: Array Extension
[code-task title="Array Extension" taskId="js-advanced-prototypes-and-inheritance-array-extension" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function arrayExtension() {
      // Scrieți codul aici
   }
```

[/code-editor]
[task-description]

# Descriere

Extindeți obiectul **Array** încorporat cu funcționalități suplimentare.

Implementați următoarele funcționalități:

- `last ()`: returnează ultimul element al matricei
- `skip (n)`: returnează o nouă matrice care include toate elementele originale, cu excepția primelor **n** elemente **n** este un parametru **Număr**
- `take (n)`: returnează o nouă matrice care conține primele **n** elemente din matricea originală; **n** este un parametru **Număr**
- `sum ()`: returnează o sumă a tuturor elementelor matricei
- `average ()`: returnează media tuturor elementelor matricei

## Intrare și ieșire

Intrarea pentru funcțiile care așteaptă să fie transmisă ca parametri valizi.

Rezultatul ar trebui să fie valoarea lor **de returnare**.

## Constrângeri

Structurați-vă codul ca **IIFE**.

## Sugestii

Dacă avem o **instanță** a unui tablou, deoarece știm că este un obiect, adăugarea de noi proprietăți este destul de simplă:

```js
let myArr = [1, 2, 3]

myArr.last = function() {
    // TODO
};
```

Cu toate acestea, acest lucru adaugă doar noua noastră funcție la această instanță.

Pentru a adăuga toate funcțiile o singură dată și pentru ca acestea să funcționeze la **toate matricele**, trebuie să le atașăm la **prototipul** matricei în schimb:

```js
Array.prototype.last = function() {
    // TODO
};
```

Cu o astfel de declarație, avem acces la contextul instanței apelante prin intermediul cuvântului cheie "**this**".

Putem apoi accesa cu ușurință indexuri și alte proprietăți existente.

Nu uitați că nu dorim să modificăm matricea care iese, ci să creăm una nouă:

```js
Array.prototype.last = () => {
    return this[this.length - 1];
};

Array.prototype.skip = (n) => {
    let result = [];

    for (let i = n; i < this.length; i++) {
        result.push(this[i]);
    }

    return result;
};

Array.prototype.take = (n) => {
    let result = [];

    for (let i = n; i < n; i++) {
        result.push(this[i]);
    }

    return result;
};
```

Rețineți că aceste funcții nu au nicio verificare a erorilor - dacă **n** este **negativ** sau **în afara limitelor** ale tabloului, va fi afișată o excepție, deci aveți grijă când le utilizați sau adăugați o validare.

Ultimele două funcții necesită un pic de aritmetică pentru a fi efectuate:

```js
Array.prototype.sum = () => {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }

    return sum;
};

Array.prototype.average = () => {
    return this.sum() / this.length;
};
```

Pentru a putea trimite soluția, trebuie să ne înfășurăm programul într-un "**IIFE**".

Nu există **nici o valoare de returnare**, deoarece executarea codului are ca rezultat adăugarea funcționalității la un obiect existent.

Suntem gata să trimitem soluția noastră.

```js
(function solve() {
    Array.prototype.last = () => {};

    Array.prototype.skip = () => {};

    Array.prototype.take = () => {};

    Array.prototype.sum = () => {};

    Array.prototype.average = () => {};
}, ()); 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
expect(testArray.last()).to.equal(3, 'Incorrect last element');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('skip')).to.equal(true, "Couldn't find skip() function");
expect(testArray.skip(1)\[0\]).to.equal(2, 'Incorrect result of skip()');
expect(testArray.skip(1)\[1\]).to.equal(3, 'Incorrect result of skip()');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
expect(testArray.take(2)\[0\]).to.equal(1, 'Incorrect result of take()');
expect(testArray.take(2)\[1\]).to.equal(2, 'Incorrect result of take()');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];
expect(Array.prototype.hasOwnProperty('last')).to.equal(true, "Couldn't find last() function");
expect(testArray.last()).to.equal(3, 'Incorrect last element');

expect(Array.prototype.hasOwnProperty('skip')).to.equal(true, "Couldn't find skip() function");
expect(testArray.skip(1)\[0\]).to.equal(2, 'Incorrect result of skip()');
expect(testArray.skip(1)\[1\]).to.equal(3, 'Incorrect result of skip()');

expect(Array.prototype.hasOwnProperty('take')).to.equal(true, "Couldn't find take() function");
expect(testArray.take(2)\[0\]).to.equal(1, 'Incorrect result of take()');
expect(testArray.take(2)\[1\]).to.equal(2, 'Incorrect result of take()');

expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
expect(testArray.sum()).to.equal(6, 'Incorrect sum');

expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
expect(testArray.average()).to.equal(2, 'Incorrect average value');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('average')).to.equal(true, "Couldn't find average() function");
expect(testArray.average()).to.equal(2, 'Incorrect average value');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testArray = \[1, 2, 3\];

expect(Array.prototype.hasOwnProperty('sum')).to.equal(true, "Couldn't find sum() function");
expect(testArray.sum()).to.equal(6, 'Incorrect sum');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problemă: Balloons
[code-task title="Balloons" taskId="js-advanced-prototypes-and-inheritance-balloons" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function balloons() {
      // Scrieți codul aici
   }
```

[/code-editor]
[task-description]

# Descriere

Vi s-a însărcinat să creați mai multe clase pentru baloane.

Implementați o clasă **Balloon**, care este inițializată cu o **culoare** (String) și **gasWeight** (Number).

Aceste două argumente ar trebui să fie **membri publici**.

Implementați o altă clasă **PartyBalloon**, care moștenește clasa **Balloon** și este inițializată cu **2 parametri suplimentari** - **ribbonColor** (String) și **ribbonLength** (Number).

Clasa **PartyBalloon** ar trebui să aibă o **panglică de proprietate** care este un obiect cu **culoare** și **lungime** - cele date la inițializare. Proprietatea panglică ar trebui să aibă un **getter**.

Implementați o altă clasă **BirthdayBalloon**, care moștenește clasa **PartyBalloon** și este inițializată cu **1 parametru suplimentar** - **text** (Șir). **textul** ar trebui să fie o proprietate și ar trebui să aibă un **getter**

## Sugestii

În primul rând, trebuie să scriem o funcție, care va ține clasele noastre.

Creăm o funcție simplă și, adăugăm prima clasă, clasa de bază pentru toate baloanele.

```js
function solve() {
    class Ballon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
}
```

Acum că avem clasa noastră de bază, putem crea prima clasă pentru copii - **PartyBalloon**, care extinde clasa de bază **Balloon**.

După moștenirea clasei **Balloon**, constructorul clasei **PartyBalloon** va necesita utilizarea metodei "super()" pentru a inițializa constructorul de bază **Balloon**.

De asemenea, trebuie să adăugăm proprietatea obiectului **ribbon** în constructorul clasei **PartyBalloon**.

Acesta este pentru tine de făcut.

```js
function solve() {
    class Ballon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBallon extends Ballon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            // TODO: Initialize ribbon object
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    return {
        Ballon: Ballon,
        PartyBallon: PartyBallon,
        BirthdayBallon: BirthdayBallon
    }
}
```

Acum, că știm cum să moștenim clase, creați singuri clasa **BirthdayBalloon**.

Clasa **BirthdayBalloon** ar trebui să extindă clasa **PartyBalloon** și să adauge o **proprietate suplimentară**.

Este la fel ca clasa anterioară.

În cele din urmă, trebuie să returnăm un obiect care conține toate clasele noastre, astfel încât să putem trimite soluția.

```js
function solve() {
    class Ballon {}

    class PartyBallon extends Ballon {}

    class BirthdayBallon extends PartyBallon {}

    return {
        Ballon: Ballon,
        PartyBallon: PartyBallon,
        BirthdayBallon: BirthdayBallon
    }
}
```

Trimiteți o funcție **(NU IIFE)**, care conține toate clasele și le returnează ca obiect.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();

expect(classes.Balloon.length).to.be.equal(2,
"'Balloon constructor' does not accept 2 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Balloon("Tumno-bqlo", 20.5);

expect(test.color).to.be.equal("Tumno-bqlo",
"'Balloon color' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Balloon("Tumno-bqlo", 20.5);

expect(test.gasWeight).to.be.equal(20.5,
"'Balloon gasWeight' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.PartyBalloon)).to.be.equal(classes.Balloon,
"'PartyBalloon class' does not inherit 'Balloon class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.PartyBalloon.length).to.be.equal(4,
"'PartyBalloon constructor' does not accept 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

expect(test.color).to.be.equal("Tumno-bqlo",
"'PartyBalloon color' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);

expect(test.gasWeight).to.be.equal(20.5,
"'PartyBalloon gasWeight' not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;

expect(ribbon.color).to.be.equal("Svetlo-cherno",
"'PartyBalloon ribbon color' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
let ribbon = test.ribbon;

expect(ribbon.length).to.be.equal(10.25,
"'PartyBalloon ribbon length' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.BirthdayBalloon)).to.be.equal(classes.PartyBalloon,
"'BirthdayBalloon class' does not inherit 'PartyBalloon class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.BirthdayBalloon.length).to.be.equal(5,
"'BirthdayBalloon constructor' does not accept 5 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let ribbon = test.ribbon;

expect(ribbon.length).to.be.equal(10.25,
"'PartyBalloon ribbon length' does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday!!!");
let text = test.text;

expect(text).to.be.equal("Happy Birthday!!!",
"'BirthdayBalloon text' property does not return correct values");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problemă: People

[code-task title="People" taskId="js-advanced-prototypes-and-inheritance-people" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function people() {
      // Scrieți codul aici
   }
```

[/code-editor]
[task-description]

# Descriere

Definiți mai multe clase care reprezintă înregistrările angajaților unei companii.

Fiecare angajat are un **nume** și **vârstă**, un **salariu** și o listă de **sarcini**, în timp ce fiecare funcție are proprietăți specifice care nu sunt prezente în celelalte.

Plasați toate funcționalitățile comune într-o clasă **părinte abstract**.

Urmați diagrama de mai jos:

[image assetsSrc="JS-Advanced-Prototypes-and-Inheritance-4.png" /]

Fiecare poziție are sarcini diferite. În plus față de toate proprietățile comune, funcția de manager are un **dividend** pe care îl poate încasa împreună cu salariul său.

Toți angajații au funcția `work()` atunci când sunt chemați, parcurge lista responsabilităților pentru funcția respectivă și o imprimă pe cea curentă.

Când toate sarcinile au fost tipărite, lista începe de la început. Angajații pot colecta, de asemenea, **salariu**, care generează suma plus orice **bonusuri**.

Programul dvs. trebuie să expună un modul care conține cele trei clase **Junior**, **Senior** și **Manager**.

Proprietățile **nume** și **vârstă** sunt setate prin intermediul constructorului, în timp ce **salariul** și **dividendul unui manager** sunt inițial setate la zero și pot fi modificate ulterior.

Lista sarcinilor este completată de fiecare post. Obiectele rezultate expun, de asemenea, funcțiile `work()` și `collectSalary()`.

Când se apelează `work()`, una dintre următoarele linii este tipărită pe consolă în funcție de sarcina curentă din listă:

- "\{**employee name**\} **is working on a simple task.**"
- "\{**employee name**\} **is working on a complicated task.**"
- "\{**employee name**\} **is taking time off work.**"
- "\{**employee name**\} **is supervising junior workers.**"
- "\{**employee name**\} **scheduled a meeting.**"
- "\{**employee name**\} **is preparing a quarterly report.**"

Când se numește `collectSalary()`, tipăriți următoarele:

- "\{**numele angajatului**\} **a primit** \{**salariu + bonusuri**\} **luna aceasta.**"

## Intrare și ieșire

Orice intrare va fi transmisă ca argumente valide acolo unde este cazul.

Imprimați orice ieșire necesară consolei ca **șir**.

Trimiteți codul dvs. ca un modul revelator, care conține cele **trei clase**.

Toate definițiile trebuie denumite așa cum este descris mai sus.

## Sugestii

Ar trebui să începem prin crearea unei clase părinte care să dețină toate proprietățile partajate între diferitele poziții.

Privind descrierea problemei, vedem următoarea structură pentru obiectul nostru părinte:

```js
{
    age: Number,
    name: String,
    salary: Number,
    tasks: [],
    work: Function,
    collectSalary: Function
}
```

Variabilele de date vor face parte din obiectul atașat la contextul său local cu **aceasta** din **constructor**.

Orice proprietăți care trebuie inițializate la momentul instanțierii sunt definite ca parametri de funcție.

Funcțiile sunt definite în interiorul corpului clasei.

```js
  class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work() {
        // TODO: Cycle tasks
    }

    collectSalary() {
        // TODO: Get paid
    }
}
```

Descrierea problemei necesită ca clasa **părinte** să fie **abstractă**.

Pentru a realiza acest lucru, trebuie să adăugăm o condiție în constructor care împiedică instanțierea sa directă.

Folosind cuvântul cheie **new.target**, putem verifica dacă obiectul este creat din constructorul abstract sau printr-o clasă copil.

```js
constructor(name, age) {
    if (new.target === Employee) {
        throw new Error('Cannot instantiate directly.')
    }
    this.name = name;
    this.age = age;
    this.salary = 0;
    this.tasks = [];
}
```

Funcția `work ()` trebuie să parcurgă lista sarcinilor și să o tipărească pe cea curentă.

Cel mai simplu mod de a face acest lucru este să deplasați primul element din matrice și să îl împingeți până la capăt.

```js
work() {
    let currentTask = this.tasks.shift();
    console.log(this.name + currentTask);
    this.tasks.push(currentTask)
}  
```

Imprimarea salariului este destul de simplă. Cu toate acestea, deoarece managerul are un bonus la salariu, cel mai bine este să obțineți întreaga sumă cu o funcție internă, pe care managerul să o poată **suprascrie**.

```js
collectSalary() {
    console.log(`${this.name} received ${this.getSalary()} this month`);
}

getSalary() {
    return this.salary;
}
```

Acum, orice obiecte care moștenesc de la **Angajat** vor avea toate proprietățile lor, precum și orice noutate care este definit în declarația lor.

Pentru a moșteni (extinde) o clasă, o nouă clasă este definită cu cuvântul cheie **extinde** după numele său.

De asemenea, trebuie să apeleze constructorul părinte din constructorul lor, astfel încât lanțul prototip este stabilit.

Pentru **Junior** și **Senior**, singura diferență față de părintele **Angajat** este elementele din matricea de sarcini, deoarece acestea pot utiliza funcțiile direct din clasa de bază.

Clasele de copii vor apela părintele cu parametrii necesari și își vor împinge sarcinile direct în matrice.

```js
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on simple task.')
    }
}
```

```js
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
    }
}
```

**Managerul** nu este mult diferit, cu excepția faptului că constructorul său trebuie să atașeze o proprietate **dividend** care este setată inițial la zero.

Definiția sa trebuie, de asemenea, să înlocuiască funcția `getSalary()` pe care am adăugat-o anterior la clasa de bază, care include bonusul.

```js
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }
    getSalary() {
        return this.salary + this.dividend;
    }
}
```

După ce am terminat cu definițiile tuturor constructorilor de obiecte, trebuie să le înfășurăm într-un modul revelator pentru a fi utilizate de alte părți ale programului nostru, fără a polua spațiul de nume global:

```js
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }
    getSalary() {
        return this.salary + this.dividend;
    }

    function solve() {

        class Employee {}

        class Junior extends Employee {}

        class Senior extends Employee {}

        class Manager extends Employee {}

        return {
            Employee,
            Junior,
            Senior,
            Manager,
        };
    }
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();

expect(result.hasOwnProperty('Employee')).to.equal(true, "Solution didn't contain Employee constructor");
expect(result.hasOwnProperty('Junior')).to.equal(true, "Solution didn't contain Junior constructor");
expect(result.hasOwnProperty('Senior')).to.equal(true, "Solution didn't contain Senior constructor");
expect(result.hasOwnProperty('Manager')).to.equal(true, "Solution didn't contain Manager constructor");

var guy1parent = Object.getPrototypeOf(result.Junior.prototype);
var guy2parent = Object.getPrototypeOf(result.Senior.prototype);
var guy3parent = Object.getPrototypeOf(result.Manager.prototype);

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var guy1 = new result.Junior('pesho', 20);
var guy2 = new result.Senior('gosho', 21);
var guy3 = new result.Manager('ivan', 22);

expect(guy1.hasOwnProperty('name')).to.equal(true, "Name property not found on Junior instance.");
expect(guy1.hasOwnProperty('age')).to.equal(true, "Age property not found on Junior instance.");
expect(guy1.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Junior instance.");

expect(guy2.hasOwnProperty('name')).to.equal(true, "Name property not found on Senior instance.");
expect(guy2.hasOwnProperty('age')).to.equal(true, "Age property not found on Senior instance.");
expect(guy2.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Senior instance.");

expect(guy3.hasOwnProperty('name')).to.equal(true, "Name property not found on Manager instance.");
expect(guy3.hasOwnProperty('age')).to.equal(true, "Age property not found on Manager instance.");
expect(guy3.hasOwnProperty('salary')).to.equal(true, "Salary property not found on Manager instance.");
expect(guy3.hasOwnProperty('dividend')).to.equal(true, "Salary property not found on Manager instance.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

// Îndepărtați consola
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

var guy1 = new result.Junior('Peter', 27);
guy1.salary = 1200;
guy1.collectSalary();
expect(log\[0\]).to.equal('Peter received 1200 this month.', "Junior's salary was not logged.");

// Restabiliți consola
console.log = oldConsole;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy2 = new result.Senior('Peter', 24);
var guy3 = new result.Manager('Jake', 25);

expect(guy1.name).to.equal('Don', "Junior's name not set through constructor");
expect(guy1.age).to.equal(23, "Junior's age not set through constructor");
expect(guy2.name).to.equal('Peter', "Senior's name not set through constructor");
expect(guy2.age).to.equal(24, "Senior's age not set through constructor");
expect(guy3.name).to.equal('Jake', "Manager's name not set through constructor");
expect(guy3.age).to.equal(25, "Manager's age not set through constructor");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

expect(guy1.salary).to.equal(0, "Salary not initialized through constructor on Junior.");
guy1.salary = 1000;
expect(guy1.salary).to.equal(1000, "Salary could not be changed at runtime on Junior.");

expect(guy2.salary).to.equal(0, "Salary not initialized through constructor on Senior.");
guy2.salary = 2000;
expect(guy2.salary).to.equal(2000, "Salary could not be changed at runtime on Senior.");

expect(guy3.salary).to.equal(0, "Salary not initialized through constructor on Manager.");
expect(guy3.dividend).to.equal(0, "Dividend not initialized through constructor on Manager.");
guy3.salary = 3000;
guy3.dividend = 500;
expect(guy3.salary).to.equal(3000, "Salary could not be changed at runtime on Manager.");
expect(guy3.dividend).to.equal(500, "Dividend could not be changed at runtime on Manager.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

// Îndepărtați consola
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

// Test Junior
guy1.work();
guy1.work();
guy1.work();

var expectedGuy1Output = \[
'Don is working on a simple task.',
'Don is working on a simple task.',
'Don is working on a simple task.'
\];

compareArrays(expectedGuy1Output, log, "Junior's work wasn't logged.");

// Test Senior
log = \[\];
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();
guy2.work();

var expectedGuy2Output = \[
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.',
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.',
'Peter is working on a complicated task.',
'Peter is taking time off work.',
'Peter is supervising junior workers.'
\];

compareArrays(expectedGuy2Output, log, "Senior's work wasn't logged.");

// Test Manager
log = \[\];
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();
guy3.work();

var expectedGuy3Output = \[
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.',
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.',
'Jake scheduled a meeting.',
'Jake is preparing a quarterly report.'
\];

compareArrays(expectedGuy3Output, log, "Manager's work wasn't logged.");

// Restabiliți consola
console.log = oldConsole;

function compareArrays(array1, array2, message) \{
expect(array1.length).to.equal(array2.length, message);
for (let i = 0; i \< array1.length; i++) \{
expect(array1\[i\]).to.equal(array2\[i\], message);
\}
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var guy1 = new result.Junior('Don', 23);
var guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
var guy2 = new result.Senior('Peter', 24);
var guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
var guy3 = new result.Manager('Jake', 25);
var guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));

expect(guy1parent === Object.prototype).to.equal(false, "Prototype chain was broken from Junior.");
expect(guy2parent === Object.prototype).to.equal(false, "Prototype chain was broken from Senior.");
expect(guy3parent === Object.prototype).to.equal(false, "Prototype chain was broken from Manager.");

expect(guy1parent === guy2parent).to.equal(true, "Junior and Senior aren't related (parent class not the same).");
expect(guy2parent === guy3parent).to.equal(true, "Senior and Manager aren't related (parent class not the same).");
expect(guy1parent === guy3parent).to.equal(true, "Junior and Manager aren't related (parent class not the same).");

// Îndepărtați consola
var oldConsole = console.log;
var log = \[\];
console.log = function (string) \{
log.push(string);
\};

guy1.salary = 1000;
guy1.collectSalary();
expect(log\[0\]).to.equal('Don received 1000 this month.', "Junior's salary was not logged.");

guy2.salary = 2000;
guy2.collectSalary();
expect(log\[1\]).to.equal('Peter received 2000 this month.', "Senior's salary was not logged.");

guy3.salary = 3000;
guy3.collectSalary();
expect(log\[2\]).to.equal('Jake received 3000 this month.', "Manager's salary was not logged.");
guy3.dividend = 500;
guy3.collectSalary();
expect(log\[3\]).to.equal('Jake received 3500 this month.', "Manager's dividend was not logged.");

// Restabiliți consola
console.log = oldConsole;
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problemă: Posts

[code-task title="Posts" taskId="js-advanced-prototypes-and-inheritance-posts" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
   function posts() {
      // Scrieți codul aici
   }
```

[/code-editor]
[task-description]

## Descriere

Trebuie să creați mai multe clase pentru **Postări**.

Implementați următoarele clase:

- **Post**, care este inițializat cu **title** (Șir) și **conținut** (Șir).

   - Argumentele **2** ar trebui să fie **membri publici**
   - Clasa **Post** ar trebui să aibă, de asemenea, o funcție `toString()` care returnează următorul rezultat:
      - "**Postare:** \{**postTitle**\}"
      - "**Conținut:** \{**postContent**\}"

- **SocialMediaPost**, care moștenește clasa **Post** și ar trebui inițializată cu **2 argumente suplimentare** - **aprecieri** (număr) și **antipatie** (număr). 

Clasa ar trebui să dețină:

   - **Comentarii** (Șiruri) - o serie de șiruri

   - **AddComment** (comentariu) - o funcție care **adaugă** comentarii la acea matrice

   - Clasa ar trebui să extindă funcția `toString()` a clasei **Post** și ar trebui să returneze următorul rezultat

    ```
      Postare: {postTitle}
      Conținut: {postContent}
      Evaluare: {postLikes - postDislikes}
      Comentarii:
       * {comentariu1}
       * {comentariu2}
    ```

În cazul în care **nu există comentarii**, trimiteți informații numai despre **titlul**, **conținutul** și **evaluarea** din **postarea**.

- **BlogPost**, care moștenește clasa **Post**

   - clasa **BlogPost** ar trebui inițializată cu **1 argument suplimentar** - **vizualizări** (Număr)

   - clasa **BlogPost** ar trebui să dețină o metodă `view ()` care **mărește** **vizualizările** obiectului cu **1**, de fiecare dată când este apelat. Funcția ar trebui să **returneze obiectul**, astfel încât să fie acceptată **înlănțuirea**

   - clasa **BlogPost** ar trebui să extindă funcția `toString ()` a clasei **Post** și ar trebui să returneze următorul rezultat

   ```
   Postare: {postTitle}
   Conținut: {postContent}
   Vizualizări: {postViews}
   ```

## Exemplu

```js
   let post = new Post('Post', 'Content');

   console.log(post.toString());

   // Post: Post
   // Content: Content

   let scm = new SocialMediaPost('TestTitle', 'TestContent', 25, 30);

   scm.addComment('Good post');
   scm.addComment('Very good post');
   scm.addComment('Wow!');

   console.log(scm.toString());

// Postare: TestTitle
   // Conținut: TestContent
   // Evaluare: -5
   // Comentarii:
   //  * Good post
   //  * Very good post
   //  * Wow!
```

Trimiteți o funcție **(NOT IIFE)**, care conține toate clasele și le returnează ca obiect.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();

let test = new classes.Post("TestTitle", "TestContent");

expect(test.title).to.be.equal("TestTitle",
"'Post title' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();

let test = new classes.Post("TestTitle", "TestContent");

expect(test.content).to.be.equal("TestContent",
"'Post content' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.SocialMediaPost)).to.be.equal(classes.Post,
"'SocialMediaPost class' does not inherit 'Post class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.SocialMediaPost.length).to.be.equal(4,
"'SocialMediaPost constructor' does not accept 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

expect(test.title).to.be.equal("TestTitle",
"'SocialMediaPost title' was not initialized correctly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Rating: -5",
"'SocialMediaPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Rating: -5\n" +
"Comments:\n" +
" \* 1\n" +
" \* 2\n" +
" \* 3",
"'SocialMediaPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(Object.getPrototypeOf(classes.BlogPost)).to.be.equal(classes.Post,
"'BlogPost class' does not inherit 'Post class'");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

expect(classes.BlogPost.length).to.be.equal(3,
"'BlogPost constructor' does not accept 3 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Views: 5",
"'BlogPost toString()' function does not return correct results");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);

test.view().view().view();

expect(test.toString()).to.be.equal(
"Post: TestTitle\n" +
"Content: TestContent\n" +
"Views: 8",
"'BlogPost views()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]

# Problemă: Computer

[code-task title="Computer" taskId="js-advanced-prototypes-and-inheritance-computer" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function computer() {
    // Scrieți codul aici

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
```

[/code-editor]
[task-description]

# Descriere

Implementați ierarhia de clase pentru o afacere cu calculatoare.

Implementați următoarele clase:

- O clasă **Keyboard** care conține:

   - **manufacturer** - o proprietate șir pentru numele producătorului
   - **responseTime** - o proprietate numerică pentru timpul de răspuns al tastaturii

- O clasă **Monitor** care conține:

   - **manufacturer** - o proprietate șir pentru numele producătorului
   - **width** - o proprietate numerică pentru lățimea ecranului
   - **height** - o proprietate numerică pentru înălțimea ecranului

- O clasă **Battery** care conține:

   - **manufacturer** - o proprietate șir pentru numele producătorului
   - **expectedLife** - o proprietate numerică pentru durata de viață a bateriei așteptată

- **Computer** - o clasă **abstract** care conține:

   - **manufacturer** - o proprietate șir pentru numele producătorului
   - **processorSpeed** - o proprietate numerică care conține viteza procesorului în GHz
   - **ram** - o proprietate numerică care conține memoria RAM a computerului în Gigabytes
   - **hardDiskSpace** - o proprietate de număr care conține spațiul pe hard disk în Terabytes

- O clasă **Laptop** **extinzând** clasa **Computer** care conține:

   - **weight** - o proprietate numerică care conține greutatea laptopului în kilograme
   - **color** - o proprietate șir care conține culoarea laptopului
   - **battery** - o instanță din clasa **Battery** care conține bateria laptopului
   
Ar trebui să existe un **getter** și un **setter** pentru proprietate și validare pentru a se asigura că argumentul transmis este o instanță din clasa Battery.

- **Desktop** - o clasă concretă **extinzând** clasa **Computer** care conține:

   - **keyboard** - o instanță din clasa **Keyboard** care conține tastatura computerului desktop

Ar trebui să existe un **getter** și un **setter** pentru proprietate și validare care să asigure că argumentul transmis este o instanță din clasa **Keyboard**.

   - **monitor** - o instanță din clasa **Monitor** care conține monitorul computerului desktop
   
Ar trebui să existe un **getter** și un **setter** pentru proprietate și validare care să asigure că argumentul transmis este o instanță din clasa **Monitor**.

- Încercarea de a crea o clasă abstractă ar trebui să dea o **Eroare**
- Încercarea de a trece un obiect care nu este de instanța așteptată (de exemplu, un obiect care nu este o instanță a bateriei către laptop ca baterie) ar trebui să dea un **TypeError**

## Exemple

```js
function createComputerHierarchy() {
    //TODO: implementați toate clasele, cu proprietățile lor

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
```

Vi se cere să trimiteți **DOAR funcția** care returnează un obiect care conține clasele menționate mai sus.

## Bonus

Pentru a realiza reutilizarea codului, este o idee bună să aveți o clasă abstractă care să conțină informații comune.

Verificați clasele, pentru caracteristicile comune care pot fi grupate într-o clasă de bază?

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;

expect(Object.getPrototypeOf(Desktop)).to.equal(Computer,"Incorrect inheritance.");
expect(Object.getPrototypeOf(Laptop)).to.equal(Computer,"Incorrect inheritance.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
expect(desktop.manufacturer).to.equal("JAR Computers",'Expected manufacturer did not match.');
expect(desktop.processorSpeed).to.be.closeTo(3.3,0.01,'Expected processor speed did not match.');
expect(desktop.ram).to.equal(8,'Expected RAM did not match.');
expect(desktop.hardDiskSpace).to.equal(1,'Expected hard disk space did not match.');
expect(desktop.keyboard).to.equal(keyboard,'Expected keyboard did not match.');
expect(desktop.monitor).to.equal(monitor,'Expected monitor did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
expect(laptop.manufacturer).to.equal("Hewlett Packard",'Expected manufacturer did not match.');
expect(laptop.processorSpeed).to.be.closeTo(2.4,0.01,'Expected processor speed did not match.');
expect(laptop.ram).to.equal(4,'Expected RAM did not match.');
expect(laptop.hardDiskSpace).to.be.closeTo(0.5,0.05,'Expected hard disk space did not match.');
expect(laptop.weight).to.be.closeTo(3.12,0.01,'Expected weight did not match.');
expect(laptop.color).to.equal('Silver','Expected color did not match.');
expect(laptop.battery).to.equal(battery,'Expected battery did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);

expect(()=\>new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver","pesho")).to.throw(TypeError);
expect(()=\>new Desktop("JAR Computers",3.3,8,1,1,monitor)).to.throw(TypeError);
expect(()=\>new Desktop("JAR Computers",3.3,8,1,keyboard,"monitor")).to.throw(TypeError);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let monitor = new Monitor('Benq',28,18);

let keyboard = new Keyboard('Pesho',5);
expect(keyboard.responseTime).to.equal(5,"Response time did not match.");
expect(keyboard.manufacturer).to.equal('Pesho','Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let monitor = new Monitor('Plank',3,2);
expect(monitor.width).to.equal(3,"Width did not match.");
expect(monitor.height).to.equal(2,'Height did not match.');
expect(monitor.manufacturer).to.equal("Plank",'Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Monster',2.5);
expect(battery.expectedLife).to.be.closeTo(2.5,0.05,"Expected life did not match.");
expect(battery.manufacturer).to.equal("Monster",'Manufacturer did not match.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let classes = result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

expect(()=\>new Computer("Most Computers",2,8,1.5)).to.throw(Error);

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let battery = new Battery('Energy',3);
let laptop = new Laptop("Hewlett Packard",2.4,4,0.5,3.12,"Silver",battery);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

expect(()=\>laptop.battery = "pesho").to.throw(TypeError);
expect(()=\>desktop.keyboard = "gosho").to.throw(TypeError);
expect(()=\>desktop.monitor = "stamat").to.throw(TypeError);

keyboard.manufacturer = "Ha";
expect(desktop.keyboard.manufacturer).to.equal('Ha',"Keyboard getter did not work.");
monitor.manufacturer = "Ho";
expect(desktop.monitor.manufacturer).to.equal('Ho',"Keyboard getter did not work.");
battery.manufacturer = "Hi";
expect(laptop.battery.manufacturer).to.equal('Hi',"Keyboard getter did not work.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
