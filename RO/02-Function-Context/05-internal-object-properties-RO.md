# Internal Object Properties

[slide hideTitle]

# Internal Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-27-28-internal-object-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="function-context-06.png" /]

Toate proprietățile unui obiect au propriile proprietăți și anume **Enumerable , Configurable, Writable** și **Value**.

Pentru a enumera proprietățile interne ale oricărei proprietăți a obiectului, utilizați `Object.getOwnPropertyDescriptor(yourObject, 'propertyName');`

```js
let person = {
    name: 'Billy',
    age: 50
}

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(descriptor);
```

**Ieșire**
```js
{
  value: 'Billy',
  writable: true,
  enumerable: true,
  configurable: true
}
```

- **Enumerable**: Putem enumera proprietățile obiectelor care sunt setate la **enumerable:true** cu bucla `for..in` sau le putem enumera folosind metoda ``Object.keys()``.

- **Configurable** - folosit pentru a modifica comportamentul proprietății.

Setarea **configurable: false** face ca proprietatea să nu poată fi ștearsă. 

Numai proprietățile care sunt **configurable** pot fi șterse.

- **Writable** - proprietăți marcate ca **writable:true** pot fi modificate și valorile lor pot fi actualizate prin simpla atribuire a unei noi valori acestora

- **Value** - vă permite să modificați valoarea proprietății chiar și atunci când este setată la **writable:false** utilizând `Object.defineProperty()`

[/slide]

[slide hideTitle]
# Non-Enumerable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-29-objects-non-enumerable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Rulați codul de mai jos:

```js live
let person = {
    name: 'Billy',
    age: 50
}

for (const property in person) {
    const item = `${property}: ${person[property]}`;
    console.log(item);
}
```

Rezultatul așteptat aici este:

```js
name: 'Billy'
age: 50
```

Notă: În loc de **for loop (bucla for)** puteți obtine rezultatul cu `Object.keys(person)` iar proprietățile vor fi returnate ca o matrice.

```js
console.log(Object.keys(person));
//output -> [ 'name', 'age' ]
```

Putem modifica valoarea proprietăților interne utilizând metoda `Object.defineProperty()`. 

Puteți modifica una sau chiar puteți modifica toate proprietățile interne simultan.

În acest exemplu, vom schimba valoarea **age (vârstei)** și setam **enumerable** la **false**.

```js
Object.defineProperty(object1, 'property1', {
    enumerable: false,
    writable: true
    //and so on
});
```

```js live
let person = {
    name: 'Billy',
    age: 50
}

Object.defineProperty(person, 'age',
    {
        enumerable: false
    });

for (const property in person) {
    const item = `${property}: ${person[property]}`;
    console.log(item);
}
```

Acum se aștepta ca rezultatul să fie:

```js
name: Billy
```

Observați cum vârsta nu mai este trimisă pe consolăă Este încă în interiorul obiectului, dar nu mai poate fi enumerat!

De asemenea, puteți încerca să enumerați proprietățile cu `Object.keys(person)` pentru a lista proprietățile, dar singura proprietate vizibilă va fi **name (nume)**.

Nici imprimarea obiectului în sine cu `console.log(person)` nu va imprima proprietatea **age**.

**Proprietățile care nu sunt enumerabile** nu sunt serializate când se utilizează `JSON.stringify()`.

[/slide]

[slide hideTitle]
# Non-Writable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-30-objects-non-writable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Valorile proprietăților **non-writable (care nu se pot modifica)** nu pot fi modificate folosind atribuții.

Folosind `Object.defineProperty` prin specificarea unei proprietăți care nu există în obiectul nostru, putem adăuga o proprietate complet nouă obiectului respectiv, putem seta valoarea acesteia și o putem face nemodificabilă:

```js live
let object = {
    property: 2
};
Object.defineProperty(object, 'anotherProperty', {
    value: 2,
    writable: false
});

console.log('Original value:', object.anotherProperty);

object.anotherProperty = 1000;

console.log('New value:', object.anotherProperty);
```

Ieșire preconizată:

```js
Original value: 2
New value: 2
```

Dacă modificați codul de mai sus și setați writable la **true**, așa cum este în mod implicit, atunci veți putea atribui valoarea **1000** către **anotherProperty**. 

Rezultatul ar fi:

```js
Original value: 2
New value: 1000
```

Dacă proprietatea **non-writable** este un obiect, atunci referința obiectului nu va putea fi modificată, dar obiectul în sine poate fi modificat atribuindu-i o nouă valoare.
[/slide]

[slide hideTitle]

# Non-Configurable Properties

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-31-object-non-configurable-properties-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă setați **configurable:false**, pentru orice proprietate veți putea modifica doar proprietatea **writable** care este true la false și nimic altceva.

Orice încercare de modificare a oricărei alte proprietăți interne **va eșua** și va genera un **TypeError**.

```js
let ob = {};
Object.defineProperty(ob, 'a', {
    configurable: false,
    writable: true
});
Object.defineProperty(ob, 'a', {
    enumerable: true
}); // throws a TypeError
Object.defineProperty(ob, 'a', {
    value: 12
}); // throws a TypeError
Object.defineProperty(ob, 'a', {
    writable: false
}); // This is allowed!!
Object.defineProperty(ob, 'a', {
    writable: true
}); // throws a TypeError
```
[/slide]

[slide hideTitle]

# Object Freeze and Seal

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-32-object-freeze-and-seal-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sintaxă: `Object.freeze(obj)` și `Object.seal(obj)`

## Object Freeze

`Object.freeze()`- nu permite adăugarea de proprietăți noi obiectului și toate proprietățile vor fi **non-writable**.

Să vedem un exemplu:

```js live
const obj = {
    property1: 'something',
    property2: 654,
    property3: {
        innerProperty: 'can-change'
    }
};

const frozenObj = Object.freeze(obj);
frozenObj.property1 = 'trying to change it'; 
// TypeError
```

Toate proprietățile sunt schimbate în **non-writable**, deci nu puteți atribui o nouă valoare **property1** în felul acesta și veți primi o **TypeError** dacă încercați.

Puteți modifica valoarea **innerProperty** deoarece conține o referință la un obiect. 

Referința nu se modifică, dar i se poate atribui valoarea lui **innerProperty**.

```js
frozenObj.property3.innerProperty = 'something else';
```

Pentru a preveni acest lucru, puteți **freeze (îngheța)** proprietatea obiectului:

```js
Object.freeze(frozenObj.property3);

frozenObj.prop3.innerProperty = 'this will not work'; 
//Type Error
```

Puteți utiliza `Object.isFrozen(someObject)`. 

Dacă **someObject** este înghețat, acesta va reveni **true**.

## Object Seal
`Object.seal()`- nu permite adăugarea de proprietăți noi obiectului și toate proprietățile acestuia devin **non-configurable (neconfigurabile)**. 

Valorile proprietăților pot fi modificate.

```js live
const obj = {
    property1: 'something',
    property2: 654
};

Object.seal(obj);
obj.property1 = 'something else' // OK
delete obj.property1 // Does nothing. Also: Error in strict mode;
console.log(obj);
```

`delete obj.property1` trebuia să elimine această proprietate din obiect, dar din moment ce este **sealed (sigilată)** nu va funcționa.

Puteți verifica dacă un obiect este sealed cu `Object.isFrozen(someObject)`.

## Concluzie

Atât **freeze** cât și **seal** se ocupă de imuabilitatea obiectului. 

Când utilizați `Object.freeze()` noile valori nu pot fi atribuite proprietăților.

`Object.seal()` face astfel încât noile proprietăți să nu poată fi adăugate și proprietățile existente să nu poată fi eliminate, dar le puteți atribui noi valori.

În orice caz, dacă aveți o proprietate care este de asemenea un obiect, numai referința sa nu poate fi modificată, dar valoarea poate fi, chiar dacă este **non-writable**. 

Pentru a preveni acest lucru, putem, de asemenea să **freeze (înghețăm)** proprietatea obiectului și atunci valoarea din interiorul acestuia nu va putea fi scrisă.

[/slide]

[slide hideTitle]

# Problem with Solution: Person

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-34-solution-person-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Person" taskId="js-advanced-function-context-Person" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
class Person{
    // Scrieți codul dvs. aici
}

```
[/code-editor]
[task-description]
# Description
Scrieți o clasă care ia **first (prenume)** și **last (nume de familie)** ca **parameterii** și returnează un obiect cu **firstName**, **lastName** și **fullName**: "\{**firstName**\} \{**lastName**\}". 

Toate proprietățile trebuie să fie **accesibile**. 

Am descoperit că "accesibil" înseamnă și "modificabil". 

Aceasta înseamnă că:

- Dacă **firstName** sau **lastName** s-au schimbat, atunci **fullName** ar trebui de asemenea modificat

- Dacă **fullName** este modificat, atunci **firstName** și **lastName** ar trebui de asemenea schimbate

- Dacă **fullName** este **invalid**, nu ar trebui să modificați celelalte proprietăți

Un **full name** **valid** este în format: "\{**firstName**\} \{**lastName**\}".

Notă: Consultați exemplele de mai jos pentru mai multe informații.

## Examples

**Sample Input**

```js
let person = new Person('Peter', 'Smith');
console.log(person.fullName); // Peter Smith

person.firstName = 'George';
console.log(person.fullName); // George Smith

person.lastName = 'Peterson';
console.log(person.fullName); // George Peterson

person.fullName = 'Nikola Tesla';
console.log(person.firstName) // Nikola
console.log(person.lastName)  // Tesla

let person = new Person('Albert", "Simpson');
console.log(person.fullName); // Albert Simpson

person.firstName = 'Simon';
console.log(person.fullName); // Simon Simpson

person.fullName = 'Peter';
console.log(person.firstName) // Simon
console.log(person.lastName)
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let Person = result;
let a = new Person("Albert", "Simpson");
let actual = a.fullName;
let expected = "Albert Simpson";
assert.equal(actual,expected);
a.firstName = "Simon";
let actualFullName = a.fullName;
let expectedFullName = "Simon Simpson";
assert.equal(actualFullName,expectedFullName);
a.fullName = "Peter";
let b = a.firstName;
let expectedB = "Simon"
assert.equal(b,expectedB);
let v = a.lastName;
let expectedV = "Simpson";
assert.equal(v,expectedV);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Person = result;
let person = new Person("Peter", "Ivanov");

let act1 = person.fullName;
let exp1 = "Peter Ivanov";
assert.equal(act1,exp1);

person.firstName = "George";
let act2 = person.fullName;
let exp2 = "George Ivanov";
assert.equal(act2,exp2);

person.lastName = "Peterson";
let act3 = person.fullName;
let exp3 = "George Peterson";
assert.equal(act3,exp3);

person.fullName = "Nikola Tesla";
let act4 = person.firstName;
let exp4 = "Nikola";
assert.equal(act4,exp4);

let act5 = person.lastName;
let exp5 = "Tesla";
assert.equal(act5,exp5);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
