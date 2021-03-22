# Prototip Înlănțuit

[slide hideTitle]

# Ce Este Prototipul?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-19-20-what-is-a-prototype-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Prototipul este un **obiect**, care are o **proprietate internă**. 

Este folosit pentru implementarea **moștenirii bazate pe prototip** și a **proprietăților împărțite**.

Toate metodele și proprietățile vor fi moștenite de referință în **moștenirea bazată pe prototip**. 

Ele pot fi folosite de **noul obiect**, dar pot aparține încă prototipului de unde **au venit**.

Asta crează o **legătură** între **prototip** și **obiectul** moștenit. 

Cu alte cuvinte, metodele și proprietățile nu sunt **copiate**, sunt moștenite **de referință**.

Toate **proprietățile** și **metodele** moștenite vin de la proprietatea **prototipului**. 

Această proprietate ne permite să adăugăm **proprietăți** noi **constructorilor** de obiecte.

**De exemplu:**

```js live
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = function(nation) {
    console.log(
        `I am ${this.firstName} ${this.lastName}, ${this.age}, from ${nation}`
    );
};

let person = new Person('Joe', 'Jones', 20);

person.nationality('British');
```

Aici avem o funcție **Person** și să adăugăm **naționalitatea** la proprietatea **prototipului**.

[/slide]

[slide hideTitle]

# Lanț de Prototip

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-21-prototype-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Am creat clasele manual prin funcții înainte de **ES6 (ES2015)**.

După **ES6**, avem sintaxa cu clase.

Aici avem un exemplu de cum arătau înainte de ES6:

```js live
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

let rectangle = new Rectangle(3, 5);

let sum = rectangle.area();

console.log(sum);
```

În acest exemplu am creat o funcție numită **Rectangle**, care acceptă ca parametrii **width** și **height**.

La funcția **Rectangle**, îi atașăm încă una care va înmulți **width** cu **height**.

Rezultatul va fi afișat pe consolă.

[/slide]

[slide hideTitle]

# Comparație cu Noua Sintaxă

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-22-comparison-with-the-new-syntax-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După **ES6**, putem face același lucru din slide-ul precedent cu clase.

HAici vedem cum va arăta:

```js live
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(3, 5);

let sum = rect.area();

console.log(sum);
```

Am creat o clasă numită **Rectangle**, care are o proprietate **width** și una **height**.

Clasa **Rectangle** are și o metodă `area()`, care înmulțește **width** și **height**.

Vom afișa rezultatul pe consolă.

[/slide]

[slide hideTitle]

# Crearea de Obiecte

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-23-object-creation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există două moduri de a crea un obiect. 
Primul este creația **Literal** și a doua este creația **Constructor**.

Creația **Constructor** ne dă o referință a **valorii** **proprietății prototipului**.

De asemenea, primim un **link intern** la proprietatea `__proto__` a obiectului. 

Această proprietate indică către prototipul **set**.

[/slide]

[slide hideTitle]

# Object.create()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-18-object-create-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi `object.create()` când vrem să **extindem** un obiect. 

Folosește un **prototip** obiect **existent** tpentru a **delega** caracteristicile sale unui **nou obiect**.

Aici avem un exemplu:

```js live
const Dog = {
    name: 'Sparky',
    printInfo: function() {
        console.log(`My name is ${this.name}. My breed is ${this.breed}`);
    },
};
const MyDog = Object.create(Dog);
MyDog.name = 'Max';
MyDog.breed = 'shepherd';
MyDog.printInfo();
```

În acest exemplu declarăm un obiect numit **Dog** cu proprietatea **name** și o metodă `printInfo()`.

Apoi am creat noul obiect **MyDog** cu `Object.create()`, folosind obiectul **Dog** ca prototip. 

Setăm proprietatea **name** a **MyDog** și adăugăm o nouă proprietate numită **breed**, care nu este prezentă în obiectul **Dog**.

Rezultatul va fi afișat pe consolă.

[/slide]

[slide hideTitle]

# Obiecte JavaScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-24-javascript-objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici avem un exemplu de **creație literală**:

```js live
let Person = {
    me: 'I am John',
    speak: function() {
        console.log('Hello, ' + this.me + '.');
    },
};

Person.speak();
```

Creăm obiectul **Person** cu proprietatea **name** și o metodă `speak()`.

Metoda `speak()` va afișa rezultatul.

Uitați-vă la **creația Constructor**:

```js live
function Person(name) {
    this.me = 'I am ' + name;
    this.speak = function() {
        return `Hello, ${this.me} .`;
    };
}

let person = new Person('John');

console.log(person.speak());
```

În acest exemplu am scris o funcție **Person**, în care am setat proprietatea **name** și metoda `speak()`.

Metoda `speak()` va returna rezultatul din interpolarea șirului.
Acum că am creat obiectul **Person** vom instanția o nouă variabilă folosind cuvăntul-cheie **new**.

La final vom afișa rezultatul pe care îl returnează metoda `speak()`.

[/slide]

[slide hideTitle]

# Proto vs Proprietatea Prototipului

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-25-proto-vs-prototype-property-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există o diferență între `__proto__` și **prototype property**.

 `__proto__`, este o proprietate **accessor** a obiectului și **dezvăluie** **prototipurile sale interne**.

Nu ar trebui să folosim `__proto__` direct în codul nostru deoarece este **depreciat**.

**Funcția constructor** setează **Prototipul** unui obiect.

Obiectele normale **nu au** proprietatea **prototipului**.

 **Proprietatea prototipului** este un spațiu care păstrează metode și proprietăți pe care le putem moșteni.

[/slide]

[slide hideTitle]

# Accesarea Proprietăților Private

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-26-accessing-private-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a marca proprietățile ca **private**, trebuie să le **precedăm** cu un **hashtag** `#`.

Pentru **a primi** proprietăți private, folosim `object.prototype.getNameOfProperty`.

Aici avem un exemplu de **prototype.get**:

```js
   Person.prototype.getName = function () {
      return this.#name;
   };
```

Când vrem să **setăm** proprietăți, este aproape la fel, dar, în loc de **primim**, scriem **setăm**: `object.prototype.setNameOfProperty`

Aici avem un exemplu de **prototype.set**:

```js
   Person.prototype.setName = function (x) {
      this.#name = name;
   };
```

[/slide]

[slide hideTitle]

# Lanț de Prototip Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-27-prototype-chain-simple-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


```js live
function MakeSentence(greet) {
    this.greet = greet;
}

MakeSentence.prototype.name = 'John';

MakeSentence.prototype.concatenate = function(punctuation) {
    return this.greet + ', I am ' + this.name + punctuation;
};

let makeSentence = new MakeSentence('Hi');
console.log(makeSentence.concatenate('!'));
```

Screim o funcție numită **MakeSentence** cu parametru **greet**.

Apoi atașăm o proprietate **name** și o metodă **concatenate** funcției **MakeSentence**.

Metoda **concatenate** concatenează proprietățile **greet**,**name** și **punctuation**.

Apoi instanțiem **MakeSentence** și afișăm rezultatul metodei **concatenate** pe consolă.

[/slide]


[slide hideTitle]

# Problemă cu Soluție: Extending Prototype

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/06.JS-Advanced-Prototypes-and-Inheritance/RO/interactive-javascript-advanced-prototypes-and-inheritance-29-solution-extending-prototype-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Extending Prototype" taskId="js-advanced-prototypes-and-inheritance-extending-prototype" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function extendPrototype(classToExtend) {
   // Write your code here
}
```

[/code-editor]
[task-description]

# Descriere

Scrie o funcție care primește o **class** și adaugă o proprietate **species** și o funcție `toSpeciesString()`.

Când este apelată, funcția returnează un șir de format:

`I am a <species>. <toString()>`

Funcția `toString()` este apelată din instanța curentă (folosim cuvântul-cheie **this** pentr a o apela).

## Date de intrare și date de ieșire

Funcția ta va primi un **class** al cărui prototip ar trebui să îl extindă. 

 **NU** există date de ieșire, funcția ta ar trebui doar să atașeze proprietățile prototipului clasei date.

[/task-description]
[code-io /]
[tests]
[test]
[input]
class Person \{
    constructor(name, email) \{
        this.name = name;
        this.email = email;
    \}
    toString() \{
        let className = this.constructor.name;
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
    \}
\}

result(Person);
let p = new Person("Pesho","email@hit.bg");
expect(p.species).to.equal('Human',"No species property");
expect(p.toSpeciesString()).to.equal("I am a Human. Person (name: Pesho, email: email@hit.bg)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
    constructor(name, email) \{
        this.name = name;
        this.email = email;
    \}
    toString() \{
        let className = this.constructor.name;
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
    \}
\}

result(Person);
let t = new Teacher("Posho","imail@hit.bg","Coding");
expect(t.species).to.equal('Human',"No species property");
expect(t.toSpeciesString()).to.equal("I am a Human. Teacher (name: Posho, email: imail@hit.bg, subject: Coding)");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
class Person \{
    constructor(name, email) \{
        this.name = name;
        this.email = email;
    \}
    toString() \{
        let className = this.constructor.name;
        return \`\\$\{className\} (name: \\$\{this.name\}, email: \\$\{this.email\})\`;
    \}
\}

class Teacher extends Person \{
    constructor(name, email, subject) \{
        super(name, email);
        this.subject = subject;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, subject: \\$\{this.subject\})\`;
    \}
\}

class Student extends Person \{
    constructor(name, email, course) \{
        super(name, email);
        this.course = course;
    \}
    toString() \{
        let baseStr = super.toString().slice(0, -1);
        return baseStr + \`, course: \\$\{this.course\})\`;
    \}
\}

result(Person);
let s = new Student("Gosho","gesha@hit.bg",1);
expect(s.species).to.equal('Human',"No species property");
expect(s.toSpeciesString()).to.equal("I am a Human. Student (name: Gosho, email: gesha@hit.bg, course: 1)");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
