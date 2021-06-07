# Clase

[slide hideTitle]
# Definiția clasei​

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-23-24-classes-class-definition-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasele sunt folosite ca plan, definind structura unui obiect.

În corpul său, o clasă poate **conține**:

- **Date**, sub formă de proprietăți și atribute

- **Acțiuni** care îi definesc comportamentul și îi modifică starea, prin intermediul funcțiilor

Fiind un șablon, clasele pot fi instanțiate sub formă de **obiecte**.

Ceea ce le face diferite de clasele Java este că clasele JavaScript sunt mult mai dependente de utilizarea corectă a cuvântului cheie `this`.

Definirea domeniului și legarea `this` au un comportament foarte diferit în JavaScript, comparativ cu Java.

[/slide]

[slide hideTitle]
# Definirea unei clase

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-25-defining-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În **JavaScript**, există două moduri de a defini o clasă - **declararea** clasei și **expresia** clasei.

## Declararea clasei

Declarăm o clasă folosind cuvântul cheie `class`, urmat de numele clasei, în acest caz - `Person`.

``` js
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
```

Metoda `constructor` va fi apelată de fiecare dată când clasa este **instanțiată**.

Cuvântul cheie `this` este utilizat pentru a seta o proprietate a obiectelor la o valoare dată.

Pentru a **instanția** clasa `Person`, folosim cuvântul cheie `new`, urmat de numele clasei:

```js
let person = new Person('Mike', 37, 'Bern');
```

Între paranteze, trecem argumente în `name`, `age` și `city`.


## Expresia clasei

Când se utilizează **expresia clasei**, clasa este atribuită ca valoare unei variabile:

```js
let Car = class {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
```

Vom putea accesa această clasă numai cu **numele variabilei**.

Ca urmare, putem lăsa clasa în sine cu sau fără un nume - așa cum se arată mai sus.

[/slide]

[slide hideTitle]
# Ridicarea

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-26-hoisting-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În JavaScript, putem folosi variabile și funcții înainte ca acestea să fie declarate, dacă folosim cuvântul cheie `var`:

```js live
favoriteGame = 'Rise of the Tomb Raider 🎮';

console.log(favoriteGame);

var favoriteGame;
```

Mutarea tuturor declarațiilor în partea de sus a domeniului lor de aplicare este denumită **ridicare**.

Rețineți că încă **nu putem** accesa **valorile** variabilelor declarate cu `let` și `const`.

```js
currentWeather = 'rainy 🌦'; // ReferenceError

let currentWeather;
```

Ridicarea **nu** se aplică nici declarațiilor clasei, nici expresiilor clasei.

Ni se cere să declarăm clasa noastră **înainte** să o putem accesa.

În caz contrar, va rezulta o `ReferenceError`:

```js live
const mountainBike = new Bike('Trek Bikes 🚲', 'mountain 🏔', 'Kenda Kwest 28x700');

class Bike {
    constructor(brand, type, tires) {
        this.brand = brand;
        this.type = type;
        this.tires = tires;
    }
}
```

[/slide]

[slide hideTitle]
# Corpul clasei

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-27-class-body-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Corpul clasei este definit folosind deschiderea și închiderea acoladelor: `{...}`

În interior, definim membrii clasei ca proprietăți și metode.

```js
class SupportEmployee {
    constructor(name) {
        this.name = name;
        this.department = 'support';
    }
}
```

O metodă obligatorie pe care o au toate clasele este **constructorul**.

Se folosește de fiecare dată când se creează o **nouă** instanță (obiect) a clasei.

Această metodă definește valorile **inițiale** pentru toate proprietățile pe care ar trebui să le aibă un obiect copil.

[/slide]

[slide hideTitle]
# Metode prototip

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-28-prototype-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Capacitatea de a modifica datele este realizată de funcții speciale care fac parte din clasă, care se numesc metode. 

Pentru a adăuga proprietăți sau metode la toate obiectele existente, le adăugăm la prototipul lor.

```js live
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }

    // This is a prototype method
    calcArea() {
        return this.sideLength * this.sideLength;
    }
}

const squareOne = new Square(20);
console.log(squareOne.calcArea());

const squareTwo = new Square(35);
console.log(squareTwo.calcArea());
```

Cu alte cuvinte, adăugarea unei metode în corpul clasei o face disponibilă tuturor instanțelor sale.

[/slide]

[slide hideTitle]
# Proprietăți accesor

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-29-accessor-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Instanțele clasei JavaScript au două tipuri de proprietăți.

Primul tip este **proprietăți de date**, care, după cum sugerează și numele, este utilizat pentru a stoca informații.

Ele sunt pur și simplu **variabilele** care aparțin unui obiect.
 
Al doilea tip este **proprietăți accesor**.

Cu standardul EcmaScript 6 în 2015, JavaScript a introdus suport pentru cuvintele cheie `get` și `set`.

Acestea permit recuperarea și modificarea valorilor proprietății într-un mod similar cu Java.

```js
class User {
  constructor(name, surname) {
    this.name = "John";
    this.surname: "Smith";
  }

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
};

let userOne = new User();

userOne.fullName = 'James Cooper';
```

Definirea unui getter de proprietate se face folosind cuvântul cheie `get`, urmat de metodă.

Setările sunt create cu cuvântul cheie `set` și o metodă care acceptă de obicei o nouă valoare.

Utilizarea getterilor și seterilor permite **încapsularea datelor** - unele proprietăți pot fi citite doar, fără acces la scriere din afara clasei.

[/slide]

[slide hideTitle]
# Proprietăți accesor în acțiune

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-30-accessor-properties-in-action-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi proprietățile accesorului pentru a modifica valorile proprietăților unui obiect după crearea acestuia:

```js live
class Teacher {
    constructor (fullName, subject){
        this.fullName = fullName;
        this.subject = subject;
    }
}

let myTeacher = new Teacher('Dale Oliver', 'History');
console.log(myTeacher.subject);

myTeacher.subject = 'Programming';
console.log(myTeacher.subject);
```

După cum putem vedea, aici, folosim notația punct pentru a schimba proprietatea `subject` a obiectului `myTeacher`.

Acest lucru se poate face și folosind notația paranteză:

```js
myTeacher['subject'] = 'Programming';
```
[/slide]

[slide hideTitle]
# Metode statice

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-31-static-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Clasele JavaScript acceptă atât metodele **de instanță**, cât și cele **statice**

Metodele de instanță pot **accesa și modifica** datele instanței.

Ei pot apela alte metode de instanță, precum și orice metodă statică.

Metodele statice **se referă la clasă**, mai degrabă decât la o instanță a acesteia.

``` js
class Car {
  constructor(name) {
    this.name = name;
  }

  static hello() {
    return "This is a static method!";
  }
}

let myCar = new Car("Mazda");
```

Drept urmare, le putem apela numai la **clasa însăși**, deoarece nu au acces la datele instanței.

[/slide]

[slide hideTitle]
# Proprietăți private

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-32-private-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Recent introduse în JavaScript, **proprietățile private** sunt accesibile numai din interiorul clasei.

Încep întotdeauna cu un simbol hash `#`, urmat de un nume: `#myPrivateProperty`

```js
class iceCreamMaker {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
        this.#sugarInKg = 30;​ // SyntaxError
    }​
}​

const machine = new iceCreamMaker();​
machine.#milkInLitres === 40 // SyntaxError
```

Accesarea unei proprietăți private din afara clasei părinte duce la o eroare.

[/slide]

[slide hideTitle]

# Accesarea proprietăților private​

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-33-accessing-private-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Deoarece câmpurile private sunt **limitate** la domeniul de aplicare al clasei, trebuie să folosim **getters și setters** pentru a le face publice:

```js
class iceCreamMaker {​
    #milkInLitres;
    constructor() {​
        this.#milkInLitres = 50;
    }​

    get milkInLitres() { 
      return this.#milkInLitres;
    }​
}​

const machine = new iceCreamMaker();​
console.log(machine.milkInLitres); // 50
```

[/slide]

[slide hideTitle]
# Problemă cu soluție: Person

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-34-35-person-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Person" taskId="java-path-js-advanced-objects-and-classes-person" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Person {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Creați o **clasă** care reprezintă o înregistrare personală.

Ar trebui să aibă următoarele proprietăți, toate setate din constructor:

- `fName` - **Șir**
- `lName` - **Șir**
- `age` - **Număr**
- `email` - **Șir**

**Păstrați numele proprietăților la fel ca mai sus.**

De asemenea, ar trebui să aibă o metodă numită `toString()`, care tipărește un rezumat al informațiilor.

Consultați exemplul pentru detalii de formatare. 

## Intrare
Funcția constructor va primi parametri valizi. 

## Ieșire
Metoda `toString()` trebuie să returneze un șir în următorul format: 

`{fName} {lName} (age: {age}, email: {email})`

Trimiteți definiția clasei așa cum este, **fără** înfășurarea acesteia în nicio funcție.

## Exemplu

### Exemplu de intrare 

```js
let person = new Person('Anna', 'Simpson',
  22, 'anna@yahoo.com'); 

console.log(person.toString()); 
```

### Ieșire

```
Anna Simpson (age: 22, email: anna@yahoo.com) 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Person = result;

let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
let str = person.toString();

expect(str).to.be.equal('Anna Simpson (age: 22, email: anna@yahoo.com)');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person).to.be.equal('function',
            "Class 'Person' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person.constructor).to.be.equal('function',
            "'Person.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(Person.length).to.be.equal(4,
            "'Rectangle.constructor' should take 4 parameters");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;

expect(typeof Person.constructor.name).to.be.equal('string',
            "'Person.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.fName).to.be.equal("Peter",
            "Property 'fName' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.lName).to.be.equal("Marinov",
            "Property 'lName' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.age).to.be.equal(18,
            "Property 'age' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(p.email).to.be.equal("pesho18@abv.bg",
            "Property 'email' not working");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");

expect(typeof p.toString).to.be.equal('function',
            "Method 'toString()' does not exist");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
let str = p.toString();

expect(str).to.be.equal('Peter Marinov (age: 18, email: pesho18@abv.bg)');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă cu soluție: Get People

[video src="https://videos.softuni.org/hls/Java/JS-Fundamentals/RO/02-Objects-and-Classes/JS-advanced-objects-and-classes-36-37-get-people-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Get People" taskId="java-path-js-advanced-objects-and-classes-get-people" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
function getPeople() {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Creați o funcție care returnează o matrice de instanțe `Person`. 

Utilizați clasa din sarcina anterioară, creați următoarele instanțe și returnați-le într-o matrice:

|**First Name**|**Last Name**|**Age**|**Email**|
|---|---|---|---|
|**Anna**|Simpson|22|anna@yahoo.com|
|**SoftUni**| | | |
|**Stephan**|Johnson|25| |
|**Gabriel**|Peterson|24|g.p@gmail.com|

Pentru orice celule goale, nu furnizați un parametru (apelați constructorul cu mai puțini parametri).

## Intrare 
Nu va fi **nicio intrare**, datele sunt statice și se potrivesc cu tabelul de mai sus. 

## Ieșire 
**Returnați o matrice** de instanțe `Person`. 

**Transmiteți** o **funcție** care returnează ieșirea necesară.

[/task-description]
[code-io/]
[tests]
[test open]
[input]
let getPersons = result;

expect(typeof getPersons).to.be.equal('function',
            "function 'getPersons' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(Array.isArray(persons)).to.be.equal(true,
            "getPersons() should return array");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons.length).to.be.greaterThan(0,
            "getPersons() should return non-empty array");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(typeof persons\[0\]).to.be.equal('object',
            "getPersons() should return array of objects");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons.length).to.be.equal(4,
            "getPersons() should return array of 4 elements");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].firstName).to.be.equal('Anna',
            "getPersons()\[0\].firstName should be Anna");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].lastName).to.be.equal('Simpson',
            "getPersons()\[0\].lastName should be Simpson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].age).to.be.equal(22,
            "getPersons()\[0\].age should be 22");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[0\].email).to.be.equal('anna@yahoo.com',
            "getPersons()\[0\].email should be anna@yahoo.com");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].firstName).to.be.equal('SoftUni',
            "getPersons()\[1\].firstName should be SoftUni");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].lastName).to.be.equal(undefined,
            "getPersons()\[1\].lastName should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].age).to.be.equal(undefined,
            "getPersons()\[1\].age should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[1\].email).to.be.equal(undefined,
            "getPersons()\[1\].email should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].firstName).to.be.equal('Stephan',
            "getPersons()\[2\].firstName should be Stephan");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].lastName).to.be.equal('Johnson',
            "getPersons()\[2\].lastName should be Johnson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].age).to.be.equal(25,
            "getPersons()\[2\].age should be 25");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[2\].email).to.be.equal(undefined,
            "getPersons()\[2\].email should be undefined");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].firstName).to.be.equal('Gabriel',
            "getPersons()\[3\].firstName should be Gabriel");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].lastName).to.be.equal('Peterson',
            "getPersons()\[3\].lastName should be Peterson");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].age).to.be.equal(24,
            "getPersons()\[3\].age should be 24");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();

expect(persons\[0\].constructor.name).to.be.equal('Person',
            "getPersons() should return array of instances of class Person (class name must be exact)");
expect(persons\[3\].email).to.be.equal('g.p@gmail.com',
            "getPersons()\[3\].email should be g.p@gmail.com");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let getPersons = result;
let persons = getPersons();
let personsAsString = persons.join(", ");

expect(personsAsString).to.be.equal(
            'Anna Simpson (age: 22, email: anna@yahoo.com), SoftUni undefined (age: undefined, email: undefined), Stephan Johnson (age: 25, email: undefined), Gabriel Peterson (age: 24, email: g.p@gmail.com)',
            "Person.toString()");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
